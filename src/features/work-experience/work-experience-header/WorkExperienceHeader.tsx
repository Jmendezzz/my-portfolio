import { Heading } from '@components/atoms';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';
import { Header } from '@components/molecules';
import { useTranslation } from 'react-i18next';

function WorkExperienceHeader() {
  const { t } = useTranslation();
  return (
    <Header>
      <AnimatedComponent delay={0.2}>
        <Heading type="h2" size="xl">
          {t('workExperience.title')}
        </Heading>
      </AnimatedComponent>

    </Header>
  );
}

export default WorkExperienceHeader;
