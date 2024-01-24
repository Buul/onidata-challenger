import { FC, ReactNode } from 'react';

import { Header, SideBar } from '@/components';

import * as S from './MainLayout.styled';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <S.Wrapper>
    <Header />
    <S.Container>
      <SideBar />
      <S.Content>{children}</S.Content>
    </S.Container>
  </S.Wrapper>
);
