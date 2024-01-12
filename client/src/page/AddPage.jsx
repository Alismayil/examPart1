import React, { useState } from 'react'
import axios from 'axios'

function AddPage() {

  const [name, setName] = useState([])
  const [price, setPrice] = useState([])
  const [image, setImage] = useState([])
  const [type, setType] = useState([])

  async function axiosAdd() {
    await axios.post("http://localhost:3000/product", {
      name: name,
      price: price,
      image: image,
      type: type
    })
  }
  return (
    <div style={{ height: '70vh' }}>
      <form action="" style={{ display: 'flex', flexDirection: "column" }}>
        <input onChange={(e) => setName(e.target.value)} type="text" style={{ width: "200px" }} placeholder='Name' />
        <input onChange={(e) => setImage(e.target.value)} type="text" style={{ width: "200px" }} placeholder='Image' />
        <input onChange={(e) => setType(e.target.value)} type="text" style={{ width: "200px" }} placeholder='Type' />
        <input onChange={(e) => setPrice(e.target.value)} type="text" style={{ width: "200px" }} placeholder='Price' />
        <button style={{ width: "200px" }} onClick={axiosAdd}>Add</button>
      </form>
    </div>
  )
}

export default AddPage