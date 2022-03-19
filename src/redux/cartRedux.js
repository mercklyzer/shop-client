import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let product = {...action.payload.product, quantity: action.payload.quantity, total: action.payload.total}

            let i = state.products.findIndex(prod => prod._id === product._id)
            if(i >= 0){
                state.products[i].quantity += product.quantity
                state.products[i].total += product.total
            }
            else{
                state.products.push(product)
            }
            state.quantity += product.quantity
            state.total += product.total
        },

        changeQuantity: (state, action) => {
            let product = {id: action.payload.id, quantity: action.payload.quantity, total: action.payload.total}
            console.log(product);
            let i = state.products.findIndex(prod => prod._id === product.id)
            if(i >= 0){
                state.quantity -= state.products[i].quantity 
                state.total -= state.products[i].total 

                state.quantity += product.quantity
                state.total += product.total 
                
                state.products[i].quantity = product.quantity
                state.products[i].total = product.total
            }
        },

        deleteProduct: (state, action) => {
            let id = action.payload.id

            let i = state.products.findIndex(prod => prod._id === id)
            if(i >= 0){
                state.quantity -= state.products[i].quantity
                state.total -= state.products[i].total
                state.products.splice(i, 1)
            }

        },

        increaseQuantity: (state, action) => {
            let id = action.payload.id

            let i = state.products.findIndex(prod => prod._id === id)
            if(i >= 0){
                state.products[i].quantity += 1
                state.products[i].total += state.products[i].price
                state.quantity += 1
                state.total += state.products[i].price
            }
        },

        decreaseQuantity: (state, action) => {
            let id = action.payload.id

            let i = state.products.findIndex(prod => prod._id === id)
            if(i >= 0){
                state.products[i].quantity -= 1
                state.products[i].total -= state.products[i].price
                state.quantity -= 1
                state.total -= state.products[i].price
            }
        },

        resetCart: () => initialState
    }
})

export const {addProduct, deleteProduct, increaseQuantity, decreaseQuantity, changeQuantity, resetCart} = cartSlice.actions
export default cartSlice.reducer