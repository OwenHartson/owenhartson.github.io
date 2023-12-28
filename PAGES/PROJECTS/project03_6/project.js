"use strict";

const useShip = document.getElementById("useShip");
useShip.addEventListener("click", function(){
      let firstnameBill = document.getElementById("firstnameBill");
      let lastnameBill = document.getElementById("lastnameBill");
      let address1Bill = document.getElementById("address1Bill");
      let address2Bill = document.getElementById("address2Bill");
      let cityBill = document.getElementById("cityBill");
      let countryBill = document.getElementById("countryBill");
      let codeBill = document.getElementById("codeBill");
      let stateBill = document.getElementById("stateBill");

      let firstnameShip = document.getElementById("firstnameShip").value;
      let lastnameShip = document.getElementById("lastnameShip").value;
      let address1Ship = document.getElementById("address1Ship").value;
      let address2Ship = document.getElementById("address2Ship").value;
      let cityShip = document.getElementById("cityShip").value;
      let countryShip = document.getElementById("countryShip").value;
      let codeShip = document.getElementById("codeShip").value;
      let stateShip = document.getElementById("stateShip").selectedIndex;

      if(useShip.checked){
            firstnameBill.value = firstnameShip;
            lastnameBill.value = lastnameShip;
            address1Bill.value = address1Ship;
            address2Bill.value = address2Ship;
            cityBill.value = cityShip;
            countryBill.value = countryShip;
            codeBill.value = codeShip;
            stateBill.selectedIndex = stateShip;
      }else{
            console.log("else");
      }
});

const formElements = document.querySelectorAll("input[type='text']");
const fieldCount = formElements.length;
const errorBox = document.getElementById("errorBox");

for(let i = 0; i < fieldCount; ++i){
      formElements[i].addEventListener("invalid", function(evt){
            evt.preventDefault();
            errorBox.innerText = "Complete all highlighted fields";
      });
}