import React, {useState, useRef, useEffect} from 'react';
import Playerdetails from './playerdetails';
import Playercontrols from './playercontrols';

function Player(props) {

    const audioEl=useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);  //initialization

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards=true) =>{
        if(forwards){
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1){
                    temp = 0;
                }

                return temp;
            });
        }
        else{
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0){
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className='c-player'>
            <Playerdetails 
                song={props.songs[props.currentSongIndex]} 
            />

            <Playercontrols 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
            />
            <audio className='player__audio' src={props.songs[props.currentSongIndex].src} ref={audioEl} controls></audio>
            <p style={{marginTop: '20px'}}><strong>Next up:</strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}

export default Player;