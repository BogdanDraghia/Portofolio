import React from "react"

const ImageComp = props => {
  console.log(props.test)
  console.log("datasus")
  return (
    <div className="Illustration-image">
      <h1>{props.test}</h1>
    </div>
  )
}

export default ImageComp
