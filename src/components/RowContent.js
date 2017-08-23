import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const RowContent = (props) => {
    return (
        <div className={props.className}>
            <div className="row content-row">
                <Title>{props.title}</Title>
                <span>
                    <i
                        className={`fa ${props.iconState ? "fa-minus-square-o" : "fa-plus-square-o"}` }
                        onClick={ () => props.more()}>&nbsp;
                    </i>
                </span>
            </div>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
};


const RowContentWithStyles = styled(RowContent)`

    padding: 50px 50px 20px 50px;
    
    .content-row {
    
        h2 {
            float: left;
        }
        
        span {
            float: right;
            margin-right: 8px;
            user-select: none;
        }
        
        i {
            font-size: 24px;
            color: #727272;
            cursor: pointer;
            
            &:hover {
	            filter: contrast(4);
	        }
            
            &:active {
	            filter: opacity(70%);
	        }
        }
        
    }
    
    @media screen and (max-width: 520px) {
        padding: 50px 15px 20px 15px;
    }
    
`;

export default RowContentWithStyles;