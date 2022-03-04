import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';

function Home() {
  return (
    <div className='Home'>
      <div className="home__header">
        <div className="home__headerLeft">
          {/* We dont use an a tag here because we dont want an all fresh reload of the page  */}
          {/* so we use the link tag instead because there will be no refresh – it will reload instantly */}
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <AccountCircleIcon className='accountIcon'/>
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home