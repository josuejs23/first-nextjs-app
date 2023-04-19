import { userAgent } from "next/server"

async function getUser(id){
  const response = await fetch(`https://reqres.in/api/users/${id}`)
  const {data} = await response.json()
  console.log(data)
  return data
}
const UsersPage = async ({params:{id:userId}}) => {
  const {id, first_name, last_name, email, avatar} = await getUser(userId);
  return (
    <div className="row">
    <div className="col-md-6 offset-md-3">
        <div className="card">
            <div className="card-header text-center">
                <img src={avatar} alt={email}/>
            </div>
            <div className="card-body text-center">
                 <div>
                    <h5>{id} {first_name} {last_name}</h5>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UsersPage 