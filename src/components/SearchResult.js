import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const SearchResult = (props) => {
    return (
        <div className={props.className}>
            <div className="result-cont">
                <div className="result-content" onClick={() => window.open(`http://www.themoviedb.org/movie/${props.data.id}`)}>
                    <ul>
                        <li><img src={`http://image.tmdb.org/t/p/w92${props.data.poster_path}`} alt=""/></li>
                        <li><Text>{props.data.title}</Text></li>
                        <li><span>{props.data.release_date}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


const SearchResultWithStyles = styled(SearchResult)`

    .result-content {
        width: 70%;
        margin: auto;
        background-color: #403F44;
        border-radius: 2px;
        margin-top: 1px;
        cursor: pointer;
        
        &:hover {
            background-color: #F1F1F1;
            -webkit-transition: background-color 0.4s;
            -moz-transition: background-color 0.4s;
            -o-transition: background-color 0.4s;
            transition: background-color 0.4s;
        }   
        
        &:active {
	        filter: opacity(88%);
	    }
    }
    
    ul {
        list-style-type: none;
        text-align: left;
        padding: 15px 18px 15px 18px;
    }
    
    li {
        display: inline-block;
    }
    
    li:last-child {
        float: right;
        line-height: 47px;
    }
    
    p {
        font-size: 16px;
        margin-top: 0px;
        margin-bottom: 0;
        margin-left: 15px;
    }
    
    span {
        margin-left: 20px;
        text-align: right;
        color: #727272;
        font-size; 14px;
    }
    
    img {
        height: 48px;
    }
    
    @media screen and (max-width: 768px) {
        .result-content { 
             width: 90%;
        }
    }
`;

export default SearchResultWithStyles;