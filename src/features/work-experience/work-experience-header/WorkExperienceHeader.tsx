import { Heading } from '@components/atoms';
import { Header } from '@components/molecules';
import { useTranslation } from 'react-i18next';

function WorkExperienceHeader() {
  const { t } = useTranslation();
  return (
    <Header>
      <Heading type="h2" size="xl">
        {t('workExperience.title')}
      </Heading>
    </Header>
  );
}

export default WorkExperienceHeader;
