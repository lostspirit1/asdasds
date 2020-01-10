import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { Grid_wrap, GridColumn_menu, GridColumn_content } from "./styles";

export const Grid_main = styled(Grid)`
  ${Grid_wrap}
`;

export const Grid_menu = styled(Grid.Column)`
  ${Grid_wrap}
  @media only screen and (max-width: 767px) {
    width: ${props => props.mobile} !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: ${props => props.desktop} !important;
  }
  @media only screen and (min-width: 992px) {
    width: ${props => props.desktop} !important;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    width: ${props => props.desktop} !important;
`;

export const Grid_content = styled(Grid.Column)`
  ${Grid_wrap}
  @media only screen and (max-width: 767px) {
    width: ${props => props.mobile} !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: ${props => props.desktop} !important;
  }
  @media only screen and (min-width: 992px) {
    width: ${props => props.desktop} !important;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    width: ${props => props.desktop} !important;
  }
`;