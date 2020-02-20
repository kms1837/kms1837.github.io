import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CoverSection = styled.section`
  position: relative;

  padding: 20px 0;
  height: ${props => props.scrollTop ? "100vh": "600px"};

  transition: 1s all;
`

const CenterArticle = styled.article`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  margin: 0 auto;
  color: white;

  text-align: center;
`

const ProfileImgWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 3px solid #fff;

  margin: 20px auto;
`

const Cover = props => {
  const {scrollTop} = props

  return (
    <CoverSection scrollTop={scrollTop}>
      <CenterArticle>
        <ProfileImgWrap></ProfileImgWrap>
        <h1>강민석</h1>
        <p>게임 개발자 지망생이며 웹개발이 취미입니다.</p>
      </CenterArticle>
    </CoverSection>
  )
}

export default Cover
