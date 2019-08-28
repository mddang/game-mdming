
import './styles.css';
import { ready } from './utils';
import { read } from 'fs';
import { runApp } from './app';
/*
ready(() => {
    console.log('doc is loaded. ');
});
*/

ready(runApp);
