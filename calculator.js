let output = document.querySelector(".output");
let numbers = document.querySelectorAll(".num");
let btn = document.querySelector(".keys");
let display = document.querySelector(".display");
console.log("hi its ayush trying to make calculator");
let ceInterval= null;

numbers.forEach((num) => {
num.addEventListener("click", () => {
const userclick = num.getAttribute("id");
console.log("user clicked",userclick);
addToDisplay(userclick);
});
});
function addToDisplay(userclick){

if( userclick === "="){
    try{
        display.innerText = eval(display.innerText);
    } catch{
        display.innerText = "Error";
    } 
    }else if (userclick === "CE") {
    // Clear one letter at a time
  display.innerText = display.innerText.slice(0,-1);
}else{
    if(display.innerText === "Error"){
  display.innerText="";
    }
        display.innerText += userclick ;
    }

}
