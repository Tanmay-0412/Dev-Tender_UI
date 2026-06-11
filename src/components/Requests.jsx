import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utlis/constants'
import ConnectionList from './ConnectionList'
import { addRequests } from '../utlis/requestSlice'

const Requests = () => {
  const requests = useSelector(store => store.requests)
  const dispatch = useDispatch()
  
  const fetchRequests = async()=>{
    try{
        const res = await axios.get(`${BASE_URL}/user/requests/recieved`,{
            withCredentials:true
        })
        // console.log(res?.data?.data)
        dispatch(addRequests(res?.data?.data))
    }catch(err){
        console.log(err.response.data?.message)
    }
  }

  useEffect(()=>{
    fetchRequests()
  },[])

  if(requests === null) return <h1 className='text-xl text-center'>No pending requests</h1>
  return (
    <div>
        <ConnectionList items={requests} />
    </div>
  )
}

export default Requests