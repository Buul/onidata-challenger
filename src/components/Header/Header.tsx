import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';

import { Menu as MenuComponent, Typography } from '@/components';
import { getUser, logout } from '@/utils/services/auth';

import * as S from './Header.styled';

export const Header: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPathname, setCurrentPathname] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const user = getUser();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, []);

  useEffect(() => {
    if (currentPathname !== pathname) {
      setMenuOpen(false);
    }
  }, [pathname]);

  const handleClickMenu = () => {
    setMenuOpen(true);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate('/');
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.Wrapper>
      <img
        alt="logo onidata"
        src="https://i0.wp.com/www.onidata.com/wp-content/uploads/2021/05/logo.png?fit=107%2C31&ssl=1%201x,%20https://i0.wp.com/www.onidata.com/wp-content/uploads/2021/05/logo-retina-onidata.png?fit=171%2C49&ssl=1%202x"
      />
      <S.MenuWrapper>
        <MenuIcon onClick={handleClickMenu} />
      </S.MenuWrapper>
      {user && (
        <S.UserInfo>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt={user?.nome}
                  src={user?.image}
                />
                <Typography
                  variant="subTitle"
                  align="center"
                  spacing="xs"
                  onClick={handleClick}
                >
                  {`${user?.nome} ${user?.sobrenome}`}
                </Typography>
              </>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <S.LinkWrapper onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Sair
              </S.LinkWrapper>
            </MenuItem>
          </Menu>
        </S.UserInfo>
      )}
      {menuOpen && <MenuComponent />}
    </S.Wrapper>
  );
};
