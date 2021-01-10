import React from "react"

//Components
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../Style/General/main.scss"
const Layout = ({ children }, Sidebar) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>

      <Footer />
    </div>
  )
}
export default Layout
