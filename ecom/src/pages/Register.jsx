import React from 'react';
import styled from "styled-components";
import Announcements from '../components/Announcements';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import { mobile } from "../responsive";


const Container = styled.div`
   width: 100%;
   height: 100vh; 
   background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
   url("https://www.byrdie.com/thmb/pp0jWhFJjI6FMwuzK4BBdlRFWgA=/800x800/filters:no_upscale():max_bytes(150000):strip_icc()/131000705_386433039355061_7245313917769525593_n-91ca0279f32d4314b1938ae6ff907d7d.jpg") 
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
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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

const Register = () => {
  return (
    <>
    <Announcements />
    <Navbar />
       <Container>
          <Wrapper>
              <Title style={{textAlign: "center"}}>Create an Account</Title>
              <Form>
                  <Input placeholder="first-name" required/>
                  <Input placeholder="last-name" required/>
                  <Input placeholder="email" required/>
                  <Input placeholder="username" required/>
                  <Input placeholder="password" required/>
                  <Input placeholder="confirm password" required/>
                  <Agreement>By creating an account, I consent to the processing of my personal
                      data in accordance with the <b>Privacy Policy</b>
                  </Agreement>
                  <Button style={{alignItems: "center"}}>Create</Button>
              </Form>
          </Wrapper>
       </Container> 
    <Footer />
    </>
     
  )
}

export default Register;