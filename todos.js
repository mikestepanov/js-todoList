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
  changeTodo: function(text, position) {
    todoList.changeTodo(text, positon);
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
      if(todo.completed) {
        var todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        var todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createToggleButton());
      todoLi.appendChild(this.createChangeButton());
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createToggleButton: function() {
    let button = document.createElement('button');
    button.textContent = 'Toggle';
    button.className = 'toggleButton';
    return button;
  },
  createDeleteButton: function() {
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.className = 'deleteButton';
    button.style.display = 'none';
    return button;
  },
  createChangeButton: function() {
    let button = document.createElement('button');
    button.textContent = 'Change';
    button.className = 'changeButton';
    button.style.display = 'none';
    return button;
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
      let elementMouseOvered = event.target;
      if(elementMouseOvered.tagName === 'BUTTON') {
        elementMouseOvered = elementMouseOvered.parentNode;
      }
      elementMouseOvered.children[1].style.display = 'inline';
      elementMouseOvered.lastChild.style.display = 'inline';
    });
    todosUl.addEventListener('mouseout', function(event) {
      let elementMouseOvered = event.target;
      if(elementMouseOvered.tagName === 'BUTTON') {
        elementMouseOvered = elementMouseOvered.parentNode;
      }
      elementMouseOvered.children[1].style.display = 'none';
      elementMouseOvered.lastChild.style.display = 'none';
    });
  }
};

view.setUpEventListeners();
