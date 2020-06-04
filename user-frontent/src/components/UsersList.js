import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './Users'

const UsersList = () => {

    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('http://localhost:6969/api/users')
        .then(res => {
            setUser(res)
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    console.log(user)

    return (
        <div>
            {/* {user.map((data, index) => {
                return <Users data={data} key={index} />;
            })} */}
        </div>
    )
}

export default UsersList
