import React, { useState } from 'react'
import './login.styles.scss'
import {  Button } from 'antd'
import FormInput from '../Form-input/FormInput'

import {message} from 'antd'


import axios from 'axios'

const Login = () => {
  const initialData = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialData)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

  if(!formData.email){
    message.error('Please enter your email')
    return
  }

  if(!formData.password){
    message.error('Missing Password')
    return
  }

    console.log(formData)

    try {
      const { data } = await axios.post('https://reqres.in/api/login', formData)
      message.success(`${JSON.stringify(data)}`)
      
    } catch (error) {
      message.error(JSON.stringify(error.message))
      console.log(error)
    }

    setFormData(initialData)
  }

  return (
    <div className='login'>
      <h1 className='title'>Welcome Back</h1>
      <p>Subtitle text goes here</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='Email Address*'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='password'
          placeholder='Password*'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          
        />

        <Button type='primary' htmlType='submit' id='btn-log-in'>
          Login
        </Button>
        <div className='bottom'>
          <label>
            <input type='checkbox' className='checkbox' />
            &nbsp; Remember Password
          </label>
          <a href='#'>Forgot Password?</a>
        </div>
      </form>
    </div>
  )
}

export default Login
