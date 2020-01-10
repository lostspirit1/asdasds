import styled from 'styled-components';
import { Grid,Button, Image } from 'semantic-ui-react';
import { wrapStyle,contentLogo, LogoImage } from './styles';

export const Wrap = styled(Grid.Row)`
    ${wrapStyle}
`;

export const Content = styled.div`
    ${contentLogo}
`;

export const Logo = styled.div`
    ${LogoImage}
`;


export const ToggleButton = styled(Button)`

`;

export const ToggleContent = styled(Button)`

`;