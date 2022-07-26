import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingBagOutlined } from "@mui/icons-material";
import oro from './images/oro.jpg';



// adding the container for the navigation bar
//eslint-disable-next-line 
const Container = styled.div`
     border-radius: 0.5rem;
     height: 80px;
     background-color: mistyrose;
     margin-top: 10px;
     
`;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;


const Right = styled.div`
  flex: 2; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// need to figure out how to get the search icon inside the input box
const SearchContainer = styled.div`
   border: none;
   display: flex;
   align-items: center;
   margin-left: 55px;
   padding: 5px;
   background-color: white;
`
const Input = styled.input`
  border: none;
  height: 20px;
`
//adding the navigation bar content, switching the layout from what version 1 looked like.
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <img src={oro} alt="Site logo" height={50} width={100} />
            </Left>
            <Center>
            </Center>
            <Right>
              <ul style={{display: "flex"}}>
                <li style={{marginRight: "20px", display: "flex"}}>
                  <Link style={{textDecoration: 'none'}} to="/">Home</Link>
                </li>
                <li style={{marginRight: "20px", display: "flex"}}>
                  <Link style={{textDecoration: 'none'}} to="/shop">Shop</Link>
                </li>
                <li style={{marginRight: "25px", display: "flex"}}>
                  <Link style={{textDecoration: 'none', }} to="/contact">Contact</Link>
                </li>
                <li style={{marginRight: "25px", display: "flex"}}>
                  <Link style={{textDecoration: 'none', }} to="/register">Register</Link>
                </li>
                <li style={{marginRight: "25px", display: "flex"}}>
                  <Link style={{textDecoration: 'none', }} to="/login">Login</Link>
                </li>
              </ul>
                      <Badge badgeContent={4} color='primary'>
                        <ShoppingBagOutlined />
                      </Badge>
                  <SearchContainer>
                    <Input />
                    <Search style={{color:"black", fontSize: 16}}/>
                  </SearchContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;