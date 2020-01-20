import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BlackPanel from "../components/black-panel"

const Portfolio = () => {
  const [panelOption, setPanelOption] = useState({
    opacity: 1,
    link: '',
  });
  useEffect(() => { setPanelOption({opacity: 0, link: ''}) }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <BlackPanel opacity={panelOption.opacity} link={panelOption.link}/>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/menu/">Go to page 2</Link>
    </Layout>
  )
}

export default Portfolio
