import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    position: relative;
  }

  span {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const LogoWrapper = styled.div`
  padding: 16px;
  margin-bottom: 20px;
  img {
    height: 30px;
  }
`;

export const UserBoxWrapper = styled.div`
  width: 100%;
  height: 82px;
  background: #ecf1f9;
  padding: 16px 8px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
`;

export const UserName = styled.div`
  color: #525252;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-left: 8px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
