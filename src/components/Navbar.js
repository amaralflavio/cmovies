import React from 'react';
import styled from 'styled-components';

import Cmovies from './Cmovies';


const Navbar = (props) => {
    return (
        <div className={props.className}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="navBar-group">
                    <div className="navBarLeft">
                        <Cmovies/>
                    </div>
                    <div className="navBarRight">
                        <ul>
                            <li><a href="#Search">Search</a></li>
                            <li><a href="#movies">Movies</a></li>
                            <li><a href="#series">Series</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


const NavbarWithStyles = styled(Navbar)`

    .navBar-group {
        margin: 50px 34px 25px 34px;
        height: 42px;
    }
    
    .navBarLeft {
        float: left;
        padding-left: 16px;
    }

    .navBarRight {
        float: right;
        height: 42px;
        
        li {
            list-style-type: none;
            display: inline;
            line-height: 42px;
            cursor: pointer;
            
            a {
                padding: 13px 16px 13px 16px;
                color: #727272;
                font-size: 16px;
                font-family: 'Roboto Mono', monospace;
                
                &:hover {
                    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
                    border-radius: 3px;
                    text-decoration: none;
                }
            }
        }
    }
    
    @media screen and (max-width: 520px) {
        .navBar-group { 
             text-align: center;
             height: 95px;
        }
        
        .navBarRight, .navBarLeft {
            float: none;
        }
        
        .navBarRight, .navBarLeft {
            margin-top: 12px;
        }
    }
    
`;

export default NavbarWithStyles;