import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const loginHandler = async()=>{
    try {
      const response = await fetch("http://localhost:6900/login",{
        method: 'GET',
    // mode: 'same-origin',
    redirect: 'follow',
    credentials: 'include', // Don't forget to specify this if you need cookies
    // headers: headers,
      })
      const jsondata = await response.json()
      console.log(jsondata)
    } catch (error) {
      console.log(error)
    }
  }

  const logoutHandler = async()=>{
    try {
      const response = await fetch("http://localhost:6900/logout", {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });
      const jsondata = await response.json()
      console.log(jsondata)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
     Hello mike

     <button onClick={loginHandler}>Login</button>
     <button onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default App
