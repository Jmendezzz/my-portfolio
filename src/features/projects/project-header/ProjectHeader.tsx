import { Header } from '@components/molecules';
import { Heading } from '@components/atoms';
import { useTranslation } from 'react-i18next';
import './project-header.scss'

function ProjectHeader() {
  const { t } = useTranslation();
  return (
    <Header>
      <Heading type="h2" size="xl">
        {t('projects.title')}
      </Heading>
      <Heading type="h3" size="md">
        {t('projects.subtitle')}
        </Heading>
    </Header>
  );
}

export default ProjectHeader;
