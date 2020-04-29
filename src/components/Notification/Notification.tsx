import React from 'react';
import styled from 'styled-components';

import { theme } from 'theme';

// assets
import { Bell } from 'components/icons/Bell';

interface NotificationProps {

}

export const Notification: React.FC<NotificationProps> = () => {
  return (
    <Root>
      <Bell/>
      <Counter>
        2
      </Counter>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 15px;
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