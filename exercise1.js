fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todos=json;
     const completed = todos.filter((todo,index)=>{
        return todo.completed===true;
     })// Complete this code
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });