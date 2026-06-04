import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utlis/constants'
import { useDispatch } from 'react-redux'

const Feed = () => {
  const dispatch = useDispatch()
  const getFeed = async()=>{
    try{
      console.log('get Feed')
      const res = await axios.get(`${BASE_URL}/user/feed`, {}, {
        withCredentials:true
      })
      console.log(res)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    getFeed()
  },[])
  return (
    <div>Feed</div>
  )
}

export default Feed