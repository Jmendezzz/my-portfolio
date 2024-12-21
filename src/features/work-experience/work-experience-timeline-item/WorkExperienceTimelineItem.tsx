import { WorkExperience } from '@/domain/models/WorkExperience';
import './work-experience-timeline-item.scss';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { IoIosBusiness } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
interface WorkExperienceTimelineItemProps {
  readonly experience: WorkExperience;
}
function WorkExperienceTimelineItem({
  experience,
}: WorkExperienceTimelineItemProps) {
  const currentLang = useCurrentLanguage() as keyof typeof experience.title;
  return (
    <div key={experience.id} className="timeline-item">
      <div className="timeline-item__content">
        <header className="timeline-item__header">
          <h3 className="timeline-item__title">
            {experience.title[currentLang]}
          </h3>
          <p className="timeline-item__date">
            {experience.startDate} - {experience.endDate}
          </p>
        </header>
        <p className="timeline-item__company">
          <IoIosBusiness></IoIosBusiness> {experience.company}
        </p>
        <p className="timeline-item__location">
          <IoLocationSharp></IoLocationSharp> {experience.location}
        </p>

        <p className="timeline-item__description">
          {experience.descrption[currentLang]}
        </p>
      </div>
    </div>
  );
}

export default WorkExperienceTimelineItem;
