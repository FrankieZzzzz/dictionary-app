import React from "react";
import './App.css';
import Meaning from "./Meaning"


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
                            <span>  
                                {/* <audio controls>
                                    <source src={props.resultsContent.phonetics[1].audio} type="audio/mp3" />
                                </audio> */}
                                {props.resultsContent.phonetics[0].text}
                            </span>
                        </div>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <hr />
                    <div>
                        <p class="meaning-title">Dictionary definition</p>
                        <p>
                            {props.resultsContent.meanings.map(function(meaning,index){
                                return(
                                    <div key={index}>
                                        <Meaning meaning={meaning}/>
                                    </div>
                                )
                            })}
                        </p>
                    </div>
                    <hr />
                </section>
            </div>
    )
    }
}