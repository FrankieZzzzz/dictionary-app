import React from "react";

export default function Synonyms(props){
    if(props.synonyms !== []){
        return(
            //  <section class="results-section">
                <div>
                    {props.synonyms.map(function(synonyms,index){
                        return(
                                <span key={index} className="synonyms-list">
                                    <span>{synonyms} </span>
                                </span>
                        
                        )
                    })}
                </div>          
            //  </section>
        )
    }else{
        return null;
    }
   }