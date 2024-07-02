import { createSlice } from "@reduxjs/toolkit"



export const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        definirContador: (state, action) => {
            state.count = action.payload
        },

        incrementarContador: (state) => {
            state.count += 1
        },

        reduzirContador: (state) => {
            state.count -= 1
        }
    }

})

export const { definirContador, incrementarContador, reduzirContador } = counter.actions;

export default counter.reducer;