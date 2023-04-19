"use client"
import React from 'react'
import UserCard from './UserCard'
import { useRouter } from 'next/navigation'

const ListUsers = ({users}) => {
    const router = useRouter();
    return (
    <>
        <h1>List of users</h1>
        <ul className='list-group'>
        {
          users.map( (user) => ( 
          <li className='list-group-item d-flex justify-content-between align-items-center list-group-item-action' key={user.id} onClick={()=>{router.push(`/users/${user.id}`)}}>
            <UserCard user={user}/>
          </li>))
        }
      </ul>
    </>
  )
}

export default ListUsers