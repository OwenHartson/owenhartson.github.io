const CHICKEN_PRICE = 10.95,
      HALIBUT_PRICE = 13.95,
      BURGER_PRICE = 9.95,
      SALMON_PRICE = 18.95,
      SALAD_PRICE = 7.95,
      SALES_TAX = 0.07;

window.onload = () =>{
   document.getElementById('foodTotal').innerHTML = formatCurrency(0);
   document.getElementById('foodTax').innerHTML = formatCurrency(0);
   document.getElementById('totalBill').innerHTML = formatCurrency(0);
};

window.onchange = () =>{
   CalcTotal();
};

function CalcTotal()
{
   let cost = 0,
       buyChicken = document.getElementById('chicken').checked,
       buyHalibut = document.getElementById('halibut').checked,
       buyBurger = document.getElementById('burger').checked,
       buySalmon = document.getElementById('salmon').checked,
       buySalad = document.getElementById('salad').checked;

   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   document.getElementById('foodTotal').innerHTML = formatCurrency(cost);
   let tax = cost * SALES_TAX;
   document.getElementById('foodTax').innerHTML = formatCurrency(tax);
   let total = cost + tax;
   document.getElementById('totalBill').innerHTML = formatCurrency(total);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }