import React from 'react'
import Header from './header'
import ContentGrid from './content-grid'

function Dashboard() {
  return (
    <div className='bg-white border rounded-lg pb-4 shadow min-h-screen'>
      <Header/>
      <ContentGrid/>
    </div>
  )
}

export default Dashboard