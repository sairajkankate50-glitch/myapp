import App from "../App"

function Form({form,setform,addproduct}){

    return(
        <div className = "box">
  <input type="name" 
  value={form.name} 
  placeholder="enter name"
   onChange={(e)=>setform({...form,name:e.target.value})}/>

    <input type="price"
    value={form.price}
    placeholder="enter price" 
    onChange={(e)=>setform({...form,price:e.target.value})}
/>
<input type="Image URL" 
value={form.image}
 onChange={(e)=>setform({...form,image:e.target.value})}/>
  <input placeholder="Category" value={form.category}
        onChange={(e)=>setform({...form,category:e.target.value})} />
        <button onClick={addproduct}>add product</button>
        toast.success("Product Added!");
</div>


    )
}
export default Form