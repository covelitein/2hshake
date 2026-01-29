package main

import (
	"log"
	"time"
)

func main() {
	log.Println("worker started")
	ticker := time.NewTicker(30 * time.Second)
	defer ticker.Stop()

	for range ticker.C {
		log.Println("processing scheduled contributions and notifications")
	}
}
