import styled from 'styled-components';
import React from 'react';
import { EmailOutlined, FacebookOutlined, GitHub, Instagram, LocationOnOutlined, PhoneIphoneOutlined, Twitter } from "@mui/icons-material";
import {mobile} from "../responsive";

// these are all the styles for each item in the footer
const Container = styled.div`
  display: flex;
  background-color: slategray;
  ${mobile({ flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
 display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 25px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 8px;
`;
const Right= styled.div`
  flex: 1;
  padding: 20px;

`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 60%;
`;

// putting all the necessary items in the footer container
const Footer = () => {
  return <Container>
       <Left>
         <Logo>Oro.</Logo>
         <Description>Thank you for joining our site. We hope you found everything that you were looking for on today. Oro is a company that appreciates 90's fashion and continues to dedicate our style just to that era. </Description>
         <SocialContainer>
            <SocialIcon color="3B5998">
              <FacebookOutlined />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="C9D1D9">
              <GitHub />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
         </SocialContainer>
       </Left>
       <Center>
         <Title>Useful Links</Title>
         <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Earrings</ListItem>
            <ListItem>Necklaces</ListItem>
            <ListItem>Anklets</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
         </List>
       </Center>
       <Right>
         <Title>Contact Us</Title>
         <ContactItem>
            <LocationOnOutlined style={{marginRight: "10px"}}/>316 Fashion Way, Charlotte NC 28212
         </ContactItem>
         <ContactItem>
            <PhoneIphoneOutlined style={{marginRight: "10px"}}/>123-456-7890
         </ContactItem>
         <ContactItem>
            <EmailOutlined style={{marginRight: "10px"}}/>Oro.contact@email.com
         </ContactItem>
         <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
       </Right>
    </Container>

}

export default Footer;