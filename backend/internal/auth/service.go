package auth

import "time"

type Session struct {
	ID        string
	UserID    string
	Device    string
	CreatedAt time.Time
	ExpiresAt time.Time
}

type Service struct{}

func NewService() *Service {
	return &Service{}
}
