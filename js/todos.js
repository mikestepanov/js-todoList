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
      todoLi.id = position;
      todoLi.appendChild(this.createIcon(todo));
      todoLi.appendChild(this.createText(todo));
      todoLi.appendChild(this.createToggleButton());
      todoLi.appendChild(this.createChangeButton());
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createIcon: function(todo) {
    let img = document.createElement('img');
    if(todo.completed) {
      img.setAttribute('src', 'img/completed.ico');
    } else {
      img.setAttribute('src', 'img/not_completed.ico');
    }
    return img;
  },
  createText: function(todo) {
    let p = document.createElement('p');
    p.textContent = todo.todoText;
    p.style.display = 'inline';
    return p;
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
  }
};
