
import {useEffect,useState} from "react"
import {FaSignInAlt} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {
 const navigate=useNavigate()
const navigateRegister=()=>{
   navigate("/register")
}

   const [formData,setFormData]=useState({
      name:"",
      email:"",
      password:"",
      password2:""
   })

   const inputChage=(e)=>{
      console.log(e.target.value);
   // setFormData({...formData,[e.target.name]:e.target.value})
   setFormData((prev)=>({
      ...prev,[e.target.name]:e.target.value
   }))   
   }

   const clickSubmit=(e)=>{
      e.preventDefault()

   }

  return (
<div>
<section className="heading">
      <h1>{<FaSignInAlt/>}Login</h1>
      <p style={{fontFamily:"cursive",fontSize:"20px",color:"blue"}}onClick={navigateRegister}>create a new account.?<h6 style={{textDecorationLine:"underline",color:"black"}}>register</h6></p>
       {/* <p><Link to="/register">register</Link></p> */}
   </section>
   <section className="form">
      <form onSubmit={clickSubmit}>
        
         <div className="form-group">
          <input className="form-control" id="email" type="email" value={formData.email} name="email" placeholder="Enter your email" onChange={inputChage}/>
         </div>
         <div className="form-group">
          <input className="form-control" id="password" type="password" value={formData.password} name="password" placeholder="Enter your password" onChange={inputChage}/>
         </div>
         

         <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
         </div>
      </form>
   </section>
</div>
  )
}

export default Login
