import React, { useState } from 'react'

import {Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {connect} from 'react-redux'

function SearchBar(props) {
    const [inputSearch, setInputSearch] = useState('');

    let handleSearch = (movie) => {
        setInputSearch(movie)        
    }

    props.titleSearch(inputSearch)
    
    return (
         <Grid container justifyContent="center" alignItems="center" py={3} sx={{backgroundColor: '#9FC5F8'}}>
            <TextField
                id='movie-search' 
                variant='outlined' 
                label='search' 
                onChange={(e) => handleSearch(e.target.value)}
                InputProps={{endAdornment: <SearchIcon/>}}
            />
        </Grid>
    )
}

function mapDispatchToProps(dispatch){
  return {
    titleSearch: function(title){dispatch({type: 'searchTitle',title: title})}
    }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)