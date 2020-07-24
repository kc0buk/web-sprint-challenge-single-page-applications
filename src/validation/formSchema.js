import React from 'react'
import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2,'Name must be at least two characters')
    .max(50, 'Too many characters')
    .required('Name is required'),
  size: yup
    .string(),
instructions: yup
    .string()
})

export default formSchema