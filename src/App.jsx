import React from 'react'
import { useState } from 'react'


function App() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const [sumbit, setSubmit] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNamehange = (e) => {
    e.preventDefault();
    setData((values) => ({
      ...values,
      firstName: e.target.value
    }))
    }

  const handleLastNamehange = (e) => {
  e.preventDefault();
  setData((values) => ({
     ...values,
     lastName: e.target.value
  }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.firstName && data.firstName.length > 6 ){
      setValid(true)
    }
    setSubmit(true)
  } 
  
  const handleKeypress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSubmit
    }
  }

  const handleEmailNamehange = (e) => {
    e.preventDefault();
    setData((values) => ({
       ...values,
       email: e.target.value
    }))
    }  

  return (
    <form className='register-form' onSubmit={handleSubmit}>
    <div className='inputbox'>
      <h3 className='header'>REGISTER FORM</h3>
      {valid && sumbit && <div className='success-message'>Success! Thank you for registering!</div>}
      <input
      className='input'
      onChange={handleFirstNamehange}
      id='first-name' 
      type="text" 
      placeholder='Enter your name here...'
      value={data.firstName} 
      />
      {sumbit && !data.firstName && <span className='spans' id="first-name-error">Please enter your first name</span>}
      <input
      className='input'
      onChange={handleLastNamehange}
      id='last-name' 
      type="text" 
      placeholder='Enter your last name here...'
      value={data.lastName}
      />
      {sumbit && !data.lastName && <span className='spans' id="last-name-error">Please enter your last name</span>}
      <input
      className='input'
      onChange={handleEmailNamehange}
      id='email' 
      type="text" 
      placeholder='Enter your e-mail here...'
      value={data.email}
      />
      {sumbit && !data.email && <span className='spans' id="email-error">Please enter your email</span>}
      <button onKeyDown={handleKeypress} className='btn'>Register</button>
      
    </div>
    </form>
    )
  
  }



export default App
