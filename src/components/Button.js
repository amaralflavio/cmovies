import styled from 'styled-components';

const Button = styled.button`
	padding: 8px 18px 8px 18px;
	font-size: 16px;
	color: #ffffff;
	border: 1px solid #ffffff;
	border-radius: 3px;
	outline: none;
	background-color: transparent;
	font-family: 'Roboto Mono', monospace;
	
	&:hover {
	    background-color: #ffffff;
	    color: #727272;
	    -webkit-transition: background-color 0.4s;
        -moz-transition: background-color 0.4s;
        -o-transition: background-color 0.4s;
        transition: background-color 0.4s;
	}
	
	&:active {
	    filter: opacity(88%);
	}
`;

export default Button;