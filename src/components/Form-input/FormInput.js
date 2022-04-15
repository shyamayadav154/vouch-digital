import React from 'react'
import './formInput.styles.scss'

const FormInput = ({...props}) => {
  return (
    <input {...props} className='form-input'/>
  )
}

export default FormInput