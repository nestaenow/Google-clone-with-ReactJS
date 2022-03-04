import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <div className="home__header">
        <div className="header__left">
          {/* We dont use an a tag here because we dont want an all fresh reload of the page  */}
          {/* so we use the link tag instead because there will be no refresh – it will reload instantly */}
          <Link to='/about'>About</Link>
          <Link to='/about'>Store</Link>
        </div>
        <div className="header__right">
          <Link to='/about'>Gmail</Link>
          <Link to='/about'>Images</Link>
        </div>
      </div>
      <div className="home__body">

      </div>
    </div>
  )
}

export default Home