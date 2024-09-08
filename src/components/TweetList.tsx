import React from 'react'
import Tweet from "./Tweet";

const TweetList = ({ tweets } : any) => {
  return (
    <div className='p-6 rounded-lg '>
        {tweets.length > 0 ? (
            //@ts-ignore
        tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <p>No tweets to display</p>
      )}
    </div>
  )
}

export default TweetList