package main

import (
	"fmt"
	"log"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	users := []string{"Amaka", "Tobi", "Covey", "Priya"}
	circles := []string{"Weekend Trip", "Laptop Fund", "Neon Housemates"}

	log.Println("Seeding demo data (mock)...")
	for _, user := range users {
		fmt.Printf("created user: %s\n", user)
	}
	for _, circle := range circles {
		fmt.Printf("created circle: %s\n", circle)
	}
	fmt.Println("generated 18 feed events")
	fmt.Println("seed complete")
}
