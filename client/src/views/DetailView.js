import React, { useState, useEffect }from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const DetailView = props =>{
    const {id} = props
    const [user, setUser] = useState({});
        useEffect(()=>{
            axios.get('http://localhost:8000/api/users/' + id)
                .then(response =>{
                    setUser(response.data)
                })
                .catch(err =>{
                    console.log(err);
                })
    }, []) // Don't forget this empty array!
    return(
        <div>
            <img src={user.avatar} alt="user image" width="250" height="250"/>
            <h1>{user.first_name} {user.last_name}</h1>
            <p>Email Address : {user.email}</p>
            <DeleteButton id={user._id} />
        </div>
    )
}
export default DetailView;