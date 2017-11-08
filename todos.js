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
  }
}
