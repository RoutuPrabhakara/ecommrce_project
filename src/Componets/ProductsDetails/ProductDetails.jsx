import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import allproducts from '../../Data/Product';


function ProductDetails() {
    const {id} = useParams();
    const [productData, setProductdata] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [cartData, setCartData] = useState([]);

    const incrementQuantity = () =>{
        setQuantity(quantity+1);
    }

    const decrementQuantity = () =>{
       if(quantity>1){
        setQuantity(quantity-1)
       }
    }
   


    useEffect(()=>{
        const findproduct = () =>{
            const result = allproducts.find((item)=>item.id == id);
            console.log(result);
            setProductdata(result)
            
        }
        findproduct(); //calling function

        //getting data from local storage and coverting into json to object again
        setCartData(JSON.parse(localStorage.getItem('cartdata')) || []);
    })

    const Carthandler = () =>{
      localStorage.setItem("cartdata", JSON.stringify([...cartData, productData])); //key and value we need to pass as a parameters
    }

    //JSON.stringify(object) => used to convert any object to json_object formate
    //JSON.parse(json_object) => used to convert any json_object to object formate
   
  return (
    <div className='container-fluid p-3 p-md-5'>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mb-3">
               <div className=" p-3">
               <img src={productData.productImage} alt="" className="w-100" style={{height:'400px', objectFit:'contain'}} />
               </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6">
              <h1 className="fs-2 fw-bold">{productData.productName}</h1>
              <div className="rating d-flex gap-2 align-items-center mt-3">
                <small>Rating 4.5</small>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning"></i>
              </div>
              <h1 className='fs-1 text-danger'>{productData.price}</h1>
              <p className="fs-6">{productData.desc}</p>
              <br />

                <label htmlFor="">Available Sizes</label>
              <div className="btn-group w-100 mt-2">
                <button className="btn btn-outline-dark rounded-0">XS</button>
                <button className="btn btn-outline-dark  rounded-0">S</button>
                <button className="btn btn-outline-dark  rounded-0">M</button>
                <button className="btn btn-outline-dark  rounded-0">Xl</button>
                <button className="btn btn-outline-dark  rounded-0">XXl</button>
              </div>

              <br />
              <br />
              <label htmlFor="">Select quantity</label>
              <br />
              <div className="btn-group mt-2">
                <button className="btn-dark btn" onClick={decrementQuantity}><i class="bi bi-dash"></i></button>
                <button className="border border-1 border-dark btn px-4">{quantity}</button>
                <button className="btn-dark btn" onClick={incrementQuantity}><i class="bi bi-plus-lg"></i></button>
              </div>
              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-dark w-100 p-3 rounded-1" onClick={Carthandler}><i class="bi bi-bag"></i> Add to cart</button>
                <button className="btn btn-danger w-100 p-3 rounded-1">Buy now <i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails