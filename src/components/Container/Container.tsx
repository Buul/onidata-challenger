import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
