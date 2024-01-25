import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 10;
  left: 0;
  display: flex;
  align-items: center;
  padding-top: 100px;
  position: absolute;
  flex-direction: column;
  background-color: #ffffff;

  h5 {
    margin: 20px 0;
  }

  ul {
    width: 220px;
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
