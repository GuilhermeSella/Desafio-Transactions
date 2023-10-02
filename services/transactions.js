

const allTransactions = []
let incomeValue = 0;
let outcomeValue = 0;

export const createTransaction = (transaction)=>{
   allTransactions.push(transaction)

   if(transaction.type == "income"){
      incomeValue += transaction.value
   }
   else{
      outcomeValue += transaction.value
   }   

} 

export const getAllTransactions = () => {return allTransactions}

export const getBalance = ()=>{

   const totalBalance = incomeValue > outcomeValue ? incomeValue - outcomeValue : outcomeValue - incomeValue;
   
   const balance = {
      income:incomeValue,
      outcome:outcomeValue,
      total: totalBalance
   }

   return balance

}