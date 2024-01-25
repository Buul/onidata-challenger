import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Wrapper = styled.div`
  box-shadow: 0px -1px 0px 0px #f1f1f1 inset;
  width: 100%;
  height: 110px;
  justify-content: space-between;
  padding: 0 20px;

  display: flex;
  align-items: center;

  form {
    border-radius: 4px;
    border: 1px solid #c6c3d0;
    width: 100%;
  }

  button {
    text-transform: none;
  }

  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
    padding: 0;
    height: 80px;

    form {
      width: 450px;
    }
  }
`;

export const MenuWrapper = styled.div`
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const Divider = styled.div`
  color: #3c3c3c;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0 16px;
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-right: 12px;

  #add {
    margin-top: 8px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    width: auto;
    margin-right: 0;

    #add {
      margin-top: 0;
      width: auto;
    }
  }
`;
