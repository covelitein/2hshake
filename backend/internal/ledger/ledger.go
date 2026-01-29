package ledger

import (
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
)

type AccountType string

type Currency string

const (
	AccountUserWallet   AccountType = "user_wallet"
	AccountCircleWallet AccountType = "circle_wallet"
	AccountFees         AccountType = "fees"
	AccountEscrow       AccountType = "escrow"
)

type Account struct {
	ID        uuid.UUID
	OwnerID   uuid.UUID
	Type      AccountType
	Currency  Currency
	CreatedAt time.Time
}

type Transaction struct {
	ID             uuid.UUID
	IdempotencyKey string
	Reference      string
	Description    string
	Metadata       map[string]string
	CreatedAt      time.Time
}

type Entry struct {
	ID            uuid.UUID
	TransactionID uuid.UUID
	AccountID     uuid.UUID
	Amount        int64
	Direction     string
	CreatedAt     time.Time
}

type Posting struct {
	AccountID uuid.UUID
	Amount    int64
	Direction string
}

type Balance struct {
	AccountID uuid.UUID
	Available int64
	Locked    int64
}

func CreateTransaction(reference, description, idempotencyKey string, metadata map[string]string) Transaction {
	return Transaction{
		ID:             uuid.New(),
		IdempotencyKey: idempotencyKey,
		Reference:      reference,
		Description:    description,
		Metadata:       metadata,
		CreatedAt:      time.Now().UTC(),
	}
}

func PostEntries(tx Transaction, postings []Posting) ([]Entry, error) {
	if len(postings) < 2 {
		return nil, errors.New("ledger transaction must have at least two entries")
	}

	var debitTotal int64
	var creditTotal int64
	entries := make([]Entry, 0, len(postings))

	for _, posting := range postings {
		if posting.Amount <= 0 {
			return nil, fmt.Errorf("invalid amount: %d", posting.Amount)
		}

		entry := Entry{
			ID:            uuid.New(),
			TransactionID: tx.ID,
			AccountID:     posting.AccountID,
			Amount:        posting.Amount,
			Direction:     posting.Direction,
			CreatedAt:     time.Now().UTC(),
		}

		if posting.Direction == "debit" {
			debitTotal += posting.Amount
		} else if posting.Direction == "credit" {
			creditTotal += posting.Amount
		} else {
			return nil, fmt.Errorf("invalid direction: %s", posting.Direction)
		}

		entries = append(entries, entry)
	}

	if debitTotal != creditTotal {
		return nil, fmt.Errorf("ledger invariant violation: debit %d != credit %d", debitTotal, creditTotal)
	}

	return entries, nil
}

func ComputeBalances(entries []Entry) map[uuid.UUID]int64 {
	balances := make(map[uuid.UUID]int64)
	for _, entry := range entries {
		if entry.Direction == "credit" {
			balances[entry.AccountID] += entry.Amount
		} else {
			balances[entry.AccountID] -= entry.Amount
		}
	}
	return balances
}
