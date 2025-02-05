import axios from 'axios'
import React, { useState } from 'react'

function Home() {

  const data = {
    "featured_products": [
      {
        "id": 101,
        "name": "Smartwatch Pro",
        "price": 199.99,
        "discount_price": 149.99,
        "image": "https://m.media-amazon.com/images/I/51LdPqkM+5L._AC_UF1000,1000_QL80_.jpg",
        "rating": 4.5
      },
      {
        "id": 102,
        "name": "Wireless Earbuds",
        "price": 99.99,
        "discount_price": 79.99,
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669",
        "rating": 4.7
      },
      {
        "id": 103,
        "name": "Leather Jacket",
        "price": 249.99,
        "discount_price": 199.99,
        "image": "https://www.voganow.com/cdn/shop/files/BBGJ-1108-014_2_copy.jpg?v=1702101740&width=360",
        "rating": 4.6
      },
      {
        "id": 104,
        "name": "Bluetooth Speaker",
        "price": 49.99,
        "discount_price": 39.99,
        "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/1/1/v/m13vp-portable-bluetooth-speaker-dynamic-thunder-sound-built-in-original-imah4rm9sjqryyq9.jpeg?q=90&crop=false",
        "rating": 4.3
      },
      {
        "id": 105,
        "name": "Gaming Mouse",
        "price": 59.99,
        "discount_price": 49.99,
        "image": "https://m.media-amazon.com/images/I/61MJXznbAhS._AC_UF1000,1000_QL80_.jpg",
        "rating": 4.8
      },
      {
        "id": 106,
        "name": "Fitness Tracker",
        "price": 79.99,
        "discount_price": 69.99,
        "image": "https://pyxis.nymag.com/v1/imgs/921/c0c/d56eeaa21522d8918ee1cedde9dea91293.rsquare.w600.jpg",
        "rating": 4.4
      },
      {
        "id": 107,
        "name": "Smartphone Case",
        "price": 19.99,
        "discount_price": 14.99,
        "image": "https://cdn.shopify.com/s/files/1/0070/7032/files/colorfulbumper.png?v=1718824596",
        "rating": 4.2
      },
      {
        "id": 108,
        "name": "4K TV",
        "price": 799.99,
        "discount_price": 649.99,
        "image": "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/de0d3686-4766-11ee-8cfb-8ee861fd9236.jpg",
        "rating": 4.7
      },
      {
        "id": 109,
        "name": "Wireless Charger",
        "price": 29.99,
        "discount_price": 24.99,
        "image": "https://m.media-amazon.com/images/I/71O59aVg-cL.jpg",
        "rating": 4.5
      },
      {
        "id": 110,
        "name": "Electric Toothbrush",
        "price": 99.99,
        "discount_price": 89.99,
        "image": "https://minikin.in/cdn/shop/products/IMG_5317_cleanup_cleanup.png?v=1681988388&width=2048",
        "rating": 4.3
      },
      {
        "id": 111,
        "name": "Laptop Sleeve",
        "price": 39.99,
        "discount_price": 29.99,
        "image": "https://m.media-amazon.com/images/I/71HJbiQvX-L._AC_UF1000,1000_QL80_.jpg",
        "rating": 4.4
      },
      {
        "id": 112,
        "name": "Noise-Cancelling Headphones",
        "price": 129.99,
        "discount_price": 99.99,
        "image": "https://cdn.mos.cms.futurecdn.net/ThiXKkp4sA5QGWVKDWyt6g.jpg",
        "rating": 4.6
      },
      {
        "id": 113,
        "name": "Portable Power Bank",
        "price": 39.99,
        "discount_price": 29.99,
        "image": "https://www.corseca.in/cdn/shop/files/Versatile-Output-ports-1.jpg?v=1710326990",
        "rating": 4.5
      },
      {
        "id": 114,
        "name": "Smart Home Assistant",
        "price": 119.99,
        "discount_price": 99.99,
        "image": "https://www.home-assistant.io/images/blue/blue_hero.jpg",
        "rating": 4.7
      },
      {
        "id": 115,
        "name": "Gaming Headset",
        "price": 89.99,
        "discount_price": 69.99,
        "image": "https://images-cdn.ubuy.co.in/633aec3932fb2b697f1d028e-gaming-headset-ps5-ps4-headset-with-7-1.jpg",
        "rating": 4.4
      },
      {
        "id": 116,
        "name": "Wireless Keyboard",
        "price": 49.99,
        "discount_price": 39.99,
        "image": "https://m.media-amazon.com/images/I/71cVceZqnmL.jpg",
        "rating": 4.2
      },
      {
        "id": 117,
        "name": "Smart Lock",
        "price": 149.99,
        "discount_price": 129.99,
        "image": "https://images-cdn.ubuy.ae/6586d2a4600e850dd36932e4-smart-lock-smonet-keyless-entry-with.jpg",
        "rating": 4.8
      },
      {
        "id": 118,
        "name": "LED Desk Lamp",
        "price": 29.99,
        "discount_price": 19.99,
        "image": "https://m.media-amazon.com/images/I/61QPRxJk3dL.jpg",
        "rating": 4.6
      },
      {
        "id": 119,
        "name": "Electric Kettle",
        "price": 59.99,
        "discount_price": 49.99,
        "image": "https://m.media-amazon.com/images/I/51Q11RNy8dL._AC_UF894,1000_QL80_.jpg",
        "rating": 4.3
      },
      {
        "id": 120,
        "name": "Coffee Maker",
        "price": 89.99,
        "discount_price": 79.99,
        "image": "https://images.philips.com/is/image/philipsconsumer/vrs_a6f229ac53eb2ad8dcf9e281050310d76783fec6?wid=700&hei=700&$pnglarge$",
        "rating": 4.7
      },

      {
        "id": 121,
        "name": "Electric Grill",
        "price": 139.99,
        "discount_price": 119.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQANyhgtx_kiowixhhmri-EpBE_pPZRVHjdQ&s",
        "rating": 4.6
      },
      {
        "id": 122,
        "name": "Cordless Vacuum Cleaner",
        "price": 179.99,
        "discount_price": 149.99,
        "image": "https://www.toolworld.in/storage/media/product/1648043738.jpg",
        "rating": 4.8
      },
      {
        "id": 123,
        "name": "Home Projector",
        "price": 499.99,
        "discount_price": 399.99,
        "image": "https://audiomaxx.in/cdn/shop/files/LS12000B_1.jpg?v=1734076613",
        "rating": 4.7
      },
      {
        "id": 124,
        "name": "Robotic Lawn Mower",
        "price": 599.99,
        "discount_price": 499.99,
        "image": "https://cdn.thewirecutter.com/wp-content/media/2023/06/roboticmowers-2048px-0036-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
        "rating": 4.6
      }
      // Add additional products if needed...
    ]
  }
  

  
  return (
    <div className="container  ">
    <div className="row d-flex justify-content-between align-items-stretch">
      {data.featured_products.map((item, index) => (
        <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3 mt-3" >
          <div className="card p-3 d-flex flex-column h-100 " style={{ border: '1px solid green' }}>
            <h2>{item.name}</h2>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Discount Price:</strong> ${item.discount_price}</p>
            <img src={item.image} alt={item.name} className="w-75 mb-2 rounded"  />
            <p><strong>Rating:</strong> {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}


export default Home