import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, InputBase, Paper } from '@mui/material';

import { Menu } from '@/components';

import * as S from './Header.styled';

export const Header: FC = () => {
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPathname, setCurrentPathname] = useState('');

  useEffect(() => {
    setCurrentPathname(pathname);
  }, []);

  useEffect(() => {
    if (currentPathname !== pathname) {
      setCurrentPathname(pathname);
      setMenuOpen(false);
    }
  }, [pathname]);

  const handleClickMenu = () => {
    setMenuOpen(true);
  };

  return (
    <S.Wrapper>
      <S.Action>
        <Paper
          component="form"
          elevation={0}
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              borderRadius: '4px',
              height: '46px',
            }}
            placeholder="Buscar participante..."
            inputProps={{ 'aria-label': 'Buscar participante...' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <S.Divider>ou</S.Divider>
        <Button id="add" variant="contained">
          Cadastrar Novo Membro
        </Button>
      </S.Action>
      <S.MenuWrapper>
        <MenuIcon onClick={handleClickMenu} />
      </S.MenuWrapper>
      {menuOpen && <Menu />}
    </S.Wrapper>
  );
};
