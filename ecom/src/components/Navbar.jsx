import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search } from "@mui/icons-material";
import oro from './images/oro.jpg';
import { mobile } from "../responsive";
// import './Navbar.css';

// adding the container for the navigation bar
//eslint-disable-next-line 
const Container = styled.div`
     border-radius: 0.5rem;
     height: 70px;
     background-color: mistyrose;
    //  margin-top: 10px;
     ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ flex: 2, justifyContent: "center" })}
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
  ${mobile({ width: "50px" })}
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
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", marginRight: "20px"}} to="/">Home</Link>
                </li>
                <li style={{ display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", marginRight: "20px"}} to="/shop">Shop</Link>
                </li>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", paddingRight: "100px"}} to="/contact">Contact</Link>
                </li>
          
                <li style={{display: "flex"}}>
                <br />
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", paddingLeft: "28%"}} to="/register">Register</Link>
                </li>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "black", fontSize: "20px", paddingLeft: "48%"}} to="/login">Login</Link>
                </li>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'underline', color: "black", fontSize: "20px", paddingLeft: "75%" }} to="/cart">Cart</Link>
                  <Badge badgeContent={4} color='primary' size="15px">
                        {/* <ShoppingBagOutlined /> */}
                  </Badge>
                </li>
             </ul>          
                  <SearchContainer>
                    <Input />
                    <Search placeholder="Search" style={{color:"black", fontSize: 16}}/>
                  </SearchContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;