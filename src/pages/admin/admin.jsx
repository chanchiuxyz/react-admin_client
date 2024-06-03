import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'


import './admin.css'

export default class Admin extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(user)
    if (!user || !user._id){
      return <Navigate to='/login' replace='true' />
    }
    return (

      <div className='admin_header'>
         <h1>hello-----</h1> 
         <h2>hello {user.username}</h2>
         <h2>hello {user.username}</h2>
         <h2>hello {user._id}</h2>
         <h2>hello-----</h2>
 
      </div>

    )
  }
}
