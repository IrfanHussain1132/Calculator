
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
 let current="";
 let previous="";
 let operator="";


 function update(value){
    display.value+=value;
 }

 function clearD(){
    display.value="";
 }
 function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
 }
