let myHeaders = new Headers();
myHeaders.append("apikey", "");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CCAD%2CAUD%2CJPY&base=USD", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.rates)
        let intro = document.getElementById("currencyIntro");
        intro.innerHTML = "This is the exchange rate of a few currencies with $1 USD."
        let table = document.getElementById("currency");
        let header = table.createTHead();
        let row = header.insertRow(0);
        let header1 = row.insertCell(0);
        header1.innerHTML = "$1 USD to other currency";
        for (const property in result.rates) {
            console.log(`${property}: ${result.rates[property]}`);
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = property;
            cell2.innerHTML = result.rates[property];
        }
    })
    .catch(error => console.log('error', error));

//Debt Calculator

const calculate = document.getElementById("calculationForm");
calculate.addEventListener("submit", function () {
    event.preventDefault();
    let totDebt = parseFloat(document.getElementById("totDebt").value);
    let intRate = parseFloat(document.getElementById("intRate").value);
    //let numMonths = parseFloat(document.getElementById("numMonths").value);
    let payments = parseFloat(document.getElementById("payments").value);
    let interest = totDebt * (intRate / 100 / 12);
    let dollarFormatting = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    function debtCalculator(x, y, z) {
        let numPayments = 0;
        let accruedInt = 0;
        let table = document.getElementById("paymentPlan");
        table.innerHTML = "";
        let header = table.createTHead();
        let row = header.insertRow(0);
        let header1 = row.insertCell(0);
        let header2 = row.insertCell(1);
        let header3 = row.insertCell(2);
        let header4 = row.insertCell(3);
        header1.innerHTML = "Payment #";
        header2.innerHTML = "Previous Debt";
        header3.innerHTML = "Interest Amount";
        header4.innerHTML = "New Balance";

        //doing math and finishing the table

        do {
            let previousDebt = x;
            interest = x * (y / 100 / 12);
            let newDebt = previousDebt + interest - z;
            accruedInt += interest;
            numPayments++;
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.innerHTML = numPayments;
            cell2.innerHTML = dollarFormatting.format(previousDebt);
            cell3.innerHTML = dollarFormatting.format(interest);
            cell4.innerHTML = dollarFormatting.format(newDebt);
            x = newDebt;
        }
        while (x > 0);
        let overpayBalance = dollarFormatting.format(Math.abs(x));
        console.log(overpayBalance);
        let summary = document.getElementById("summary");
        summary.innerHTML = `The debt will be paid off in ${numPayments} month(s) with total interest paid 
        being ${dollarFormatting.format(accruedInt)} and ${overpayBalance} left over from last payment.`
    }

    if (totDebt <= 0) {
        alert("There is no debt")
    }

    else if (interest >= payments) {
        alert(`The amount to pay must be more than ${dollarFormatting.format(interest)} in order to pay off debt.`)
    }
    else {
        debtCalculator(totDebt,intRate,payments);
    }
});

const numberVerification = document.getElementsByClassName("formInput")
for (i = 0; i < numberVerification.length; i++) {
    numberVerification[i].addEventListener("input", function (e) {
        const pattern = /^\d+(\.\d{1,2})?$/;
        const currentValue = e.target.value;
        if (pattern.test(currentValue) === false) {
            document.getElementById("warning").style.display = "block";
        }
        else {
            document.getElementById("warning").style.display = "none";
        }
    })
};