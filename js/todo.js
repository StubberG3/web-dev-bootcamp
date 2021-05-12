'use strict';

// document.addEventListener('DOMContentLoaded', initTodo);

let todos = [];

initTodo();

function initTodo () {
    let action = '';
    while (action !== 'quit') {
        action = prompt('What to do for our todo? [new / list / delete / quit]');
        if (action === 'new') {
            todos.push(prompt('Add what to our todo?'));
        }
        else if (action === 'list') {
            listTodos();
        }
        else if (action === 'delete') {
            todos.splice(prompt(`Remove which todo? [1 - ${todos.length}]`) - 1);
        }
    }
    todos.splice(0, todos.length);
    console.log('todo list cleared');
    alert('goodbye!');
}

function listTodos () {
    console.log('*** MY TODO LIST ***');
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}: ${todos[i]}`);
    }
}