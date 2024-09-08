
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Tweet {
  id: string | number;
  content: string;
  author: string;
  // Add any other relevant properties
}

// Define the props for the Tweet component
interface TweetProps {
  tweet: Tweet;
}

interface Author {
    name: string;
    // Add other author properties as needed
  }
  
  interface Tweet {
    id: number | string;
    content: string;
    author: string;
    // Add other tweet properties as needed
  }
  
  const TweetDetail: React.FC = () => {
    const [tweet, setTweet] = useState<Tweet | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      const fetchTweet = async () => {
       
  //@ts-ignore
        const id = router.query
        if (typeof id !== 'string') {
          setError('Invalid tweet ID');
          setIsLoading(false);
          return;
        }
  
        try {
          const { data } = await axios.get<Tweet>(`/api/tweets/${id}`);
          setTweet(data);
        } catch (err) {
          setError('Failed to fetch tweet');
          console.error('Error fetching tweet:', err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchTweet();
      //@ts-ignore
    }, [id]);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    if (!tweet) {
      return <p>Tweet not found</p>;
    }
    //@ts-ignore
  const authName: string = tweet.author.name;
    return (
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <div className="p-6">
            <h2 className="text-2xl font-bold">{tweet.content}</h2>
            <p className="text-gray-500">{authName}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TweetDetail;