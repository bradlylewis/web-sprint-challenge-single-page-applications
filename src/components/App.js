import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>Help</NavLink>
        </nav>
      </header>

      
      <p>You can remove this code - and - create your own header</p>
    </>
  );
};
export default App;
