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
    for(var i = 0; i < this.todos.length; i++) {
      if(this.todos[i].completed) {
        completedTodos += 1;
      }
    }
    if(completedTodos === totalTodos) {
      for(var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for(var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true;
      }
    }
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
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  }
}

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul.todoList');
    todosUl.innerHTML = '';
    for(var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      var todoText = todoList.todos[i].todoText;
      if (todoList.todos[i].completed) {
        todoTextWithCompletion = '(x) ' + todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
}
