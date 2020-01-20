import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CoverSection = styled.section`
  padding: 20px 0;
  background: skyblue;
`

const CenterArticle = styled.article`
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

const Cover = ({ }) => (
  <CoverSection>
    <CenterArticle>
      <ProfileImgWrap></ProfileImgWrap>
      <h1>강민석</h1>
      <p>게임 개발자 지망생이며 웹개발이 취미입니다.</p>
    </CenterArticle>
  </CoverSection>
)

export default Cover
