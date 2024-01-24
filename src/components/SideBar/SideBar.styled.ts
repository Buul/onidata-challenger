import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  box-shadow: 0 8px 10px 5px rgba(0, 0, 0, 0.5);
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;
