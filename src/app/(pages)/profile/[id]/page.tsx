import React from 'react'

async function page({ params: { id } }: { params: { id: string } } ) {
  return ( 
    <div>page</div>
  )
}

export default page