const calculate= document.getElementById("calculationForm");
calculate.addEventListener("submit", function() {
    event.preventDefault();
    let totDebt = document.getElementById("totDebt").value;
    let intRate = document.getElementById("intRate").value;
    //let numMonths = document.getElementById("numMonths").value;
    let payments = document.getElementById("payments").value;
    let numPayments;
    console.log(totDebt);
    console.log(intRate);
    console.log(payments);
    if (totDebt > 0) {
        let numPayments = 1;
        do {
            let newDebt = totDebt + (totDebt * (intRate / 100 / 12) - payments);
            numPayments++;
            console.log(numPayments);
            console.log(newDebt);
        }
        while (newDebt > 0);
    }
});