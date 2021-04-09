let todosList = document.querySelector('ul');
let formField = document.querySelector('form');
let userInput = document.querySelector('#user_input');
let clearButton = document.querySelector('#clear-all');

// Creates a new todo element, sets its value and inserts into the todo list

function todoMaker(input) {
    let newTodo = document.createElement('li');
    newTodo.textContent = input;
    todosList.appendChild(newTodo);
    userInput.value = '';
}

// Add a todo

let todosArray = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

let storage = JSON.parse(localStorage.getItem('todos'));

formField.addEventListener('submit', function (e) {
    e.preventDefault();
    if (userInput.value != '') {
        todosArray.push(userInput.value);
        localStorage.setItem('todos', JSON.stringify(todosArray));
        todoMaker(userInput.value);
    }
});

// Display localstorage content when page

for (let i = 0; i < storage.length; i++) {
    todoMaker(storage[i]);
}

// Erase all todos

clearButton.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});
