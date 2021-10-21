import {useState, useEffect} from 'react';
import Player from './components/player'
import PlayList from './playlist'
import Card from 'react-bootstrap/Card'
import Header from './header';

function App() {

  const [songs]=useState([
    {
      title: "Thendral Vanthu",
      artist: "Ilayaraja, S. Janaki",
      img_src: './images/Avatharam.jpeg',
      src: './Albums/Thendral-Vanthu.mp3'
    },

    {
      title: "Sundari Neeve",
      artist: "SP Balasubrahmanyam, K.S.Chitra",
      img_src: './images/Dalapathi.jpeg',
      src: './Albums/03 Sundari Neeve.mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex]=useState(currentSongIndex+1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1){
        return 0;
      }
      else return currentSongIndex + 1;
    });
  }, [currentSongIndex])

  return (
    <div className="App">
     <Card>
       <Header/>
        <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
       <div>
      <PlayList/>
    </div></Card>
    </div>
    
   
  );
}

export default App;
