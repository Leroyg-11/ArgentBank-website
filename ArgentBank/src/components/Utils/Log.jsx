import axios from "axios";
import React, { useState } from "react";

const url = "http://localhost:3001/api/v1/user/login";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, { email: email, password: password });
      const token = resp.data.body.token;
      console.log(resp.data);

      // Utilisez le jeton d'authentification dans vos requêtes ultérieures
      // const headers = {
      //     Authorization: `Bearer ${token}`
      // };
      // const response = await axios.get('http://localhost:3001/api/v1/user/profile', { headers });
      // console.log(response.data);

      if (resp.status == 200) {
        console.log("success");
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="log">
      <h1>Test API </h1>
      <br />
      <form>
        <p>tony@stark.com</p>
        <label htmlFor="email"></label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <br />
        <p>password123</p>
        <label htmlFor="password"></label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <br />
        <button onClick={handleSignup}>Signup</button>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
};

export default Log;
