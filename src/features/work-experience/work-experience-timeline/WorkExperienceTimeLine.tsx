import { workExperiences } from '@/data/work-experience-data';
import WorkExperienceTimelineItem from '../work-experience-timeline-item/WorkExperienceTimelineItem';

import './work-experience-timeline.scss';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';
function WorkExperienceTimeLine() {
  return (
    <div className="timeline">
      {workExperiences.map((experience) => (
        <AnimatedComponent key={experience.id} delay={0.2}>
          <WorkExperienceTimelineItem
            key={experience.id}
            experience={experience}
          />
        </AnimatedComponent>
      ))}
    </div>
  );
}

export default WorkExperienceTimeLine;
