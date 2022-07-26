import { Send } from '@mui/icons-material';
import styled from 'styled-components';
import React from 'react';

// adding the style for the newsletter container below
const Container = styled.div`
   height: 45vh;
   background-color: mistyrose;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
   margin: 20px 20px 20px 20px;
   border-radius: 1rem;
`;
const Title = styled.h1`
  font-size: 55px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
  padding-top: 5px;
  cursor: pointer;
`;

// adding the newsletter container and what input goes inside
const Newsletter = () => {
  return (
    <Container>
        <Title>Want to be apart of our Newsletter?</Title>
        <Description>When you sign up for our newsletter, you recieve updates about new arrivals, sales and more!</Description>
        <InputContainer>
           <Input placeholder='Enter your email address here.' />
           <Button>
              <Send />
           </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;