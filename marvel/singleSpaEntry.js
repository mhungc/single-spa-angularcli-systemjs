// import 'core-js/es7/reflect';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {enableProdMode} from '@angular/core';
// import {MainModule} from './src/main';
// import {environment} from './src/environments/environment';
// import { Router } from '@angular/router';

// if (environment.production) {
//     enableProdMode();
// }

// const spaProps = {
//     bootstrappedModule: null,
//     Router: Router
// };

// // This lifecycle function will be called by singleSPA exactly once, right before the registered application is mounted for the first time.
// export function bootstrap(props) {
//     return Promise.resolve();
// }


// // This lifecycle function is called by singleSPA every time the route for this app is active and the app should be rendered.
// export function mount(props) {
//     createDomElement();

//     return platformBrowserDynamic([
//         {provide: 'localStoreRef', useValue: props.store },
//         {provide: 'globalEventDispatcherRef', useValue: props.globalEventDistributor }])
//         .bootstrapModule(MainModule).then(module => {
//             return spaProps.bootstrappedModule = module;
//         });
// }

// // This lifecycle function will be called when the user navigates away from this apps route.
// export function unmount(props) {
//     return new Promise((resolve, reject) => {
//         if (spaProps.Router) {
//             const routerRef = spaProps.bootstrappedModule.injector.get(spaProps.Router);
//             routerRef.dispose();
//         }
//         spaProps.bootstrappedModule.destroy();
//         delete spaProps.bootstrappedModule;
//         resolve();
//     });
// }

// function createDomElement() {
//     // Make sure there is a div for us to render into
//     let el = window.document.getElementById('app5');
//     if (!el) {
//         el = window.document.createElement('app5');
//         el.id = 'app5';
//         window.document.body.appendChild(el);
//     }

//     return el;
// }

import {loader} from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'marvel',
    selector: 'app-marvel',
    baseHref: "http://localhost:4200"
});

export const bootstrap = [
    lifecycles.bootstrap
];

export const mount = [
    lifecycles.mount
];

export const unmount = [
    lifecycles.unmount
];

export const unload = [
    lifecycles.unload
];