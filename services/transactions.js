const allTransactions = []
let incomeValue = 0;
let outcomeValue = 0;
let totalBalance = 0 ;

const createTransaction = (transaction)=>{


   const valorTransacao = Number(transaction.value)

   if(transaction.type === "outcome" && totalBalance < valorTransacao){
      return ""
   }
   else{
      
      allTransactions.push(transaction)

      if(transaction.type == "income"){
         incomeValue += valorTransacao
         totalBalance += valorTransacao
      }
      else{
         outcomeValue += valorTransacao
         totalBalance -= valorTransacao
      }   

      return transaction;
   }


} 

const getAllTransactions = () => {return allTransactions}

const getBalance = ()=>{

   const balance = {
      income:incomeValue,
      outcome:outcomeValue,
      total: totalBalance
   }

   return balance;

}

module.exports = {getAllTransactions, getBalance, createTransaction}