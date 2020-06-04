import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Users = (props) => {
    return (
        <div>
            <h1>{props.data.username}</h1>
            <p>{props.data.email}</p>
            <p>{props.data.password}</p>
        </div>
    )
}

export default Users
