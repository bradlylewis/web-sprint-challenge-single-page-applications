import React, { useState, useEffect } from "react";
import "../App.css"
import { Route, Switch, NavLink } from "react-router-dom";
import formSchema from '../validation/formSchema'
import axios from "axios";
import { reach } from 'yup'
import Home from './Home.js'
import Form from './Form.js'

// this let's our code know what key's to expect - what we will 'name' our inputs
const initialValues = { size: "", sauce: "", pepperoni: false, substitute: false, special: '', name: '' }
const initialErrors = { size: "", sauce: "", name: '' }

export default function App() {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true);


// HELPERS ////////////////////////////////////////////////////////
// Post a new user to API (callback)
const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(res => {
    setOrders([res.data.data, ...orders])
    console.log(`This is orders: ${orders}`)
  })
  .catch(err => {
    // console.log(err)
  })
  .finally(() => {
    setFormValues(initialValues)
  })
}

// compares our inputs to our schema form
const setFormErrors = (name, value) => {
  reach(formSchema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
};

// HANDLER FUNCTIONS //////////////////////////////////////////////
const change = (event) => {
  const { value, name, type, checked } = event.target;
  const valueToUse = type === 'checkbox' ? checked: value;
  setFormErrors(name, valueToUse);
  setFormValues({ ...formValues, [name]: valueToUse });
};
const formSubmit = (event) => {
  const newOrder = {
    size: formValues.size,
    sauce: formValues.sauce,
    pepperoni: formValues.pepperoni,
    substitute: formValues.substitute,
    special: formValues.special,
    name: formValues.name
  }
  // Post new friend on submit
  postNewOrder(newOrder)
}



// SIDE EFFECTS // Can't get this to work!!!
// useEffect(() => {
//   const getOrders = () => {
//     axios.get('https://reqres.in/api/orders')
//       .then((res) => {
//         console.log('GET RESPONSE!')
//         console.log(res.data.data)
//         setOrders(res.data.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   getOrders()
// }, [])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);


  return (
    <>
      <header className='App-header'>
        <h1>LAMBDA EATS</h1>
        <div className='nav'>
          <NavLink exact to='/' className='home link'>Home</NavLink>
          <NavLink to='/' className='help link'>Help</NavLink>
        </div>
      </header>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pizza'>
          <Form
            formValues={formValues}
            change={change}
            submit={formSubmit}
            disabled={disabled}
            errors={errors}
          />          
        </Route>
      </Switch>
    </>
  );
}