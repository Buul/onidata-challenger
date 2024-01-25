import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px 24px;
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  height: 100vh;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.05);

  @media (min-width: ${breakpoints.md}) {
    max-width: 600px;
    padding: 32px;
    height: auto;
  }
`;
