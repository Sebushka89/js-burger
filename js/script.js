var userChoice = prompt('Inserisci qui il nome del tuo burger');

if(userChoice == 'Galaxy Burger' || userChoice == 'Space Burger'){
    document.getElementById('burger_select').innerHTML = userChoice;
} else if(userChoice !== 'Galaxy Burger' && userChoice !== 'Space Burger' ){
    alert('Inserisci "Galaxy Burger" oppure "Space Burger"');
}

var createSum = document.getElementById("somma-button");

var resultSum = document.getElementById("price");

var D = 0.2


createSum.addEventListener("click", function() {
    var resultSumInt = 7.99;
    var checkNum = document.getElementsByClassName("check-ingredients");
    for (var i = 0; i < checkNum.length; i++) {
        if (checkNum[i].checked) {
            resultSumInt += parseInt(checkNum[i].value);
        }
    }
    var checkDiscount = document.getElementById("promo_text");
    if (checkDiscount.value === "SEBA20") {
        resultSumInt -= (resultSumInt * D);
    } else if (checkDiscount.value.length > 0){
        alert('Coupon is NOT valid!')
    }

    resultSum.innerHTML = "$" + ' ' +  resultSumInt.toFixed(2);
})