import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// if i delete here , it is like action , 
// if i do some action-- need to dispatch it

import { removeTodo } from '../feature/todo/todoSlice'

export const Todos = () => {
    // todos is from initial state
    //state.todos.push also we used
    const  dos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
    console.log("Redux state:", dos)

  return (
    
    
    <>
    <div>Todos</div>
    {dos.map((todo) => (
        <li key = {todo.id}  className="flex justify-between items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >      <span className="text-gray-700">{todo.text}</span>
        {/*  if I give like onClick= dipatch() --
         this will execute immediately, 
         but I just have to give reference instead of calling immediately */}
        <button onClick={()=> dispatch(removeTodo(todo.id))}  className="text-red-500 hover:text-red-700 font-medium">X</button></li>
        
    ))}

    </>
  )
}
