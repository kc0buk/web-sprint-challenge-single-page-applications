import React from 'react'

function Pizza(props) {
    const { 
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <form onSubmit={onSubmit}>
        <h1>Place Your Order</h1>
        <div className='errors'>
                {/* Render Form Validation Errors */}
                <div>{errors.name}</div>
                {/* <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div> */}
            </div>
        <label htmlFor='nameInput'>Name:&nbsp;
            <input 
              id='nameInput'
              name='name'
              type='text'
              placeholder='Enter name'
              maxLength='50'
              value={values.name}
              onChange={onInputChange}
            />
        </label>
        <label htmlFor='sizeInput'>Size:&nbsp;
          <select
            onChange={onInputChange}
            value={values.size}
            name='size'
            id='sizeInput'
          >
            <option value=''>- Select an size -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
        <h3>Select Your Toppings</h3>
        <label htmlFor='toppingsPepperoniInput'>Pepperoni:&nbsp;
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label htmlFor='toppingsPineappleInput'>Pineapple:&nbsp;
                    <input 
                        type='checkbox'
                        name='pineapple'
                        checked={values.toppings.pineapple === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label htmlFor='toppingsSausageInput'>Sausage:&nbsp;
                    <input 
                        type='checkbox'
                        name='sausage'
                        checked={values.toppings.sausage === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label htmlFor='toppingsBaconInput'>Bacon:&nbsp;
                    <input 
                        type='checkbox'
                        name='bacon'
                        checked={values.toppings.bacon === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label htmlFor='instructionsInput'>Any special instructions?&nbsp;
            <textarea 
              id='instructionsInput'
              name='instructions'
            //   type='textarea'
              placeholder='Is there anything else we need to know?'
              maxLength='1000'
              value={values.instructions}
              onChange={onInputChange}
            />
        </label>
        <button disabled={disabled}>Place Your Order!</button>
        </form>
    )
}

export default Pizza
