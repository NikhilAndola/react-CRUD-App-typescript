import React, { FC, useState, useEffect } from 'react'
import userDataType from '../types/userData'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home: FC = () => {

    // initial state of user is blank array.
    const [users, setUser] = useState<Array<userDataType>>([]);

    // useEffect for fetching data as sideeffect
    useEffect(()=> {
        loadUsers();
    }, [])

    //Making axios request
    const loadUsers= async () => {
        const result = await axios.get("http://localhost:3003/data");
        setUser(result.data.reverse());
        console.log(result.data);
    }

    const deleteUser = async (id: any) => {
        await axios.delete(`http://localhost:3003/data/${id}`)
        loadUsers();
      }

    return (
        <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>

        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

        {/* iterating users using Array.map() */}
          <tbody>
              {
                  users.map((user, index) =>  (
                    <tr key={user.id}>
                        <th scope="row">{index+1}</th>
                        <td>{user.employee_name}</td>
                        <td>{user.employee_salary}</td>
                        <td>{user.employee_age}</td>
                        <td>
                            <Link className="btn btn-primary" to={`/viewUser/${user.id}`}>view</Link>
                            <Link className="btn btn-outline-primary mx-2" to={`/update/${user.id}`}>update</Link>
                            <Link className="btn btn-danger" to="" onClick={()=> deleteUser(user.id)}>Delete</Link>
                        </td>
                    </tr>
                  ))
              }
          </tbody>


        </table>
      </div>
    </div>
    )
}

export default Home
