const display = document.getElementById('display');
function addTodisplay(input){
    display.value+=input;
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value="Error";

    }
}
function clear1(){
    display.value= "";
}
