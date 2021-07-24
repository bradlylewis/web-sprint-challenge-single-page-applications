import React from "react";
import "../App.css"
import { Route, Switch, NavLink } from "react-router-dom";
import Home from './Home.js'
import Form from './Form.js'

const App = () => {
  return (
    <>
      <header className='App-header'>
        <h1>LAMBDA EATS</h1>
        <div className='nav'>
          <NavLink exact to='/' className='home link'>Home</NavLink>
          <NavLink to='/' className='help link'>Help</NavLink>
        </div>
      </header>
      {/* <Home /> */}
      <Form />
      
      {/* <p>You can remove this code - and - create your own header</p> */}
    </>
  );
};
export default App;
