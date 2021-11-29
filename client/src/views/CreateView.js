import axios from 'axios';
import React, {useState} from 'react';
import Form from '../components/Form';
import {navigate} from '@reach/router'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const CreateView = props =>{
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e, data) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/create", data)
            .then(response =>{
                toast('Successfully created the user.')
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr)
            })
    }
    return(
        <div>
            <h1>Create a new user</h1>
            {errors.map((error, index)=>{
                return(
                    <p key={index}>{error}</p>
                )
            })

            }
            <Form
                onSubmitHandler={onSubmitHandler}
                initialFirst_Name=""
                initialLast_Name=""
                initialEmail=""
                initialAvatar=""
            />
        </div>
    )
}
export default CreateView;