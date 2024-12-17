import './section.scss';

interface SectionProps {
  readonly children: React.ReactNode | React.ReactNode[];
  readonly className?: string;
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="section__content">{children}</div>                                                                                        
    </section>
  );
}

export default Section;
