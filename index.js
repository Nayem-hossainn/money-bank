let depositButton = document.querySelector(".deposit-btn");
depositButton.addEventListener("click",function(){
let deposit = +document.querySelector("#deposit").value;
let depositMoney =+ document.querySelector(".deposit-money").innerHTML;
let totalDeposit =deposit+depositMoney;
document.querySelector(".deposit-money").innerHTML=totalDeposit;
document.querySelector(".balance-money").innerHTML=totalDeposit+1000;

let withdrawButton = document.querySelector(".widthdraw-btn");
withdrawButton.addEventListener("click",function(){
    let withdraw =+document.querySelector("#withdraw").value;
    let withdrawBalance =+ document.querySelector(".widthdraw-money").innerHTML;
    let totalWithdraw =withdraw+withdrawBalance;
    document.querySelector(".widthdraw-money").innerHTML=totalWithdraw;

    
    let all=document.querySelector(".balance-money").innerHTML;
    let alll = all-withdraw;
    document.querySelector(".balance-money").innerHTML=alll;





})

});

