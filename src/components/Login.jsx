import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { BASE_URL } from "../utlis/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("")
  const [password, setPassword ] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async()=>{
    try{
        
      const res = await axios.post(`${BASE_URL}/login`,{
        emailId,
        password
      }, 
      {withCredentials:true}
    )  
      console.log(res?.data?.data)
      dispatch(addUser(res?.data?.data))
      navigate('/')
    }catch(err){

    }
    
  }

  return (
    <div className="flex justify-center">
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs  border p-4">
      <legend className="fieldset-legend bold text-2xl text-center">Login</legend>

      <label className="label">Email </label>
      <input type="email" className="input" placeholder="Email" value={emailId}  onChange={(e)=> setEmailId(e.target.value)} />

      <label className="label">Password </label>
      <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

      <button className="btn btn-neutral mt-4" onClick={()=> handleLogin()}>Login</button>
    </fieldset>
  </div>
  );
};

export default Login;
