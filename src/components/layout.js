import React, { Fragment } from "react"
import Head from "./helmet/head"
import Header from "./header"
import Footer from "./footer"

const Layout = props => (
  <Fragment>
    <Head />
    <Header />
    {props.children}
    <Footer />
  </Fragment>
)

export default Layout
