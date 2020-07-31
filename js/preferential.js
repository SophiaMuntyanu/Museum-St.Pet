let buttonCountPlusTwo = document.getElementById('buttonCountPlusTwo');
let buttonCountMinusTwo = document.getElementById('buttonCountMinusTwo');
let countTwo = document.getElementById('buttonCountNumberTwo');
let count2Two = document.getElementById('numTwo');
let numberTwo = 0;
let priceTwo = 150;
let calculateTwo = document.getElementById("calculationTwo");
calculationTwo = document.getElementById("calculationTwo").innerHTML;
buttonCountPlusTwo.onclick = function() {
    if (numberTwo <= 4) {
        numberTwo++;
        countTwo.innerHTML = numberTwo;
        count2Two.value = numberTwo * priceTwo;
        calculateTwo.innerHTML = calculationsTwo(numberTwo) ;
    }
};

buttonCountMinusTwo.onclick = function() {
   if (numberTwo >= 1) {
       numberTwo--;
       countTwo.innerHTML = numberTwo;
       count2Two.value = numberTwo * priceTwo;
       calculateTwo.innerHTML = calculationsTwo(numberTwo) ;
    }
};


calculationsTwo = (count2Two) => {
   return (+count2Two)*(+priceTwo);
}


