import axios from 'axios';
import React, { useState } from 'react';


const url = 'http://localhost:3001/api/v1/user/login';




const Log = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const resp = await axios.post(url, {email: email, password: password}).then(response => {
                  console.log(response.data);
                  setLoginMessage(response.data.message);
                })
        const token = resp.data.body.token;
        console.log(resp.data);
        if (response.status === "200") {
            console.log('token', token);
        }
        
        // Utilisez le jeton d'authentification dans vos requêtes ultérieures
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get('http://localhost:3001/api/v1/user/profile', { headers });
        console.log(response.data);

        
    } catch (error) {
        console.log("error")
    }

}
    return (
        <div className='log'>
           
           <h1>Test API </h1><br />
      <form >
           <label htmlFor="email"></label>
           <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder='tony@stark.com'/><br />
           <label htmlFor="password"></label>
           <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" id="password" /><br />
           <button onClick={handleSignup} >Signup</button>
        </form>
           {loginMessage && <p>{loginMessage}</p>}
     
            
        </div>
    );
};

export default Log;