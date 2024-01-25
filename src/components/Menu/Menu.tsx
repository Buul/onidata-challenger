import { FC } from 'react';
import { Avatar } from '@mui/material';

import { MenuItems, Typography } from '@/components';
import { useUser } from '@/hook/selectors/userHooks';

import * as S from './Menu.styled';

export const Menu: FC = () => {
  const { data } = useUser();

  return (
    <S.Wrapper>
      <Avatar
        alt={data?.employee_user.first_name}
        src={data?.employee_user.photo}
        sx={{ width: 80, height: 80 }}
      />
      {data && (
        <Typography variant="title" align="center" spacing="xs">
          {`${data?.employee_user.first_name} ${data?.employee_user.last_name}`}
        </Typography>
      )}
      <MenuItems />
    </S.Wrapper>
  );
};
