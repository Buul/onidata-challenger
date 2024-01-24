import addressReducer from './modules/address/reducers';
import productsReducer from './modules/products/reducers';
import sigInReducer from './modules/sigIn/reducers';
import userReducer from './modules/user/reducers';

const rootReducer = () => ({
  sigIn: sigInReducer,
  address: addressReducer,
  user: userReducer,
  products: productsReducer,
});

export default rootReducer;
