import  './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form'
import Users from './components/Users'

function App() {
const [users,setusers] =useState([{}])

const addUser=(inputs)=>{
  // setusers([inputs])
  setusers((prev)=>{
          return [...prev,inputs]
        });
}
// if(users.length>1)
// {
//     setusers((prev)=>{
//       return [...prev.users,inputs]
//     });
//   }
//   else
//   {
//     setusers(inputs);
//   }
// }


  return (
  <>
    <Card>
      <Form user={addUser}/>
    </Card>
    <Users users={users}/>
  </>
  );
}

export default App;
