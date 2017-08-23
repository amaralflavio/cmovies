import styled from 'styled-components';

const Input = styled.input`
	width: 50%;
	height: 40px;
	font-size: 16px;
	color: #727272;
	background-color: #403F44;
	border: none;
	border-radius: 2px;
	padding-left: 18px;
	padding-right: 18px;
	font-family: 'Open Sans', sans-serif;
	
	:focus { 
        background-color: #F1F1F1;
        outline: none;
        width: 70%;
    }
    
    -webkit-transition: background-color, width 0.4s;
    -moz-transition: background-color, width 0.4s;
    -o-transition: background-color, width 0.4s;
    transition: background-color, width 0.4s;
    
    @media screen and (max-width: 768px) {
        width: 70%;
        
        :focus { 
            width: 90%;
        }
    }
`;

export default Input;