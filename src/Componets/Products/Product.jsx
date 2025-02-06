import React from 'react'
import './Product.css'
import allproducts from '../../Data/Product'


function Products() {
  return (
    <div className='p-3 p-md-5 container-fluid'>
        <div className='d-flex align-items-center justify-content-between'>
            <h1 className="fs-4">FEATURED PRODUCTS</h1>
            <a href="" className='fs-5 text-danger nav-link'>View more <i class="bi bi-chevron-right"></i></a>
        </div>
        <hr />
        <br />
        <div className="row bg-light">
            {
                allproducts.map((item, index)=>(
                    <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                        <div className="product-card bg-white card">
                          <div className="card-header">
                          <img src={item.productImage} alt="" className="w-100" />
                          </div>
                          <div className="card-body">
                          <p className="fs-6 fw-bold">{item.productName}</p>
                          <p className="fs-5 fw-bold text-danger">{item.price}</p>
                          <a href="" className='btn btn-outline-dark w-100'>View Details <i class="bi bi-chevron-right"></i></a>
                          </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products