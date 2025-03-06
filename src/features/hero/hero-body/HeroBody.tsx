import heroImage from '@/assets/images/hero.jpg';
import './hero-body.scss';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';

function HeroBody() {
  return (
    <section className="hero-body">
      <AnimatedComponent delay={0.8}>
      <div className='hero-body__image-container'>
      <img
        src={heroImage}
        alt="Juan Gerardo showing a software product"
        className="hero-body__image"
      />
      </div>
      </AnimatedComponent>

    </section>
  );
}

export default HeroBody;
