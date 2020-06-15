import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  background: #555;
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

  a:link {text-decoration: none; color: #fff;}
  a:visited {text-decoration: none; color: #fff;}
  a:active {text-decoration: none; color: #fff;}
`

const Capyright = styled.p`
  text-align: center;
  color: #fff;
`

const Footer = ({ }) => (
  <StyledFooter>
      <Contect>
        <Item>
          <a href="http://kms1837.github.io/">
            <FontAwesomeIcon icon={faUser} size="2x"/>
          </a>
        </Item>
        <Item>
          <a href="https://github.com/kms1837">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
        </Item>
        <Item>
          <a href="mailto:kms1837@gmail.com">
            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
          </a>
        </Item>
      </Contect>
      <Capyright>
        kms1837 © 2020
      </Capyright>
  </StyledFooter>
)

/*\

      kms1837
        <Item>● http://kms1837.github.io</Item>
        <Item>● kms1837@gmail.com</Item>
*/

export default Footer
