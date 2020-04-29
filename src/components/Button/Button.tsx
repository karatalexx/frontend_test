import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

const Container = styled.span`
    border: solid 2px black;
    width: max-content;
    padding: 0 35px;
    cursor: pointer;
    user-select: none;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;