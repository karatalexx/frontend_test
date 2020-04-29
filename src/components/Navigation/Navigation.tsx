import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

import { CurrentUser } from 'components/CurrentUser/CurrentUser';
import { Notification } from 'components/Notification/Notification';

import burger from 'assets/burger.svg';

interface MenuProps {

}

const LINKS = [
  'Browse',
  'How it works',
  'Help',
  'About',
];


export const Navigation = () => {
  return (
    <Root>
      <DesktopContainer>
        {LINKS.map(link => <MenuItem key={link} href="#">{link}</MenuItem>)}
      </DesktopContainer>
      <LeftSide>
        <CurrentUser/>
        <Notification/>
        <img src={burger} alt=""/>
      </LeftSide>
    </Root>
  );
};

const DesktopContainer = styled.div`
    padding: 17px 0 0 30px;
`;

const MenuItem = styled.a`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px;
  color: ${theme.palette.text};
  text-decoration: none;
  text-underline: none;
`;

const Root = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px 0 0;
`;

