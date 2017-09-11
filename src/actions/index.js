import axios from 'axios';
const API_KEY = '0f9adeaeb47c4ca99fef6ad421b57b11';

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