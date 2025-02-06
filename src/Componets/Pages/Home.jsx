import React from 'react'
import Categories from '../Categories/Categories'
import Offer from '../Offer/Offer'
import Product from '../Products/Product'
import Banner from '../Banner/Banner'

function Home() {
  return (
    <div>
    <Banner/>
    <Categories/>
    <Offer/>
    <Product/>
    </div>
  )
}

export default Home