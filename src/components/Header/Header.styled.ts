import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const MenuWrapper = styled.div`
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
