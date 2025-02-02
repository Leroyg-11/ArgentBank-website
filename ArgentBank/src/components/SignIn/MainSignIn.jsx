import React from "react";
import "./MainSignIn.scss";

const MainSignIn = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">email tony@stark.com</label>
            <input type="text" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password password123</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <a href="/user" className="sign-in-button">
            Sign In
          </a>
        </form>
      </section>
    </main>
  );
};

export default MainSignIn;
