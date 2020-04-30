import React from 'react';
import styled from 'styled-components';
import useMedia from 'use-media';
import { motion } from 'framer-motion';

import { Avatar } from 'components/Avatar/Avatar';
import { User } from 'services/UserService';

import { theme } from 'theme';
import { getFullName } from 'utils';

interface UserRowProps {
  data: User;
}

export const UserRow: React.FC<UserRowProps> = ({data}) => {
  const isMobile = useMedia('(min-width: 320px) and (max-width: 480px)');
  return (
    <Root>
      <AvatarSection>
        <motion.div whileHover={{scale: 1.1}}>
          <Avatar size={isMobile ? 52 : 72} src={data.avatar}/>
        </motion.div>
      </AvatarSection>
      <Grid>
        <FullName>
          {getFullName(data)}
        </FullName>
        <EmailSection>
          <EmailTitle>
            User email address
          </EmailTitle>
          <EmailValue>
            {data.email}
          </EmailValue>
        </EmailSection>
      </Grid>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  border-bottom: 2px solid ${theme.palette.gray};

`;

const AvatarSection = styled.div`
  background: ${theme.palette.gray};
  width: 142px ;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${theme.palette.main};
   @media (min-width: 320px) and (max-width: 480px) {
    width: 80px;
   }
`;

const FullName = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;
`;

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
   @media (min-width: 320px) and (max-width: 480px) {
     align-items: flex-start;
     margin: 0 0 0 20px;
   }
`;

const EmailTitle = styled.span`
  font-family: Wigrum;
  font-size: 10px;
  line-height: 10px;
  text-align: right;
  color: ${theme.palette.text};
  mix-blend-mode: normal;
  opacity: 0.5;
   @media (min-width: 320px) and (max-width: 480px) {
    display: none;
   }
`;

const EmailValue = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #CD845C
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
   @media (min-width: 320px) and (max-width: 480px) {
       grid-template-columns: 1fr;
       align-content: center;
   }
`;
