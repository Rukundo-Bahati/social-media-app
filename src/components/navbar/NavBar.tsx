import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; 
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'; 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { EmailOutlined } from '@mui/icons-material';
import Portfolio from '../../assets/portfolio.png';
import './navBar.scss'
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authenticationContext';


const NavBar = () => {

 
  
  
  const {toggle, darkMode}  = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)      

  return (

    <div className={'navbar' }>
      
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}} >
        <span>ChatMap</span>
        </Link>
        <HomeOutlinedIcon/>
        
        { darkMode ?
         <WbSunnyOutlinedIcon onClick={toggle} /> :
          <DarkModeOutlinedIcon onClick={toggle} />}
        
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" name="" id="text" placeholder='Search' />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlined />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
        <img src= {Portfolio} alt="User image" />
          <span> {currentUser.name} </span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
