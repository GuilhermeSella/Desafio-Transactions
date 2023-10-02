const express = require("express")
const {getAllTransactions, getBalance, createTransaction} = require("../services/transactions")
const router = express.Router()

router.post("/transactions", (req,res)=>{
    const {id, title, value, type} = req.body;

    const transaction = {
        id: id,
        title: title,
        value: value,
        type: type
    }

    createTransaction(transaction)

    return res.status(200).json(transaction)


})

router.get("/transactions", (req,res)=>{
    const allTransactions = getAllTransactions()

    const balance = getBalance();

    const totalTransactions = {
        transactions: allTransactions,
        balance: balance
    }

    return res.status(200).json(totalTransactions)
})

module.exports = router;