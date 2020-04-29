import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

interface BurgerProps {

}

export const Burger: React.FC<BurgerProps> = () => {
  return (
    <Root>
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7H15" stroke="black" strokeWidth="2"/>
        <path d="M0 1H15" stroke="black" strokeWidth="2"/>
        <path d="M0 13H15" stroke="black" strokeWidth="2"/>
      </svg>
    </Root>
  );
};

const Root = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    svg path {
      stroke: ${theme.palette.hover};
    }
  }
`;