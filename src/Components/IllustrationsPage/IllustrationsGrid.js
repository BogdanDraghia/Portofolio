import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import IllustrationItem from "../IllustrationsPage/IllustrationItem"
import IllustrationsOverlay from "../IllustrationsPage/IllustrationsOverlay"
import { motion, AnimatePresence } from "framer-motion"
import Img from "gatsby-image"
const IllustrationsGrid = () => {
  /*   const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  } */
  const [overlayIllustration, setoverlayillustration] = useState(false)
  //const [currentoverlay, setcurrentoverlay] = useState([])
  const [currentoverlaydata, setcurrentoverlaydata] = useState([])
  const data = useStaticQuery(graphql`
    query MyQuery {
      allIllustrationsJson {
        edges {
          node {
            id
            content {
              date
              desc
              pallete
            }
            name
            type
          }
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "illustrationsimages" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const handleroverlayexit = data => {
    setoverlayillustration(!overlayIllustration)
  }
  const handleroverlay = data1 => {
    //Name
    const test3 = data1

    setoverlayillustration(!overlayIllustration)
    // setcurrentoverlay(data1)
    const filtercurrentimageoverlay = data.allFile.edges.filter(
      result => result.node.name === test3
    )[0]
    const palettearray = data.allIllustrationsJson.edges.filter(
      result => result.node.name === test3
    )[0].node.content.pallete
    const currentimageforoverlay =
      filtercurrentimageoverlay.node.childImageSharp.fluid

    const dominantcolor =
      filtercurrentimageoverlay.node.childImageSharp.gatsbyImageData
        .backgroundColor
    const arraydata = [
      {
        image: "imagedefault",
        name: "namedefault",
        palette: "",
        background: "backgroundcolor",
      },
    ]
    arraydata[0].image = currentimageforoverlay
    arraydata[0].name = test3
    arraydata[0].palette = palettearray
    arraydata[0].background = dominantcolor
    setcurrentoverlaydata(arraydata)
  }

  return (
    <div
      className="centerSection"
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    >
      <div className="illustrationGrid">
        {data.allIllustrationsJson.edges.map(item => {
          const propertyName = item.node.name

          const currentimagefor = data.allFile.edges.filter(
            result => result.node.name === propertyName
          )[0].node.childImageSharp.fluid

          return (
            <IllustrationItem
              key={item.node.id}
              name={item.node.name}
              HandlerPropName={handleroverlay}
            >
              <Img
                style={{ borderRadius: "10px" }}
                imgStyle={{ objectFit: "contain" }}
                fluid={currentimagefor}
                alt={propertyName}
                datatest="asd"
              />
            </IllustrationItem>
          )
        })}
        <AnimatePresence>
          {overlayIllustration && (
            <motion.div
              className="notificationrelative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <IllustrationsOverlay
                dataforoverlay={currentoverlaydata}
                renderoverlay={overlayIllustration}
                handlerexit={handleroverlayexit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default IllustrationsGrid
