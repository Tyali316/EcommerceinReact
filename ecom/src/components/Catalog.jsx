import React from 'react';
import styled from 'styled-components';
import { catalog } from '../data';
import { mobile } from "../responsive";
import CatalogItems from './CatalogItems';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Catalog = () => {
  return <Container>
      {catalog.map(item=>(
        <CatalogItems item={item} key={item.id}/>
      ))}
    </Container>;
};

export default Catalog;