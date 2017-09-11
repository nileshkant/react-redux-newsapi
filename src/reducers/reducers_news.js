import _ from 'lodash';
import {FETCH_NEWS} from '../actions/index';

export default function(state={}, action){
	switch (action.type){
		case FETCH_NEWS:
		
			return _.mapKeys(action.payload.data.articles, 'title');
		
		default:
        break;
	}

	return state;
}