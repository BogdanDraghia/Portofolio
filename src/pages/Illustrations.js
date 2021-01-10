import React from "react"
import Layout from "../Layout/Layout"
import IllustrationsGrid from "../Components/IllustrationsPage/IllustrationsGrid"
import IllustrationsOverlay from "../Components/IllustrationsPage/IllustrationsOverlay"
import TestImage from "../../static/assets/images/Illustrations/dog.jpg"
export default function Home() {
  return (
    <Layout>
      <IllustrationsGrid />
      <IllustrationsOverlay renderoverlay={false} imageoverlay={TestImage} />
    </Layout>
  )
}
