const agregateUsersAndTodos = async (user) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  try {
    const res = await fetch(usersUrl).then((response) => response.json());
    const todosRes = await fetch(todosUrl).then((response) => response.json());
   
    // console.log(res,todosRes);
    const aggregate = (users, todoses) => {
       const aggregateUsersTodos = todoses.reduce((result, todos) => {
        if (!result[todos.userId]) {
          result[todos.userId] = [todos];
      } else {
          result[todos.userId].push(todos)
      }
        return result;
      }, {});
      console.log(aggregateUsersTodos);
      return users.map((user) => ({ ...user, todos: aggregateUsersTodos[user.id] }));
    };
    console.log(aggregate(res, todosRes));

  } catch (error) {}

}; 
console.log(agregateUsersAndTodos());

/* 2*/
const agregateUsersAndTodos2 = async (user) => {
  const url2 = "https://jsonplaceholder.typicode.com/users";
  const todosUrl2 = "https://jsonplaceholder.typicode.com/todos";
  try {
    const res2 = await fetch(url2).then((response) => response.json());
    const todosRes2 = await fetch(todosUrl2).then((Response) =>
      Response.json()
    );

    const aggregate = (users, todoses) => {
      return users.map((user) => {
        const aggregateUsers = todoses.filter(
          (todos) => {return todos.userId === user.id}
        );

        return {
          todos: aggregateUsers,
          ...user,
        };
       
      });
    };
    console.log(aggregate(res2, todosRes2));
  } catch (error) {}
};
console.log(agregateUsersAndTodos());

//   /*3*/

//    const agregateUsersAndTodos3 = async(user) => {
//       const url3 = 'https://jsonplaceholder.typicode.com/users';
//       const todosUrl3 = 'https://jsonplaceholder.typicode.com/todos'
//       try {
//          const res3 = await fetch(url3).then(Response => Response.json())
//          const todosRes3 = await fetch(todosUrl3).then(Response => Response.json())

//          const aggregate3 = (users,todoses) => {

//          const aggregateUsersMap = new Map();

//          todoses.forEach((todos) => {aggregateUsersMap.set(todos,)
//          });
//          return users.map ((user) => (
//             {...user,
//             todos:aggregateUsersMap.get(user.id),}))
//          }
//       console.log(aggregate3(res3, todosRes3));
//       }
//       catch (error) {

//       }}
//       console.log(agregateUsersAndTodos3())
