import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../../components/layouts/page-layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

import BlackPanel from "../../components/black-panel"
import Cover from "../../components/cover"
import ContentSection from "../../components/content-section"
import Skill from "../../components/Skill"
import ProjectListItem from "../../components/ProjectListItem"

import ProjectListData from "../../json/project-list.json"

const listItemWidth = 400;
const listItemMargin = 10;

const ProjectListWrap = styled.div`
  width: ${props => props.width}px;
  margin: 0 auto;
`

const Portfolio = props => {
  const projectListArticle = useRef<HTMLDivElement>(null);
  const { scrollTop } = props;
  const [panelOption, setPanelOption] = useState({
    opacity: 1,
    link: '',
  })

  const [projectListWidth, setProjectListWidth] = useState(0);

  const listItemWrapResize = () => {
    const listItemCount = Math.floor(projectListArticle.current.offsetWidth / listItemWidth);
    setProjectListWidth(listItemCount * (listItemWidth+listItemMargin));
  }

  useEffect(() => { 
    setPanelOption({opacity: 0, link: ''})
    listItemWrapResize();
    window.addEventListener('resize', listItemWrapResize)
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

      <ContentSection title="Project" background="#e6e5e5" ref={projectListArticle}>
        <ProjectListWrap width={projectListWidth}>
          {ProjectListData.projects.map((item:any, index:number) => {
            return (
              <ProjectListItem info={item} key={index} width={listItemWidth}>
              </ProjectListItem>
            )
          })}
        </ProjectListWrap>
      </ContentSection>
    </Layout>
  )
}

export default Portfolio
