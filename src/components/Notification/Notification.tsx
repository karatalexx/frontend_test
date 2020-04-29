import React from 'react';
import styled from 'styled-components';

import { theme } from 'theme';

// assets
import notification from 'assets/notification.svg'

interface NotificationProps {

}

export const Notification: React.FC<NotificationProps> = () => {
  return (
    <Root>
      <img src={notification} alt=""/>
      <Counter>
        2
      </Counter>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Counter = styled.span`
  font-family: ${theme.fonts.main};
  font-size: 12px;
  font-weight: 500;
`;