import React from "react"
import styled from "styled-components"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContectWrap = styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
`
const Item = styled.div`
  display: inline-block;
  margin: 0 5px;

  a:link {text-decoration: none; color: #fff;}
  a:visited {text-decoration: none; color: #fff;}
  a:active {text-decoration: none; color: #fff;}
`

const Contect = ({ }) => (
  <ContectWrap>
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
  </ContectWrap>
)

export default Contect
