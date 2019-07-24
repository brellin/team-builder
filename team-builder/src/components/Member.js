import React, { useState } from 'react'

const Member = props => {

    const [member, setMember] = useState(props.member)

    const [editing, setEditing] = useState(false)

    const handleChange = e => setMember({ ...member, name: e.target.value })

    if (editing) {

        return (
            <>
                <input type="text" onChange={handleChange} value={member.name} />
                <button onClick={() => {
                    props.update(member)
                    setEditing(!editing)
                }}>Update</button>
            </>
        )

    } else {

        return <h3 onClick={() => setEditing(!editing)}>{props.member.name} <span onClick={() => props.del(props.member)}>X</span> </h3>

    }

}

export default Member
