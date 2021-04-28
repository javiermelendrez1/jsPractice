console.log('connected');
//first thing to do is query for the h2 because we are going to update text
const counter = document.querySelector('h2');
//now query for the 3 buttons 
const decrease = document.querySelector('#d');
const reset = document.querySelector('#r');
const increase = document.querySelector('#i');
//create a var to hold the counter 
let count = 0;
//add an event listener
decrease.addEventListener('click', function(){
    count--;
    //update the h2 text on the screen
    counter.textContent = `${count}`;
})
increase.addEventListener('click', function(){
    count++;
    //update the h2 text on the screen
    counter.textContent = `${count}`;
})
reset.addEventListener('click', function(){
    //set the count to 0
    count = 0;
    counter.textContent = `${count}`;
})