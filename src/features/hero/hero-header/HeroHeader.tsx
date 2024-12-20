import { useTranslation } from 'react-i18next';
import { Heading} from '@components/atoms';
import { Header } from '@components/molecules';

import './hero-header.scss';
import HeroCta from '../hero-cta/HeroCta';

function HeroHeader() {
  const { t } = useTranslation();
  return (
    <Header className="hero-header">
      <Heading type="h1" size="xl">
        {t('hero.title')}{' '}
        <span className="hero-header__name">{t('hero.name')}</span>
      </Heading>
      <Heading type="h2" size="xl">
        {t('hero.subtitle')}
      </Heading>
      <p className="hero-header__description">{t('hero.description')}</p>
      <HeroCta />
    </Header>
  );
}

export default HeroHeader;
