import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useGlobalState } from "./global-state"

const BlackPanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: ${props => (props.show === 0 ? -99 : 99)};
  opacity: ${props => (props.opacity)};

  transition: opacity 1s;
`

export default ({opacity, link}) => {
  const [panelShow, setPanelShow] = useState(0);

  useEffect(() => {
    setPanelShow(1)
    setTimeout(() => {
      opacity === 0 && setPanelShow(0)
      if (link) {
        window.location = link;
      }
    }, 1 * 1000)
  }, [opacity])

  return <BlackPanel show={panelShow} opacity={opacity}/>
}