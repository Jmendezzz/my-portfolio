import { projects } from '@/data/projects-data';
import './project-list.scss';
import ProjectCard from '../project-card/ProjectCard';
function ProjectList() {
  return <ul className="project-list">
    {projects.map((project) => (
        <li key={project.id}>
            <ProjectCard project={project} />
        </li>
    ))}
  </ul>;
}

export default ProjectList;
