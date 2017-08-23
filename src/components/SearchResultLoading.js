import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const SearchResultLoading = (props) => {
    return (
        <div className={props.className}>
            <div className="result-cont">
                <div className="result-content">
                    <Text>Searching...</Text>
                </div>
            </div>
        </div>
    )
};


const SearchResultLoadingWithStyles = styled(SearchResultLoading)`

    .result-content {
        width: 70%;
        margin: auto;
        background-color: #403F44;
        border-radius: 2px;
        margin-top: 1px;
        padding-top: 25px;
        padding-bottom: 25px;
    }
    
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
    
    @media screen and (max-width: 768px) {
        .result-content { 
             width: 90%;
        }
    }
   
`;

export default SearchResultLoadingWithStyles;