import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    padding: 50px;
    overflow: auto;
  }
`;
