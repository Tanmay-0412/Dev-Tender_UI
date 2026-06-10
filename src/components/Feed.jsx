import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utlis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utlis/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const feed = useSelector(store =>store.feed)
  // console.log(feed)
  const dispatch = useDispatch()
  const getFeed = async()=>{
    if(feed) return 
    try{
      const res = await axios.get(`${BASE_URL}/user/feed`,{
        withCredentials:true
      })
      // console.log(res?.data?.data)
      dispatch(addFeed(res?.data?.data))
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    getFeed()
  },[])
  return (
    feed && (
    <div className='flex justify-center items-center mt-5'>
    <UserCard user={feed[0]}/>
    </div> 
    )
    // <div style={{display:'flex'}}>
    //   {feed.map((u)=> (
    //     <div key={u._id} >
    //       <img src={u.photoUrl} width='100px' height='100px'></img>
    //       <p>{u.firstName} {u.lastName}</p>
    //       <p>{u.about}</p>
    //     </div>
    //   ))}
    // </div>
  )
}

export default Feed