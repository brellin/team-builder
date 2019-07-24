import React, { useState } from 'react'

const Form = props => {
    const [input, setInput] = useState('')
    const handleChange = e => setInput(e.target.value)
    return (
        <>
            <input type="text" onChange={handleChange} value={input} />
            <button onClick={() => {
                props.submit({ id: props.index, name: input })
                setInput('')
            }}>Add Member</button>
        </>
    )
}

export default Form
