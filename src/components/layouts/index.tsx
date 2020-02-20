import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Transition, TransitionGroup } from 'react-transition-group';

const ContentWrap = styled.div`

  background: skyblue;
  ${props => {
    /*
    if (props.status === 'exiting' || props.status === 'exited') {
      return css`
        opacity: 0;
      `
    }

    if (props.status === 'entering' || props.status === 'entered') {
      return css`
        opacity: 1;
      `
    }*/
  }};
`

const BlackPanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 999;
  opacity: 1;

  background: #000;
  
  transition: opacity 1s;
  ${props => {
    if (props.status === 'exiting') {
      return css`
        opacity: 1;
      `
    }

    if (props.status === 'exited') {
      return css `
      `
    }

    if (props.status === 'entering') {
      return css `
        opacity: 0;
        transition: opacity 2s;
      `
    }

    if (props.status === 'entered') {
      return css`
        opacity: 0;
        z-index: -999;
      `
    }
  }};
`

const BasicLayout = ({ children, location }) => {
  return (
    <TransitionGroup component={null}>
      <Transition key={location.pathname} timeout={{ enter: 0, exit: 0 }}>
        { status => (
          <ContentWrap status={status}>
            <BlackPanel key={location.pathname} className={status} status={status}/>
            {children}
          </ContentWrap>
        )}
      </Transition>
    </TransitionGroup>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BasicLayout
