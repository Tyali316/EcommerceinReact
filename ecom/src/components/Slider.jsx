import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../data';


// adding slider for images
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: slategray;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

// arrows are not aligned, needs to be fixed
const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: white;
   border-radius: 50%;
   display:flex
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
// adding props for the right and left arrows
   left: ${props=> props.direction === "left" && "10px"};
   right: ${props=> props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;
// setting up the slider for the image and adding a title, description and button
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
  padding: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 35px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Description = styled.p`
  margin: 25px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

const Button = styled.button`
 font-size: 16px;
 padding: 10px;
 background-color: black;
 border: none;
 color: white;
 cursor: pointer;
`;

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
// creating some conditional statements for the slider to work onClick      
    if (direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
        setSlideIndex( slideIndex < 2 ? slideIndex +1 : 0);
    }
   };

  return (
       <Container>
         <Arrow direction= "left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
         </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item =>(
           <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description> {item.description}</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
           </Slide>
        ))}
          </Wrapper>
         <Arrow direction= "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
         </Arrow>
       </Container>
   )
}

export default Slider;