import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';

import { CurrentUser } from 'components/CurrentUser/CurrentUser';
import { Notification } from 'components/Notification/Notification';
import { Burger } from 'components/icons/Burger';

interface NavigationProps {

}

const LINKS = [
  'Browse',
  'How it works',
  'Help',
  'About',
];


export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Root>
      <DesktopContainer>
        {LINKS.map(link => <MenuItem key={link} href="#">{link}</MenuItem>)}
      </DesktopContainer>
      <LeftSide>
        <CurrentUser/>
        <Actions>
          <Notification/>
          <Burger/>
        </Actions>
      </LeftSide>
    </Root>
  );
};

const DesktopContainer = styled.div`
  padding: 17px 0 0 30px;
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
}
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
  position: absolute;
  left: 0;
  top:0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px 0 0;
 @media (min-width: 320px) and (max-width: 480px) {
  width: 100%;
  justify-content: space-between;
 }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

