import React from 'react';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { Text } from 'components/Text/Text';
import styled from 'styled-components';
import { theme } from 'theme';
import { motion } from 'framer-motion';

import { useUsers } from 'services/useUsers';
import { UserRow } from 'components/UserRow/UserRow';

interface ProfileListProps {

}

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      y: {stiffness: 1000},
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
    },
  },
};


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

      {!users.loading && (
        <UserTable
          variants={container}
          initial="hidden"
          animate="show"
        >
          {users.data.map(user => {
            return (
              <motion.div key={user.id} variants={item} whileHover={{scale: 0.95}}>
                <UserRow data={user}/>
              </motion.div>
            );
          })}
        </UserTable>
      )}


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

const UserTable = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    overflow-y: scroll;
    height: 100%;
    @media (min-width: 320px) and (max-width: 480px) {
     overflow-y: initial;
    }
`;