// JavaScript Code für Todo List
let counterTask = 0;
let tasks = [];
window.addEventListener('load', () => addInput());

function addTask (taskText) {
    //alert(`Aufgabe Nr.: ${counterTask}: ${taskText}`);
    if (document.getElementById('inputTask').value === "") {return;}
    renderTasks(taskText);
    document.getElementById('inputTask').value = "";

}

function renderTasks (taskText) {
    //const container = document.getElementById('renderTasks');
    //const render = document.createElement('P');
    //render.className = 'renderTask';
    //render.textContent = 'Aufgabe Nr.:'+ counterTask + ' : ' + taskText;
    //container.appendChild(render);
    tasks[counterTask] = taskText;
    counterTask++;
    saveTasks(tasks);
}

function saveTasks () {
    //alert("save: " + tasks);

    const container = document.getElementById("listen");
    container.innerHTML = "";

    const ausgabeListe = document.createElement('ul');
    ausgabeListe.className = 'list-group';

    for (let task in tasks) {
        const AL = document.createElement('li');
        AL.class = 'list-group-item';
        AL.textContent = tasks[task];
        ausgabeListe.appendChild(AL);
    }

    container.appendChild(ausgabeListe);
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