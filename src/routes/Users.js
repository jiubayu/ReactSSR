import React from 'react'

function Users(props) {
  const { resource } = props;
  const list = resource.read();
  console.log(list, 'list-----')
  return (
    <ul>
      {
        list.map(user => (<li key={user.id}>{user.name}</li>))
      }
    </ul>
  )
}

export default Users;
