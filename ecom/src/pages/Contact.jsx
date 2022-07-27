import React from 'react';
import Navbar from '../components/Navbar';
import styled from "styled-components";
import Footer from '../components/Footer';
import Announcements from '../components/Announcements';
import {mobile} from "../responsive";

const Container = styled.div`
   width: 100%;
   height: 100vh; 
   background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
   url("https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2017_27/2063251/170706-better-gold-se-258p.jpg") 
    center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 15px 0px 0px;
  padding: 10px;
`;
const Select = styled.select`
   padding: 10px;
   margin-top: 10px;
   width: 100%;
`;
const Option = styled.option``;

const Textarea = styled.textarea`
   width:100%;
   padding: 20px;
   margin-top: 15px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer; 
  display: block;
  margin: auto;
  margin-top: 15px;
`;

// TAKE A LOOK AT THE NAVBAR VS OTHER TEXT SETTING BEFORE YOU MOVE FORWARD!
const Contact = () => {
  return (
    <>
    <Announcements />
    <Navbar />
     <Container>
      <Wrapper>
        <Title style={{textAlign: "center"}}>Contact Us</Title>
              <Form>
                <p>Thank you so much for shopping our new upgraded site. I hope you enjoyed the new features and design.
                  Please leave kind words below.
                </p>
                  <Input placeholder="first-name" required/>
                  <Input placeholder="last-name" required/>
                  <Select>
                    <Option disabled selected>How did you hear about us?</Option>
                    <Option>Surfing the web</Option>
                    <Option>RoadtoHire Presentation</Option>
                    <Option>From an ad</Option>
                  </Select>
                <br/>
                  <Textarea placeholder="Text goes here"></Textarea>
                <Button style={{alignItems: "center"}}>Submit</Button>
              </Form>
       </Wrapper>
     </Container>
  <Footer />
  </>
  )
}

export default Contact;
