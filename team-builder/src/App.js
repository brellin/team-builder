import React, { useState } from 'react';
import Member from './components/Member'
import Form from './components/Form'

import './App.css';

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
      {memberList.map((member, index) => (
        <Member key={index}
          update={update}
          del={del}
          member={member}
        />
      ))}
      <Form submit={submit} index={memberList.length + 1} />
    </div>
  );
}

export default App;
