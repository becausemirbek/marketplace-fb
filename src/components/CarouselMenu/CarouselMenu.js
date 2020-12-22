import React from 'react';

import Carousel from "react-multi-carousel";
import * as Feather from 'react-feather';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import "react-multi-carousel/lib/styles.css";
import './Carousel.css'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 2
  }
};

const ButtonPrev = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #009E7F;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: -15px;
  margin-top: -20px;
  z-index: 99;
`
const ButtonNext = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #009E7F;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: -15px;
  margin-top: -20px;
  z-index: 99;
`
const BtnWrapper = styled('div')``

const CustomBtnGroup = ({next, previous}) => {
  return (
    <BtnWrapper>

      <ButtonPrev className="prevButton" onClick={(e)=>{e.preventDefault() ;previous()}}>
        <Feather.ChevronLeft/>
      </ButtonPrev>

      <ButtonNext className="nextButton" onClick={(e)=>{e.preventDefault(); next()}}>
        <Feather.ChevronRight/>
      </ButtonNext>

    </BtnWrapper>
  )
}

const CarouselMenu = ({data}) => {
  return (
    <div style={{position:"relative"}}>
      <Carousel 
        ssr={true}
        arrows={false}
        showDots={false}
        slidesToSlide={1}
        infinite={true}
        autoPlay={!true}
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
        responsive={responsive}
        additionalTransfrom={0}
        containerClass="custom-pipi-carousel container-with-dots"
        customButtonGroup={<CustomBtnGroup/>}
      >
        {data.map((item, key)=>(
          <div key={key + '-carousel-item'} className="pt-4 row flex-column justify-content-center align-items-center">
            <div color="primary" className={item.colorClass + " row justify-content-center align-items-center categoryList rounded-circle mb-2"}>
              <Link to={item.link}><img src={item.iconSrc} alt="sportsIcon" /></Link>
            </div>
          <p>{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselMenu