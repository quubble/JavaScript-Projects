
//get elements into variables
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");

//initialize counter
let counter = 0;

//Increment button eventlistner function
increment.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
});

//Decrement button eventlistner function
decrement.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
});
