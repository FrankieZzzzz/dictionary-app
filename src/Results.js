import React, { useState } from "react";
import './Results.css';
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import SynonymsSection from "./SynonymsSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

export default function Results(props){
    const [like, setLike] = useState(false);
    const clickLike = () => {
        setLike(!like);
    }


    if (props.resultsContent === null) {
        return(
            // add default key word when user loading the page, may need to delet this part
            <section id="suggested-search-section">
                <h4>Suggested</h4>
                <ul className="list-unstyled suggested-search-list">
                    <li className="suggested-search-word">
                        <div>Sunny</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li class="suggested-search-word">
                        <div>Lucky</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li class="suggested-search-word">
                        <div>Tomorrow</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li className="suggested-search-word">
                        <div>Swimming pool</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                </ul>
            </section>
        )
    }else{
        // console.log(props.resultsContent);
        return(
            <div className="Results">
                <section class="results-section">
                    <div id="results-title-section">
                        <div id="results-title">
                            <h2>{props.resultsContent.word}</h2>
                            {/* <button className='likeBtn' onClick={clickLike}><i className={`${like ? 'fa-solid' : 'fa-regular'} fa-heart`} ></i></button> */}
                            <button className='likeBtn' onClick={clickLike}>
                                {like ? <FontAwesomeIcon icon={solidHeart} /> : <FontAwesomeIcon icon={farHeart} />}
                            </button>
                        </div>
                
                        <div className="phonetics-loop">  
                       
                            {props.resultsContent.phonetics.map(function(phonetics,index){
                                return(
                                    <span key={index} className="phonetics-section">
                                        <Phonetics phonetics={phonetics}/>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    
                </section>
                
                <section class="results-section">
                    {/* definition and synonyms*/}
                    <div>
                        <p class="meaning-title">Dictionary definition</p>
                            {props.resultsContent.meanings.map(function(meaning,index){
                                return(
                                    <div key={index}>
                                        <Meaning meaning={meaning}/>
                                        <hr />
                                    </div>
                                )
                        })}
                    </div>
                </section>
                {/* synonyms section */}
                <SynonymsSection synonymsContent={props.resultsContent} />
            </div>
        )
    }
}