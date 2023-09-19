fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    todos=json;
     const todoTitles = todos.map(todo=>{
        return todo.title;
     }) // Complete this code
     console.log(todoTitles);
  })
  .catch(function(err) { 
    console.log(err);
  });