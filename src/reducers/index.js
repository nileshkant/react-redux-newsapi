import { combineReducers } from 'redux';
import NewsReducer from './reducers_news';


const rootReducer = combineReducers({
  News: NewsReducer 
});

export default rootReducer;
