import { projects } from '@/data/projects-data';
import './project-list.scss';
import ProjectCard from '../project-card/ProjectCard';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';
function ProjectList() {
  return (
    <ul className="project-list">
      {projects.map((project, index) => (
        <AnimatedComponent key={`${index}-${project.id}`} delay={0.2}>
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        </AnimatedComponent>
      ))}
    </ul>
  )
}

export default ProjectList;
