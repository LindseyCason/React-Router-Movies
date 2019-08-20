import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';


import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
      {/* Things inside here are correct */}

    </div>
  );
};

export default App;
