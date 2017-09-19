import axios from 'axios';
const API_KEY = 'Put Your API KEY Here';

const ROOT_URL = `https://newsapi.org/v1/articles?source=the-times-of-india&apiKey=${API_KEY}`;
export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(){
	const url=`${ROOT_URL}&sortBy=latest`;
	const request= axios.get(url);

return{
	type: FETCH_NEWS,
	payload: request
	};

}
