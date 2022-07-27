import styled  from 'styled-components';
import React from 'react';
import { mobile } from "../responsive";

// creating a section under the slider for items that are on available
const Info = styled.div`
  position: absolute;
  width: 100%; 
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  ${mobile({ height: "20vh" })}
`;
 
// was going to add the info, title and button at the button but I feel it looked better in the center.

const Title= styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
`;
const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 6px;
  width: 95px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 400px;
`;

const CatalogItems = ({ item }) => {
  return (
    <Container>
       <Image src={item.img}/>
       <Info>
          <Title>{item.title}</Title>
          <Button>Shop Here</Button>
       </Info>
    </Container>
  )
}

export default CatalogItems;