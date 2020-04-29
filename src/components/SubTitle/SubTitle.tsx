import React from 'react';

interface SubTitleProps {
  children: React.ReactNode;
}

export const SubTitle: React.FC<SubTitleProps> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};