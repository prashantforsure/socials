import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
import { Button } from "@/components/ui/button"

const Sidebar = () => {
  return (
    <div className='w-1/5 h-full p-5 bg-gray-100 flex'>
        <div className='w-1/2'></div>
        <div className='w-2/3'>
        <ul className='space-y-4'>
            <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
            </Link>
            <div className=' gap-4'>
                <div className='pt-4'>
            <Link href="/" className='font-semibold flex pb-7'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 50 50">
    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
</svg>
           <span className='flex justify-center items-center'>Home</span> 
            </Link>
            <Link href="/profile" className='font-semibold flex pb-7'>
            
            <CgProfile className='w-8 h-8' />
            <span className='flex justify-center items-center'>Profile</span> 
            </Link>
            <Link href="/tweets/create" className='font-semibold flex pb-7'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 50 50">
<path d="M37,4H13c-4.963,0-9,4.037-9,9v24c0,4.963,4.037,9,9,9h24c4.963,0,9-4.037,9-9V13C46,8.037,41.963,4,37,4z M14,15h18	c0.553,0,1,0.447,1,1c0,0.553-0.447,1-1,1H14c-0.553,0-1-0.447-1-1S13.447,15,14,15z M44,17.171	c-1.796,2.942-10.193,16.435-13.717,17.497L29.4,36.435c-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105	c-0.174-0.087-0.296-0.227-0.391-0.382c-0.906,0.334-1.853,0.483-2.647,0.487c-1.603-0.004-2.621-0.697-3.404-1.265	C20.979,35.261,20.59,35,20,35c-0.562,0-0.978,0.239-1.663,0.661C17.369,36.258,16.165,37,14,37c-0.553,0-1-0.447-1-1s0.447-1,1-1	c1.598,0,2.419-0.506,3.288-1.041C18.053,33.487,18.844,33,20,33c1.267,0,2.075,0.586,2.789,1.104	c0.682,0.493,1.22,0.884,2.201,0.884c0.007,0,0.013,0,0.02,0c1.253-0.006,2.914-0.486,3.635-1.518l0.1-0.2	c-0.134-1.062,0.159-2.55,0.73-4.27H14c-0.553,0-1-0.447-1-1s0.447-1,1-1h16.213c0.518-1.287,1.136-2.643,1.799-4H14	c-0.553,0-1-0.447-1-1s0.447-1,1-1h19.018c1.724-3.332,3.554-6.448,4.637-8.266c1.922,1.762,4.808,3.214,6.345,3.746V17.171z M44,14.596c-1.874-0.778-4.654-2.589-5.664-3.501V9.681l1.798-2.931C42.423,7.903,44,10.268,44,13V14.596z"></path>
</svg>
<span className='flex justify-center items-center'>Create Tweet</span> 
            </Link>
            {/* <Link href="/auth/signin" className="">
            <Button className=''>Sign In</Button>
           
        </Link> */}
        <div className='pt-2'>
        <Link href="/auth/signin" className="px-7 py-2 bg-blue-500 text-white font-semibold rounded-3xl">
          Sign In
        </Link>
        </div>
        
            </div>
            </div>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar