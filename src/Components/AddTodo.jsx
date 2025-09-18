import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../feature/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addtodo(input))
        //dispatch , inside that reducer call and pass the input valued
        setInput('')
    }
  return (
   <form onSubmit={addTodoHandler}  className="flex gap-2 mb-4">
    <input type='text' placeholder='Enter a todo'   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
    value={input} onChange={(e) => setInput(e.target.value)}/>
    <button type='submit'  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
    Add todo
    </button>
   </form>
  )
}

export default AddTodo