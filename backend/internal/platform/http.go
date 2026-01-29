package platform

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/google/uuid"
)

type contextKey string

const requestIDKey contextKey = "request_id"

func WithMiddleware(handler http.Handler, logger Logger) http.Handler {
	return requestIDMiddleware(logger)(handler)
}

func requestIDMiddleware(logger Logger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			requestID := r.Header.Get("X-Request-Id")
			if requestID == "" {
				requestID = uuid.NewString()
			}

			ctx := context.WithValue(r.Context(), requestIDKey, requestID)
			w.Header().Set("X-Request-Id", requestID)
			start := time.Now()

			next.ServeHTTP(w, r.WithContext(ctx))

			logger.Info("request", "method", r.Method, "path", r.URL.Path, "duration", time.Since(start).String(), "request_id", requestID)
		})
	}
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}

func RegisterHealth(mux *http.ServeMux) {
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
	})
}

func RegisterLedgerDemo(mux *http.ServeMux) {
	mux.HandleFunc("/api/ledger/transfer", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{
			"message": "ledger transfer stub",
			"idempotency": r.Header.Get("Idempotency-Key"),
		})
	})
}

func RegisterFeedDemo(mux *http.ServeMux) {
	mux.HandleFunc("/api/feed", func(w http.ResponseWriter, _ *http.Request) {
		writeJSON(w, http.StatusOK, map[string]any{
			"items": []map[string]any{
				{
					"id":        uuid.NewString(),
					"message":   "MR Covey contributed ₦5,000 to Weekend Trip Circle",
					"created_at": time.Now().Add(-2 * time.Hour).Format(time.RFC3339),
				},
			},
		})
	})
}
