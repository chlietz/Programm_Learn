// JavaScript Code für Todo List

const tasks = [];


window.addEventListener('load', () => addInput());

function addTask (taskText) {
    
    if (document.getElementById('inputTask').value === "") {return;}
    const neuerTask = {text: taskText, done: false, created: new Date().toISOString().split("T")[0]};
    tasks.push(neuerTask);
    renderTasks(tasks);
    document.getElementById('inputTask').value = "";

}

function renderTasks (taskText) {    
    const container = document.getElementById("listen");
    container.innerHTML = "";

    const ausgabeListe = document.createElement('ul');
    ausgabeListe.className = 'list-group';

    for (let z = 0; z < tasks.length; z++) {
        const AL = document.createElement('list-unstyled');
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.className = "checkDone";
        AL.class = 'list-group-item';
        AL.textContent = ' ' + tasks[z].text;
        ausgabeListe.appendChild(AL);
        AL.insertAdjacentElement("afterbegin", check);
    }

    container.appendChild(ausgabeListe);
}

function saveTasks () {
    //alert("save: " + tasks);

    
}

function loadTasks () {

}

function addInput() {
    
    const sendButton = document.getElementById('sendButton');    
    const inputTask = document.getElementById('inputTask');
    
    let taskText;
    inputTask.addEventListener('input', (Event) => {taskText = inputTask.value})
    if (inputTask.value === undefined) {
        return;
    } else {
        sendButton.addEventListener('click', () => addTask(taskText));  
    }
} 

function existingElement(ElementID, Element) {
    const container = document.getElementById(ElementID);
    const inputExists = container.querySelector(Element) == null;
    if (inputExists) {
        return true;
    } else {
        return false;
        }
}