import MobilNav from '@/components/shared/MobilNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children} : { children:React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <MobilNav/>
        <div className="wrapper">
            <div className="root-container"></div>
            {children}
        </div>
    </main>
  )
}

export default Layout