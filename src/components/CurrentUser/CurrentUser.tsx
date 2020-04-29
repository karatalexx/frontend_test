import React from 'react';
import styled from 'styled-components';

import { useCurrentUser } from 'services/useCurrentUser';
import { Avatar } from 'components/Avatar/Avatar';
import { getFullName } from 'utils';

interface CurrentUserProps {

}

export const CurrentUser: React.FC<CurrentUserProps> = () => {
  const { data } = useCurrentUser();
  return (
    <Root>
      <Avatar size={36} src={data?.avatar}/>
      <FullName>
        {data && getFullName(data)}
      </FullName>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 480px) {
      margin: 0 0 0 20px;
  }
`;

const FullName = styled.span`
   margin: 0 15px 0 5px;
`;