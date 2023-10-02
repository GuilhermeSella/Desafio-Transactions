
const allTransactions = []

export const createTransaction = (transaction)=>{
   allTransactions.push(transaction)
} 

export const getAllTransactions = () => {return allTransactions}
