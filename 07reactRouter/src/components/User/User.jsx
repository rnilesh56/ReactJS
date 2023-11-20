import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-600 text-black text-3xl text-center p-5'>User: {userid}</div>
  )
}

export default User