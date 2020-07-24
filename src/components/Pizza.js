import React from 'react'

function Pizza(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      }
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <form>
        <h1>Place Your Order</h1>
        <label htmlFor='nameInput'>Name:&nbsp;
            <input 
              id='nameInput'
              name='name'
              type='text'
              placeholder='Enter name'
              maxLength='20'
              value={values.name}
              onChange={onChange}
            />
        </label>
        </form>
    )
}

export default Pizza