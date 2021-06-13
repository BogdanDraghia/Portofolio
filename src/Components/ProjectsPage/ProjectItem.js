import React from "react"
import projecttest from "../../../static/assets/images/Illustrations/treelandingpage.png"
import { Link } from "gatsby"
const ProjectItem = () => {
  return (
    <div className="Project-Item centerSection">
      <div className="Project-Item-Component">
        <div className="ProjectPhoto">
          <div className="ProjectPhoto-Inner">
            <img src={projecttest} alt="project" />
          </div>
        </div>
        <div className="ProjectInfo">
          <div className="Project-Tittle">
            <h2>Tittle Project</h2>
          </div>
          <div className="Project-Description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="Project-Tags">
            <Link className="project-tag-item Contentful">Contentful</Link>
            <Link className="project-tag-item Gatsby">Gatsby</Link>
            <Link className="project-tag-item Gatsby">Gatsby</Link>
          </div>
          <div className="Project-Links">
            <div className="Project-GithubLink">Github</div>
          </div>
        </div>
      </div>
      <div className="Project-Item-Component">
        <div className="ProjectPhoto">
          <div className="ProjectPhoto-Inner">
            <img src={projecttest} alt="project" />
          </div>
        </div>
        <div className="ProjectInfo">
          <div className="Project-Tittle">
            <h2>Tittle Project</h2>
          </div>
          <div className="Project-Description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="Project-Tags">
            <Link className="project-tag-item Contentful">Contentful</Link>
            <Link className="project-tag-item Gatsby">Gatsby</Link>
            <Link className="project-tag-item Gatsby">Gatsby</Link>
          </div>
          <div className="Project-Links">
            <div className="Project-GithubLink">Github</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
