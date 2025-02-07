import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <Carousel>
            <Carousel.Item>
                <img src="https://cs-everything-fashion.myshopify.com/cdn/shop/files/ev7-home49-slideshow1_1944x.png?v=1665452117" className='w-100' alt="Logo" />
                <Carousel.Caption>
                    <h1 className='display-5 fw-bold text-dark'>Free Delivery on <br /> Orders over $1000</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nisi?</p>
                    <button className="btn btn-danger px-5 rounded-0">Explore</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src="https://cs-everything-fashion.myshopify.com/cdn/shop/files/ev7-home49-slideshow1_1944x.png?v=1665452117" className='w-100' alt="Logo" />
                <Carousel.Caption>
                    <h1 className='display-5 fw-bold text-dark'>Free Delivery on <br /> Orders over $1000</h1>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nisi?</p> */}
                    <button className="btn btn-danger px-5 rounded-0">Explore</button>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img src="https://cs-everything-fashion.myshopify.com/cdn/shop/files/ev7-home49-slideshow1_1944x.png?v=1665452117" className='w-100' alt="Logo" />
                <Carousel.Caption>
                    <h1 className='display-5 fw-bold text-dark'>Free Delivery on <br /> Orders over $1000</h1>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nisi?</p> */}
                    <button className="btn btn-danger px-5 rounded-0">Explore</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Banner