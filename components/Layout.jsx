import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='bg-[#F7F8FA] lg:px-0 min-h-[100vh]'>
      <div className='container sm:px-0 px-1 h-full mx-auto sm:pb-0 pb-[80px]'>
        {children}
      </div>
    </div>
  )
}

export default Layout