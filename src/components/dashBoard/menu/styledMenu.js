
import { Grid, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';


export const ContainerGrid = styled(Grid)`
    background: #eee;
`;

export const ContainerGridColumnMenu = styled(Grid.Column)`
    background: transparent;
    width: ${props => props.desktop} !important;
    padding: 0 !important;
    height: 100vh;
    transition: width 0.3s;
    @media only screen and (max-width: 767px){
        width: ${props => props.mobile} !important;
        
        }
        @media only screen and (min-width: 768px) and (max-width: 991px){
            width: ${props => props.desktop} !important;
        
        }
        @media only screen and (min-width: 992px){
            width: ${props => props.desktop} !important;
        
        }
        @media only screen and (min-width: 1200px) and (max-width: 1919px){
            width: ${props => props.desktop} !important;
        
        }
`;
export const ContainerContent = styled(Grid.Column)`
background: #000;
padding: 0 !important;
height: 100vh;
transition: width 0.3s;

@media only screen and (max-width: 767px){
width: ${props => props.mobile} !important;

}
@media only screen and (min-width: 768px) and (max-width: 991px){
    width: ${props => props.desktop} !important;

}
@media only screen and (min-width: 992px){
    width: ${props => props.desktop} !important;

}
@media only screen and (min-width: 1200px) and (max-width: 1919px){
    width: ${props => props.desktop} !important;

}

`;

export const MenuDiv = styled.div`

width: 100%;
height: 100%;
background: #d987;
padding: 6px;
display:flex;
justify-content: center;
`;

export const WrapButton = styled.div`
  width: 100% ;
  height: 50px ; 
  display: block; 
`;


export const ButtonStyled = styled(Button)`
    background: red !important ;
    width: 100% !important;
    height: 100% !important;
    color: white !important;
    font-weight: bold !important;
    font-size: 0.875rem;
    font-family: Roboto;
    letter-spacing: 0.3px !important;
    margin-bottom: 1.4rem !important;
    &:hover{
        color: white !important;
        background-color:rgba(186,186,186,0.4) !important;
    }
    &:focus{
        color: white !important;
        background-color:#444bf8 !important;
    }

`;

export const MenuText = styled.span`
display:  ${props => props.status} ;
`;

export const IconWrap = styled(Icon)`
display: inline !important;
padding: 0 !important;
margin: 0 !important;
height: '1em';
`;

// width: 100% !important;
// height: 50px;

// color: white !important;
// text-align: left !important;

// background-color: blue !important;


// button 
// background: red !important ;
// width: 100% !important;
// height: 100% !important;
// color: white !important;
// font-weight: bold !important;
// font-size: 0.875rem;
// font-family: Roboto";
// letter-spacing: 0.3px !important;
// margin-bottom: 1.4rem !important;
// &:hover{
//     color: white !important;
//     background-color:rgba(186,186,186,0.4) !important;
// }
// &:focus{
//     color: white !important;
//     background-color:#444bf8 !important;
// }
