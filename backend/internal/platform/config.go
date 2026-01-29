package platform

import "os"

type Config struct {
	Env      string
	HTTPAddr string
}

func LoadConfig() Config {
	return Config{
		Env:      getenv("APP_ENV", "development"),
		HTTPAddr: getenv("HTTP_ADDR", ":8080"),
	}
}

func getenv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
