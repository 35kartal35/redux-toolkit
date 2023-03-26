import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState: initialState,
    reducers: {
        increase: (state, action) => {
            state.counter += 1
        },
        decrease: function (state, action) {
            state.counter -= 1
        },
        setCounter: (state, action) => {
            console.log(state, action)
            state.counter = action.payload
        },
        fiveIncrease: (state, action) => {
            state.counter += 5
        },
        fiveDecrease: function (state, action) {
            state.counter -= 5
        }
    }
})

export const { decrease, increase, setCounter, fiveIncrease, fiveDecrease } = counterSlice.actions

export default counterSlice.reducer