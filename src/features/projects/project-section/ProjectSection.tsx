import {Section} from "@components/atoms"
import ProjectHeader from "../project-header/ProjectHeader"
import ProjectList from "../project-list/ProjectList"
import './project-section.scss'

function ProjectSection() {
  return (
    <Section className="project-section">
        <ProjectHeader />
        <ProjectList />
    </Section>
  )
}

export default ProjectSection