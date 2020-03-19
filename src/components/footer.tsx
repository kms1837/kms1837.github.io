import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  background: #fff;
  padding: 50px 0;

  text-align: center;
`
const Contect = styled.div`
    display: inline-block;
    margin: 0 auto;
    text-align: left;

    margin-bottom: 20px;
`
const Item = styled.div`
  display: inline-block;
  margin: 0 5px;

  a:link {text-decoration: none; color: #333333;}
  a:visited {text-decoration: none; color: #333333;}
  a:active {text-decoration: none; color: #333333;}
`

const Footer = ({ }) => (
  <StyledFooter>
      <Contect>
        <Item>
          <a href="http://kms1837.github.io/">
            <FontAwesomeIcon icon={faUser} size="4x"/>
          </a>
        </Item>
        <Item>
          <a href="https://github.com/kms1837">
            <FontAwesomeIcon icon={faGithub} size="4x"/>
          </a>
        </Item>
      </Contect>
  </StyledFooter>
)

/*\

      kms1837
        <Item>● http://kms1837.github.io</Item>
        <Item>● kms1837@gmail.com</Item>
*/

export default Footer
