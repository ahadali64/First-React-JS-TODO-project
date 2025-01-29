import React from 'react'

const PageWrapper = ({children}) => {
  return (
    <div className='max-w-[1500px] mx-auto px-10'>
      {children}
    </div>
  )
}

export default PageWrapper