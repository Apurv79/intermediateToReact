import React, { useState, useEffect } from 'react'

const Github = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/Apurv79')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])

    return (
        <div className="text-3xl p-4 bg-gray-600 text-center text-white flex flex-col items-center">
            Github Followers: {data.followers}
         <img src={data.avatar_url} alt="Avatar" className='h-32 w-32 rounded-full mt-4 ' />
        </div>
    )
}

export default Github