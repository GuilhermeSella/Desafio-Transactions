import express from 'express'
import { createTransaction, getAllTransactions } from '../services/transactions.js';
export const router = express.Router()


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

    return res.status(200).json(allTransactions)
})