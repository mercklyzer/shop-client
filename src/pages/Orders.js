import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Order from "../components/Order"
import { useUser } from "../hooks/useUser"
import { getOrders } from "../apiCalls/order.apiCall"

const Orders = props => {
    const [user, token, role] = useUser()
    const [isLoading ,setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(async () => {
        const fetchedOrders = await getOrders(user._id, token, setIsLoading)
        console.log(fetchedOrders);
        setOrders(fetchedOrders)
    }, [])

    const cart = useSelector(state => state.cart)

    return (
        <div className="section w-full">
            <div className="text-3xl font-light my-4">YOUR ORDERS</div>

            <select className="mb-4 bg-zinc-100 py-1 px-2 rounded-lg">
                <option>All</option>
                <option>Completed</option>
                <option>Pending</option>
            </select>

            {!isLoading && orders.map((order, i) => (
                <Order data={order} key={i}/>
            ))}



        </div>
    )
}

export default Orders