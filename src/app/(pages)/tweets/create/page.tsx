"use client"
import Sidebar from '@/components/Sidebar';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('/api/tweets/create', { content });
    setContent("");
    router.push('/');
  }

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 justify-center '>
        <div className='p-6  flex justify-center w-full border-b-2 border-slate-300'>
          <form onSubmit={handleSubmit}>
            
            <textarea 
              className="w-full p-4 border border-gray-300 rounded-xl h-16"
              rows={4}
              value={content}
              placeholder='what is happening'
              onChange={(e) => setContent(e.target.value)} />
              <div className='flex justify-end'>
              <button type='submit' className='rounded-xl mt-1 px-4 py-2 bg-blue-400'>
                tweet
            </button>
              </div>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page;