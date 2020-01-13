import React from 'react';
import './style.css';
import { GridMain,GridMenu,GridContent  } from './styles/containers/index';
import Header from '../header/index';
import { Button } from 'semantic-ui-react';
import { useSelector } from "react-redux";

const MenuDashBoard = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <GridMain>
      <Header/> 
      <GridMenu desktop={toggleMenu ? '12.5%' : '3.5%'} mobileGrid = {toggleMenu ? '31.25%' : '12.5%'} wdscreen = { toggleMenu? '80%' : '2%'}>
      </GridMenu>
      <GridContent desktop={toggleMenu ? '87.5%' : '96.5%'} mobileGrid = { toggleMenu ? '68.75%' : '87.5%' }>
      <Button >
      </Button>
      <p>a </p>
      </GridContent>
    </GridMain>

  //   <GridWrapper>
  //   <GridMenuWrapper desktop={open ? '12.5%' : '3.5%'} mobile= {open ? '31.25%' : '12.5%'} wdscreen = { open? '80%' : '2%'} >
  //   <Menu style = {{position:'absolute'}}>
  //   <ButtonWrap >
  //   <StyledButton style={{padding:0, position: 'relative'}}>
  //     <IconWrap name='history' size='big'/>
  //     <Span status = { open ? 'inline-flex' : 'none' } > Testando </Span> 
  //   </StyledButton>
  //   </ButtonWrap>
  //   </Menu>

  //   </GridMenuWrapper>
  //   <GridContentWrapper desktop={open ? '87.5%' : '96.5%'} mobile = { open ? '68.75%' : '87.5%' }>
  //         <Button icon onClick={handleClick}>
  //           <Icon name="align justify" />
  //         </Button>
  //   </GridContentWrapper>
  //  </GridWrapper>
  );
}
{/* 
// const MenuMain = () => (
//     <>
//      <Grid style={{background: '#eee'}}>

//       <Grid.Column computer={2} tablet={4} mobile={5} style={{background: '#000', padding:'0', height:'100vh'}}>

//       <div style={{background:'#000', width:'100%', height:'100%'}}>

//       </div>
//       </Grid.Column>
//       <Grid.Column width={14} style={{background: '#eee', padding:'0'}}>

//       </Grid.Column>
//      </Grid>

//     {/* <Menu className="borderless Menu" vertical>
//         <Menu.Item className="logo">
//             <Image src={logo} style={{width:'50px', height:'30px',marginLeft:'20px'}}/>
//             <h3 style={{margin:'0', color:'#fff'}}>E M A S A</h3>
//         </Menu.Item>           
//         <Divider style={{width:'100%', color:'#000 !important'}} />
//         <Menu.Item > <Button className="btnMenu" content='Menu' icon='headphones' /> </Menu.Item>
//         <Menu.Item> <Button className="btnMenu" content='Two' icon='volume up' />  </Menu.Item>
//         <Menu.Item> <Button className="btnMenu" content='Three' icon='pause' />  </Menu.Item>
//     </Menu> */}
    {/* <Container fluid style={{padding:'0 !important', background:'#000'}}>


//      <Grid.Column  width={14} style={{padding:'0', margin: '0', background:'#000'}}>
//     <Button icon>
//          <Icon name='align justify' />
//     </Button>
//     </Grid.Column> 
//     </Container> */}   


export default MenuDashBoard;