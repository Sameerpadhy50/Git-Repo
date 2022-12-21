import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Components/Counter'
import { TodoApp } from './Components/TodoApp'
import { QuotesApp } from './Components/QuotesApp'
import { Login } from './Components/Login'

function App() {
  

  return (
    <div>
       {/* <Counter/> */}
     {/* <TodoApp/> */}
    
     <QuotesApp/>
     <Login/>
    </div>
  )
}

export default App
