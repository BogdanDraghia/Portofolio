import React from "react"
import { Link } from "gatsby"
import Profile from "../../../static/assets/images/profile.jpg"
//ICONS
import CvIcon from "../../../static/assets/images/IconsWelcome/Icon-SolidcvPNG.png"
import InstagramIcon from "../../../static/assets/images/IconsWelcome/Icon-SolidInstagramPNG.png"
import GithubIcon from "../../../static/assets/images/IconsWelcome/Icon-SolidgithubPNG.png"
import BehanceIcon from "../../../static/assets/images/IconsWelcome/Icon-SolidbehancePNG.png"

const LandingWelcome = () => {
  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="Wrap">
      <div className="centerSection LandingWelcome">
        <div className="WelcomeLeft">
          <div className="WelcomeText">
            <p>Hello, I'm Bogdan</p>
            <h1>Junior full-stack developer</h1>
            <p>
              I want to share the knowledge that I have acquired so far and I am
              willing to learn many new things.
            </p>
          </div>
          <div className="Welcomebuttons">
            <Link className="button1">My work</Link>
            <Link className="button2">or Contact me</Link>
          </div>
        </div>
        <div className="WelcomeRight">
          <div className="WelcomePhoto">
            <div className="image">
              <img src={Profile} alt="Bogdan Draghia" />
            </div>
            <div className="IconsProfiles">
              <div
                className="iconhere"
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  openInNewTab("PortofolioCV.pdf")
                }}
                onClick={() => {
                  openInNewTab("PortofolioCV.pdf")
                }}
              >
                <img src={CvIcon} alt="cv"></img>
                <p>CV </p>
              </div>
              <div
                className="iconhere"
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  openInNewTab("https://github.com/BhomBogdan")
                }}
                onClick={() => {
                  openInNewTab("https://github.com/BhomBogdan")
                }}
              >
                <img src={GithubIcon} alt="github"></img>
                <p>Github</p>
              </div>
              <div
                className="iconhere"
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  openInNewTab("https://www.instagram.com/bhombogdan/")
                }}
                onClick={() => {
                  openInNewTab("https://www.instagram.com/bhombogdan/")
                }}
              >
                <img src={InstagramIcon} alt="instagram"></img>
                <p>Instagram</p>
              </div>
              <div className="iconhere">
                <img src={BehanceIcon} alt="behance"></img>
                <p>Behance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingWelcome
