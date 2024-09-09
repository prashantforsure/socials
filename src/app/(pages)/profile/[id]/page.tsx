import FollowButton from '@/components/FollowButton';
import Sidebar from '@/components/Sidebar';
import TweetList from '@/components/TweetList';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

async function page({ params: { id } }: { params: { id: string } } ) {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/users/${id}`);
      setUser(data);
    };
    const fetchTweets = async () => {
    const { data } = await axios.get(`/api/users/${id}/tweets`);
    setTweets(data);
    };
    fetchTweets();
    fetchUser();
   }, [id])
   if(!user){
    return <p>loading...</p>
   }
  return ( 
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <FollowButton userId={id} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
          </div>
          <TweetList tweets={tweets} />
        </div>
      </div>
    </div>
  );
};


export default page