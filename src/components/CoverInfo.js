import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Title from './Title';
import DetailList from './DetailList';
import Button from './Button';


const CoverInfo = (props) => {
    const {poster_path, title, overview, vote_average, adult, release_date, id} = props.data;
    return (
        <div className={props.className}>
            <div className="col-lg-5 col-md-7 col-sm-8 col-xs-11 cover-info-cont">
                <div className="cover-poster">
                    <img src={`http://image.tmdb.org/t/p/w92${poster_path}`} alt=""/>
                    <Title>{title}</Title>
                </div>
                <div className="about-cont">
                    <Text>{overview}</Text>
                </div>
                <DetailList
                    Vote={vote_average}
                    Category={adult ? "Adult" : "Non-Adult"}
                    Type={release_date}
                />
                <Button onClick={ () => window.open(`http://www.themoviedb.org/movie/${id}`)}>More</Button>
            </div>
        </div>
    )
};


const CoverInfoWithStyles = styled(CoverInfo)`

    .cover-poster {
        height: 100px;
        
        img {
            float: left;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }
        
        h2 {
            float: left;
            margin-bottom: 0px;
            margin-top: 79px;
            color: #f1f1f1;
            text-transform: uppercase;
        }
    }

    img {
        height: 100px;
    }
    
    .about-cont {
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        max-height: 125px;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        margin-bottom: 22px;
        margin-top: 22px;
        
        p {
            font-size: 16px;
            color: #b2b2b2;
            margin-top: 0;
            margin-bottom: 0;
            line-height: 1.6;
        }
    }
    
    .cover-info-cont {
        z-index: 2;
        float: right;
        margin-top: 60px;
        margin-right: 20px;
        padding: 30px;
    }
    
    button {
        margin-top: 17px;
        float: right;
    }
    
    @media screen and (max-width: 480px) {
        .cover-info-cont {
            margin-top: 35px;
        }
    
        .cover-poster {
            text-align: center;
            height: 135px;
        
            img {
                float: none;
            }
        
            h2 {
                float: none;
                margin-bottom: 10px;
                margin-top: 10px;
            }
        }
    }
    
`;

export default CoverInfoWithStyles;