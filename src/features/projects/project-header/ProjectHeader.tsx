import { Header } from '@components/molecules';
import { Heading } from '@components/atoms';
import { useTranslation } from 'react-i18next';
import './project-header.scss';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';

function ProjectHeader() {
  const { t } = useTranslation();
  return (
    <Header>
      <AnimatedComponent delay={0.2}>
        <Heading type="h2" size="xl">
          {t('projects.title')}
        </Heading>
      </AnimatedComponent>
    </Header>
  );
}

export default ProjectHeader;
