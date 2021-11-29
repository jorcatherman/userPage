import React, { useState } from 'react'

const Form = props =>{
    const { onSubmitHandler, initialFirst_Name, initialLast_Name, initialEmail, initialAvatar } = props; 
    const [first_name, setFirst_Name] = useState(initialFirst_Name);
    const [last_name, setLast_Name] = useState(initialLast_Name);
    const [email, setEmail] = useState(initialEmail);
    const [avatar, setAvatar] = useState(initialAvatar); // Eventually want to change this to an image. Line 24 as well.
    return(
        <form onSubmit={e=>{onSubmitHandler(e, { first_name, last_name, email, avatar })}}>
            <p>
                <label>First Name</label>
                <input type="text" name="first_name" value={first_name} onChange={(e) =>{setFirst_Name(e.target.value)}}/>
            </p>
            <p>
                <label>Last Name</label>
                <input type="text" name="last_name" value={last_name} onChange={(e) =>{setLast_Name(e.target.value)}}/>
            </p>
            <p>
                <label>E-Mail Address</label>
                <input type="text" name="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
            </p> 
            <p>
                <label>Avatar Link:</label>
                <input type="text" name="avatar" alt ="avatar" width="100" height="100" value={avatar} onChange={(e) =>{setAvatar(e.target.value)}} /> 
            </p>
            <input type="submit" />
        </form>
    )
}
export default Form;