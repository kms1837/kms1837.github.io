import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  background: #fff;
  padding: 20px 0;

  text-align: center;
`
const Contect = styled.div`
    width: 500px;
    margin: 0 auto;
    text-align: left;

    margin-bottom: 20px;
`
const Item = styled.div`

`

const Footer = ({ }) => (
  <StyledFooter>
      <Contect>
        <Item>● http://kms1837.github.io</Item>
        <Item>● kms1837@gmail.com</Item>
        <Item>● github</Item>
      </Contect>
      kms1837
  </StyledFooter>
)

export default Footer
