import React from "react"
import styled from "styled-components"
import Contect from "./contect";

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  height: 200px;
  background: #555;
  padding: 50px 0;

  text-align: center;
  z-index: 1;
`

const LinkBox = styled.div`
  margin-bottom: 20px;
`

const Capyright = styled.p`
  text-align: center;
  color: #fff;
`

const Footer = ({ }) => (
  <StyledFooter>
    <LinkBox>
      <Contect />
    </LinkBox>
    
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
