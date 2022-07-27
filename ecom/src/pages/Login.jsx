import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/736x/30/45/f6/3045f612f15ec89e00b4e84f06f41fa4.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: slategray;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;
  margin: auto;
  margin-top: 15px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
  <>
  <Announcements />
    <Navbar />
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" required/>
          <Input placeholder="password" required/>
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
   <Footer />
  </>
  )
};

export default Login;