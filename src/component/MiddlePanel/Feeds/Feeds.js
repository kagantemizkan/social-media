import React from 'react'
import './Feeds.css'

const Feeds = () => {
  return (
    <div className='container mt-3'>
      <div className="container feeds-header d-flex justify-content-around w-100">
        <h4>Feeds</h4>
        <div className="header-list d-flex">
          <p>All</p>
          <p>Following</p>
          <p>Populer</p>
          <p>Newest</p>
        </div>
      </div>
    </div>
  )
}

export default Feeds
