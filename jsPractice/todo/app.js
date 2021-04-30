// console.log('connected');
//query for the text input
const textInput = document.querySelector('input');
//query for the .greeting div
const greetingDiv = document.querySelector('.greeting');
//query for the .container for when we need to append the task containers
const container = document.querySelector('.container');
//add an event listener for when the user enters
const ul = document.querySelector('ul');
textInput.addEventListener('keypress', (e) => {
    //remove the greeting container
    //if the user key press is equal to enter
    if(e.key === 'Enter'){
        greetingDiv.remove();
        //save the textInput 
        const task = textInput.value;
        // console.log(task);
        textInput.value = '';
        //const taskContainer = document.createElement('div');
        //taskContainer.className = 'taskContainer';
        //const ul = document.createElement('ul');
        const li = document.createElement('li');
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.id = 'strike';
        const text = document.createElement('p');
        text.append(task);
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode('delete');
        deleteButton.append(deleteButtonText);
        li.append(check);
        li.append(text);
        li.append(deleteButton);
        //ul.append(li);
        ul.append(li);
        //container.append(taskContainer);
        //create the event listener now for the checkbox
        // const strikethrough =  document.querySelectorAll('#strike');

        // for(let i = 0; i < strikethrough.length; i++){
        //     strikethrough[i].addEventListener('changed', () => {
        //         console.log('clicked')
        //     })
        // }
        const line = document.querySelectorAll('#strike').addEventListener('changed', () => {
            console.log('hello there')
        })
    }
})