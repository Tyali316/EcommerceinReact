import React from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Title = styled.h1`
  text-align: center;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
`;
const Option = styled.option``;


const Shop = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Newsletter />
      <Title>Earrings</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
            <Option disabled selected>Sort</Option>
            <Option>New Arrivals</Option>
            <Option>Lowest Price</Option>
            <Option>Highest Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
    <Footer />
    </Container>
    
  )
};

export default Shop;