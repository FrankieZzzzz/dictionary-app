import React from "react";
import SynonymsContent from "./SynonymsContent";


export default function SynonymsSection(props){
    if (props.synonymsContent.meanings &&
        props.synonymsContent.meanings.length > 0 &&
        props.synonymsContent.meanings.every((meanings) => Array.isArray(meanings.synonyms) && meanings.synonyms.length !== 0)) {
        return(
            <section className="results-section">
                <p className="meaning-title">Synonyms</p>
                {props.synonymsContent.meanings.map(function(meanings,index){
                    if (meanings.synonyms.length === 0) {
                        return null
                    }else{
                        return(
                            <div key={index}>
                                <SynonymsContent synonyms={meanings.synonyms}/>
                            </div>
                        )
                    }
                })}
            </section>
        )
    }else{
        return null;
    }
}