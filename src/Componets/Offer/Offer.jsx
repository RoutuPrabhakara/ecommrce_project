import React from 'react'
import './Offer.css'
import OfferData from '../../Data/Offer'


function Offer() {
  return (
    <section className="container-fluid p-3 p-md-5 bg-light">
        <h1 className="fs-2 text-center"><span className="text-danger">EXTRA 30% OFF</span> SALE AT OUTFIT COMBOS</h1>
        <br />
        <div className="row">
            {
                OfferData.map((item, index)=>(
                    <div className="col-12 col-sm-6 col-md-3 mb-4"  key={index}>
                        <div className="bg-dark offer-card">
                            <img src={item.image} alt="" className="w-100" />
                            <button className='offer-btn'>{item.name}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Offer