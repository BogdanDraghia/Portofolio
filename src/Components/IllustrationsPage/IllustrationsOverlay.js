import React, { useState, useRef } from "react"
import Img from "gatsby-image"

import { motion, AnimatePresence } from "framer-motion"

const IllustrationsOverlay = props => {
  const [isOpen, setIsOpen] = useState(true)
  const [copynotification, setcopynotification] = useState(false)
  const buttoncopy = useRef()
  /*   const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  } */

  //animation
  /*   const copymotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    onclick: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  } */
  const closeoverlay = elem => {
    console.log(elem.target)
    if (elem.target.getAttribute("elemclose")) {
      props.handlerexit(false)
    }
  }
  /*   const over = () => {
    setcopynotification(!copynotification)
    console.log("over")
  } */
  const copycolor = elem => {
    navigator.clipboard.writeText(elem)
    console.log("color was copied " + elem)
    setIsOpen(!isOpen)

    setcopynotification(true)
  }

  if (props.dataforoverlay === "undefined" && props.dataforoverlay > 0) {
    return null
  } else {
    if (props.renderoverlay !== true) {
      return null
    } else {
      const backgrouddominant = props.dataforoverlay[0].background + "dd"
      const nameforid = props.dataforoverlay[0].name

      return (
        <AnimatePresence>
          {props.renderoverlay && (
            <motion.div
              initial={{ opacity: 0, zIndex: 3 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="illustrationoverlay"
                style={{ backgroundColor: backgrouddominant }}
                elemclose="yes"
                onClick={elem => closeoverlay(elem)}
                onKeyDown={elem => closeoverlay(elem)}
                role="button"
                tabIndex={0}
              >
                <div className="imagetest">
                  <div
                    className="closeoverlay-exit"
                    elemclose="yes"
                    onClick={elem => closeoverlay(elem)}
                    onKeyDown={elem => closeoverlay(elem)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="closeoverlaysub">
                      <div className="closeoverlay-line line-rotate1"></div>
                      <div className="closeoverlay-line line-rotate2"></div>
                    </div>
                  </div>

                  <Img
                    imgStyle={{ objectFit: "contain" }}
                    fluid={props.dataforoverlay[0].image}
                    alt="as"
                  />

                  <div className="palette">
                    {props.dataforoverlay[0].palette.map(item => {
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="palette-box"
                          key={item + nameforid}
                          onClick={() => copycolor(item)}
                        >
                          <div
                            className="colorBox"
                            style={{ backgroundColor: item }}
                            customdiv={item}
                            ref={buttoncopy}
                          ></div>
                          <div className="colorCode">
                            <p>{item}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="notification">
                <AnimatePresence>
                  {copynotification && (
                    <motion.div
                      initial={{ opacity: 1, y: 20 }}
                      animate={{
                        y: [20, 0],
                        opacity: [0.4, 0.7, 1, 1, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        easeOut: [0.4, 0.8, 0.8, 0.5],
                      }}
                      className="notification-message"
                    >
                      The color was copied !
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )
    }
  }
}

export default IllustrationsOverlay
