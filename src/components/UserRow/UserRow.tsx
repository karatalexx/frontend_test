import React from 'react';

import { Avatar } from 'components/Avatar/Avatar';

import { User } from 'services/UserService';
import styled from 'styled-components';
import { theme } from 'theme';

interface UserRowProps {
  data: User;
}

export const UserRow: React.FC<UserRowProps> = ({data}) => {
  return (
    <Root>
      <AvatarSection>
        <Avatar size={72} src={data.avatar}/>
      </AvatarSection>
      <FullName>
        {`${data.first_name} ${data.last_name}`}
      </FullName>
      <EmailSection>
        <EmailTitle>
          User email address
        </EmailTitle>
        <EmailValue>
          {data.email}
        </EmailValue>
      </EmailSection>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  border-bottom: 2px solid ${theme.palette.gray};

`;

const AvatarSection = styled.div`
  background: ${theme.palette.gray};
  width: 100%;
  max-width: 142px ;
  min-width: 80px ;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${theme.palette.main};
`;

const FullName = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;
  width: 200px;
`;

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

const EmailTitle = styled.span`
  font-family: Wigrum;
  font-size: 10px;
  line-height: 10px;
  text-align: right;
  color: ${theme.palette.text};
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const EmailValue = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #CD845C
`;
