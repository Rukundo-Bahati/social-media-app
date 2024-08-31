import React from 'react';
import './Profile.scss'
import { EmailOutlined, FacebookOutlined, Instagram, LanguageOutlined, LinkedIn, MoreVert, Pinterest, PlaceOutlined, X } from '@mui/icons-material';
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://image.shutterstock.com/image-photo/profile-side-photo-young-excited-260nw-2160367487.jpg" alt="" className='cover' />
        <img src="https://image.shutterstock.com/image-photo/happy-millennial-hispanic-teen-girl-260nw-1734170210.jpg" alt="" className='profilePic ' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookOutlined fontSize='large' /> 
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize='large' />
            </a>
           
            <a href="http://https://twitter.com/X">
              <X fontSize='large' />
            </a>
            <a href="http://linkedin.com">
              <LinkedIn fontSize='large' />
            </a>
            
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceOutlined />
                <span>Rwanda</span>
              </div>
              <div className="item">
                <LanguageOutlined  />
                <span>Eng</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
      <Posts />
      </div>
    </div>
  )
} 

export default Profile
