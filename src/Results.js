import React from "react";
import './App.css';
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Results(props){
    if (props.resultsContent === null) {
        return(
            <section id="recent-search-section">
                <h2>Recent Search</h2>
                <ul className="list-unstyled recent-search-list">
                    <li className="recent-search-word">
                        <div>Sunny</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li class="recent-search-word">
                        <div>Lucky</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li class="recent-search-word">
                        <div>Tomorrow</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li className="recent-search-word">
                        <div>Swimming pool</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                </ul>
            </section>
        )
    }else{
        console.log(props.resultsContent);
        return(
            <div className="Results">
                <section id="results-section">
                    <div id="results-title-section">
                        <div id="results-title">
                            <h2>{props.resultsContent.word}</h2>
                            <i className="fa-regular fa-heart"></i>
                            
                        </div>
                        <div className="phonetics-loop">  
                                {props.resultsContent.phonetics.map(function(phonetics,index){
                                    return(
                                        <span key={index}>
                                            <Phonetics phonetics={phonetics}/>
                                        </span>
                                    )
                                })}
                            </div>
                    </div>
                    <hr />
                    {/* definition and synonyms*/}
                    <div>
                        <p class="meaning-title">Dictionary definition</p>
                            {props.resultsContent.meanings.map(function(meaning,index){
                                return(
                                    <div key={index}>
                                        <Meaning meaning={meaning}/>
                                    </div>
                                )
                            })}
                        <hr />
                        <p class="meaning-title">Synonyms</p>
                            {props.resultsContent.meanings.map(function(meaning,index){
                                return(
                                    <div key={index}>
                                        <Synonyms synonyms={meaning.synonyms}/>
                                    </div>
                                )
                            })}
                    </div>
                </section>
            </div>
    )
    }
}