import App from "../App"
function ProductList({product,deleteproduct}){

    return(
 <div className = "boxcontainer">
        {product.map(p =>(
          <div  className = "card"key={p._id}>
            <img
  src={p.image || "https://via.placeholder.com/100"}
  width="100"
  alt={p.name}
/>
             <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>
          <button onClick={() => deleteproduct(p._id)}>Delete</button>
          </div>
        ))}
 </div>



    )
 

}
export default ProductList