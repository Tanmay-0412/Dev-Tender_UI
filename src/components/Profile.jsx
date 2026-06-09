import React from 'react'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile'

const Profile = () => {
  const userInfo = useSelector(store => store.user)

  return (
    ( userInfo && <div className='flex justify-center items-center'>
      <EditProfile user={userInfo}/>
    </div>
    )
  )
}

export default Profile