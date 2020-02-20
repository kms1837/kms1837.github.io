import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layouts/page-layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BlackPanel from "../components/black-panel"
import Cover from "../components/cover"
import ContentSection from "../components/content-section"


const Portfolio = props => {
  const { scrollTop } = props;
  const [panelOption, setPanelOption] = useState({
    opacity: 1,
    link: '',
  })

  useEffect(() => { 
    setPanelOption({opacity: 0, link: ''})
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {/* <BlackPanel opacity={panelOption.opacity} link={panelOption.link}/> */}
      <Cover scrollTop={scrollTop}></Cover>
      <ContentSection title="About" background="#fff">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </ContentSection>
      <ContentSection title="Skill" background="#f5f5f5">

      </ContentSection>
      <ContentSection title="Project" background="#e6e5e5">

      </ContentSection>
    </Layout>
  )
}

export default Portfolio
