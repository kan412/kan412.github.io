import '@babel/polyfill';
import 'isomorphic-fetch';
import Newsfeed from './news-feed.js';

import style from '../style.css';

let news = new Newsfeed('6df77133a743489a965dd29e31343e75');
news.load();

