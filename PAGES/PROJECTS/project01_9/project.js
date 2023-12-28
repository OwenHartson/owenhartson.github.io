"use strict";

const to = document.getElementById("to");
const from = document.getElementById("from");
const message = document.getElementById("msg");

let query = location.search.slice(1);
query = query.replace("?", "");
for(let i = 0; i < query.length; ++i){
      query = query.replace("+", " ");
}
decodeURIComponent(query);
let cardsField = [];
let nameValue = [];
cardsField = query.split("&");
for(let items of cardsField){
      let test = items.split("=");
      if(test[0] == "to"){
            to.textContent = test[1];
      }else if(test[0] == "from"){
            from.textContent = test[1];
      }else{
            message.textContent = test[1];
      }
}