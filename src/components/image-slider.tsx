
import React, { useState } from "react"
import styled from "styled-components"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const PictureSection = styled.div`
  background: #000;
  overflow: hidden;
  height: 720px;
`

const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 720px;
  filter: blur(10px);
`

const BlackPanel = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: 1;
`

const PictureArticle = styled.article`
  position: relative;
  width: 80%;
  height: 720px;
  max-width: 1200px;
  margin: 0 auto;
`

const Menu = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;

  z-index: 1;
  color: white;
`

const ImageGroup = styled.div`
  position: relative;
  height: 100%;
  .show {
    opacity: 1;
  }
`

const ImageWrap = styled.div`
  position: absolute;
  top: 0;

  transition: all 0.5s;

  opacity: 0;

  height: 100%;
  width: 100%;
`

const LeftItem = styled.div`
  float: left;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
`
const RightItem = styled.div`
  float: right;
  padding-right: 10px;
  cursor: pointer;
  user-select: none;
`

const ImageSlider = props => {
    const { images, child } = props;
    const [ currentImage, setCurrentImage ] = useState(0);

    const nextImage = dir => {
      const nextValue = currentImage + dir;
      let value = nextValue < 0 ? images.length - 1 : (nextValue) % images.length;
      
      setCurrentImage(value);
    }

    return (
      <PictureSection>
        <SectionBackground>
          <BlackPanel/>
          {images && <Image file={images[currentImage]}/>}
        </SectionBackground>
        <PictureArticle>
          {images && 
            <ImageGroup>
              {images.map( (item, index) => {
                return (
                <ImageWrap className={currentImage == index && "show"}>
                  <Image file={item}/>
                </ImageWrap>
                )
              })}
            </ImageGroup>
          }
          {images && images.length > 1 && <Menu>
            <LeftItem onClick={() => {nextImage(-1)}}>
              <FontAwesomeIcon icon={faChevronCircleLeft} size="2x"/>
            </LeftItem>
            <RightItem onClick={() => {nextImage(1)}}>
              <FontAwesomeIcon icon={faChevronCircleRight} size="2x"/>
            </RightItem>
          </Menu>}
        </PictureArticle>
        {child}
      </PictureSection>
    )
}  

export default ImageSlider