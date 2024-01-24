import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Routes from '@/routes/Router';

import store from './flux/store';

const App: FC = () => (
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </LocalizationProvider>
  </Provider>
);

export default App;
