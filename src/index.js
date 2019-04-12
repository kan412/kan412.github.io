import '@babel/polyfill';
import 'isomorphic-fetch';
import Newsfeed from './news-feed.js';
import json from './generated.json';

import style from '../style.css';

console.log(json);

let news = new Newsfeed('6df77133a743489a965dd29e31343e75');
news.load();

