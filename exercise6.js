fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todos=json;
     const completed = todos.reduce((completed,todo)=>{
       if(todo.completed){
        completed[todo.userId]==null?
        completed[todo.userId]=1:
        completed[todo.userId]++;
        }
        return completed;
    },{});  // Complete this code
    console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });