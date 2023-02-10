import { React, useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const addProduct = () => {
    console.warn({ name, price, category, company });
  }

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type="text" placeholder='Enter Product Name' className='inputBox'
        onChange={(e) => { setName(e.target.value) }} value={name}
      />
      <input type="text" placeholder='Enter Product Price' className='inputBox'
        onChange={(e) => { setPrice(e.target.value) }} value={price} />
      <input type="text" placeholder='Enter Product Category' className='inputBox'
        onChange={(e) => { setCategory(e.target.value) }} value={category}
      />
      <input type="text" placeholder='Enter Product Company' className='inputBox'
        onChange={(e) => { setCompany(e.target.value) }} value={company}
      />
      <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>
  );
};

export default AddProduct;