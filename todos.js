var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('Your todo list is empty.')
    } else {
      console.log('My todos:');
      for(var i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(newEl, index) {
    this.todos[index].todoText = newEl;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  }
}

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPosition = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoTextInput.value, changeTodoPositionInput.valueAsNumber);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  }
}
