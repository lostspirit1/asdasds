import { css } from 'styled-components';
import logo from '../../../../assets/images/agua.svg';  

export const wrapStyle = css`
    min-height: 55px;
    max-height: 55px;
    width:100%;  
    background: yellow;
    padding: 0 !important;
`;

export const contentLogo = css`
    width:240px;
    height:100%;
    background-color: rgba(31,30,30,.12)!important;
    line-height: 52px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: all .3s;
`;

export const LogoImage = css `
    width:50px;
    height:40px;
    background: url(${logo}) ;
`;