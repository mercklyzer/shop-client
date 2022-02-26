import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        errorMessage: ''
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload
            state.isFetching = false
        },
        loginFailure: (state, action) => {
            state.isFetching = false
            state.error = true
            state.errorMessage = action.payload.error
        }
    }
})

export const {loginStart, loginSuccess, loginFailure} = userSlice.actions
export default userSlice.reducer