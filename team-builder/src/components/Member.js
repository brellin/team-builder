import React, { useState } from 'react'

const Member = props => {

    const [member, setMember] = useState(props.member)

    const [editing, setEditing] = useState(false)

    const handleChange = e => setMember({ ...member, [e.target.name]: e.target.value })

    console.log(member)

    if (editing) {

        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                props.update(member)
                setEditing(!editing)
            }} className='update-form'>
                <label htmlFor="name">
                    Name:<input type="text" onChange={handleChange} value={member.name} name='name' />
                </label>
                <label htmlFor="email">
                    Email:<input type="text" onChange={handleChange} value={member.email} name='email' />
                </label>
                <label htmlFor="role">
                    Role:<input type="text" onChange={handleChange} value={member.role} name='role' />
                </label>
                <button>Update</button>
            </form>
        )

    } else {

        return (
            <div className="member">

                <sup onClick={() => props.del(props.member)}>X</sup>

                <h3>Name: {props.member.name}</h3>
                <h3>Email: {props.member.email}</h3>
                <h3>Role: {props.member.role}</h3>

                <button onClick={() => setEditing(!editing)}>Edit Member</button>

            </div>
        )

    }

}

export default Member
