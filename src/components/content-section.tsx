import { Link } from "gatsby"
import React, {forwardRef} from "react"
import styled from "styled-components"

const Section = styled.section`
  position: relative;
  background: ${props => (props.background)};
  padding: 80px 0;
  z-index: 1;
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

const ContentSection = forwardRef<HTMLDivElement>((props, ref)=> {
  const {children, id, title, background} = props;
  return (
    <Section id={id} background={background}>
      <ContentArticle ref={ref}>
        {title && <Title>{title}</Title>}
        {children}
      </ContentArticle>
    </Section>
  )
})

export default ContentSection
