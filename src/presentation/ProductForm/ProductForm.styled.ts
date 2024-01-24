import styled from 'styled-components';

export const Wrapper = styled.div`
  h5 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const AvatarWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
