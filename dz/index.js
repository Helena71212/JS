const agregateUsersAndTodos = async(user) => {
   const url = 'https://jsonplaceholder.typicode.com/users';
   const todosUrl = 'https://jsonplaceholder.typicode.com/todos'
   try {
     const res = await fetch(url).then(Response => Response.json())
     const todosRes = await fetch(todosUrl).then(Response => Response.json())
     // console.log(res,todosRes);
     const aggregate = (users,todoses) => {
       
      const aggregate2 = todoses.reduce ((result, todos) => 
      {
      result [todos.userId]= todos;
        return result;},{});
        return users.map ((user) => (
          {...user, 
         todos:aggregate2[user.id],}));
        }
    console.log(aggregate(res, todosRes));
  }
  catch (error) {
      
      }}
      console.log(agregateUsersAndTodos())

/* 2*/
const agregateUsersAndTodos2 = async(user) => {
  const url2 = 'https://jsonplaceholder.typicode.com/users';
  const todosUrl2 = 'https://jsonplaceholder.typicode.com/todos'
  try {
    const res2 = await fetch(url2).then(Response => Response.json())
    const todosRes2 = await fetch(todosUrl2).then(Response => Response.json())

    const aggregate = (users,todoses) => {
     return users.map ((user) => {
       const aggregateUsers = todoses.filter(todos =>todos.userId === user.id)

       return {
         todos: aggregateUsers,
         ...user,
       }
     });
  }
  console.log(aggregate(res2, todosRes2));
  }
  catch (error) {
      
      }}
      console.log(agregateUsersAndTodos())