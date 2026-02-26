import { combineReducers } from "redux";

import clientReducer from "./client/client.reducer";
import productReducer from "./product/product.reducer";
import shoppingCartReducer from "./shoppingCart/cart.reducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;