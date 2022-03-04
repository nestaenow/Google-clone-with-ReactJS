import React from 'react'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
import useGoogleSearch from '../useGoogleSearch';
import SearchIcon from '@mui/icons-material/Search';
import ImagesIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import './SearchPage.css'
import Search from '../components/Search';
import Response from '../response'

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    //LIVE API CALL
    // const { data } = useGoogleSearch(term);

    const data = Response;

    console.log(data);
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <Link to='/'>
                <img className='searchPage__logo' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
            </Link>
            <div className='searchPage__headerBody'>
                <Search hideButtons />
                <div className='searchPage__options'>
                    <div className='searchPage__optionsLeft'>
                        <div className='searchPage__option'>
                            <SearchIcon />
                            <Link to='/all'>All</Link>
                        </div>
                        <div className='searchPage__option'>
                            <ImagesIcon />
                            <Link to='/images'>Images</Link>
                        </div>
                        {/* <div className='searchPage__option'>
                            <NewsIcon />
                            <Link to='/news'>News</Link>
                        </div>
                        <div className='searchPage__option'>
                            <VideosIcon />
                            <Link to='/videos'>Videos</Link>
                        </div>
                        <div className='searchPage__option'>
                            <MapsIcon />
                            <Link to='/maps'>Maps</Link>
                        </div>
                        <div className='searchPage__option'>
                            <MoreIcon />
                            <Link to='/more'>More</Link>
                        </div> */}
                    </div>
                    <div className='searchPage__optionsRight'>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='searchPage__results'>
            
        </div>
    </div>
  )
}

export default SearchPage