import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.scrollTop ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.9)"};
  z-index: 5;
  transition: 1s all;

  ${props => !props.scrollTop && css`
    box-shadow: 0px 0px 5px 0px #878787;
  `
  }
`

const Menu = styled.div`
  width: 100%;
  margin: 10px 0;
  line-height: ${props => (props.height)}px;
  height: ${props => (props.height)}px;
`

const LeftMenu = styled.div`
  position: relative;
  float: left;
  width: 20%;
`

const CenterMenu = styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
`

const RightMenu = styled.div`
  position: relative;
  float: right;
  width: 20%;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
`

const MenuItem = styled.div`
  display: inline-block;
  margin: 0 15px;
  cursor: pointer;
  user-select: none;

  color: ${props => props.scrollTop ? "#fff" : "#333333"};

  a:link, a:visited, a:active {text-decoration: none; color: ${props => props.scrollTop ? "#fff" : "#333333"};}

  svg {
    vertical-align: middle;
  }
`

const scrollToPosition = () => {
  window.scrollTo({top:0, behavior:'smooth'});
}

const Header = props => {
  const { height, siteTitle, scrollTop, hiddenMenu } = props;
  return (
    <FixedHeader scrollTop={scrollTop}>
      <Menu height={height}>
        <LeftMenu>
          <MenuItem scrollTop={scrollTop}>
            <Link to="/portfolio/">
              <FontAwesomeIcon icon={faHome} size="2x"/>
            </Link>
          </MenuItem>
        </LeftMenu>
        {!hiddenMenu && <CenterMenu>
          <MenuItem scrollTop={scrollTop} onClick={ () => scrollToPosition(0)}>Home</MenuItem>
          <MenuItem scrollTop={scrollTop} onClick={ () => scrollTo('#About')}>About</MenuItem>
          <MenuItem scrollTop={scrollTop} onClick={ () => scrollTo('#Skill')}>Skill</MenuItem>
          <MenuItem scrollTop={scrollTop} onClick={ () => scrollTo('#Project')}>Project</MenuItem>
        </CenterMenu>}
        <RightMenu>
          <MenuItem scrollTop={scrollTop}>
            <a href="http://kms1837.github.io/">
              <FontAwesomeIcon icon={faUser} size="2x"/>
            </a>
          </MenuItem>
          <MenuItem scrollTop={scrollTop}>
            <a href="https://github.com/kms1837">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
          </MenuItem>
          <MenuItem scrollTop={scrollTop}>
            <Link to="/menu/">
              <FontAwesomeIcon icon={faListAlt} size="2x"/>
            </Link>
          </MenuItem>
        </RightMenu>
      </Menu>
    </FixedHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
