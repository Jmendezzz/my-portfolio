import heroImage from '@/assets/images/hero.jpg';
import './hero-body.scss';

function HeroBody() {
  return (
    <section className="hero-body">
      <div className='hero-body__image-container'>
      <img
        src={heroImage}
        alt="Juan Gerardo showing a software product"
        className="hero-body__image"
      />
      </div>

    </section>
  );
}

export default HeroBody;
