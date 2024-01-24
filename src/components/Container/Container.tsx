import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;
