import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';
import { Children } from 'interfaces';

interface TextareaProps extends Children {
}

export const Text: React.FC<TextareaProps> = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

const Container = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 14px;
  line-height: 24px;
`;
