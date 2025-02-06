import React from 'react'
import allCategories from '../../Data/Categories'


function Categories() {
    console.log(allCategories)
  return (
    <div className='container-fluid p-3 p-md-5'>
        <h1 className="fs-2 text-center">SHOP BY CATEGORY</h1>
        <hr />

        <div className="row">
            {
                allCategories?.map((item, index)=>(
                    <div className="col-6 col-md-2" key={index}>
                        <div className=" p-2 text-center">
                            <img src={item.image} alt="" className="w-100" />
                            <h5 className="fs-6 fw-bold mt-2">{item.CategoryName}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories