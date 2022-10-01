import React from 'react'
import './Search.css'

const Profile = () => {
  return (
    <div className="container">
      <div id='search' className='container d-flex mt-5'>
        <input type='text' className='form-control' placeholder='Search' />
        <button id='search-button'></button>
        </div>
      </div>
  )
}

export default Profile