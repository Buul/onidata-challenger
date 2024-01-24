import styled from 'styled-components';

export const Wrapper = styled.div`
  h5 {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
