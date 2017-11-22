const todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(newEl, index) {
    this.todos[index].todoText = newEl;
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted: function(index) {
    let todo = this.todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    this.todos.forEach((todo) => {
      if(todo.completed === true) {
        completedTodos += 1;
      }
    });
    this.todos.forEach((todo) => {
      if(completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
}

const handlers = {
  displayTodos: function() {
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    let changeTodoPosition = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoTextInput.value, changeTodoPositionInput.valueAsNumber);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  }
}

const view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul.todoList');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, position) {
      let todoLi = document.createElement('li');
      todoLi.className = 'todoLi';
      let todoTextWithCompletion = '';
      if(todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoLi.appendChild(this.createToggleButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.style.display = 'none';
    return deleteButton;
  },
  createToggleButton: function() {
    var toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle';
    toggleButton.className = 'toggleButton';
    return toggleButton;
  },
  setUpEventListeners: function() {
    let todosUl = document.querySelector('ul.todoList');
    todosUl.addEventListener('click', function(event) {
      let elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        let id = parseInt(elementClicked.parentNode.id);
        handlers.deleteTodo(id);
      } else if (elementClicked.className === 'toggleButton') {
        let id = parseInt(elementClicked.parentNode.id);
        handlers.toggleCompleted(id);
      }
    });
    todosUl.addEventListener('mouseover', function(event) {
      let elementMousedOver = event.target;
    });
  }
};

view.setUpEventListeners();
