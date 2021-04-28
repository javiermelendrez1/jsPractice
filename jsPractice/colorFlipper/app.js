console.log('connected');

const clickMe = document.querySelector('button'); //query for the button 
//add an event listener
clickMe.addEventListener('click', function(){
    //query for the body
    const body = document.querySelector('body');
    //change the background
    const backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    body.style.background = backgroundColor;
    //query for the h1 to update the text and show what color it is displaying in the background 
    const h1 = document.querySelector('h1');
    h1.textContent = `background color: ${backgroundColor}`;
})

//make a function to make random colors in rgb
function randomColor(){
    const randomColor = Math.floor(Math.random() * 255);
    //return that random number
    return randomColor;
}