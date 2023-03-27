const calculate = document.getElementById("calculationForm");
calculate.addEventListener("submit", function () {
    event.preventDefault();
    let totDebt = parseFloat(document.getElementById("totDebt").value);
    let intRate = parseFloat(document.getElementById("intRate").value);
    //let numMonths = parseFloat(document.getElementById("numMonths").value);
    let payments = parseFloat(document.getElementById("payments").value);
    let numPayments;
    let interest;
    let dollarFormatting = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    console.log(totDebt);
    console.log(intRate);
    console.log(payments);
    if (totDebt > 0) {
        let numPayments = 0;
        let table = document.getElementById("paymentPlan");
        let header = table.createTHead();
        let row = header.insertRow(0);
        let header1 = row.insertCell(0);
        let header2 = row.insertCell(1);
        let header3 = row.insertCell(2);
        let header4 = row.insertCell(3);
        header1.innerHTML = "Payment Number";
        header2.innerHTML = "Remaining Debt";
        header3.innerHTML = "Interest Amount";
        header4.innerHTML = "Something";
        do {
            interest = totDebt * (intRate / 100 / 12);
            totDebt = totDebt + interest - payments;
            numPayments++;
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.innerHTML = numPayments;
            cell2.innerHTML = dollarFormatting.format(totDebt);
            cell3.innerHTML = dollarFormatting.format(interest);
            cell4.innerHTML = "NEW CELL4";
            console.log(numPayments);
            console.log(totDebt);
        }
        while (totDebt > 0);
    }
});