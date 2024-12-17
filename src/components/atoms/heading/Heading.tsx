import React from 'react';
import './heading.scss';

interface HeadingProps {
  readonly children: React.ReactNode;
  readonly type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  readonly size?: 'sm' | 'md' | 'lg' | 'xl';
}

function Heading({ children, type = 'h3', size = 'md' }: HeadingProps) {
  const HeadingTag = type;

  return (
    <HeadingTag className={`heading heading--${size}`}>
      {children}
    </HeadingTag>
  );
}

export default Heading;