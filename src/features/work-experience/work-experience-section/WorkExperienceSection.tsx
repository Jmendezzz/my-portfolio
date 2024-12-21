import { Section } from '@components/atoms';
import WorkExperienceHeader from '../work-experience-header/WorkExperienceHeader';
import WorkExperienceTimeLine from '../work-experience-timeline/WorkExperienceTimeLine';

function WorkExperienceSection() {
  return (
    <Section>
      <WorkExperienceHeader></WorkExperienceHeader>
      <WorkExperienceTimeLine></WorkExperienceTimeLine>
    </Section>
  );
}

export default WorkExperienceSection;
