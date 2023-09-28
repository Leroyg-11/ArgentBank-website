import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Index from "./Pages";
import User from "./Pages/User";
import SignIn from "./Pages/SignIn";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
