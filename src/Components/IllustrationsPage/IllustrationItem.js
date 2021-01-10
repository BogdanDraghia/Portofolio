import React from "react"

const IllustrationItem = props => {
  const ToggleButtonIllustration = elem => {
    let currentoverlayelement = elem.target.parentElement.parentElement.parentElement.getAttribute(
      "datacustom"
    )
    props.HandlerPropName(currentoverlayelement)
  }
  return (
    <div
      className="Illustration-image"
      datacustom={props.name}
      onClick={ToggleButtonIllustration}
    >
      <div className="moreicons">
        <div className="moreicon-item"></div>
        <div className="moreicon-item"></div>
        <div className="moreicon-item"></div>
      </div>
      {props.children}
    </div>
  )
}

export default IllustrationItem
