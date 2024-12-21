import { workExperiences } from '@/data/work-experience-data';
import WorkExperienceTimelineItem from '../work-experience-timeline-item/WorkExperienceTimelineItem';

import './work-experience-timeline.scss';
function WorkExperienceTimeLine() {
  return (
    <div className="timeline">
      {workExperiences.map((experience) => (
        <WorkExperienceTimelineItem
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}

export default WorkExperienceTimeLine;
