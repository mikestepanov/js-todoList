var todoList = {
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
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    this.todos.forEach(function(todo) {
      if(todo.completed === true) {
        completedTodos += 1;
      }
    });
    this.todos.forEach(function(todo) {
      if(completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
}

var handlers = {
  displayTodos: function() {
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPosition = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
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

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul.todoList');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
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
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  createToggleButton: function() {
    var toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle';
    toggleButton.className = 'toggleButton';
    return toggleButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul.todoList');
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        var id = parseInt(elementClicked.parentNode.id);
        handlers.deleteTodo(id);
      } else if (elementClicked.className === 'toggleButton') {
        var id = parseInt(elementClicked.parentNode.id);
        handlers.toggleCompleted(id);
      }
    });
  }
};

view.setUpEventListeners();
