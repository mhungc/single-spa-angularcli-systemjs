import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'


SystemJS.config({
  map: {
    'plugin-babel': './plugin-babel.js',//' node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': './systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'
});

singleSpa.registerApplication('navbar', SystemJS.import('navbar!sofe'), isActive.navbar)
singleSpa.registerApplication('people', SystemJS.import('people!sofe'), isActive.people)
singleSpa.registerApplication('planets', SystemJS.import('planets!sofe'), isActive.planets)
singleSpa.registerApplication('marvel', () => { 
    return SystemJS.import('marvelinline!sofe').then( () => SystemJS.import('marvel!sofe'))
}, isActive.marvel)

singleSpa.start()
