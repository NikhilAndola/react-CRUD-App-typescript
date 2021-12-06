import React, { FC, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import userDataType from '../types/userData';

const AddUser: FC = () => {
    
    let history = useHistory();

    const [user, setUser] = useState<userDataType>({
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: ""
    });
    
    //   user destructuring
    // const{name, salary, age, profile} = user;
    
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(e.target.value);
    };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/data", user);
    history.push("/");
  };

  return (
    <div className="container col-md-6 shadow mt-5">
      <form onSubmit={handleOnSubmit}>
      <h2 className="text-center mx-2"> Add User</h2>
        <h2 className="text-center mx-2"> Add User</h2>
        <div className="mb-3">
          <input
            type="name"
            className="form-control"
            name="employee_name"
            placeholder="Name"
            value={user.employee_name}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <input type="text" 
                className="form-control" 
                placeholder="Salary"
                name="employee_salary" 
                value={user.employee_salary}
                onChange={handleOnChange}
            />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="employee_age"
            placeholder="Age"
            value={user.employee_age}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="profile_image"
            placeholder="profile src"
            value={user.profile_image}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add user
        </button>
      </form>
    </div>
  );
};

export default AddUser;
