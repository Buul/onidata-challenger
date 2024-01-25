import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div``;

export const InfoBox = styled.div`
  width: 100%;
  align-items: center;
`;

export const Box = styled.div`
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;

  ul {
    list-style-type: disc;
    margin-left: 10px;
  }

  li {
    color: #524e69;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  img {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 600px;
  }
`;
