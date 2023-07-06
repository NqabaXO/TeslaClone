import React, { useState } from 'react'
import { styled } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from "../features/car/carSlice"
import { useSelector } from 'react-redux';

function Header() {
     
  const [burgerState, setBurgerState] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <>
         <img src="/logo.svg" alt="" />
      </>
      <ContainerCenter>
        {cars && cars.map((car, index) =>(
          <a key={index} href="/#">{car}</a>
        ))}
      
      </ContainerCenter>
      <ContainerRight>
      <p><a href="/#">Shop</a></p>
      <p><a href="/#">Account</a></p>
      <p><a href="/#" onClick={() => setBurgerState(true)}>Menu</a></p>
      </ContainerRight>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
        <CustomClose onClick={() => setBurgerState(false)}/>
        </CloseWrapper>
        <li><a href="/#">Existing Inventory</a></li>
        <li><a href="/#">Used Inventory</a></li>
        <li><a href="/#">Trade-in</a></li>
        <li><a href="/#">Demo Drive</a></li>
        <li><a href="/#">Insurance</a></li>
        <li><a href="/#">Fleet</a></li>
        <li><a href="/#">Cybertruck</a></li>
        <li><a href="/#">Roadstar</a></li>
        <li><a href="/#">Semi</a></li>
        <li><a href="/#">Charging</a></li>
        <li><a href="/#">Commercial Energy</a></li>
        <li><a href="/#">Utilities</a></li>
       
      </BurgerNav>
    </Container>
  )
}

export default Header;


const Container = styled.div`
min-height: 60px;
position: fixed;
display:flex;
justify-content: space-between;
align-items:center;
padding: 0 34px;
top:0;
left:0;
right:0;
cursor:pointer;
z-index:1;
`

const ContainerCenter = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
flex:0.6;

a{
  font-weight: 600;
  padding: 0 10px;
  flex-wrap: nowrap;
}

@media(max-width:760px){
  display:none;
}
`

const ContainerRight = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
flex:0.2;
overflow-x:visible;
a{
  font-weight: 600;
  margin-right:10px;
}
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    background: white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display: flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    li{
      padding:15px 0;
      border-bottom: 1px solid rgba(0,0,0, .2);
    }

    a{
      font-weight:600;
    }
`



const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   overflow-x:visible;
`