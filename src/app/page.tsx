"use client"
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import axios from 'axios'
import TweetList from "@/components/TweetList";

export default function Home() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const fetchTweets = async () => {
      const { data } = await axios.get("/api/users/1/timeline");
      setTweets(data);
    };

    fetchTweets();
  }, []);
  
  return (
   <div className="flex h-screen">
<Sidebar />

<div className="flex-1">
<TweetList tweets={tweets} />
</div>
   </div>
  );
}
