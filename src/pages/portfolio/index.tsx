import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../../components/layouts/page-layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

import BlackPanel from "../../components/black-panel"
import Cover from "../../components/cover"
import ContentSection from "../../components/content-section"
import History from "../../components/History"
import Skill from "../../components/Skill"
import ProjectListItem from "../../components/projectListItem"

import ProjectListData from "../../json/project-list.json"

const listItemWidth = 400;
const listItemMargin = 10;

const ProjectListWrap = styled.div`
  width: ${props => props.width}px;
  margin: 0 auto;
  transition: 0.5s all;
`

const AboutWrap = styled.div`
  padding-top: 100px;
  text-align: center;
`

const Title = styled.h2`
  background: #FF7700;
  padding: 5px 10px;
  color: #fff;
  display: inline-block;
`

const Desc = styled.h4`
  text-align: left;
  margin: 0 auto;
  width: 80%;
  font-weight: 100;
  line-height: 1.2;
`

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 0;
`

const BlackBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background: #000;
  opacity: 0.5;
  z-index: 1;
`

const useScroll = elementID => {
  const [goalScroll, setGoalScroll] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      const element = document.body.querySelector(elementID)
      if ((document.documentElement.scrollTop >= (element.offsetTop - (window.innerHeight/2))) && !goalScroll) {
        setGoalScroll(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return goalScroll
} // 현재 스크롤이 해당 객체 위치에 있으면 true로 상태를 바꿈

const Portfolio = props => {
  const projectListArticle = useRef<HTMLDivElement>(null);
  const skillArticle = useRef<HTMLDivElement>(null);
  const { scrollTop } = props;
  const [panelOption, setPanelOption] = useState({
    opacity: 1,
    link: '',
  })

  const [projectListWidth, setProjectListWidth] = useState(0);

  const playAbout = useScroll("#About");
  const playSkill = useScroll("#Skill");
  const playProject = useScroll("#Project");

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
      <SEO title="Portfolio" />
      {/* <BlackPanel opacity={panelOption.opacity} link={panelOption.link}/> */}
      <Background>
        <BlackBackground />
        <Image file="background2.jpg"/>
      </Background>

      <Cover id="Home" scrollTop={scrollTop}></Cover>

      <ContentSection id="About" title="About" background="#fff">
        {/* <Image file="gatsby-astronaut.png"/> */}
        <AboutWrap>
          <Title>"프로그래머가 되고싶어 외길을 걸어온 <b>강민석</b>입니다"</Title>
          <Desc>더 많은 기회와 배움을 위해 제주도에서 서울로, 게임개발에 대한 교류를 위해 학교 게임 개발 동아리에 들어가 졸업할때까지 활동, 군대에서도 배우고싶어 SW개발병으로, 지금도 멈추지 않고 프로그래머가 되기위해 도전중입니다.</Desc>
        </AboutWrap>
        <History play={playAbout}/>
      </ContentSection>

      <ContentSection id="Skill" title="Skill" background="#f5f5f5" ref={skillArticle}>
        <Skill play={playSkill}></Skill>
      </ContentSection>

      <ContentSection id="Project" title="Project" background="#e6e5e5" ref={projectListArticle}>
        <ProjectListWrap width={projectListWidth}>
          {ProjectListData.projects.map((item:any, index:number) => {
            return (
              <ProjectListItem play={playProject} info={item} key={index} width={listItemWidth}>
              </ProjectListItem>
            )
          })}
        </ProjectListWrap>
      </ContentSection>
    </Layout>
  )
}

export default Portfolio
