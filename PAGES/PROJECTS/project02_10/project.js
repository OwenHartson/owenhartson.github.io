"use strict";

// Reference to the tangram puzzle board
let puzzleBoard = document.getElementById("puzzle");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
let eventX, eventY, tanX, tanY;

// Node list representing the tangram pieces
let tans = document.querySelectorAll("div#puzzle > img");

// Function to rotate a tan by a specified number of degrees
function rotateTan(elem, deg) {
   const obj = window.getComputedStyle(elem, null);
   const matrix = obj.getPropertyValue("transform");
   let angle = 0;
   if (matrix !== "none") {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      const a = values[0];
      const b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180/Math.PI));      
   }
   
   if (angle < 0) {
      angle += 360;
   }
   
   let newAngle = angle + deg;
   
   elem.style.transform = "rotate(" + newAngle + "deg)";
}

for(let i = 0; i < tans.length; ++i){
   let item = tans[i];
   item.onmousedown = function(event){
      if(event.shiftKey){
         rotateTan(event.target, 15);
      }else{
         item.style.position = "absolute";
         zCounter++;
         item.style.zIndex = zCounter;
         document.body.append(item);
         function moveAt(pageX, pageY){
            item.style.left = pageX - item.offsetWidth / 2 + "px";
            item.style.top = pageY - item.offsetHeight / 2 + "px";
         }

         moveAt(event.pageX, event.pageY);

         function onMouseMove(event){
            moveAt(event.pageX, event.pageY);
         }

         document.addEventListener("mousemove", onMouseMove);

         item.onmouseup = function(){
            document.removeEventListener('mousemove', onMouseMove);
            item.onmouseup = null;
         }
      }
   }
}