package payments

import (
	"log"

	"picitup/buckets"
)

func DebitWallet(WalletID uint64, Amount float64) (payment *Payment) {
	payment = new(Payment)
	payment.Success = true
	return

	walletsList, errWallet := buckets.Wallets{}.GetFieldValue("ID", WalletID)
	if len(walletsList) != 1 {
		return
	}
	if errWallet != nil {
		log.Println(errWallet.Error())
		return
	}

	accountsList, errAccount := buckets.Accounts{}.GetFieldValue("ID", walletsList[0].AccountID)
	if len(accountsList) != 1 {
		return
	}
	if errAccount != nil {
		log.Println(errAccount.Error())
		return
	}

	if Amount > accountsList[0].Balance {
		return
	}

	payment.Success = true
	payment.Amount = Amount
	accountsList[0].Balance -= Amount
	payment.Currency = accountsList[0].Currency
	buckets.Accounts{}.Create(&accountsList[0])

	//Create Transaction Record
	// Agent Deposit
	// - - - - - - -
	// 		Asset: Debit
	// Liability: Credit
	//
	// Agent Sales
	// - - - - - -
	// 		Asset: Credit
	// Liability: Debit
	//
	//
	// Agent Transfer
	// - - - - - -
	// Liability: Debit
	// Liability: Credit
	//	else do not make payment

	return
}
