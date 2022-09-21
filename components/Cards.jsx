import React from 'react'

const Cards = ({children}) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 gap-y-5 mt-12'>
        {children}
    </div>
  )
}

export default Cards