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
  if(elementMouseOvered.parentNode.className === 'todoLi') {
    elementMouseOvered = elementMouseOvered.parentNode;
  }
  elementMouseOvered.lastChild.previousElementSibling.style.display = 'inline';
  elementMouseOvered.lastChild.style.display = 'inline';
});
todosUl.addEventListener('mouseout', function(event) {
  let elementMouseOvered = event.target;
  if(elementMouseOvered.parentNode.className === 'todoLi') {
    elementMouseOvered = elementMouseOvered.parentNode;
  }
  elementMouseOvered.lastChild.previousElementSibling.style.display = 'none';
  elementMouseOvered.lastChild.style.display = 'none';
});
