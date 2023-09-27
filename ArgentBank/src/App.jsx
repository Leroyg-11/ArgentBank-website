import React from 'react';
import './App.css';
import Log from './components/log';

const App = () => {
  return (
    <div className='app'>
      <Log />
      
      
    </div>
  );
};

export default App;













// import { useState } from 'react'

// import './App.css'
// import Axios from 'axios';



// function App() {
//   const [loginMessage, setLoginMessage] = useState("");
 
//   const handleSignup = () => {

//   const user = { firstName: 'Tony', lastName: 'Stark', email: 'tony@stark.com', password: 'password123', userName: 'Iron' }

//     Axios.post('http://localhost:3001/api/v1/user/login', user)
//       .then(response => {
//       console.log(response.data);
//       setLoginMessage(response.data.message);
//     })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   return (
//     <>
//       <h1>Test API </h1><br />
      
//       <label htmlFor="email"></label>
//       <input type="text" id="email" placeholder='tony@stark.com'/><br />
//       <label htmlFor="password"></label>
//       <input type="text"  placeholder="password123" id="password" />
//       <br />
//       <button onClick={handleSignup}>Signup</button>
//       {loginMessage && <p>{loginMessage}</p>}
//     </>
//   )
// }

// export default App
