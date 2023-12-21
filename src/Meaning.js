import React from "react";

export default function Meaning(props){
    console.log(props.meaning);
    return(
       <div className="app-meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function(definition,index){
            const getIndex = (index) => index + 1;

            return(
                <div key={index}>
                    <p>
                        {getIndex(index)}. {definition.definition}
                        <br />
                        <small><em>{definition.example}</em></small>
                    </p>
                </div>
            )
        })}
       </div>
    )
}