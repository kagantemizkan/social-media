import React from 'react'
import Search from './Search/Search'
import Notification from './Notification/Notification'
import './RightPanel.css'

const RightPanel = () => {
  return (
    <div className='container-fluid col-md-3'>
    <div id='rigt-panel' className="container">
    <Search />
    <Notification />
    </div>
    </div>
  )
}

export default RightPanel
