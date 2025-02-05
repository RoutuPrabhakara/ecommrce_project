import React from 'react'
import './Style.css'

function Feature() {

  const Feature=
    {
      "featuredProducts": [
        {
          "id": 1,
          "name": "Wireless Headphones",
          "price": 99.99,
          "image": "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?t=st=1738775380~exp=1738778980~hmac=6e4c695c942b200f7aeae6135acc0560706ecbd3f5a2946e358e6d30f77d5ec8&w=740",
          "category": "Electronics",
          "rating": 4.5,
          "discount": 10,
          "isFeatured": true,
          "stock": 50
        },
        {
          "id": 2,
          "name": "Smartwatch Pro",
          "price": 199.99,
          "image": "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1738775414~exp=1738779014~hmac=adc642c4dc0be7f9a2a9981c2e0a74fe8ccf68bfbc207c8494833d1da37c2250&w=740",
          "category": "Wearables",
          "rating": 4.8,
          "discount": 15,
          "isFeatured": true,
          "stock": 30
        },
        {
          "id": 3,
          "name": "Gaming Laptop",
          "price": 1299.99,
          "image": "https://img.freepik.com/premium-photo/laptop-with-bright-screen-backlit-keyboard-it-is-sitting-wooden-table-background-is-blurred_14117-417851.jpg?w=826",
          "category": "Computers",
          "rating": 4.7,
          "discount": 5,
          "isFeatured": true,
          "stock": 20
        },
        {
          "id": 4,
          "name": "4K LED Smart TV",
          "price": 499.99,
          "image": "https://img.freepik.com/premium-photo/4k-monitor-isolated-white-tv-with-nature-view_1046390-35952.jpg?w=740",
          "category": "Home Appliances",
          "rating": 4.6,
          "discount": 12,
          "isFeatured": true,
          "stock": 25
        },
        {
          "id": 5,
          "name": "Bluetooth Speaker",
          "price": 59.99,
          "image": "https://img.freepik.com/free-psd/two-modern-white-black-speakers-stereo-sound-system_84443-42370.jpg?t=st=1738775533~exp=1738779133~hmac=bf4b5bb0d71e6e6a9bdb83a3e3c42427e767e11e6e91013f1952e3f9419cbfb3&w=740",
          "category": "Audio",
          "rating": 4.4,
          "discount": 20,
          "isFeatured": true,
          "stock": 100
        },
        {
          "id": 6,
          "name": "Fitness Tracker",
          "price": 79.99,
          "image": "https://img.freepik.com/free-vector/smartwatch-concept-illustration_114360-4306.jpg?t=st=1738775572~exp=1738779172~hmac=a2160133c5e8fa2b9b82103af52923dd6ac69c551f98864c3a2729278236018a&w=740",
          "category": "Wearables",
          "rating": 4.3,
          "discount": 10,
          "isFeatured": true,
          "stock": 75
        },
        {
          "id": 7,
          "name": "Cordless Vacuum Cleaner",
          "price": 149.99,
          "image": "https://img.freepik.com/free-vector/set-realistic-vacuum-cleaners-various-types_1284-32867.jpg?t=st=1738775617~exp=1738779217~hmac=e81e995c3209928b635950958f07978fa0a02d6c88ab5d94b2326ef397e49597&w=740",
          "category": "Home Appliances",
          "rating": 4.5,
          "discount": 8,
          "isFeatured": true,
          "stock": 40
        },
        {
          "id": 8,
          "name": "Ergonomic Office Chair",
          "price": 299.99,
          "image": "https://img.freepik.com/free-photo/home-appliance-seat-interior-ergonomic-sign_1172-512.jpg?t=st=1738775653~exp=1738779253~hmac=28fe16f1410e182bd02a6d0efd07f5b9a656af07bcd40dcf81e8bed4fc9a1448&w=360",
          "category": "Furniture",
          "rating": 4.9,
          "discount": 10,
          "isFeatured": true,
          "stock": 15
        },
        {
          "id": 9,
          "name": "Mechanical Keyboard",
          "price": 89.99,
          "image": "https://img.freepik.com/free-photo/cool-different-types-buttons_23-2150170574.jpg?t=st=1738775689~exp=1738779289~hmac=76bd1d6771850b7750ed835564d73e8ba267fc79bf0bb6ddb7022a2cbf291048&w=740",
          "category": "Accessories",
          "rating": 4.7,
          "discount": 5,
          "isFeatured": true,
          "stock": 60
        },
        {
          "id": 10,
          "name": "Noise Cancelling Earbuds",
          "price": 129.99,
          "image": "https://img.freepik.com/free-vector/hearing-hygiene-isometric-composition-with-cotton-buds-earplugs-earphones-girl-with-megaphone-screaming-her-girlfriend-vector-illustration_1284-83526.jpg?t=st=1738775719~exp=1738779319~hmac=0c34d7bd6661aa568a0d54f0524e1675e90ec5e821c37845000c377d1d6c26b2&w=740",
          "category": "Audio",
          "rating": 4.8,
          "discount": 15,
          "isFeatured": true,
          "stock": 35
        },
        {
          "id": 11,
          "name": "Smartphone X",
          "price": 799.99,
          "image": "https://img.freepik.com/free-photo/close-up-mobile-phone-with-vertical-green-screen-used-modern-technology-blank-copy-space-with-mockup-template-woman-holding-device-with-isolated-background-chroma-key_482257-28052.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
          "category": "Electronics",
          "rating": 4.7,
          "discount": 10,
          "isFeatured": true,
          "stock": 45
        },
        {
          "id": 12,
          "name": "Gaming Mouse",
          "price": 49.99,
          "image": "https://img.freepik.com/free-psd/wireless-computer-gaming-mouse-icon-isolated-3d-render-illustration_439185-12646.jpg?t=st=1738775786~exp=1738779386~hmac=f1f47cc6844d9d3a1e899abf527586db9b5d2aa7f8329f1b2785f4b66a576636&w=740",
          "category": "Accessories",
          "rating": 4.5,
          "discount": 5,
          "isFeatured": true,
          "stock": 70
        },
        {
          "id": 13,
          "name": "Portable Power Bank",
          "price": 39.99,
          "image": "https://img.freepik.com/free-vector/hand-drawn-flat-design-hard-drive-illustration_23-2149363191.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
          "category": "Accessories",
          "rating": 4.6,
          "discount": 12,
          "isFeatured": true,
          "stock": 120
        },
        {
          "id": 14,
          "name": "Home Security Camera",
          "price": 149.99,
          "image": "https://img.freepik.com/free-vector/video-security-concept_98292-6504.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
          "category": "Home Appliances",
          "rating": 4.8,
          "discount": 10,
          "isFeatured": true,
          "stock": 25
        },
        {
          "id": 15,
          "name": "Air Fryer",
          "price": 129.99,
          "image": "https://img.freepik.com/free-photo/view-modern-hot-air-fryer-with-cooked-food_23-2151737131.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
          "category": "Kitchen Appliances",
          "rating": 4.7,
          "discount": 15,
          "isFeatured": true,
          "stock": 35
        }
      ]
    }
    
  
  return (
    <div className="container">
    <div className="row">
      {Feature.featuredProducts.map((item, index) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4">
          <div className="card shadow-lg border-0 p-3 h-100 d-flex flex-column">
            <img
              src={item.image}
              className="card-img-top rounded"
              alt={item.name}
              style={{ height: "200px", objectFit: "cover" }} // Makes all images same height
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{item.name}</h5>
              <p className="text-muted">{item.category}</p>
              <p className="fw-bold text-primary">${item.price.toFixed(2)}</p>
              <p className="text-success">Discount: {item.discount}%</p>
              <p className="text-warning">⭐ {item.rating}</p>
              <button className="btn btn-primary w-100 mt-auto">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Feature