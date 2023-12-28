"use strict";

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
      let pwd = document.getElementById("pwd").value;
      let feedback = document.getElementById("feedback");

      e.preventDefault();

      let regex1 = new RegExp(/[A-Z]/);
      let regex2 = new RegExp(/\d/);
      let regex3 = new RegExp(/[!\$#%]/);

      if(pwd.length < 8){
            feedback.innerText = "Your password must be at least 8 charcters.";
      }else if(regex1.test(pwd) == false){
            feedback.innerText = "Your password must include an uppercase letter.";
      }else if(regex2.test(pwd) == false){
            feedback.innerText = "Your password must include a number.";
      }else if(regex3.test(pwd) == false){
            feedback.innerText = "Your password must include one of the following: !$#%";
      }else{
            signupForm.action = "formsubmit.html";
            signupForm.submit();
      }
});