import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Brand from './Brand';


const Cmovies = (props) => {
    return (
        <div className={props.className}>
            <ul>
                <li><Logo width="42" height="42"/></li>
                <li><Brand>Movies</Brand></li>
            </ul>
        </div>
    )
};


const CmoviesWithStyles = styled(Cmovies)`

    ul {
        list-style-type: none;
    }
    
    li {
        display: inline-block;
    }
    
`;

export default CmoviesWithStyles;