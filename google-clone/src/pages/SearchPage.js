import React from 'react'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';
import useGoogleSearch from '../useGoogleSearch';
import SearchIcon from '@mui/icons-material/Search';
import ImagesIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import NewsIcon from '@mui/icons-material/ArticleOutlined';
import VideosIcon from '@mui/icons-material/OndemandVideoOutlined';
import MapsIcon from '@mui/icons-material/RoomOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
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
                        <div className='searchPage__option'>
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
                        </div>
                    </div>
                    <div className='searchPage__optionsRight'>
                        <div className='searchPage__option'>
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {true && (
            <div className='searchPage__results'>
                <p className='searchPage__resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

                {data?.items.map(item => (
                    <div className='searchPage__result'>
                        <a href={item.link}>
                            {item.pagemap?.cse_image.length > 0 item.pagemap?.cse_image[0]?.src && (
                                <img className='searchPage__resultImage' src={ item.pagemap?.cse_image?.length > 0  } alt="" srcset="" />
                            )}
                            {item.displayLink}    
                        </a>
                        <a className='searchPage__resultTitle' href={item.link}>
                            <h2>{item.title}</h2>    
                        </a>
                        <p className='searchPage__resultSnippet'>
                            {item.snippet}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default SearchPage