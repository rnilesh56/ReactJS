import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        // Prevent the page from refreshing
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <h2 className='bg-slate-500 p-2.5 rounded-md m-3'>Login</h2>
      <input 
      className='bg-slate-500 p-2.5 rounded-md m-2'
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Username'
      />
      {" "}
      <input 
      className='bg-slate-500 p-2.5 m-2 rounded-md'
      type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'
      />
      {" "}
      <button
      className='m-2'
      onClick={handleSubmit}
      >Submit</button>
    </div>
  )
}

export default Login
