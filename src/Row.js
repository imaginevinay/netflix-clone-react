import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css'
import movieTrailer from 'movie-trailer'
const baseImgUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    // useState -> managing state of page until refresh temporary memory
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    // useEffect -> snippet of code which runs on certain conditions
    useEffect(() => {
        // if [], run once when page loads and dont run again
        // if [movies], this code will run everytime movies variable changes
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        trailerUrl ? setTrailerUrl('') : movieTrailer((movie?.title || movie?.name || movie?.original_name) || '').then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        }).catch(err => console.log(err))
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img onClick={() => handleClick(movie)} key={movie.id} className={`row_poster ${isLargeRow && 'row_poster_large'}`} src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
