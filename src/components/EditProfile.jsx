import React, { useState } from 'react'

const EditProfile = ({user}) => {
    

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [about, setAbout] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    // const { firstName, lastName, about, photoUrl } = user
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    <legend className="fieldset-legend">Edit Profile</legend>

    <label className="label">First Name</label>
    <input type="text" className="input" placeholder="first name" value={user.firstName} />

    <label className="label">Last Name</label>
    <input type="text" className="input" placeholder="last name" value={user.lastName}/>

    <label className="label">About</label>
    <input type="text" className="input" placeholder="about" value={user.about}/>

    <label className="label">Photo Url</label>
    <input type="text" className="input" placeholder="photo url" value={user.photoUrl}/>


    </fieldset>
  )
}

export default EditProfile