import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Routes from '@/routes/Router';

import store from './flux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#183EFF',
    },
  },
});

const App: FC = () => (
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  </Provider>
);

export default App;
