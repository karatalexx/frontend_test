import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  src?: string;
  size?: number
}

const defaultSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src = defaultSrc, size = 20 } = props;
  return (
    <Root size={size}>
      <img src={src} alt="" />
    </Root>
  );
};

const Root = styled.div<any>`
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;