import React, {useState, useEffect, useRef} from "react";
import { getNewProducts } from "../apiCalls/product.apiCall";
import { useUser } from "../hooks/useUser";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import LatestArrivalPlaceHolder from "./LatestArrivalPlaceHolder";
import { useNavigate } from "react-router-dom";

const LatestArrivals = ({shopNow, setShopNow}) => {
    const arrivalsRef = useRef(null)
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [user, token, role] = useUser()

    useEffect(() => {
        if(shopNow){
            arrivalsRef.current.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
            setShopNow(false)
        }
    }, [shopNow, setShopNow])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const [data, err] = await getNewProducts()
            if(data){
                console.log(data);
                setProducts(data)
            }
            if(err){
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData(token)
    }, [])


    return (
        <div className="py-16" ref={arrivalsRef}>
            <div className="section-header">Latest Arrivals</div>
            <ReactPlaceholder type='rect' rows={3} ready={!isLoading} customPlaceholder={<LatestArrivalPlaceHolder />}>

                <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-12 mb-24">

                    {products && products.map(({_id, displayImg, title}, i) => <div className="cursor-pointer" onClick={() => navigate(`/product/${_id}`)} key={i}>
                        <img className="mb-2 object-cover minh-48 w-auto h-full" src={displayImg} />
                        <div className="text-md text-zinc-700 font-medium">{title}</div>
                    </div>)}

                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default LatestArrivals