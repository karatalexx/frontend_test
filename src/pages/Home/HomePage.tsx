import React from 'react';

import { Title } from 'components/Title/Title';
import { Button } from 'components/Button/Button';
import { Navigation } from 'components/Navigation/Navigation';
import { Text } from 'components/Text/Text';

import logo from 'assets/logo.svg';

import styled from 'styled-components';
import { theme } from 'theme';

interface HomePageProps {

}


export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Root>
      <Center>
        <Content>
          <Title>
            Welcome! Thanks <br/> for joining us.
          </Title>
          <Box>
            <Logo src={logo} alt=""/>
          </Box>
          <Button>Set up your account</Button>
          <Space height={100}/>
        </Content>
        <Box width="504px">
          <SmallTitle>
            Description
          </SmallTitle>
          <Text>
            Hanc ego cum soluta nobis est laborum et accusamus et via procedat oratio. Sed ut ad modum, quaeso,
            interpretaris? sicine eos censes aut rerum hic tenetur.
          </Text>
        </Box>
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
`;

const Logo = styled.img`
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Space = styled.div<{ height: number }>`
  width: 100%;
  height: ${props => props.height}px
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

const Box = styled.div<any>`
  position: relative;
  width: ${({width = 'initial'}) => width};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;


