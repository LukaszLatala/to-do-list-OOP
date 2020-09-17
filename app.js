const todosWrapper = document.querySelector(".todos__wrapper");
const addTodoBtn = document.querySelector(".todo-form__button");
const addTodoInput = document.querySelector(".todo-form__input");

const todos = [];

class Todo {
  constructor(todoName) {
    this.createTodo(todoName);
  }

  createTodo(todoName) {
    const todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todo__wrapper");

    const todoInput = document.createElement("input");
    todoInput.classList.add("todo__input");
    todoInput.type = "text";
    todoInput.disabled = true;
    todoInput.value = todoName;

    const editTodoBtn = document.createElement("button");
    editTodoBtn.classList.add("todo-edit__button");
    editTodoBtn.innerHTML = "edit";

    editTodoBtn.addEventListener("click", () =>
      this.editTodo(todoInput, todoName)
    );

    const removeTodoBtn = document.createElement("button");
    removeTodoBtn.classList.add("todo-remove__button");
    removeTodoBtn.innerHTML = "remove";

    // wywolanie pustej funkcji zapobiega samowywolaniu tej funkcji  w naszym przypadku - (removeTodo),
    removeTodoBtn.addEventListener("click", () =>
      this.removeTodo(todoWrapper, todoName)
    );

    todoWrapper.appendChild(todoInput);
    todoWrapper.appendChild(editTodoBtn);
    todoWrapper.appendChild(removeTodoBtn);

    todosWrapper.appendChild(todoWrapper);
  }

  removeTodo(todoWrapper, todoName) {
    todoWrapper.parentNode.removeChild(todoWrapper);
    const todoIndex = todos.indexOf(todoName);
    todos.splice(todoIndex, 1);
  }
  editTodo(todoInput, todoName) {
    if (todoInput.disabled === true) {
      todoInput.disabled = !todoInput.disabled;
    } else {
      todoInput.disabled = !todoInput.disabled;
      const editIndex = todos.indexOf(todoName);
      todos[editIndex] = todoInput.value;
    }
  }
}

const addTodo = () => {
  if (addTodoInput.value !== "") {
    new Todo(addTodoInput.value);
    todos.push(addTodoInput.value);
    addTodoInput.value = "";
  }
};

addTodoBtn.addEventListener("click", addTodo);
