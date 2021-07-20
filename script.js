const placeholders = document.querySelectorAll('.placeholder');
const addButton = document.querySelector('.add-new-task');
const firstColumn = document.querySelector('.in-column-start');
let selectedTask = null;


addButton.addEventListener('click', newTask);

function newTask() {
    let task = document.createElement('input');
    task.type = 'text';
    task.draggable = 'true';
    task.classList.add('item');
    firstColumn.append(task);
    task.addEventListener('dragstart', dragstart)
    task.addEventListener('dragend', dragend)
}

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    selectedTask = event.target;
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'));
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(selectedTask);
}