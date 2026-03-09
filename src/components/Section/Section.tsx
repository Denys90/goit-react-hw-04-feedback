// import { PropsWithChildren } from 'react';

type SectionProps = {
  title: string;
  children?: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
