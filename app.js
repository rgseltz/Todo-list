const form = document.querySelector('#new-task');
const addTask = document.querySelector('#add-new-task');
const toDoList = document.querySelector('#toDo-list');
// const savedTodos = JSON.stringify(localStorage.getItem("todos")) || []

//retrieve existing content from localStorage
toDoList.innerHTML = localStorage.getItem('todos', 'checked');

// update checkbox if item was checked
const children = toDoList.querySelectorAll('li');
for (child of children) {
    child.querySelector('input').checked = (child.style.textDecoration === 'line-through')
};
//same thing as saying if(child.style.textDecoration === 'line-through') {
//     child.querySelector('input').checked = true;
// }
//could be explained clearer to me*


form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    let newTask = document.createElement('li');
    newTask.innerText = addTask.value;
    addTask.value = '';
    toDoList.appendChild(newTask);
        // newTask.appendChild(boxCheck);
    const completed = document.createElement('input');
    completed.setAttribute('type', 'checkbox');
    newTask.append(completed);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newTask.append(removeBtn);
    newTask.className = "todo";
    localStorage.setItem('todos', toDoList.innerHTML)

      
    // localStorage.setItem('to-do', JSON.stringify(newTask.innerText));
    // const boxCheck = document.createElement('input[type="checkbox"]');
    // newTask.prependToChild(boxCheck);
});



toDoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log(e);
     }
    if (e.target.tagName === 'BUTTON') {
        console.log(e);
        e.target.parentElement.remove();        
    }
    if (e.target.tagName === 'INPUT') {
        const state = e.target.checked ? "line-through" : 'none';
        e.target.parentElement.style.textDecoration = state;
    }
        // if (e.target.checked) {
        //     e.target.parentElement.style.textDecoration = 'line-through';
        // }
    //     else {e.target.parentElement.style.textDecoration = 'none';}
    // const isChecked = e.target.checked ? "true" : "false";
    // if (isChecked) {
    //     localStorage.setItem('isCompleted?', 'YES!')
    // }
    // else {localStorage.setIetm('isCompleted?', 'no')}
    // }
    localStorage.setItem('todos', toDoList.innerHTML);
});
// const isChecked = toDoList.querySelectorAll('input[type="checkbox"]');
// for (check of isChecked) {
//     check.querySelector('input').checked
// }




