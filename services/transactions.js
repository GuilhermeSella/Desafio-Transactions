const allTransactions = []
let incomeValue = 0;
let outcomeValue = 0;

const createTransaction = (transaction)=>{
   allTransactions.push(transaction)

   if(transaction.type == "income"){
      incomeValue += Number(transaction.value)
   }
   else{
      outcomeValue += Number(transaction.value)
   }   

  

} 

const getAllTransactions = () => {return allTransactions}

const getBalance = ()=>{

   const totalBalance = incomeValue > outcomeValue ? incomeValue - outcomeValue : outcomeValue - incomeValue;
   
   const balance = {
      income:incomeValue,
      outcome:outcomeValue,
      total: totalBalance
   }

   return balance

}

module.exports = {getAllTransactions, getBalance, createTransaction}