import Section from '@components/atoms/section/Section';
import HeroHeader from '@/features/hero/hero-header/HeroHeader';
import HeroBody from '../hero-body/HeroBody';
import TechStackCarousel from '../hero-carousel/TechStackCarousel';
import './hero-section.scss';

function HeroSection() {
  return (
    <Section className='hero-section__section'>
      <div className='hero-section'>
        <HeroHeader />
        <HeroBody />
      </div>
      <TechStackCarousel />
    </Section>
  );
}

export default HeroSection;
