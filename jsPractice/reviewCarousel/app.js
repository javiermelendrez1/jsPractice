//an array of objects holding reviews
const reviews = [{
    "name": "Bruce Wayne",
    "title": "Dark Knight",
    "review": "This place is cool if it were open at night",
    "image": "batman.jpg"

},
{
    "name": "Barry Allen",
    "title": "Flash",
    "review": "Service could be faster",
    "image": "flash.jpg"

},
{
    "name": "Tony Stark",
    "title": "Iron Man",
    "review": "This place needs more automation",
    "image": "ironman.jpeg"

}
]
//query for image, name, title, review
let img = document.querySelector('img');
let name = document.querySelector('#name');
let title = document.querySelector('#title');
let review = document.querySelector('#review');
//query for the buttons
const back = document.querySelector('#back');
const forward = document.querySelector('#forward');
//index counter to keep track of index
let index = 0;
//load the review 
function load(){
    img.src = `${reviews[index].image}`;
    name.textContent = `${reviews[index].name}`;
    title.textContent = `${reviews[index].title}`;
    review.textContent = `${reviews[index].review}`;

}
//call the load function
load();

//add event listener to back and forward buttons 
back.addEventListener('click', function(){
    //if index = 0 the index should be array.length
    if(index === 0){
        index = reviews.length - 1;
        console.log(index);
        load();
    } else{
        index--;
        load();
    }
})
forward.addEventListener("click", function(){
    if(index === reviews.length - 1){
        index = 0;
        load();
    } else {
        index++;
        load();
    }
})