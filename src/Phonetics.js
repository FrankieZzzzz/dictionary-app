import React from "react";
import PlayAudio from "./PlayAudio";
import './App.css';

export default function Phonetics(props){
    return(
        <span>
            {/* if audio link is empty then no show the content */}
            {props.phonetics.audio !== '' && (
                <>
                    <PlayAudio audioSrc={props.phonetics.audio}/>
                    <span className="phonetics-text">{props.phonetics.text}</span>
                </>
            )}
            {/* <PlayAudio audioSrc={props.phonetics.audio}/>
            <span className="phonetics-text">{props.phonetics.text}</span> */}
        </span>
    )
    
}