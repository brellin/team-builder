import React, { useState } from 'react';
import Member from './components/Member'
import Form from './components/Form'

import './App.scss';

const App = () => {
  const [memberList, setMemberList] = useState([])

  const submit = member => setMemberList([...memberList, member])

  const update = single => setMemberList([...memberList.map(member => {
    if (single.id === member.id) return single
    return member
  })])

  const del = single => setMemberList([...memberList.filter(member => single.id !== member.id)])

  return (
    <div className='cont'>
      <h1>Team Members</h1>
      <div className='list'>
        {memberList.map((member, index) => (
          <Member key={index}
            update={update}
            del={del}
            member={member}
          />
        ))}
      </div>
      <Form submit={submit} />
    </div>
  );
}

export default App;
