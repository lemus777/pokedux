import { combineReducers } from 'redux';
import dataReducer from '../slices/dataSlice'; // el nombre de la importación no coincide porque al ser export default podemos cambiar el nombre, así se ve más claro qué es

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
