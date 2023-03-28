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
        },
        updateTodo: (state, action) => {
            let temp = []
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id !== action.payload.id) {
                    temp.push(state.todos[i])
                } else {
                    temp.push(action.payload)
                }
            }
            return {
                ...state,
                todos: temp
            }
        }
    }


})

export const {
    addTodo,
    deleteTodo,
    updateTodo
} = todoSlice.actions


export default todoSlice.reducer