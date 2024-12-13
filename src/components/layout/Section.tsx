import React from 'react';
import Container from './Container';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => (
  <div id={id} className={`py-24 ${className}`}>
    <Container>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </Container>
  </div>
);

export default Section;