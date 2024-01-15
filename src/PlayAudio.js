import React, { useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faCirclePlay} onClick={toggleAudio}/>
            {/* <i  class="fa-solid fa-circle-play playAudioBtn"></i> */}
            <audio ref={audioRef} src={props.audioSrc} >
                <source src={props.audioSrc} type="audio/mp3"/>
            </audio>
        </span>
    )
}