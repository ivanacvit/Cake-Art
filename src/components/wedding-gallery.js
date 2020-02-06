/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './lightbox';

const WeddingGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { absolutePath: { regex: "//content/images/wedding//" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 400, traceSVG: { color: "#c3dafe" }) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox images={data.images.edges} />}
  />
);
export default WeddingGallery;