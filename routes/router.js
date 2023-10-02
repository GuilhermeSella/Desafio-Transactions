const express = require("express")
const {getAllTransactions, getBalance, createTransaction} = require("../services/transactions")
const router = express.Router()

var totalTransactions;

router.post("/transactions", (req,res)=>{
    const {id, title, value, type} = req.body;

    const transaction = {
        id: id,
        title: title,
        value: value,
        type: type
    }

    const createdtransaction = createTransaction(transaction)

    if(createdtransaction == "") return res.status(400).json({error:"Você não possui saldo o suficiente"})

    return res.status(200).json(createdtransaction)


})

router.get("/transactions", (req,res)=>{
    const allTransactions = getAllTransactions()

    const balance = getBalance();

    totalTransactions = {
        transactions: allTransactions,
        balance: balance
    }

   
    
    return res.status(200).json(totalTransactions)
})

module.exports = router, totalTransactions;

