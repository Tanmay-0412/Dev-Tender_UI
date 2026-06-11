import React, { useEffect } from 'react'
import { BASE_URL } from '../utlis/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utlis/connectionSlice'
import ConnectionList from './ConnectionList'

const Connections = () => {
  const connections = useSelector(store=> store.connections)
  const dispatch = useDispatch()
  const fetchConnections = async()=>{
    try{
        const res = await axios.get(`${BASE_URL}/user/connection`,{withCredentials:true})
        console.log(res?.data?.data)
        dispatch(addConnections(res?.data?.data))
    }catch(err){
        console.error(err)
    }
  }

  useEffect(()=>{
    fetchConnections()
  }, [])
  if(connections === null ) return <h1 className='text-2xl text-center'>No connections found</h1>
  if(connections.length === 0) return <h1 className='text-2xl text-center'>No connections found</h1>

  return (
    <div className='text-center'>
        <h1 className='text-3xl text-white bold'>Connections</h1>
        {/* {connections.map((c)=>{
        const {firstName, lastName, photoUrl, age, gender, about } = connections
        return (
            <div className='border border-amber-300 m-2 rounded-xl'>
                <img alt="photo" className='w-20 h-20 ' src={c.photoUrl}  />
                <h2>{c.firstName} {c.lastName}</h2>
                <p>{c.about}</p>
            </div>
        
        )})} */}
        <ConnectionList items={connections}/>
    </div>
  )
}

export default Connections