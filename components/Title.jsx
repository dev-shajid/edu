import React from 'react'

const Title = ({children, align}) => {
  return (
    <div style={{textAlign:align}} className='sm:text-4xl xs:text-3xl text-[30px] font-semibold text-center'>
        {children}
    </div>
  )
}

export default Title