import { useTranslation } from 'react-i18next';
import { Button } from '@components/atoms';
import { BsMailbox } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './hero-cta.scss';

function HeroCta() {
  const { t } = useTranslation();
  return (
    <div className="hero-cta">
      <Button variant="secondary" size="md" icon={<BsMailbox />}>
        <a href="#a"> {t('hero.contact')}</a>
      </Button>
      <Button variant="secondary" size="md" icon={<FaLinkedin />}>
        <a href="https://www.linkedin.com/in/juan-gerardo-m-l/" target='_blank'> {t('hero.linkedin')}</a>
      </Button>
    </div>
  );
}

export default HeroCta;
