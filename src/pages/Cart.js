import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct"
import OrderSummary from "../components/OrderSummary"


const Cart = props => {
    const cart = useSelector(state => state.cart)

    return (
        <div className="section w-full">
            <div className="text-3xl font-light my-4">YOUR CART</div>

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/4">     
                {
                    cart.products.map(({id, title, description, category, displayImage, price, quantity, total}, i) => (
                        <CartProduct key={i} id={id} title={title} category={category} description={description} image={displayImage} price={price} quantity={quantity} total={total}/>
                    ))
                }               
                </div>

                <div className="lg:w-1/4">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default Cart