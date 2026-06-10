import React from "react";

const UserCard = ({user}) =>{
    const { firstName, lastName, photoUrl, skills, about, age, gender } = user
    return(
        <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="px-10 pt-10">
            <img
            src={photoUrl}
            alt="user"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{firstName} {lastName}</h2>
            { age && gender && <p className=" text-xl text-amber-500 font-serif">{age} {gender}</p> }
            <p>{about}</p>
            <div className="card-actions justify-around">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
            </div>
        </div>
        </div>
    )
}

export default UserCard;
