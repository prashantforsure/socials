import React from 'react'
import { CgProfile } from "react-icons/cg";
import { formatDistanceToNow } from "date-fns";

const Tweet = ({ tweet }: any) => {
  return (
    <div className='h-auto w-full'>
        <div className='flex justify-items-end'>
        <div className='pt-2 flex justify-between'>
            <div className='p-3'>
            <CgProfile className='w-4 h-4' />
            </div>
         <h3 className='p-3 font-bold'>
         {tweet.author.name}
         </h3>
        </div>
        <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(tweet.createdAt))} ago
          </p>
        </div>
        <p className='mt-4 mb-2'>
            {tweet.content}
        </p>
    </div>
  )
}

export default Tweet