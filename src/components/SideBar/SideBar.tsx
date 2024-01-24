import { FC } from 'react';
import { Drawer } from '@mui/material';

import { MenuItems } from '@/components';

import * as S from './SideBar.styled';

const drawerWidth = 200;

export const SideBar: FC = () => (
  <S.Wrapper>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '60px',
          backgroundColor: '#24396d',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <MenuItems />
    </Drawer>
  </S.Wrapper>
);
