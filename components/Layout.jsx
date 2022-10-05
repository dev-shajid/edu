import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='bg-[#F7F8FA] lg:px-0 px-5 min-h-[100vh]'>
      <div className='container sm:px-4 mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Layout