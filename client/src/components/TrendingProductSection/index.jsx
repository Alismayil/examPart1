import React, { useEffect, useState } from 'react'
import './TrendingProductSection.scss'
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import axios from 'axios'
function TrendingProductSection() {
    const [cart, setCart] = useState([])

    async function AxiosCart() {
        const res=await axios.get("http://localhost:3000/product")
        setCart(res.data)
    }

    useEffect(() => {
        AxiosCart()
    }, [])
    
  return (
    <section id='TrendingProductSection'>
<div className="bestSellersSectionUpBox">
        <p>Popular Item in the market</p>
        <h1>Trending  <p>Product</p></h1>
      </div>
      <div className="bestSellersSectionDownBox">
        {
            cart && cart.map((item)=>(
<div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>
                    <img src={item.image} alt="Test" />
                </div>
                <div className="bestSellerTextBox">
                    <p>{item.type}</p>
                    <h1>{item.name}</h1>
                    <p>${item.price}</p>
                </div>
            </div>
            ))
        }
            
        </div>
    </section>
  )
}

export default TrendingProductSection