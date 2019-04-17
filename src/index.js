import '@babel/polyfill';
import 'isomorphic-fetch';
import NewsFeedComponent from './components/NewsFeedComponent';
import style from '../style.css';

import json from './generated.json'; // using this to test custom loader
console.log(json); // using this to test custom loader and this line will be removed when production mode is used

new NewsFeedComponent();

