import React from 'react';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { Text } from 'components/Text/Text';
import styled from 'styled-components';
import { theme } from 'theme';

import { useUsers } from 'services/useUsers';
import { UserRow } from 'components/UserRow/UserRow';

interface ProfileListProps {

}

export const ProfileList: React.FC<ProfileListProps> = () => {
  const users = useUsers();
  return (
    <Root>
      <SubTitle>
        Profile list
      </SubTitle>
      <Text>
        Laudem et via procedat oratio quaerimus igitur, quid et accurate disserendum et dolorem?. At magnum periculum
        adiit in oculis quidem exercitus quid ex ea voluptate et.
      </Text>
      <UserTable>
        {users.data.map(user => <UserRow key={user.id} data={user}/>)}
      </UserTable>
    </Root>
  );
};

const Root = styled.div`
    padding: ${theme.offset}px 30px 0 30px;
    height: 100%;
    max-height: calc(100vh - ${theme.offset}px);
    overflow: hidden;
     @media (min-width: 320px) and (max-width: 480px) {
      overflow: visible;
     }
`;

const UserTable = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    overflow-y: scroll;
    height: 100%;
    @media (min-width: 320px) and (max-width: 480px) {
     overflow-y: initial;
    }
`;