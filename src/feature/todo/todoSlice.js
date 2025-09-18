import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique id

const initialState = {
    todos: [{id: 1, text: "jhkj"}]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // state = current state of 
        // action = to take values
        // property
        addtodo: (state, action) => {
            // here we'll create exactly same what we gave in initial state\
            // todo is an object having id and text in it 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            //pushing above object to initial state object
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
            // bring all the values, which does not match id I wanted to remove

        }
        //if update take id from action.payload change the text and set it back to state
    }
})

// need to export funcitons

export const {addtodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer