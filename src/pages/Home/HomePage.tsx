import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

import { Title } from 'components/Title/Title';
import { Button } from 'components/Button/Button';
import { Text } from 'components/Text/Text';
import { Logo } from 'components/icons/Logo';



interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {
  const redirect = (path: string) => () => window.open(path);

  return (
    <Root>
      <Center>
        <Content>
          <Title>
            Welcome! Thanks <br/> for joining us.
          </Title>
          <Logo />
          <Button onClick={redirect('https://www.google.com/')}>Set up your account</Button>
        </Content>
        <Description>
          <SmallTitle>
            Description
          </SmallTitle>
          <Text>
            Hanc ego cum soluta nobis est laborum et accusamus et via procedat oratio. Sed ut ad modum, quaeso,
            interpretaris? sicine eos censes aut rerum hic tenetur.
          </Text>
        </Description>
      </Center>
    </Root>
  );
};

const Root = styled.div`
  background: ${theme.palette.main};
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: ${theme.offset}px 0 0 0;
  height: 100%;
   @media (min-width: 320px) and (max-width: 480px) {
     height: max-content;
   }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const SmallTitle = styled.div`
  font-family: ${theme.fonts.main};
  font-weight: bold;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${theme.palette.text};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 0 50px 0;
`;

const Description = styled.div`
  width: 504px;
   margin: 0 0 20px 0;
  @media (min-width: 320px) and (max-width: 480px) {
   display: none;
  }
`;


