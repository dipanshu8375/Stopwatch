// declare the variables.
let seconds = "00";
let tens = "00";

// calling the classes.
let getSec = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let startbtn = document.querySelector(".start");
let stopbtn = document.querySelector(".stop");
let resetbtn = document.querySelector(".reset");

// Adding the addEventListener on startbtn and use the HOF setInterval and use the function startTimer that we have declare later.
startbtn.addEventListener("click",()=>{
    interval = setInterval(startTimer,10);

});


// Adding the addEventListener on stopbtn and use the HOF clearInterval.
stopbtn.addEventListener("click",()=>{
    clearInterval(interval);
});

// Adding the addEventListener on resetbtn and reset the span.
resetbtn.addEventListener("click",()=>{
    tens = "00";
    seconds = "00"
    document.querySelector(".tens").innerHTML = tens;
    document.querySelector(".seconds").innerHTML = seconds;
  
});

//startTimer function.
function startTimer(){
    tens++;
    if(tens < 9){
        document.querySelector(".tens").innerHTML = "0" + tens;
    }
    if(tens > 9){
        document.querySelector(".tens").innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        document.querySelector(".seconds").innerHTML = "0" + seconds;
        tens = 0;
    }
    if(seconds > 9){
        document.querySelector(".seconds").innerHTML = seconds;
    }
}
