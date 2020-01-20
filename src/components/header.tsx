import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => (props.height)}px;
  background: white;
`

const Menu = styled.div`
  width: 100%;
  margin: 20px 0;
  text-align: center;
`

const LeftMenu = styled.div`
  float: left;
`

const CenterMenu = styled.div`
  display: inline-block;
  margin: 0 auto;
`

const RightMenu = styled.div`
  float: right;
`

const MenuItem = styled.div`
  display: inline-block;
  margin: 0 10px;
`

const Header = ({ height, siteTitle }) => (
  <FixedHeader height={height}>
    <Menu>
      <LeftMenu>
        <MenuItem>Home</MenuItem>
      </LeftMenu>
      <CenterMenu>
        <MenuItem>About</MenuItem>
        <MenuItem>Skill</MenuItem>
        <MenuItem>Project</MenuItem>
      </CenterMenu>
      <RightMenu>
        <MenuItem>Github</MenuItem>
        <MenuItem>Blog</MenuItem>
      </RightMenu>
    </Menu>
  </FixedHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
