import { React, useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result = await fetch(`${BASE_URL}/products`);
    result = await result.json();
    setProducts(result);
  }

  const deleteProduct = async (id) => {
    let result = await fetch(`${BASE_URL}/product/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${BASE_URL}/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    }
    else {
      getProducts();
    }
  }

  const navigate = useNavigate();
  const handleUpdateClick = (productId) => {
    navigate("/update/" + productId);
  };

  return (
    <div className='product-list'>
      <h1> Product List</h1>
      <input type="text" placeholder='Search Product' className='search-product-box'
        onChange={searchHandle}
      />
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {

        products.length > 0 ? products.map((item, index) =>
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <button onClick={() => handleUpdateClick(item._id)}>Update</button>
            </li>
          </ul>
        )
          :
          <h1>No Result Found</h1>
      }
    </div>
  );
}

export default ProductList;