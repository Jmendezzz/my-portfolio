import './section.scss';

interface SectionProps {
  readonly children: React.ReactNode | React.ReactNode[];
  readonly className?: string;
  readonly id?: string;
}

function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section__content">{children}</div>                                                                                        
    </section>
  );
}

export default Section;
