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

            let i = state.products.findIndex(prod => prod._id === product._id && prod.color === product.color && prod.size === product.size)
            if(i >= 0){
                state.products[i].quantity += product.quantity
                state.products[i].total += product.total
            }
            else{
                state.products.push(product)
            }
            state.quantity += product.quantity
            state.total += product.total
        }
    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer