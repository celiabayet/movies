import React from 'react';

// Mui materials
import {Box} from '@mui/material';

// Redux
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

// Reducers
import titleSearched from './reducers/titleSearched';
import movieSelected from './reducers/movieSelected';

// Components
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/MovieDetails";

// Style
import './App.css';

// Store
const store = createStore(combineReducers({titleSearched, movieSelected}))

function App() {

  return (
    <Provider store={store}>
      <div className='container' >

        <Box className='left-section'>
          <SearchBar />
          <Movies />
        </Box>

        <Box className='right-section' >
          <MovieDetails />
        </Box>

      </div>
    </Provider>

  );
}

export default App;
