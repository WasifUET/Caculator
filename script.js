 let display=document.getElementById("screen");
 function allclear(){
    display.value="";

 }

 function show (n){
    display.value+=n;
 }
 function calculate(){
     display.value=eval(display.value);
 }