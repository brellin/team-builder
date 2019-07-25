import React, { useState } from 'react';
import Member from './components/Member'
import Form from './components/Form'

import './App.scss';

const App = props => {
  const [memberList, setMemberList] = useState(props.members)

  const submit = member => setMemberList([...memberList, member])

  const update = single => setMemberList([...memberList.map(member => single.id === member.id ? single : member)])

  const del = single => setMemberList([...memberList.filter(member => member.id !== single.id)])

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
