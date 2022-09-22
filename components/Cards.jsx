import React from 'react'

const Cards = ({children, thumb}) => {
  return (
    <div className={`grid ${thumb?'lg:grid-cols-3 sm:grid-cols-2':'md:grid-cols-3 grid-cols-2'} gap-y-5 md:mt-12 mt-8`}>
        {children}
    </div>
  )
}

export default Cards