
import { useState } from 'react';
import './App.css';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

function App() {

  // setting up the initial state using
  //react hook 'usestate

  const [video , setVideo] = useState('inception');
  const [videoURL, setVideoURL] = useState('https://www.youtube.com/watch?v=bMknfKXIFA8');

  //A function to fetch the required URL
  //and storing it inside the videoURL state variable


  function handleSearch(){
    movieTrailer(video).then((res)=> {
      setVideoURL(res);
    });
  }
  return (

    <div className='text-center '>
      <h1 className='text-center '>Movie-Search-App</h1>
      
      <div className='search-box'>

        <label>
          Search for any movies/shows: { " "}
        </label>

        <input type='text' onChange={(e) => {
          setVideo(e.target.value)
        }}/>

        <button className='search-btn' onClick={()=> {
          handleSearch()
        }}>Search</button>

      </div>
      

      <ReactPlayer  url={videoURL} controls={true}/>
  
    </div>
  );
}


export default App;
