import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        token: null,
        isFetchingLogin: false,
        errorLogin: false,
        errorMessageLogin: '',
        isFetchingSignup: false,
        errorSignup: false,
        errorMessageSignup: ''
    },
    reducers: {
        loginStart: (state) => {
            state.isFetchingLogin = true
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload.user
            state.token = action.payload.token
            state.isFetchingLogin = false
        },
        loginFailure: (state, action) => {
            state.isFetchingLogin = false
            state.errorLogin = true
            state.errorMessageLogin = action.payload.error
        },

        signupStart: (state) => {
            state.isFetchingSignup = true
        },
        signupSuccess: (state, action) => {
            state.currentUser = action.payload.user
            state.token = action.payload.token
            state.isFetchingSignup = false
        },
        signupFailure: (state, action) => {
            state.isFetchingSignup = false
            state.errorSignup = true
            state.errorMessageSignup = action.payload.error
        },

        

    }
})

export const {loginStart, loginSuccess, loginFailure, signupStart, signupSuccess, signupFailure} = userSlice.actions
export default userSlice.reducer