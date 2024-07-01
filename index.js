
let moneyBorrowed = document.getElementById("MortageAmont");
let year = document.getElementById("year");
let percentageToBePaid = document.getElementById("percentage");
let calculatorRepayment =document.getElementById("calculator-repayment")
let totalToBePaid = document.getElementById("totalTpBePaid")
const clearAll = document.getElementById("clearAll");
const monthlyPayMent = document.getElementById("monthlyPayMent")
let paid;

function calculator(){
    let borrowedAmount = parseInt(moneyBorrowed.value);
    let interestPercentage =  parseInt(percentageToBePaid.value);
    let years =  parseInt(year.value);


   let percentage = ( borrowedAmount * interestPercentage )/100;

    
     paid = (percentage * years ) +  borrowedAmount;
    
    totalToBePaid.textContent = paid.toFixed(6); 

   
}

// for monthly payment
function monthlyPayMent1(){
let years =  parseInt(year.value);
let borrowedAmount =  parseInt(moneyBorrowed.value);

 const monthlyPayMent = document.getElementById("monthlyPayMent")
let month = paid / (12 * years);
monthlyPayMent.textContent=month.toFixed(2)
}


clearAll.addEventListener("click",() => {
    moneyBorrowed.value="";
    percentageToBePaid.value="";
    year.value="";
    totalToBePaid.textContent="";
    monthlyPayMent.textContent="";

     document.getElementById("mmm").style.background  = "white"
     document.getElementById("mmm").style.border ="1px solid black"

          document.getElementById("mmm2").style.background  = "white"
     document.getElementById("mmm2").style.border ="1px solid black"
    
    
})


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
 



 