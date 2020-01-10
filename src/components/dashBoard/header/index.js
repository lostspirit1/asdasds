import React from 'react';
import { Wrap, Content, ToggleButton, ToggleContent, Logo  } from './styles/index';
import { Image } from 'semantic-ui-react';

import logo from '../../../assets/images/agua.svg'

function Header() {
  return (
    <Wrap>
        <Content>
            <Logo />  
            <ToggleContent  />    
            <ToggleButton />  
        </Content>
    </Wrap>
  )
}

export default Header;