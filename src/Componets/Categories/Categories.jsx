import React from "react";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      products: [
        { id: 101, name: "Laptop", price: 1000, stock: 50 },
        { id: 102, name: "Smartphone", price: 700, stock: 100 },
      ],
    },
    {
      id: 2,
      name: "Clothing",
      products: [
        { id: 201, name: "T-Shirt", price: 20, size: ["S", "M", "L"], stock: 200 },
        { id: 202, name: "Jeans", price: 50, size: ["M", "L", "XL"], stock: 150 },
      ],
    },
    {
      id: 3,
      name: "Books",
      products: [
        { id: 301, name: "JavaScript Guide", price: 40, author: "John Doe", stock: 30 },
        { id: 302, name: "React Handbook", price: 35, author: "Jane Smith", stock: 25 },
      ],
    },
    {
      id: 4,
      name: "Furniture",
      products: [
        { id: 401, name: "Sofa", price: 500, material: "Leather", stock: 10 },
        { id: 402, name: "Dining Table", price: 300, material: "Wood", stock: 20 },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-sm-6 col-md-6 col-lg-4 mb-3 " >
            <div className="card p-3 shadow-sm">
              <h3 className="text-primary">{category.name}</h3>
              <ul className="list-unstyled">
                {category.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - <strong>${product.price}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
