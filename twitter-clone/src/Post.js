import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';
import React from 'react'
import './Post.css'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    
  return (
    <div className='post'>
        <div  className='post__avatar'>
            <Avatar src='' />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Miqdad Noor {" "} 
                        <span className='post__headerSpecial'>
                            <VerifiedIcon className='post__badge' />
                            @Migdadnoor
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>This is a tweet </p>
                </div>
            </div>
            <img src='https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif' alt=''/>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post