import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import userDataType from '../types/userData'

const ViewUser = () => {


    const [user, setUser] = useState<userDataType>({
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: ""
    });
    
    // Destructuring id using params
    const { id } = useParams<userDataType>();

    const loadUser = async () => {
        const response =  await axios.get(`http://localhost:3003/data/${id}`);
        setUser(response.data);
        // console.log(response.data);
    };

    useEffect(()=> {
        loadUser();
    },[])

    return (

        <div className="container">
            <Link className="btn btn-primary my-4" to="/"> Back to home</Link>
            <h1> User id = {id} </h1>
            <ul className="display-5">
                <li className="list-group-item"> Name: {user.employee_name}</li>
                <li className="list-group-item"> Salary: {user.employee_salary}</li>
                <li className="list-group-item"> Age: {user.employee_age}</li>
                <li className="list-group-item"> Profile Image: {user.profile_image}</li>
            </ul>
        </div>
    )
}

export default ViewUser
