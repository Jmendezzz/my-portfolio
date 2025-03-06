import Marquee from 'react-fast-marquee';
import './tech-stack.scss';
import AnimatedComponent from '@components/atoms/animated/AnimatedComponent';

const techStack = [
  {
    image: 'java.svg',
    name: 'Java',
  },
  {
    image: 'spring.svg',
    name: 'Spring',
  },
  {
    image: 'mysql.svg',
    name: 'MySQL',
  },
  {
    image: 'docker.svg',
    name: 'Docker',
  },
  {
    image: 'intellij.svg',
    name: 'IntelliJ IDEA',
  }
  ,
  {
    image: 'typescript.svg',
    name: 'TypeScript',
  },
  {
    image: 'react.svg',
    name: 'React',
  },
  {
    image: 'angular.svg',
    name: 'Angular',
  },
  {
    image: 'css.svg',
    name: 'CSS',
  },
  {
    image: 'visual-studio.svg',
    name: 'Visual Studio',
  }
];

function TechStackCarousel() {
  return (
    <AnimatedComponent delay={0.9}>
      <Marquee
        speed={70}
        autoFill
        direction='right'
        className='tech-stack-carousel'

      >
        {techStack.map((tech, index) => (
          <div key={`${index}-${tech.name}`} className="tech-stack-carousel__item">
            <img
              src={tech.image}
              alt={tech.name}
              className="tech-stack-carousel__image"
            />
            <p className="tech-stack-carousel__name">{tech.name}</p>
          </div>
        ))}
      </Marquee>
    </AnimatedComponent>

  );
}

export default TechStackCarousel;
