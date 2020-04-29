import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (...args: any[]) => any;
}

const dammy = () => {};

export const Button: React.FC<ButtonProps> = ({ children, onClick = dammy }) => {
  return (
    <Container onClick={onClick}>
      {children}
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