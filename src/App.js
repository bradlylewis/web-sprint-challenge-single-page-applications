import React, { useState, useEffect } from "react";
import "./App.css"
import { Route, Switch, NavLink } from "react-router-dom";
import formSchema from './validation/formSchema'
import axios from "axios";
import { reach } from 'yup'
import Home from './components/Home.js'
import Form from './components/Form.js'

// this let's our code know what key's to expect - what we will 'name' our inputs
const initialValues = { size: "", sauce: "", pepperoni: false, sausage: false, dicedTomatos: false,
  blackOlives: false, canadianBacon: false, roastedGarlic: false, spicyItalianSausage: false,
  artichokeHearts: false, grilledChicken: false, threeCheese: false, onions: false,
  pineapple: false, greenPepper: false, extraCheese: false, special: '', name: "" }

const initialErrors = { name: '', size: ''}

export default function App() {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true);


// HELPERS ////////////////////////////////////////////////////////
// Post a new user to API (callback)
const orderButton = newOrder => {
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
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
};

// HANDLER FUNCTIONS //////////////////////////////////////////////
const inputChange = (name, value) => {
  setFormErrors(name, value);
  setFormValues({ ...formValues,[name]: value })
};

const formSubmit = (event) => {
  
  const newOrder = {
    size: formValues.size,
    sauce: formValues.sauce,
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    dicedTomatos: formValues.dicedTomatos,
    blackOlives: formValues.blackOlives,
    canadianBacon: formValues.canadianBacon,
    roastedGarlic: formValues.roastedGarlic,
    spicyItalianSausage: formValues.spicyItalianSausage,
    artichokeHearts: formValues.artichokeHearts,
    grilledChicken: formValues.grilledChicken,
    threeCheese: formValues.threeCheese,
    onions: formValues.onions,
    pineapple: formValues.pineapple,
    greenPepper: formValues.greenPepper,
    extraCheese: formValues.extraCheese,
    special: formValues.special,
    name: formValues.name
  }
  // Post new friend on submit
  orderButton(newOrder)  
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
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={errors}
          />          
        </Route>
      </Switch>
    </>
  );
}