import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

interface SubTitleProps {
  children: React.ReactNode;
}

export const SubTitle: React.FC<SubTitleProps> = (props) => {
  return (
    <Root>
      {props.children}
    </Root>
  );
};

const Root = styled.div`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
`;