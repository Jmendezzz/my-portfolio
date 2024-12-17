import Section from '@components/atoms/section/Section';
import HeroHeader from '@/features/hero/hero-header/HeroHeader';
import HeroBody from '../hero-body/HeroBody';
import './hero-section.scss';
import TechStackCarousel from '../hero-carousel/TechStackCarousel';

function HeroSection() {
  return (
    <Section className='hero-section__section'>
      <div className='hero-section'>
        <HeroHeader />
        <HeroBody />
        <TechStackCarousel />
      </div>
    </Section>
  );
}

export default HeroSection;