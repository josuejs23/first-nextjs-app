import ListUsers from '@/components/ListUsers';
import React from 'react'

async function fetchUsers(){
 const res = await fetch("https://reqres.in/api/users");
 const {data} = await res.json();
 console.log(data)
 return data;
}
const IndexPage = async () => {
  const users = await fetchUsers();
  console.log(typeof users)
  return (
    <div>
      <ListUsers users={users}/>
    </div>
  )
}

export default IndexPage