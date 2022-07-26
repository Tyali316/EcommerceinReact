import React from 'react';
import Navbar from '../components/Navbar';
import styled from "styled-components";
import Footer from '../components/Footer';
import Announcements from '../components/Announcements';

const Container = styled.div``;
// TAKE A LOOK AT THE NAVBAR VS OTHER TEXT SETTING BEFORE YOU MOVE FORWARD!
const Contact = () => {
  return (
    <Container>
        <Announcements />
        <Navbar />
        <Footer />
    </Container>
  )
}

export default Contact;
