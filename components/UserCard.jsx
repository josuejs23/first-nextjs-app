import React from 'react'

const UserCard = ({user:{id,first_name, last_name,email,avatar}}) => {
  return (
    <>
        
        <div>
            <h5>{id} {first_name} {last_name}</h5>
            <p>{email}</p>
        </div>
        <img src={avatar} alt={email}/>
    </>
  )
}

export default UserCard