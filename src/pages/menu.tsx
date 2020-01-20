import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BasicLayout from "../components/basic-layout"

import BlackPanel from "../components/black-panel"
import { useGlobalState } from "../components/global-state"

const Title = styled.h1`
  position: absolute;
  top: 30px;
  left: 30px;
`

const Wrap = styled.div`
  position: absolute;
  width: 50%;
  height: 540px;
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  border: 2px solid #ccc;
  margin: auto;

  @media (min-width: 720px) {
    min-width: 720px;
  }
  @media (max-width: 720px) {
    width: 100%;
    border: none;
  }
`

const Menu = styled.ul`
  padding-left: 20px;
`

const MenuItem = styled.li`
  text-align: right;
  list-style: none;
  cursor: pointer;
`

const ItemDeco = styled.h2`
  position: absolute;
  transition: all 0.5s;
  top: ${props => (props.posY)}px;
`

const ItemLink = styled(Link)`
  text-decoration: none;
`

const MenuWrap = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-size: 35px;

  ${ItemLink}:visited {
    color: black;
  }

  @media (max-width: 720px) {
  }
`

const MainMenu = () => {
  const [decoPosY, setDecoPos] = useState(0);
  const [panelOption, setPanelOption] = useState({
    opacity: 1,
    link: '',
  });

  const itemOver = event => {
    setDecoPos(event.target.offsetTop);
  }

  const itemClick = (link:string) => {
    setPanelOption({opacity: 1, link})
  }

  useEffect(() => { setPanelOption({opacity: 0, link: ''}) }, [])

  return (
    <div>
      <SEO title="Home" />
      <BlackPanel opacity={panelOption.opacity} link={panelOption.link}/>
      <Wrap>
        <Title>Main Menu</Title>
        <MenuWrap>
          <ItemDeco posY={decoPosY}>▶</ItemDeco>
          <Menu>
            <MenuItem onMouseOver={itemOver} onClick={() => {itemClick('/portfolio/')}}>
              Portfolio
            </MenuItem>
            <MenuItem onMouseOver={itemOver} onClick={() => {itemClick('/blog/')}}>
              Blog
            </MenuItem>
          </Menu>
        </MenuWrap>
      </Wrap>
    </div>
  )
}

export default MainMenu
