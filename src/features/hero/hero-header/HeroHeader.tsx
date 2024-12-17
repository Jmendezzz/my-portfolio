import { useTranslation } from 'react-i18next';
import Heading from '../../../components/atoms/heading/Heading';
import './hero-header.scss';

function HeroHeader() {
  const { t } = useTranslation();
  return (
    <header className='hero-header'>
      <Heading type="h1" size="xl">
        {t('hero.title')} <span className='hero-header__name'>{t('hero.name')}</span>
      </Heading>
      <Heading type="h2" size="lg">
        {t('hero.subtitle')}
      </Heading>
    </header>
  );
}

export default HeroHeader;
