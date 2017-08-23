import React from 'react';
import styled from 'styled-components';

const Loading = (props) => {
    return (
        <div className={props.className}>
            <i className="fa fa-spinner">&nbsp;</i>
        </div>
    )
};

const LoadingWithStyles = styled(Loading)`
    
    height: ${props => props.height}px; 
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    text-align: center;
    
    i {
        -webkit-animation-name: spin;
        -webkit-animation-duration: 2000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: spin;
        -moz-animation-duration: 2000ms;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -ms-animation-name: spin;
        -ms-animation-duration: 2000ms;
        -ms-animation-iteration-count: infinite;
        -ms-animation-timing-function: linear;
        
        animation-name: spin;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        
        font-size: 36px;
        position: relative;
        top: 45%;
    }
    
    @-ms-keyframes spin {
        from { -ms-transform: rotate(0deg); }
        to { -ms-transform: rotate(360deg); }
    }
    @-moz-keyframes spin {
        from { -moz-transform: rotate(0deg); }
        to { -moz-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`;

export default LoadingWithStyles;