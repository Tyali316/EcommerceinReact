import React from 'react';
import styled from "styled-components";
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.dvi``;
const Title = styled.h1``;
const Form = styled.form``;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;

const Register = () => {
  return (
    <Container>
          <Announcements />
          <Navbar />
          <Wrapper>
              <Title>Create an Account</Title>
              <Form>
                  <Input placeholder="first-name" />
                  <Input placeholder="last-name" />
                  <Input placeholder="email" />
                  <Input placeholder="username" />
                  <Input placeholder="password" />
                  <Input placeholder="confirm password" />
                  <Agreement>By creating an account, I consent to the processing of my personal
                      data in accordance with the <b>Privacy Policy</b>
                  </Agreement>
                  <Button>Create</Button>
              </Form>
          </Wrapper>
        <Footer />
      </Container>
  )
}

export default Register;