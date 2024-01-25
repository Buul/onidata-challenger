import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Avatar,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';

import LogoGov from '@/assets/logos/gov.svg';
import { MenuItems } from '@/components';
import { useUser } from '@/hook/selectors/userHooks';

import * as S from './SideBar.styled';

const drawerWidth = 216;

export const SideBar: FC = () => {
  const navigate = useNavigate();
  const { data } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirectUserSettings = () => {
    setAnchorEl(null);
    navigate('/alunos');
  };

  return (
    <S.Wrapper>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: '-1px 0px 0px 0px #f1f1f1 inset',
            border: 'none',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <S.LogoWrapper>
          <img alt="logo gov" src={LogoGov} />
        </S.LogoWrapper>
        <MenuItems />
        <S.UserBoxWrapper>
          <S.UserInfo>
            <Avatar
              alt={data?.employee_user.first_name}
              src={data?.employee_user.photo}
              sx={{ width: 50, height: 50, border: '2px solid #183EFF' }}
            />
            <S.UserName>{`Olá, ${data?.employee_user.first_name}`}</S.UserName>
          </S.UserInfo>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <MoreVertIcon />
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
            <MenuItem onClick={handleRedirectUserSettings}>
              <S.LinkWrapper>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Perfil
              </S.LinkWrapper>
            </MenuItem>
          </Menu>
        </S.UserBoxWrapper>
      </Drawer>
    </S.Wrapper>
  );
};
