//// day 2  


// import Hello from "./components/Hello";
import Todo from "./components/Todo";





// const App = () => {
// const name = "Sathish";

//   return (
//     <div>
//     <h1>Greetings</h1>
//       <Hello 
//         name={name}
//       />
//     </div>
//   )
// }

// export default App;


////////////////////////////////

// import React from 'react'

// const App = () => {

//   const friends = [
//     { id: 1, name: 'john', age: '21' },
//     { id: 2, name: 'Raj', age: '23' }
//   ]
//   return (
//     <div>
//       <ul>
//         {
//           friends.map(friend => 
//           <li key={friend.id}>
//             {friend.name} {friend.age}
//           </li>
//           )
//         }
//       </ul>
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////


// day 3 usage of key statement

// import React from 'react'

// const App = () => {

//   const friends = [
//     { id: 1, name: 'john', age: 21 },
//     { id: 2, name: 'Raj', age: 23 },
//     { id: 3, name: 'Mark', age: 22 }
//   ]

//   const listFriends = [];
//   for (let i=0; i < friends.length; i++) {
//     listFriends.push(
//       <li key={friends[i].id}>
//         {friends[i].name} {friends[i].age}
//       </li>
//     )
//   }


//   return (
//     <div>
//     <h1>Friends</h1>
//       <ul>
//         {listFriends}
//       </ul>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////


// day 3 Conditional rendering


// const App = () => {

//     const isLoggedIn = false;


//     if (isLoggedIn) {
//         return<h1>Welcome back</h1>;
//     } else {
//         return <h1>Please log in</h1>;
//     }
// }

// export default App

//////////////

// const App = () => {


//     const isLoggedIn = false;

//   return (
//     <div>
//         {
//             isLoggedIn ? <h1>Welcome back</h1> : <h1>Please log in</h1>
//         }
//     </div>
//   )
// }

// export default App

/////////////////////


// const App = () => {


//     const isLoggedIn = false;

//   return (
//     <div>
       
//        { isLoggedIn && <h1>Welcome back</h1>}
    
//     </div>
//   )
// }

// export default App

/////////////////////

const App = () => {

  const todos =[
    {id : 1, title: 'Buy milk', completed: false},
    {id : 2, title: 'Buy bread', completed: true},
    {id : 3, title: 'Buy butter', completed: false},
  ]

  return (
    <div>
      <h1>Todo List</h1>
      {
        todos.map(todo =>
        <Todo 
        key={todo.id}
        todo={todo}
        />
        )
      }
    </div>
  )
}

export default App;