
let buttonCountPlus = document.getElementById('buttonCountPlus');
let buttonCountMinus = document.getElementById('buttonCountMinus');
let count = document.getElementById('buttonCountNumber');
let count2 = document.getElementById('num');
let number = 0;
let price = 200;
let calculate = document.getElementById("calculation");
calculation = document.getElementById("calculation").innerHTML;
buttonCountPlus.onclick = function() {
    if (number <= 4) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
        calculate.innerHTML = calculations(number) ;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 1) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
       calculate.innerHTML = calculations(number) ;
    }
};


calculations = (count2) => {
   return (+count2)*(+price);
}




