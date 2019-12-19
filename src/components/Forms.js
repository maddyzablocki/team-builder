import React, { useState } from "react";


const Form = props => {

    const [teamMember, setTeamMember]= useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setTeamMember({
        ...teamMember,
         [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember)
        setTeamMember({ name: "", email: "", role: ""});
    };

    return(
        <form onSubmit={submitForm}>
        <label htmlFor= "name">Name</label>
        <input 
        id= "name"
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChanges}
        value={teamMember.name}/>
        <label htmlFor= "email">Email</label>
        <input
        id= "email"
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChanges}
        value={teamMember.email}/>
        <label htmlFor= "role">Role</label>
        <input
        id= "role"
        type="text"
        name="role"
        placeholder="Enter role"
        onChange={handleChanges}
        value={teamMember.role}/>
        <button type='submit'>Add New member!</button>
        </form>
    );
};
export default Form;