function saveAll() {
    const allTodos = JSON.stringify(
        Array.from(todoList.children).map((todo) => todo.textContent)
    );
    localStorage.setItem("myTodos", allTodos);
}

function addTodo() {
    var newTodoText = document.getElementById("newTodo").value;
    var errorMessage = document.getElementById("errorMessage");
    var todoList = document.getElementById("todoList");

    if (newTodoText.trim() === "") {
        errorMessage.textContent = "Please enter a todo.";
        return;
    }

    var todoItem = document.createElement("li");
    todoItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
    var todoText = document.createElement("span");
    todoText.textContent = newTodoText;

    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt text-danger";
    deleteIcon.onclick = function () {
        todoList.removeChild(todoItem);
        saveAll();
    };

    var editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit text-primary";
    editIcon.onclick = function () {
        var updatedText = prompt("Edit the todo:", newTodoText);
        if (updatedText !== null && updatedText.trim() !== "") {
            todoText.textContent = updatedText;
            saveAll();
        }
    };

    todoItem.appendChild(todoText);
    todoItem.appendChild(editIcon);
    todoItem.appendChild(deleteIcon);
    todoList.appendChild(todoItem);

    errorMessage.textContent = "";
    document.getElementById("newTodo").value = "";
    saveAll();
}

function removeAllTodos() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    saveAll();
}

function confirmDeleteAll() {
    var confirmation = confirm(
        "Are you sure you want to delete all todos?"
    );
    if (confirmation) {
        removeAllTodos();
    }
    saveAll();
}

function loadAllTodos() {
    const allTodos = JSON.parse(localStorage.getItem("myTodos"));
    const todoList = document.getElementById("todoList");
    if (allTodos) {
        allTodos.forEach(function (todoText) {
            var todoItem = document.createElement("li");
            todoItem.className =
                "list-group-item d-flex justify-content-between align-items-center";
            var todoTextElement = document.createElement("span");
            todoTextElement.textContent = todoText;

            var deleteIcon = document.createElement("i");
            deleteIcon.className = "fas fa-trash-alt text-danger";
            deleteIcon.onclick = function () {
                todoList.removeChild(todoItem);
                saveAll();
            };

            var editIcon = document.createElement("i");
            editIcon.className = "fas fa-edit text-primary";
            editIcon.onclick = function () {
                var updatedText = prompt("Edit the todo:", todoText);
                if (updatedText !== null && updatedText.trim() !== "") {
                    todoTextElement.textContent = updatedText;
                    saveAll();
                }
            };

            todoItem.appendChild(todoTextElement);
            todoItem.appendChild(editIcon);
            todoItem.appendChild(deleteIcon);

            todoList.appendChild(todoItem);
        });
    }
}
