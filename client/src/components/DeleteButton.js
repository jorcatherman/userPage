import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
const DeleteButton = props =>{
    const {id} = props;
    
    const onClickHandler = e =>{
        axios.delete('http://localhost:8000/api/users/delete/' + id)
            .then(response =>{
                toast('Successfully deleted the user.')
                console.log(response)
                navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }
    return(
        <button onClick = {onClickHandler}>Delete</button>
    )
}
export default DeleteButton