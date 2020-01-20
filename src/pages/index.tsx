import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import BasicLayout from "../components/basic-layout"
import Image from "../components/image"
import SEO from "../components/seo"

const CenterH1 = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  height: 200px;
  line-height: 200px;

  text-align: center;
  vertical-align: middle;
`

const IndexPage = () => {
  setTimeout(() => {
    window.location = "/menu/";
  }, 1 * 1000)

  return (
    <BasicLayout>
      <SEO title="Home" />
      <CenterH1>
        Now Loading...
      </CenterH1>
    </BasicLayout>
  )
}

export default IndexPage
