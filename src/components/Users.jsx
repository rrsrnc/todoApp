
import Card from './Card';

const Users=(props)=>{
const users=props.users;
    return(
        <>
         {users.length>1?<Card> {users.map(user=><li key={user.id}>{user.uName}</li>)} </Card>:''}
        </>
       
    )

}

export default Users;