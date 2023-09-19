fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todos=json;
     const completedSum = todos.filter(todo=>todo.completed).reduce(sum=>sum+1,0)// Complete this code
    console.log(completedSum)
  })
  .catch(function(err) { 
    console.log(err);
  });