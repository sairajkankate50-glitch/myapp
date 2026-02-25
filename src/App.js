import { useEffect, useState } from "react";
import API from "./api.js";
import "./App.css"
import SearchBar from "./pages/SearchBar.jsx";
import Form from "./pages/Form.jsx";
import ProductList from "./pages/ProductList.jsx";

function App() {
  const [product,setproduct] = useState([])
  const[form,setform] = useState({
     name: "",
    price: "",
    image: "",
    category: "",
  })
  const fetchproduct = async() =>{
    const res = await API.get("/products")
    setproduct(res.data)
  }
  const addproduct = async() =>{
    await API.post("/products",form)
    setform({ name: "", price: "", image: "", category: "" });
    fetchproduct()
  }
  const deleteproduct = async(id) =>{
    await API.delete(`/products/${id}`)
    fetchproduct()

  }
  const searchproduct = async(key)=>{
    const res = await API.get(`/products/search/${key}`)
    setproduct(res.data)
  }
  useEffect(() =>{
    fetchproduct()
  },[])
  return (
 <div > 
  <h2>product list</h2>
  <SearchBar searchproduct = {searchproduct}/>
  
  <Form form ={form} setform = {setform} addproduct = {addproduct}/>
        <hr />
<ProductList product={product} deleteproduct={deleteproduct}/>
 </div>
  
  )
}

export default App;
