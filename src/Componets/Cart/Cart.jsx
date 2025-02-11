import React, { useEffect, useState } from 'react'
import './cart.css'

function Cart() {
    const [allCartData, setAllCartData] = useState([]);
    useEffect(()=>{
        setAllCartData(JSON.parse(localStorage.getItem('cartdata')) || []);   
    })

    const deleteCartItem = (currentIndex) =>{
        setAllCartData(allCartData.splice(currentIndex, 1)); //(indexposition, how_many_elements_need_to_remove)
        localStorage.setItem('cartdata', JSON.stringify(allCartData))
    }
   // ['a', 'b', 'c', 'd'] => Array.splice(2, 1)
  return (
    <div className='p-3 p-md-5 container-fluid'>
        <div className="row">
            {
                allCartData.length == 0?(
                    <div className="col-md-5 m-auto">
                        <div className="text-center">
                            <img src="https://img.freepik.com/free-vector/analysis-concept-illustration_114360-1119.jpg?t=st=1738744253~exp=1738747853~hmac=c7290e860030ce00c26ae07f9df460ee48c96fa8e9d03329400695b78f71f587&w=740"  className='w-75' alt="" />
                            <h1 className='fs-3'>No Cart Data</h1>
                            <a href="/" className="btn btn-success">Shop Now</a>
                        </div>
                    </div>
                ):(
                    <div>
                      <div className="d-flex align-items-center justify-content-between">
                      <h1>All Cart data</h1>
                      <a href='/products' className="btn btn-dark">Shop more</a>
                      </div>
                        <hr />
                        <table>
                            <tr>
                            <th>SI.NO</th>
                            <th>Product image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                            </tr>
                            {
                                allCartData.map((item, index)=>(
                                    <tr>
                                    <td>{index+1}</td>
                                    <td><img src={item.productImage} alt={item.productName} /></td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>
                                       
                                       <div className="d-flex gap-3">
                                       <a href={`/products/Details/${item.id}`} className="btn btn-success btn-sm"><i className='bi bi-pen'></i></a>

                                       <button className="btn btn-danger btn-sm" onClick={()=>deleteCartItem(index)}><i className='bi bi-trash'></i></button>
                                       </div>
                                       </td>
                                </tr>
                                ))
                            }
                        </table>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Cart