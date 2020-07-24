import React, { useState, useEffect } from "react";
import axios from 'axios'
import * as yup from 'yup'
import { Switch, Link, Route } from 'react-router-dom'
import { Container, Box } from './styles/'
import formSchema from './validation/formSchema'

import Home from './components/Home'
import Pizza from './components/Pizza'

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  instructions: '',
  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  toppings: {
    pepperoni: false,
    pineapple: false,
    sausage: false,
    bacon: false,
  },
}

const initialFormErrors = {
  name: '',
}

const initialOrder = []
const initialDisabled = true

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        setOrder([res.data, ...order])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkboxChange = (name, isChecked) => {
    // yup
    //   .reach(formSchema, name)
    //   .validate(isChecked)
    //   .then(valid => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: '',
    //     })
    //   })
    //   .catch(err => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0],
    //     })
    //   })
    setFormValues({
      ...formValues,
      [name]: isChecked,
    })
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      // instructions: formValues.instructions.trim(),
      // size: formValues.size.trim(),
      // toppings: formValues.civil.trim(),
      // toppings: Object.keys(formValues.toppings).filter(hb => formValues.toppings[hb]),
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <Container justify='center'>
      <div>
      <h1>Lambda Eats</h1>
      </div>
      <div clasName='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
      </div>
      <Box>
        <Switch>
          <Route path='/pizza'>
            <Pizza 
              values={formValues} 
              submit={submit}
              inputChange={inputChange}
              checkboxChange={checkboxChange}
              disabled={disabled} 
              errors={formErrors}
            />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Box>
    </Container>
  );
};
export default App;
