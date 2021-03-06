import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImg = styled(Img)`
  height: 100%;
`

const Image = props => {
  // "gatsby-astronaut.png"
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 2840) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  /* placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  } */

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(props.file);
  });
  
  return <StyledImg fluid={image.node.childImageSharp.fluid}/>
}

export default Image
