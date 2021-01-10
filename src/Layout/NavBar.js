import React, { useState } from "react"
import { Link } from "gatsby"
import LogoName from "../../static/assets/images/Brand/logo+name-Big-Blue.png"
const NavBar = () => {
  const [render, setrender] = useState(true)
  const [renderdropdown, setrenderdropdown] = useState(false)
  const ToggleButtonBurger = () => {
    setrender(!render)
    if (renderdropdown === true && render === false) {
      setrenderdropdown(false)
    }
  }
  const ToggleButtonDropdown = () => {
    setrenderdropdown(!renderdropdown)
  }
  return (
    <nav>
      <div className="centerSection">
        <div className="menu display-flex">
          <Link to="/" className="logo">
            <img src={LogoName} />
          </Link>

          <div className={`topabsolute ${render === true ? "try2" : "try"}`}>
            <ul
              className={`navbardefault transitionsmooth ${
                render === true ? "displaynoneNav" : "displayflexNav"
              }`}
            >
              <li
                className="hasdropdown"
                role="button"
                onKeyDown={() => ToggleButtonDropdown()}
                onClick={() => ToggleButtonDropdown()}
                tabIndex={0}
              >
                <Link className="Group-icon">
                  <div className="name">Projects</div>
                  <div className="testgroup">
                    <div
                      className={
                        renderdropdown
                          ? "dp-item dp-animation1 "
                          : "dp-item dp-animation1-after "
                      }
                    ></div>
                    <div
                      className={
                        renderdropdown
                          ? "dp-item dp-animation2 "
                          : "dp-item dp-animation2-after "
                      }
                    ></div>
                  </div>
                </Link>
                {renderdropdown && (
                  <ul className="dropdown">
                    <li>
                      <Link to="/Projects">Websites and apps</Link>
                    </li>
                    <li>
                      <Link to="/Illustrations">Illustrations</Link>
                    </li>
                    <li>
                      <Link to="/">Games and more</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>

          <div
            className="hamburger transitionsmooth"
            role="button"
            onKeyDown={() => ToggleButtonBurger()}
            onClick={() => ToggleButtonBurger()}
            tabIndex={0}
          >
            <div className={render ? "line " : "line animateline1 "}></div>
            <div className={render ? "line " : "line animateline2"}></div>
            <div className={render ? "line " : "line animateline3"}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
