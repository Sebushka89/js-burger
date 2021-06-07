var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("result-sum")


createSum.addEventListener("click", function() {
    var resultSumInt = 0;
    var checkNum = document.getElementsByClassName("check-ingredients");
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        }
    }
    resultSum.innerHTML = "$" + ' ' +  resultSumInt + resultSum ;
})