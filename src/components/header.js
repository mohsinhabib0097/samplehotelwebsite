import React from "react"
import { header, content, h1, LinkLogo } from "../styles/headerStyle"

import Navigation from "./nav"

const Header = () => {
  return (
    <header css={header}>
      <div css={content}>
        <LinkLogo to="/">
          <h1 css={h1}>Hotel Gatsby!</h1>
        </LinkLogo>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
