import React from "react";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import './index.css';

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div className="photos">
        {
          data.allFile.edges.map(({ node }) => {
            return <Img key={node.id} fluid={node.childImageSharp.fluid}></Img>
          })
        }
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
  allFile(filter: {absolutePath: {regex: "//photos//"}}){
    edges{
      node{
        id
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default IndexPage
