import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BlackPanel from "../components/black-panel"

const Wrap = styled.div`
  text-align: center;
`

const Img = styled(Image)`
  margin: 0 auto;
`

const Blog = () => {
  const [panelOption, setPanelOption] = useState({
    opacity: 1,
    link: '',
  });
  useEffect(() => { setPanelOption({opacity: 0, link: ''}) }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <BlackPanel opacity={panelOption.opacity} link={panelOption.link}/>
      <Wrap>
        <h1>Blog는 공사중...</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img />
        </div>
        <Link to="/menu/">이전으로 돌아가기</Link>
      </Wrap>
    </Layout>
  )
}

export default Blog
