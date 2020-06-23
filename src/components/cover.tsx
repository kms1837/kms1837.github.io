import React, { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import Image from "./image"
import Contect from "./contect"

const CoverSection = styled.section`
  position: relative;

  padding: 20px 0;
  height: ${props => props.scrollTop ? "100vh": "600px"};

  transition: 1s all;
`

const CenterArticle = styled(motion.article)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  margin: 0 auto;
  color: white;

  text-align: center;

  opacity: 0;
`

const ProfileImgWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 3px solid #fff;

  margin: 20px auto;
  overflow: hidden;
`

const LinkBox = styled.div`
  display: inline-block;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 5px;
`

const Cover = props => {
  const {id, scrollTop} = props
  const openAnima = useAnimation();
  
  useEffect( () => {
    openAnima.start({
      opacity: [0, 1],
      top: ["45%", "50%"]
    });
  }, []);

  return (
    <CoverSection id={id} scrollTop={scrollTop}>
      <CenterArticle animate={openAnima} transition={{duration: 1}}>
        <ProfileImgWrap>
          <Image file="profile.jpg"/>
        </ProfileImgWrap>
        <h1>강민석</h1>
        <p>게임 개발자 지망생이며 웹개발이 취미입니다.</p>
        <LinkBox>
          <Contect />
        </LinkBox>
      </CenterArticle>
    </CoverSection>
  )
}

export default Cover
