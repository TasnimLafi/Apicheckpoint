import React from 'react'

const User = ({el}) => {
  return (
    <div className='user'>
      <h1>{el.name}</h1>
      <h3>{el.email}</h3>
    </div>
  )
}

export default User
