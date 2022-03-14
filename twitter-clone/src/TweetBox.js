import { Avatar, Button } from '@mui/material';
import React from 'react'
import './TweetBox.css';


function TweetBox() {
  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox__input'>
                <Avatar src=""></Avatar>
                <input placeholder="What's happening?" type="text" />
                </div>
                <input className='tweetbox__imageInput' placeholder='Enter image URL' type="text" />

            
            <Button className='tweetbox__tweetButton'>Tweet</Button>
        </form>

    </div>
  )
}

export default TweetBox