import React, { useEffect, useState } from 'react'
import './Slider.css'
import axios from 'axios'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import Ratings from '../Ratings/Rating'
import Genres from '../Genres/Genres'

function Slider({apiKey, baseUrl}) {
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [index, setIndex] = useState(0)
    const [movieRatings, setMovieRatings] = useState([])
    const imageBaseUrl = "https://image.tmdb.org/t/p/original"

    useEffect (() => {
        axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
        .then(res=>{
            console.log(res.data.results)
            setUpcomingMovies(res.data.results)
            const rating= res.data.results.map(movie => movie.vote_average/2)
            setMovieRatings(rating)
        })
        .catch(err=> console.log(err))
    }, [])

    const SliderStyle = {
        backgroundImage: `url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "60vh",
        postion: 'relative'
        
    }

    const handleRight = ()=>{
        setIndex(index+1)
        if(index === upcomingMovies.length-1)
           setIndex(0)
    }

    const handleLeft = ()=>{
        setIndex(index-1)
        if(index === 0)
           setIndex(upcomingMovies.length-1)
    }

  return (
    <div style={SliderStyle}>
      <div className="slider-overlay"></div>
    <MdKeyboardArrowLeft  onClick={handleLeft} className="left-arrow" />
    <MdKeyboardArrowRight onClick={handleRight} className="right-arrow" />
    <div className="slider-info">
        <h1>{upcomingMovies[index]?.title}</h1>
        <p className='slider-description'> {upcomingMovies[index]?.overview.slice(0,130)}..</p>
        <Genres moviesGenres={upcomingMovies[index]?.genre_ids} baseUrl={baseUrl} apiKey={apiKey}/>
        <p>Release Date: {upcomingMovies[index]?.release_date}</p>
        <Ratings movieRating={movieRatings[index]}/>
        </div>


            
        </div>
       
  )
}

export default Slider