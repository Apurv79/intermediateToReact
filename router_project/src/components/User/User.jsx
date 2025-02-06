import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { Userid } = useParams()
    return (
        <div className='bg-gray-600 p-4 text-center text-3xl text-white'>User: {Userid}</div>
    )
}

export default User