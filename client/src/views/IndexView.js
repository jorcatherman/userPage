import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link } from '@reach/router'
import axios from 'axios'
const IndexView = props =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
        .then((response)=>{
            setUsers(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, []) // Don't forget this Empty Array!
    return(
        <div>
            <h1>Users</h1>
            <Link to="/create">Add User</Link>
            <ul>
                {users.map((user, index)=>{
                    return(
                    <li key={index}><Link to={"/" + user._id}>{user.first_name} {user.last_name} </Link> | <Link to ={"/" + user._id + "/edit"}>Edit</Link> | <DeleteButton id={user._id}/>
                </li>
                    )
                })}
                
                
            </ul>
        </div>
    )
}
export default IndexView;