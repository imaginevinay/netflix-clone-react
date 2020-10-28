import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" isLargeRow fetchUrl={requests.fetchOriginals}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchCodmedyMovies}/>
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
