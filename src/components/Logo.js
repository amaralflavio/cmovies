import React from 'react';
import styled from 'styled-components';

const Logo = (props) => {
    return (
        <div className={props.className}>
            <img src="images/logo.jpg" alt="" width={props.width} height={props.height}/>
        </div>
    )
};

const LogoWithStyles = styled(Logo)`
    img {
        border-radius: 50%;
    }
`;

export default LogoWithStyles;