import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [


    ]

}

export const todoSlice = createSlice({

    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('>>Add toodo reducer', state, action)
            if (!action.payload.done) {
                action.payload.done = false
            } else {
                action.payload.done = true
            }
            const maxId = state.todos.reduce((maxId, item) => item.id > maxId ? item.id : maxId, 0)

            action.payload.id = maxId + 1

            state.todos.push(action.payload)

        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        }
    }


})

export const {
    addTodo,
    deleteTodo
} = todoSlice.actions


export default todoSlice.reducer