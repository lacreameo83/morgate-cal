
let moneyBorrowed = document.getElementById("MortageAmont");
let year = document.getElementById("year");
let percentageToBePaid = document.getElementById("percentage");
let calculatorRepayment =document.getElementById("calculator-repayment")
let totalToBePaid = document.getElementById("totalTpBePaid")

function calculator(){
    let borrowedAmount = parseFloat(moneyBorrowed.value);
    let interestPercentage = parseFloat(percentageToBePaid.value);
    let years = parseFloat(year.value);


   let percentage = ( borrowedAmount * interestPercentage )/100;

    
    let paid = percentage * borrowedAmount * years;
    
    totalToBePaid.textContent = paid.toFixed(6); 
   
}

// for monthly payment
function monthlyPayMent1(){
    let years = parseFloat(year.value);
    let borrowedAmount = parseFloat(moneyBorrowed.value);

    const monthlyPayMent = document.getElementById("monthlyPayMent")
let month = ( years / 12 ) * borrowedAmount;
monthlyPayMent.textContent=month.toFixed(2)
}




calculatorRepayment.addEventListener("click",(e) => {
    e.preventDefault()
calculator(); 
monthlyPayMent1()  
})
const repayment1 = document.getElementById("repayment1")
repayment1.addEventListener("click",()=>{
    mmm.style.background  = "#c7ed21"
     mmm.style.border  = "#c7ed21"
calculator();
monthlyPayMent1()
}
)

const repayment2 = document.getElementById("repayment2")
repayment2.addEventListener("click",()=>{
    mmm2.style.background  = "green"
     mmm2.style.border  = "green"
calculator();
}
)
 



 