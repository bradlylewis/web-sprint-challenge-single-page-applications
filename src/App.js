import React, { useState, useEffect } from "react";
import "./App.css"
import { Route, Switch, NavLink } from "react-router-dom";
import formSchema from './validation/formSchema'
import axios from "axios";
import { reach } from 'yup'
import Home from './components/Home.js'
import Form from './components/Form.js'

// this let's our code know what key's to expect - what we will 'name' our inputs
const initialValues = { size: "", sauce: "", pepperoni: false, sausage: false, 'diced tomatoes': false,
  'black olives': false, 'canadian bacon': false, 'roasted garlic': false, 'spicy italian sausage': false,
  'artichoke hearts': false, 'grilled chicken': false, 'three cheese': false, 'onions': false,
  pineapple: false, 'green pepper': false, 'extra cheese': false, 'diced tomatos': false,name: '' }

const initialErrors = { name: '', size: ''}


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
  reach(formSchema, name)
    .validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
};

// HANDLER FUNCTIONS //////////////////////////////////////////////
const change = (event) => {
  const { value, name, type, checked } = event.target;
  const valueToUse = type === 'checkbox' ? checked : value;
  setFormErrors(name, valueToUse);
  setFormValues({ ...formValues, [name]: valueToUse });
};

const formSubmit = (event) => {
  const newOrder = {
    size: formValues.size,
    sauce: formValues.sauce,
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    'diced tomatos': formValues['diced tomatos'],
    'black olives': formValues['black olives'],
    'canadian bacon': formValues['canadian bacon'],
    'roasted garlic': formValues['roasted garlic'],
    'spicy italian sausage': formValues['spicy italian sausage'],
    'artichoke hearts': formValues['artichoke hearts'],
    'grilled chicken': formValues['grilled chicken'],
    'three cheese': formValues['three cheese'],
    onions: formValues.onions,
    pineapple: formValues.pineapple,
    'green pepper': formValues['green pepper'],
    'extra cheese': formValues['extra cheese'],
    // substitute: formValues.substitute,
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