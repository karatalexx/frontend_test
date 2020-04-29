import React from 'react';
import styled from 'styled-components';

import { theme } from 'theme';

interface TitleProps {
  children?: React.ReactNode
}

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

const Container = styled.h2`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  padding: 0;
  color: ${theme.palette.text};
`;