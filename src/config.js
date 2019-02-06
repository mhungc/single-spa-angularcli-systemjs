import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

import 'babel-polyfill';
import 'zone.js';

SystemJS.config({
    map: { 'json': '../node_modules/systemjs-plugin-json/json.js' },
    meta: { '*.json': { loader: 'json' } }
  });

singleSpa.registerApplication('navbar', SystemJS.import('navbar!sofe'), isActive.navbar)
singleSpa.registerApplication('people', SystemJS.import('people!sofe'), isActive.people)
singleSpa.registerApplication('planets', SystemJS.import('planets!sofe'), isActive.planets)
singleSpa.registerApplication('marvel', () => SystemJS.import('http://localhost:4201/loader.js')
, isActive.marvel);

/*singleSpa.registerApplication('marvel', SystemJS.import('marvel!sofe'), isActive.marvel)*/

singleSpa.start();
