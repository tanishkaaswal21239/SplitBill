// Function to split the bill
function splitBill() {
    // Store the data of the inputs
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var numPeople = parseInt(document.getElementById("totalPeople").value);

    // Quick validation
    if (isNaN(billAmount) || billAmount <= 0 || isNaN(numPeople) || numPeople <= 0) {
        window.alert("Please enter valid values for bill amount and number of people.");
        return; // this will prevent the function from continuing
    }

    // Calculate the amount each person needs to pay
    var amountPerPerson = billAmount / numPeople;
    amountPerPerson = Math.round(amountPerPerson * 100) / 100;
    amountPerPerson = amountPerPerson.toFixed(2);

    // Display the result
    document.getElementById("totalTip").style.display = "none"; // Hide the total tip display if it was shown
    document.getElementById("tipAmount").innerHTML = amountPerPerson;
    document.getElementById("totalTip").style.display = "block"; // Show the result display
}

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() {
    splitBill();
};
