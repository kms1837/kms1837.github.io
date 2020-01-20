import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background: ${props => (props.background)};
`

const ContentArticle = styled.article`
  width: 80%;
  min-height: 550px;
  padding: 20px 0;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const ContentSection = ({ children, title, background }) => (
  <Section background={background}>
    <ContentArticle>
      {title && <Title>{title}</Title>}
      {children}
    </ContentArticle>
  </Section>
)

export default ContentSection
