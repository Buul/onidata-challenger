import styled from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 23px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 32px 24px;
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  height: 100vh;
  overflow: auto;

  @media (min-width: ${breakpoints.md}) {
    max-width: 744px;
    padding: 24px 32px;
    height: auto;
  }
`;
