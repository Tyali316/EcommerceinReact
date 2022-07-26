import React from 'react';
import styled from 'styled-components';
import { catalog } from '../data';
import CatalogItems from './CatalogItems';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
`;

const Catalog = () => {
  return <Container>
      {catalog.map(item=>(
        <CatalogItems item={item} key={item.id}/>
      ))}
    </Container>;
};

export default Catalog;