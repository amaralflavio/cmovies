import React from 'react';
import styled from 'styled-components';

import Cmovies from './Cmovies';
import Text from './Text';
import Link from './Link';


const Footer = (props) => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className={props.className}>
                <Cmovies/>
                <Text>2017. All Rights Reserved</Text>
                <span>Made with &#9825; by </span>
                <Link href="https://www.linkedin.com/in/flávio-amaral-904828103/" target="_blank">Flávio Amaral</Link>
            </div>
        </div>
    )
};


const FooterWithStyles = styled(Footer)`
    
    text-align: center;
    padding: 50px 0 100px 0;
    
    span {
        color: #727272;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
    }
    
    a:hover, a:focus, a:visited {
        color: #727272;
    }
    
`;

export default FooterWithStyles;