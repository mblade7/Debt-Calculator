const calculate= document.getElementById("calculationForm");
calculate.addEventListener("submit", function() {
    event.preventDefault();
    let totDebt = document.getElementById("totDebt").value;
    let intRate = document.getElementById("intRate").value;
    let numMonths = document.getElementById("numMonths").value;
    let payments = document.getElementById("payments").value;
    console.log(totDebt);
    console.log(intRate);
    console.log(numMonths);
    console.log(payments);
});