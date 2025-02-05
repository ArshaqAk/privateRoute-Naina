import { useState } from 'react'
import '../styles/auth.css'
import {Link} from 'react-router-dom'

const Auth = ({registerPage}) => {
  const [register,setRegister]=useState({username:'',email:'',password:''})
  const [login,setLogin]=useState({email:'',password:''})

  return (
    <div className='container-fluid auth-container'>
      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">
        {/* main row */}
            {
              registerPage?
              <div className="row auth-row  ">
              <div className="col-lg-6 col-sm-12 text-center">
                  <img className='mt-3' style={{width:'70px'}} src="https://cdn-icons-png.flaticon.com/512/8435/8435627.png" alt="" />
                  <h5>PROJECT FAIR</h5>
                  <p className='mt-3'>Login her ipsum dolor sit amet consectetur adipidunt a tenetur fuga harum, inventore, iste aliquid dicta dolorem et? Minus, illum.
                  </p>
              </div>
              <div className="col-lg-6 col-sm-12 right-div">
                  <div className="input-div d-flex flex-column align-items-center pt-3">
                      <h3>REGISTER </h3>
                      <input onChange={(e)=>setRegister({...register,username:e.target.value})} placeholder=' username' className='mt-4 form-control' type="text" />
                      <input onChange={(e)=>setRegister({...register,email:e.target.value})} placeholder=' email' className='mt-2 form-control' type="text" />
                      <input onChange={(e)=>setRegister({...register,password:e.target.value})} placeholder=' password' className='mt-2 form-control' type="text" />
                      <button className='btn btn-outline-light  w-25 mt-3'>Register</button>
                  </div>

                 <div className='d-flex mt-5 justify-content-center'><p>Already have an account?</p><Link  className='link ms-2' to={'/'}>Login </Link></div>
              </div>
          </div>
          :
          <div className="row auth-row  ">
          <div className="col-6 text-center">
              <img className='mt-3' style={{width:'70px'}} src="https://cdn-icons-png.flaticon.com/512/8435/8435627.png" alt="" />
              <h5>PROJECT FAIR</h5>
              <p className='mt-3'>Login her ipsum dolor sit amet consectetur adipidunt a tenetur fuga harum, inventore, iste aliquid dicta dolorem et? Minus, illum.
              </p>
          </div>
          <div className="col-6 right-div">
              <div className="input-div d-flex flex-column align-items-center pt-3">
                  <h3>LOGIN </h3>
                  <input  onChange={(e)=>setLogin({...login,email:e.target.value})} placeholder=' email' className='mt-4 form-control' type="text" />
                  <input  onChange={(e)=>setLogin({...login,password:e.target.value})} placeholder=' password' className='mt-2 form-control' type="text" />
                  <button className='btn btn-outline-light  w-25 mt-3'>Login</button>
              </div>

             <div className='d-flex mt-5 justify-content-center'><p>New to project fair?</p><Link className='link ms-2' to={'/register'}>Register Now</Link></div>
          </div>
      </div>
            }
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default Auth
