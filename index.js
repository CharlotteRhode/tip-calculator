const buttonElement = document.getElementById("calculate");
const inputElementBill=document.getElementById("bill");
const inputElementTip = document.getElementById("tip");
const spanElementTotal = document.getElementById("total");

buttonElement.addEventListener("click", calculateTotal);

function calculateTotal(){
    const billAmount = inputElementBill.value;
    const tipAmount = inputElementTip.value;
    const totalAmount = billAmount*(1+tipAmount/100);

    spanElementTotal.innerText = totalAmount.toFixed(2);


}