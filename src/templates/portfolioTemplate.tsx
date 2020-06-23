import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layouts/page-layout"
import ImageSlider from "../components/image-slider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";

const ContentSection = styled.section`
  position: relative;
  background: #fff;
  min-height: 1500px;
`
const ContentArticle = styled.article`
  width: 80%;
  padding: 20px 20px;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  font-size: 70px;
  width: 100%;
`

const Links = styled.div`
  text-align: center;
  padding: 10px 0;
  margin: 0 auto;
  width: 200px;
  height: 65px;
  border: 2px solid #777;
  border-radius: 10px;

  a {
    margin: 0 10px;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout hiddenHeaderMenu={true}>
      <ImageSlider images={frontmatter.images}/>
      <ContentSection>
        <ContentArticle>
          <Title>{frontmatter.title}</Title>
          <Links>
            {frontmatter.github && <a href={frontmatter.github}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>}
            {frontmatter.file && <a href={frontmatter.file}>
              <FontAwesomeIcon icon={faFileDownload} size="2x"/>
            </a>}
            {frontmatter.url && <a href={frontmatter.url}>
              <FontAwesomeIcon icon={faLink} size="2x"/>
            </a>}
            {frontmatter.npm && <a href={frontmatter.npm}>
              <FontAwesomeIcon icon={faNpm} size="2x"/>
            </a>}
          </Links>
          {/* <h2>{frontmatter.date}</h2> */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ContentArticle>
      </ContentSection>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        github
        file
        npm
        url
        images
      }
    }
  }
`