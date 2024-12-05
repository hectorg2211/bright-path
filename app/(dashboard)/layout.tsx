import React from 'react'
import Siderbar from './_components/sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='h-full'>
      <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
        <Siderbar />
      </div>
      {children}
    </div>
  )
}

export default DashboardLayout
