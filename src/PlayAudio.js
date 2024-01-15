import React, { useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function PlayAudio(props){
    const audioRef = useRef(null);
    const[isPlaying, setIsPlaying] = useState(false)

    const toggleAudio = ()=> {
        if (audioRef.current.paused) {
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying)
    }
    return(
        <span>
            <button onClick={toggleAudio} className="play-audio"><FontAwesomeIcon icon={faCirclePlay} /></button>
            <audio ref={audioRef} src={props.audioSrc} >
                <source src={props.audioSrc} type="audio/mp3"/>
            </audio>
        </span>
    )
}