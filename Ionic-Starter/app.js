const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl= document.querySelector('ion-alert');
console.log(alertCtrl)
totalExpenses=0;
const clear =()=>{
    reasonInput.value='';
    amountInput.value='';
};
confirmBtn.addEventListener('click',()=>{
   const enteredReason=reasonInput.value;
   const entereAmount=amountInput.value;
   if(enteredReason.trim().length<=0||entereAmount<=0||entereAmount.trim().length<=0){
       console.log('alertCtrl START')
       alertCtrl.create({message:'Please enter valid reason and amount',header:'Invalid input',button:['okay']}).then(alertElement=>{
           console.log(alertElement)
          alertElement.present();
       });
       console.log('alertCtrl')
       console.log(alertCtrl)
       return ;
   }
   const newItem=document.createElement('ion-item');
   newItem.textContent= enteredReason+' : $'+entereAmount;
   expensesList.appendChild(newItem);
   totalExpenses+=parseFloat(entereAmount);
   totalExpensesOutput.textContent=totalExpenses;
   clear();
});
cancelBtn.addEventListener('click',clear)
