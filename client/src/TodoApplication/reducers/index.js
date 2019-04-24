import { combineReducers } from 'redux';
import tasks from './tasks';
import filters from './filters';
import edit from './edit';

const rootReducer = combineReducers({ tasks, filters, edit });

export default rootReducer;
