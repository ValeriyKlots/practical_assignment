import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';

const users = createStore(rootReducer);

export default users;