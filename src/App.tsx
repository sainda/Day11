import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm/Search';
import SelectElement from './Components/SelectElement';
import GetAll from './Pages/GetCountries';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="filterSearch">
          <SearchForm/>
          <SelectElement/>
      </div>
      <GetAll/>
    </div>
  );
}

export default App;
