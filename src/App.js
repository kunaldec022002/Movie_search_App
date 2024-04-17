
import { useState } from 'react';
import './App.css';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

function App() {

  // setting up the initial state using
  //react hook 'usestate

  const [video , setVideo] = useState('inception');
  const [videoURL, setVideoURL] = useState('http://youtu.be/sa9l-dTv9Gk');

  //A function to fetch the required URL
  //and storing it inside the videoURL state variable


  function handleSearch(){
    movieTrailer(video).then((res)=> {
      setVideoURL(res);
    });
  }
  return (

    <div>
      <h1>Movie-Search-App</h1>
      
      <div className='search-box'>

        <label>
          Search for any movies/shows: { " "}
        </label>

        <input type='text' onChange={(e) => {
          setVideo(e.target.value)
        }}/>

        <button onClick={()=> {
          handleSearch()
        }}>Search</button>

      </div>
      

      <ReactPlayer url={videoURL} controls={true}/>
  
    </div>
  );
}


export default App;
