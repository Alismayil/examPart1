import React from 'react'
import ShopIsFunSection from '../components/ShopIsFunSection'
import WinterSaleSection from '../components/WinterSaleSection'
import LatestNewsSection from '../components/latestNewsSection'
import BestSellersSection from '../components/BestSellersSection'
import TrendingProductSection from '../components/TrendingProductSection'
import helmet from "helmet";


function HomePage() {
  return (
    <>
    <ShopIsFunSection/>
    <TrendingProductSection/>
    <WinterSaleSection/>
    <BestSellersSection/>
    <LatestNewsSection/>
    </>

    
  )
}

export default HomePage