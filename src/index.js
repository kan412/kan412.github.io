import '@babel/polyfill';
import 'isomorphic-fetch';
import Newsfeed from './news-feed.js';
// import json from './generated.json';

import style from '../style.css';

// console.log(json);

let news = new Newsfeed();
news.load();

