import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
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

        deleteProduct: (state, action) => {
            let id = action.payload.id

            let i = state.products.findIndex(prod => prod.id === id)
            if(i >= 0){
                state.quantity -= state.products[i].quantity
                state.total -= state.products[i].total
                state.products.splice(i, 1)
            }

        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer