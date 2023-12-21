import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
        return(
            <div>
                {props.synonyms.map(function(synonyms,index){
                    return(
                        <span key={index} className="synonyms-list">
                            <span>{synonyms} </span>
                        </span>
                    )
                })}
            </div>
        )
    }else{
        return null;
    }
   }