import React from 'react';
import {connect} from 'react-redux'

import { Typography, Grid, Box} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function MovieDetails(props) {

    // Array for stars rating
    let starsRating = []
    if(props.movie){
      let score = props.movie.vote_average/2;
      for (let i=0; i<5; i++) {
        let color = {}
        if( i < score){
            color = {color: '#edb60f'}
        }
        starsRating.push(<StarIcon sx={{ color: color}}/> )
      }
    }

    // Render
    if(props.movie) {
        return (
        <Box sx={{position: 'fixed'}} mx={5}>
            <Grid container mt={6}>
                <Grid item p={3}>
                <img src={"https://image.tmdb.org/t/p/w500"+props.movie.backdrop_path} alt={props.movie.title} height='150px'/>
                </Grid>
                <Grid item p={3} >
                <Typography variant='h5' my={3}>
                    {props.movie.title}
                </Typography>
                <Typography>
                    {starsRating}
                </Typography>
                </Grid>
            </Grid>
            <Grid container p={3}>
                <Typography>
                {props.movie.overview}
                </Typography>
            </Grid>
        </Box>)
    } 
    else {
        return(
        <Grid container alignItems='center' display='flex' direction='column' mt={8}>
            <Grid item>
            <Typography variant='h1'> Choose a movie</Typography>
            </Grid>
            <Grid item>
            <ArrowBackIcon sx={{ fontSize: 100 }} />
            </Grid>
        </Grid>)
    }                    
}

// Store
function mapStateToProps(state){
  return  {movie: state.movieSelected}
}

export default connect(
  mapStateToProps,
  null
)(MovieDetails)