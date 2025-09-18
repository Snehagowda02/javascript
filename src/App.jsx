import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import { Todos } from './Components/Todos'

function App() { 
  return (
    <>
    <div className='className="min-h-screen bg-gray-100 flex flex-col items-center py-10'>
    <h1 className="text-3xl font-bold text-gray-800 mb-6"> Todos</h1>
   <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <AddTodo />
        <Todos />
      </div>
    </div>  
    </>
  )
}

export default App
