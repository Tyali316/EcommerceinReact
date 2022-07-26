import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';


const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 97%;
`;


const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: lightgray;;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
    background-color: mistyrose;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
           <Icon>
              <ShoppingCartOutlined />
           </Icon>
           <Icon>
              <SearchOutlined />
           </Icon> 
           <Icon>
           <FavoriteBorderOutlined />
           </Icon>  
        </Info>
    </Container>
  )
}

export default Product;