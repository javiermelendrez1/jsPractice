// console.log('connected');
//query for the text input
const textInput = document.querySelector('input');
//query for the .greeting div
const greetingDiv = document.querySelector('.greeting');
//query for the .container for when we need to append the task containers
const container = document.querySelector('.container');
//add an event listener for when the user enters

textInput.addEventListener('keypress', (e) => {
    //remove the greeting container
    //if the user key press is equal to enter
    if(e.key === 'Enter'){
        greetingDiv.remove();
        //save the textInput 
        const task = textInput.value;
        // console.log(task);
        textInput.value = '';
        //create task .div
        // const taskContainer = document.createElement('div');
        // const span = document.createElement('span');
        // const checkButton = document.createElement('button');
        // const taskText = document.createElement('p');
        // const deleteButton = document.createElement('button');
        //append all the task items into the span then the span into the task container then the task container onto the regular container
        // const buttonText = document.createTextNode('O');
        // const inputText = document.createTextNode(`${task}`);
        // checkButton.append(buttonText);
        // taskText.append(inputText);
        // const deleteButtonText = document.createTextNode('X');
        // deleteButton.append(deleteButtonText);
        // span.append(checkButton);
        // span.append(taskText);
        // span.append(deleteButton);
        // taskContainer.append(span);
        // container.append(taskContainer);
        const taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const check = document.createElement('input');
        check.type = 'checkbox';
        const text = document.createElement('p');
        text.append(task);
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode('delete');
        deleteButton.append(deleteButtonText);
        li.append(check);
        li.append(text);
        li.append(deleteButton);
        ul.append(li);
        taskContainer.append(li);
        container.append(taskContainer);
        
    }
})