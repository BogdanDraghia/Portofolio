import React from "react"
import Layout from "../Layout/Layout"
import LandingWelcome from "../Components/LandingPage/LandingWelcome"
import LastPRojects from "../Components/LandingPage/lastprojects/LastProjects"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }}>
        <AnimatePresence>
          <LandingWelcome />
          <LastPRojects />
        </AnimatePresence>
      </motion.div>

      {/*<iframe src="https://games.gdevelop-app.com/game-5f61c66b-407b-4e72-94a9-f55bbc942c3b/index.html" /> */}
    </Layout>
  )
}
