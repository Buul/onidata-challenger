import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { find } from 'lodash';

import { logout } from '@/utils/services/auth';

const COLOR_UNSELECTED = '#525252';
const COLOR_SELECTED = '#4379C1';

export const MenuItems: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menu = [
    {
      id: 1,
      title: 'Home',
      icon: <HomeIcon />,
      path: '/home',
    },
    {
      id: 2,
      title: 'Alunos',
      icon: <AccountBoxOutlinedIcon />,
      path: '/alunos',
    },
    {
      id: 3,
      title: 'Pais',
      icon: <PersonOutlinedIcon />,
      path: '/pais',
    },
    {
      id: 4,
      title: 'Funcionários',
      icon: <BadgeOutlinedIcon />,
      path: '/funcionarios',
    },
    {
      id: 5,
      title: 'Relatórios',
      icon: <AssessmentOutlinedIcon />,
      path: '/relatorios',
    },
    {
      id: 6,
      title: 'Sair',
      icon: <LogoutIcon />,
      path: '/sair',
    },
  ];

  const menuSelected = find(menu, ['path', pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getColor = (id: number) => {
    if (menuSelected) {
      return (menuSelected.id !== id && COLOR_UNSELECTED) || COLOR_SELECTED;
    }
    return COLOR_UNSELECTED;
  };

  const menuAction = (path: string) => {
    if (path === '/sair') {
      handleLogout();
    } else {
      navigate(path);
    }
  };

  return (
    <List>
      {menu.map(item => (
        <ListItem disablePadding key={item.id}>
          <ListItemButton onClick={() => menuAction(item.path)}>
            <ListItemIcon style={{ color: getColor(item.id), minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              style={{ color: getColor(item.id) }}
            />
            {menuSelected && menuSelected.id !== item.id && (
              <ListItemIcon style={{ color: getColor(item.id), minWidth: 0 }}>
                <ArrowForwardIosOutlinedIcon />
              </ListItemIcon>
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
