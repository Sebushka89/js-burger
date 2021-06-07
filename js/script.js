var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("price");


createSum.addEventListener("click", function() {
    var resultSumInt = 50;
    var checkNum = document.getElementsByClassName("check-ingredients");
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        }
    }
    resultSum.innerHTML = "$" + ' ' +  resultSumInt;
})