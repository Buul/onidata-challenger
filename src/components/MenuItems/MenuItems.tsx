import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { logout } from '@/utils/services/auth';

export const MenuItems: FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/home')}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" style={{ color: '#ffffff' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/produtos')}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <ViewInArSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" style={{ color: '#ffffff' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/usuarios')}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <PersonSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Usuários" style={{ color: '#ffffff' }} />
        </ListItemButton>
      </ListItem>
      <Divider sx={{ borderColor: '#ffffff' }} />
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/configuracoes')}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuração" style={{ color: '#ffffff' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon style={{ color: '#ffffff' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" style={{ color: '#ffffff' }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
