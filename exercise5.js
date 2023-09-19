fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todos=json;
     const uncompleted = todos.reduce((uncompletedArray,todo)=>{
       if(!todo.completed){
        uncompletedArray.push({
            userId:todo.userId,
            title:todo.title,
        });}
        return uncompletedArray;
    },[]);  // Complete this code
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });