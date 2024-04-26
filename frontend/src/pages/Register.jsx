import {useEffect,useState} from "react"
import {FaUser} from "react-icons/fa"


const Register = () => {
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
      <h1>{<FaUser/>}Register</h1>
      <p>Please create an account</p>
   </section>
   <section className="form">
      <form onSubmit={clickSubmit}>
         <div className="form-group">
          <input className="form-control" id="name" type="text" value={formData.name} name="name" placeholder="Enter your name" onChange={inputChage}/>
         </div>
         <div className="form-group">
          <input className="form-control" id="email" type="email" value={formData.email} name="email" placeholder="Enter your email" onChange={inputChage}/>
         </div>
         <div className="form-group">
          <input className="form-control" id="password" type="password" value={formData.password} name="password" placeholder="Enter your password" onChange={inputChage}/>
         </div>
         <div className="form-group">
          <input className="form-control" id="password2" type="password" value={formData.password2} name="password2" placeholder="Confirm your password" onChange={inputChage}/>
         </div>

         <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
         </div>
      </form>
   </section>
</div>
  )
}

export default Register
