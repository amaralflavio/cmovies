import React from 'react';
import styled from 'styled-components';

const DetailList = (props) => {
    return (
        <div className={props.className}>
            <ul>
                <li>{props.Vote}</li>
                <li>{props.Category}</li>
                <li>{props.Type}</li>
            </ul>
        </div>
    )
};


const DetailListWithStyles = styled(DetailList)`

    margin-top: 18px;

    ul {
        list-style-type: none;
    }
    
    li {
        display: inline-block;
        color: #ffffff;
        border-right: 1px solid #ffffff;
        padding-right: 10px;
        padding-left: 10px;
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
    }
    
    li:first-child {
        padding-left: 0;
    }
    
    li:last-child {
        border-right: none;
    }
    
`;

export default DetailListWithStyles;