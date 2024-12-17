const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodo() {
    // Get the input value
    const todoText = todoInput.value.trim();

    // Ensure the input isn't empty
    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');

    // Create a text node for the task
    const textNode = document.createTextNode(todoText);
    
    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "X";
    removeBtn.classList.add('remove-btn');
    
    // Append the text and remove button to the li
    li.appendChild(textNode);
    li.appendChild(removeBtn);

    // Add the li to the todo list
    todoList.appendChild(li);

    // Clear the input field after adding the task
    todoInput.value = '';

    // Add event listener to remove button
    removeBtn.addEventListener('click', function () {
        li.remove();
    });
}

// Event listener for the 'Add Task' button
addTodoBtn.addEventListener('click', addTodo);

// Allow pressing Enter to add a task
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});