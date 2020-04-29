import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

interface BellProps {

}

export const Bell: React.FC<BellProps> = () => {
  return (
    <Root>
      <svg width="20" height="22" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <rect x="8.5" y="0.5" width="1" height="2" stroke="black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M2.14286 17C2.14286 17 1 3 9 3C17 3 15.8571 17 15.8571 17H2.14286Z" stroke="black" strokeWidth="2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.9231 17C5.9231 17 6.33335 21 9.00002 21C11.6667 21 12.0769 17 12.0769 17H5.9231Z" stroke="black" strokeWidth="2"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="30" height="21" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </Root>

  );
};

const Root = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    svg path, rect {
      stroke: ${theme.palette.hover};
    }
  }
`;