import React from 'react';
import styled from 'styled-components';
import { useCurrentUser } from '../../services/useCurrentUser';
import { Avatar } from 'components/Avatar/Avatar';

interface CurrentUserProps {

}

export const CurrentUser: React.FC<CurrentUserProps> = () => {
  const { data } = useCurrentUser();
  return (
    <Root>
      <Avatar size={36} src={data?.avatar}/>
      <FullName>
        {`${data?.first_name} ${data?.last_name}`}
      </FullName>
    </Root>
  );
};

const Root = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const FullName = styled.span`
   margin: 0 15px 0 5px;
`;