import React from "react";

export default function Meaning(props){
    console.log(props.meaning);
    return(
       <div className="app-meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition,index){
            const getIndex = (index) => index + 1;

            return(
                <div key={index}>
                    
                    <p>
                        <span><span className="meaning-title">{getIndex(index)}</span>.{definition.definition}</span>
                    </p>
                    <p>
                       <small><em>{definition.example}</em></small>
                    </p>
                </div>
            )
        })}
       </div>
    )
}