/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            resume
            github
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
        <p>
          {author?.summary || null}
          {` `}
        </p>
        <ul>
            <li>
              <a href={`https://malecks.com`}>Resume</a>
            </li>
            <li>
              <a href={`https://github.com/${social?.github || ``}`}>Github</a>
            </li>
            <li>
              <a href={`mailto:${social?.email || ``}`}>Email</a>
            </li>
          </ul>
    </div>
  )
}

export default Bio
