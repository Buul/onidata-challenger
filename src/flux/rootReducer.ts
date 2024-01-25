import sigInReducer from './modules/sigIn/reducers';
import userReducer from './modules/user/reducers';

const rootReducer = () => ({
  sigIn: sigInReducer,
  user: userReducer,
});

export default rootReducer;
