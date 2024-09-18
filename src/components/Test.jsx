import React, { useEffect, useState } from 'react'

const Test = () => {
    // useEffect, useState
    const [num, setNum] = useState(0)
    const [message, setMessage] = useState('')

    useEffect(() => {
        // call the server or make request to route /
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setMessage(res.message)
            })
    }, [])

    return (
        <div>
            <div>Test {message}</div>
            {/* <button onClick={() => setNum(num + 1)}>increment</button> */}
        </div>
    )
}

export default Test