/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"
import "./page-layout.css"

const Wrap = styled.div`
  padding-top: ${props=>(props.headerHeight)}px;
`

const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => { 
    if (!scrollTop) {
      window.scrollTo(0, 10);
    }
  }, [scrollTop])

  useEffect(() => { 
    const handleScroll = () => {
      if (document.documentElement.scrollTop <= 5) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollTop
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const headerHeight = 50;
  const scrollTop = useScroll()

  const childrenWithProps = React.Children.map(children, child => (
    React.cloneElement(child, {
      scrollTop: scrollTop,
    })
  ))

  return (
    <>
      <Header height={headerHeight} siteTitle={data.site.siteMetadata.title} scrollTop={scrollTop} />
      <Wrap headerHeight={headerHeight}>
        <main>{childrenWithProps}</main>
      </Wrap>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
