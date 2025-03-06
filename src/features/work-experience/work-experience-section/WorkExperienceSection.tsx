import { Section } from '@components/atoms';
import WorkExperienceHeader from '../work-experience-header/WorkExperienceHeader';
import WorkExperienceTimeLine from '../work-experience-timeline/WorkExperienceTimeLine';
import './work-experience-section.scss';

function WorkExperienceSection() {
  return (
    <Section className='work-experience-section' id='work-experience'>
      <WorkExperienceHeader></WorkExperienceHeader>
      <WorkExperienceTimeLine></WorkExperienceTimeLine>
    </Section>
  );
}

export default WorkExperienceSection;
