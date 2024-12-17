import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/images/hero.jpg';
import './hero-body.scss';

function HeroBody() {
  const { t } = useTranslation();
  return (
    <section className="hero-body">
      <img
        src={heroImage}
        alt="Juan Gerardo showing a software product"
        className="hero-body__image"
      />
    </section>
  );
}

export default HeroBody;
