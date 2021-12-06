import React, {FC,  useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import userDataType from '../types/userData';
import axios from "axios";

const UpdateUser: FC = () => {

    const { id } = useParams<userDataType>();
    let history = useHistory<any>();
    const [user, setUser] = useState<userDataType>({
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: ""
    });

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement>= (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    useEffect(()=> {
        loadUser();
    },[])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/data/${id}`);
        setUser(result.data);
        console.log(result.data);
      }

      const handleOnSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        // axiot.put to update data
        await axios.put(`http://localhost:3003/data/${id}`, user)
        .then((user)=> {
            console.log(user);
        })
        .catch((err)=> {
            console.log(err);
        })

        history.push("/");
      };

    return (
        <div className="container col-md-6 shadow mt-5">
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Name"
                        value={user.employee_name}
                        name="employee_name" 
                        onChange={handleOnChange} />
                </div>

                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Salary"
                        value={user.employee_salary}
                        name="employee_salary" 
                        onChange={handleOnChange} />
                </div>

                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Age"
                        value={user.employee_age}
                        name="employee_age" 
                        onChange={handleOnChange} />
                </div>

                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="profile src"
                        value={user.profile_image}
                        name="profile_image"
                        onChange={handleOnChange} />
                </div>

                <button type="submit" className="btn btn-warning">Update User</button>
            </form>
        </div>
    )
}

export default UpdateUser
