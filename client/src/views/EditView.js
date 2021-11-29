import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import Form from '../components/Form';
import axios from 'axios'
import {navigate} from '@reach/router'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const EditView = props =>{
    const {id} = props
    const [user, setUser] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/" +id)
            .then(response =>{
                setUser(response.data)
                setLoaded(true);
            })
            .catch(err=>{
                console.log(err)
            })
    })
    const onSubmitHandler = (e, data) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/users/update/" + id, data)
            .then(response =>{
                toast("Successfully edited the user.")
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return(
        <div>
            <h1>Editing: {user.first_name} {user.last_name}</h1>
            {loaded && 
                <Form onSubmitHandler={onSubmitHandler}
                initialFirst_Name={user.first_name}
                initialLast_Name={user.last_name}
                initialEmail={user.email}
                initialAvatar={user.avatar}
                />
            }
            
            <DeleteButton/>
        </div>
    )
}
export default EditView;