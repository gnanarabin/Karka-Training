import React from 'react'
import profimg from '../img/2390380.jpg'
import Avatar from './Avatar'


const Profile = () => {
  return (
    <div>
        <Avatar src={profimg} person={{name:"Rabin",age:22,place:"ngl"}}/>
    </div>
  )
}

export default Profile