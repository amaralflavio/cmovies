import React from 'react';
import styled from 'styled-components';

const Content = (props) => {
    return (
        <div className={props.className} onClick={() => window.open(`http://www.themoviedb.org/movie/${props.id}`)}>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 poster-cont">
                <div className="img-content">&nbsp;</div>
            </div>
        </div>
    )
};

const ContentWithStyles = styled(Content)`

    .poster-cont {
        margin-bottom: 30px;
    }

    .img-content {
        background: url(${props => props.background}) no-repeat; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 360px;
        
        &:hover {
            cursor: pointer;
            filter: brightness(70%);
        }
    }
    
    @media screen and (max-width: 1200px) {
        .img-content {
            height: 280px;
        }
    }
    
    @media screen and (max-width: 768px) {
        .img-content {
            height: 460px;
        }
    }
    
     @media screen and (max-width: 680px) {
        .img-content {
            height: 360px;
        }
    }
    
    
    @media screen and (max-width: 520px) {
        .img-content {
            height: 280px;
        }
    }
    
    @media screen and (max-width: 420px) {
        .img-content {
            height: 220px;
        }
    }
    
`;

export default ContentWithStyles;