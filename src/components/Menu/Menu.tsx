import { FC } from 'react';
import { Avatar } from '@mui/material';

import { MenuItems, Typography } from '@/components';
import { getUser } from '@/utils/services/auth';

import * as S from './Menu.styled';

export const Menu: FC = () => {
  const user = getUser();

  return (
    <S.Wrapper>
      <Avatar
        alt={user?.nome}
        src={user?.image}
        sx={{ width: 80, height: 80 }}
      />
      {user && (
        <Typography variant="title" align="center" spacing="xs">
          {`${user?.nome} ${user?.sobrenome}`}
        </Typography>
      )}
      <MenuItems />
    </S.Wrapper>
  );
};
