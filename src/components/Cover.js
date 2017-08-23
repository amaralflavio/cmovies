import React from 'react';
import styled from 'styled-components';

import CoverInfo from './CoverInfo';

const Cover = (props) => {
    return (
        <div className={props.className}>
            <div className="img-cover">
                <CoverInfo data={props.data}/>
                <div className="filter">&nbsp;</div>
            </div>
        </div>
    )
};

const CoverWithStyles = styled(Cover)`

    max-width: 100%;
    height: 520px;
    background-color: #000000;
    
    .img-cover {
        background: url(${props => props.background}) no-repeat; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 520px;
    }
    
    .filter {
        filter: opacity(70%);
        width: 100%;
        height: 520px;
        background-color: #000;
    }
    
`;

export default CoverWithStyles;
