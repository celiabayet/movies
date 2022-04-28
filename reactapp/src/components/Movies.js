import React,{ useState, useEffect } from 'react';

import { Typography, Grid } from '@mui/material';

import {connect} from 'react-redux'

function Movies(props) {

    // State variables
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null)

    // Load movies form DBmovie API
    useEffect(() => {
        const dbMovieLoading = async() => {
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3ddd5fc0ac8870d1a89341a69b354b2f&language=fr-FR&region=FR&sort_by=popularity.desc`)
            .then(response => response.json())
            .then(json=> {
            setMovieList(json.results)
            });
        }
        dbMovieLoading()
    }, [])

    // Filter from search
    let movieTitleList = movieList.map(movie => movie.title)
    let filteredMovie = movieTitleList.filter((title) => {
            if (props.title === '') {
                return title;
            }
            else {
                return title.toLowerCase().includes(props.title)
            }
        });

    // Select movie
    let handleClick = (title) => {
        setSelectedMovie(movieList.filter(movie => movie.title === title)[0]);
        
    }
    props.selectMovie(selectedMovie)

    // Render
    return (
        <Grid container mt={1} direction='column'>
            {filteredMovie.map(title => {
              return (
                <Grid 
                  item
                  key={title} 
                  className='movies-title'
                  py={1} 
                  pl={5} 
                  sx={{borderBottom: '1px solid grey'}}
                  onClick={()=> handleClick(title)}
                >
                  <Typography sx={{ cursor: 'pointer'}}> 
                    {title}
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
    )
}


// Store
function mapStateToProps(state){
  return  {title: state.titleSearched}
}

function mapDispatchToProps(dispatch){
  return {
    selectMovie: function(movie){dispatch({type: 'selectMovie',movie: movie})}
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)