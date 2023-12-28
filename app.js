function handleButtonClick() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var initialInterestRate = parseFloat(document.getElementById('interestRate').value);
    var years = parseInt(document.getElementById('years').value);
    var additionalAmountInput = document.getElementById('additionalAmount');
    var additionalAmount = additionalAmountInput.value === '' ? 0 : parseFloat(additionalAmountInput.value);

    var result = calculateCompoundInterest(inputValue, initialInterestRate, years, additionalAmount);

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
}

function calculateCompoundInterest(principal, interestRate, years, additionalAmount) {
    var multiplier = 1 + interestRate / 100;
    var result = principal;

    for (var i = 1; i <= years; i++) {
        result = result * multiplier + additionalAmount;
    }

    return formatAsMoney(result);
}

function formatAsMoney(number) {
    return "$" + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}