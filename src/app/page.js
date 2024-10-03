


import Link from 'next/link'
import React from 'react'
import { FcBusinessman } from "react-icons/fc";

export default  function  page() {


  return (
    <div>page
      <Link href={'./nextjs/nextjs_not_found'}>next js</Link>   

      <Link href={'./ch'}>ch</Link>    <br/>
      <Link href={'./map'}>map</Link>   <br/>

      <Link href={'/new'}>go to new page now</Link> <br/>


      <Link href={'./nextjs/nextjs_api'}>api next js</Link>   
      <Link href={'./reactnetive/reactnetiveerror'}> react netive go home </Link>   
      <br/>

      <Link href={'./api'}>api</Link>   <br/>

      <Link href={'reactjs/reactjsinputget'}>react js</Link>
      <Link href={'./javasript/jsarry'}>api</Link>   <br/>
      <Link href={'./github/git'}>How to add existing folder to GitHub repository </Link>

     <div className='   bg-green-500  grid grid-cols-4 sm:grid-cols-1'>

        <div className=' mx-2 bg-red-50 my-7'>

          1
        </div>
        <div className=' mx-2 bg-red-50 my-7'>

2
</div>
<div className=' mx-2 bg-red-50 my-7'>

3
</div>
<div className=' mx-2 bg-red-50 my-7'>

4
</div>

     </div>




    </div>
  )
}
