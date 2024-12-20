import { Project } from '@/domain/models/Project';
import './project-card.scss';
import { Button } from '@components/atoms';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  readonly project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    const { i18n, t } = useTranslation();
    const currentLang = i18n.language as keyof typeof project.name;  return (
    <article className="project-card">
      <img
        src={project.imageUrl}
        alt={project.name[currentLang]}
        className="project-card__image"
      />
      <div className="project-card__content">
        <h2 className="project-card__title">{project.name[currentLang]}</h2>
        <p className="project-card__description">{project.description[currentLang]}</p>
        <div className="project-card__technologies">
          {project.technologies.map((tech, index) => (
            <span key={`${index}-${tech.name}`} className="project-card__technology">
              <img
                src={tech.imageUrl}
                alt={tech.name}
                className="project-card__technology-image"
              />
              {tech.name}
            </span>
          ))}
        </div>
        <div className='project-card__button'>
          <Button variant="secondary" size="md" icon={<FaGithub />}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('projects.view')}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
