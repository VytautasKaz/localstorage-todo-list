// Add a todo

// Erase all todos

document.querySelector('#clear-all').addEventListener('click', function () {
    let todosList = document.querySelector('ul');

    while (todosList.firstChild) {
        todosList.removeChild(todosList.firstChild);
    }
});
