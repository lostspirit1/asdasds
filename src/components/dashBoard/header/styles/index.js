import styled from 'styled-components';
import { Grid,Button, Image } from 'semantic-ui-react';
import { wrapStyle,content, LogoImage, content_item , barMenu} from './styles';

export const Wrap = styled(Grid.Row)`
    ${wrapStyle}
`;

export const Content = styled.div`
    ${content}
`;

export const ContentItem = styled.div`
    ${content_item}
`;

export const Logo = styled(Image)`
    ${LogoImage}
`;

export const ToggleButton = styled(Button)`

`;
export const BarButton = styled(Button)`
    ${barMenu}
`;