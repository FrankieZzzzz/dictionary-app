import React from "react";
import PlayAudio from "./PlayAudio";

export default function Phonetics(props){
    return(
        <span>
            <PlayAudio audioSrc={props.phonetics.audio}/>
            {props.phonetics.text}
        </span>
    )
}