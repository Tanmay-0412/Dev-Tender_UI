import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userInfo = useSelector(store => store.user)
  console.log(userInfo)
  return (
    <div>Profile</div>
  )
}

export default Profile