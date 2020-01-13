import { css } from 'styled-components';

export const wrapStyle = css`
    min-height: 55px;
    max-height: 55px;
    width:100%;  
    background: yellow;
    padding: 0 !important;
`;

export const content = css`
    width:240px;
    height:100%;
    background-color: rgba(31,30,30,.12)!important;
    line-height: 52px;
    padding: 10px;
    transition: all .3s;
`;

export const LogoImage = css`
    height:100%;
`;

export const content_item = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    width:100%;
`;

export const barMenu = css`
    color: #000 !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
`;