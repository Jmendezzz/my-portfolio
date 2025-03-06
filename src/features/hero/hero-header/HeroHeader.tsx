import { useTranslation } from 'react-i18next';
import { Heading } from '@components/atoms';
import { Header } from '@components/molecules';
import './hero-header.scss';
import HeroCta from '../hero-cta/HeroCta';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';

function HeroHeader() {
  const { t } = useTranslation();

  return (
    <Header className="hero-header">
      <AnimatedComponent>
        <Heading type="h1" size="xl">
          {t('hero.title')}
          <AnimatedComponent as="span" delay={0.3} className="hero-header__name">
            {t('hero.name')}
          </AnimatedComponent>
        </Heading>
      </AnimatedComponent>

      <AnimatedComponent delay={0.5}>
        <Heading type="h2" size="xl">{t('hero.subtitle')}</Heading>
      </AnimatedComponent>

      <AnimatedComponent delay={0.6} className="hero-header__description">
        <p>{t('hero.description')}</p>
      </AnimatedComponent>

      <AnimatedComponent delay={0.7}>
        <HeroCta />
      </AnimatedComponent>
    </Header>
  );
}

export default HeroHeader;
