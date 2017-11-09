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
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function(newEl, index) {
    this.todos[index].todoText = newEl;
    this.displayTodos();
  },
  deleteTodos: function(index) {
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


var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');
console.log(toggleAllButton);

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
