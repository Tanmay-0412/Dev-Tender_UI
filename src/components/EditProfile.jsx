import React, { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utlis/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utlis/userSlice'

const EditProfile = ({user}) => {

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [age, setAge] = useState(user.age)
    const [gender,setGender] = useState(user.gender)
    const [about, setAbout] = useState(user.about)
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [error, setError] = useState('')
    const [showToast,setShowToast] = useState(false)
    // const { firstName, lastName, about, photoUrl } = user

    const dispatch = useDispatch()

    const saveProfile = async()=>{
      setError('')
      try{
        const res = await axios.patch(`${BASE_URL}/profile/edit`,{
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl
        },{ withCredentials:true})
        console.log(res?.data?.data)
        dispatch(addUser(res.data))
        setShowToast(true)
        const i = setTimeout(()=>{
          setShowToast(false)
        },2000)
      }catch(err){
        console.error(err)
        console.log(err.response)
        setError(err.response)
      }
    }
    // const saveProfile = async () => {
    //   try {
    //     const URL = `${BASE_URL}/profile/edit`;

    //     const res = await fetch(URL, {
    //       method: "PATCH",
    //       credentials: "include", // equivalent of withCredentials:true
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         firstName,
    //         lastName,
    //         age,
    //         gender,
    //         about,
    //         photoUrl
    //       })
    //     });

    //     console.log(res);

    //     const data = await res.json();
    //     console.log(data);

    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

  return (
    <>
    <div className='flex gap-5'>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    <h3 className="flex justify-center items-center text-xl">Edit Profile</h3>

    <label className="label">First Name</label>
    <input type="text" className="input" placeholder="first name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />

    <label className="label">Last Name</label>
    <input type="text" className="input" placeholder="last name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>

    <label className="label">Age</label>
    <input type="text" className="input" placeholder="last name" value={age} onChange={(e)=> setAge(e.target.value)}/>

    <label className="label" value={gender} onChange={(e)=> setGender(e.target.value)}>Gender</label>
    <select defaultValue="Select Gender" className="select">
      <option disabled={true}></option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>

    <label className="label">About</label>
    <textarea className="textarea" placeholder="Bio" value={about} onChange={(e)=> setAbout(e.target.value)}></textarea>

    <label className="label">Photo Url</label>
    <input type="text" className="input" placeholder="photo url" value={photoUrl} onChange={(e)=> setPhotoUrl(e.target.value)}/>
    <p className='text-xl text-red-500'>{error}</p>
    <button className="btn btn-accent mt-4" onClick={saveProfile}>Save</button>
    </fieldset>
    <UserCard user={{firstName, lastName, about, photoUrl, age, gender}} />
    </div>

  { showToast && <div className="toast toast-top toast-center">
    <div className="alert alert-success">
      <span>Profile updated successfully.</span>
    </div>
  </div> }
</>
  )
}

export default EditProfile