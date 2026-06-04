import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { BASE_URL } from '../utlis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utlis/userSlice'
import axios from 'axios'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(store => store.user)
  console.log(userData)
  
  const fetchUser = async()=>{ 
    if(userData) return; 
    try {
      const res = await axios .get(`${BASE_URL}/profile/view`,
      {withCredentials : true}
    )
    console.log(res)
    dispatch(addUser(res.data))
    }catch(err){
      console.log(err.response)
      if(err.status === 401){
        navigate('/login')
      }
    }
  }

  useEffect(()=>{
      fetchUser()
    },[])

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body