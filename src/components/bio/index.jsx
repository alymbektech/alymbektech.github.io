import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { GitHubIcon } from '../social-share/github-icon'
import { LinkedInIcon } from '../social-share/linkedin-icon'
import { InstagramIcon } from '../social-share/instagram-icon'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction, hiring } = data.site.siteMetadata
      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Here is my</span>
                <Link to={'/about'} className="author-name-content">
                  <span>resume</span>
                </Link>
                <div className="author-introduction">{introduction}</div>
                <div className="author-introduction">{hiring}</div>
                <GitHubIcon/>
                <LinkedInIcon/>
                <InstagramIcon/>

                <p className="author-socials">
                  {social.github && (
                    <a href={`https://github.com/${social.github}`}>
                      GitHub
                      </a>
                  )}
                  {social.linkedin && (
                    <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
                      LinkedIn
                    </a>
                  )}
                  {social.instagram && (
                    <a href={`https://instagram.com/${social.instagram}`}>
                      Instagram
                      </a>
                  )}                
                  {social.facebook && (
                    <a href={`https://www.facebook.com/${social.facebook}`}>
                      Facebook
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        hiring
        social {
          twitter
          github
          medium
          facebook
          linkedin
        }
      }
    }
  }
`

export default Bio
