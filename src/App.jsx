// import Hello from "./components/Hello";




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

import React from 'react'

const App = () => {

  const friends = [
    { id: 1, name: 'john', age: '21' },
    { id: 2, name: 'Raj', age: '23' }
  ]
  return (
    <div>
      <ul>
        {
          friends.map(friend => 
          <li key={friend.id}>
            {friend.name} {friend.age}
          </li>
          )
        }
      </ul>
    </div>
  )
}

export default App