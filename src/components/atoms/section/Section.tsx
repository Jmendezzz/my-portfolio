import './section.scss';

interface SectionProps {
  readonly children: React.ReactNode | React.ReactNode[];
}

function Section({ children }: SectionProps) {
  return (
    <section className="section">
      <div className="section__content">{children}</div>                                                                                        
    </section>
  );
}

export default Section;
