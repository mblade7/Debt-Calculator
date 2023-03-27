const calculate = document.getElementById("calculationForm");
calculate.addEventListener("submit", function () {
    event.preventDefault();
    let totDebt = parseFloat(document.getElementById("totDebt").value);
    let intRate = parseFloat(document.getElementById("intRate").value);
    //let numMonths = parseFloat(document.getElementById("numMonths").value);
    let payments = parseFloat(document.getElementById("payments").value);
    let numPayments;
    console.log(totDebt);
    console.log(intRate);
    console.log(payments);
    if (totDebt > 0) {
        let numPayments = 0;
        do {
            totDebt = totDebt + (totDebt * (intRate / 100 / 12) - payments);
            numPayments++;
            console.log(numPayments);
            console.log(totDebt);
        }
        while (totDebt > 0);
        
    }
});