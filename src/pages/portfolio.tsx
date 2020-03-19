import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layouts/page-layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BlackPanel from "../components/black-panel"
import Cover from "../components/cover"
import ContentSection from "../components/content-section"
import Skill from "../components/Skill"
import ProjectListItem from "../components/ProjectListItem"

import ProjectListData from "../json/project-list.json"

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
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: "0 auto" }}>
          <Image />
        </div>
      </ContentSection>

      <ContentSection title="Skill" background="#f5f5f5">
        <Skill></Skill>
      </ContentSection>

      <ContentSection title="Project" background="#e6e5e5">
        {ProjectListData.projects.map((item, index:number) => {
          return (
            <ProjectListItem title={item.title} desc={item.desc}>
            </ProjectListItem>
          )
        })}
      </ContentSection>
    </Layout>
  )
}

export default Portfolio
