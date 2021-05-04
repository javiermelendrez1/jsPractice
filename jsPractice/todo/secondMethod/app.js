const addButton = document.querySelector('#addToDo');
const toDoContainer = document.querySelector('#toDoContainer');
const inputField = document.querySelector('#inputField');
addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraphStyling');
    paragraph.innerText = inputField.value;
    toDoContainer.append(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){

        toDoContainer.removeChild(paragraph);
    })
})