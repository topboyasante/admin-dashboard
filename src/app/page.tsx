import Dashboard from '@/components/dashboard/dashboard'
import Sidebar from '@/components/sidebar/sidebar'
import React from 'react'

function Home() {
  return (
    <main className='grid gap-4 p-4 lg:grid-cols-[220px,_1fr]'>
      <Sidebar/>
      <Dashboard/>
    </main>
  )
}

export default Home