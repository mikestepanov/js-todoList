var todosList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('Your todo list is empty.')
    } else {
      console.log('My todos:');
      for(var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
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
  }
}


todosList.displayTodos();
todosList.addTodos('item 6');
todosList.changeTodos('item 4', 0);
todosList.toggleCompleted(0);
