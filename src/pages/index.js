import * as React from "react"
import { Link } from "gatsby"
import { MainImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import AboutPage from "./about"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle = "Welcom to Samiha Agency" >
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="../images/gatsby.jpg"
      />
      
      <Link to="/about">About page</Link>
      
      </Layout>
    </main>
  )
}

export default IndexPage;
