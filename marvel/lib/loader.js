define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(0);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_single_spa_angular_cli__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_single_spa_angular_cli___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_single_spa_angular_cli__);


const lifecycles = Object(__WEBPACK_IMPORTED_MODULE_0_single_spa_angular_cli__["loader"])({
    name: 'marvel',
    selector: 'app-marvel',
    baseHref: "http://localhost:4201"
});

const bootstrap = [
    lifecycles.bootstrap
];
/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;


const mount = [
    lifecycles.mount
];
/* harmony export (immutable) */ __webpack_exports__["mount"] = mount;


const unmount = [
    lifecycles.unmount
];
/* harmony export (immutable) */ __webpack_exports__["unmount"] = unmount;


const unload = [
    lifecycles.unload
];
/* harmony export (immutable) */ __webpack_exports__["unload"] = unload;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var platform_1 = __webpack_require__(8);
var loader_1 = __webpack_require__(21);
exports.loader = loader_1.loader;
exports.router = new router_1.Router();
exports.platformSingleSpa = new platform_1.Platform();
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router() {
        this.routes = [];
    }
    Router.prototype.matchRoute = function (prefix, isDefaultPage) {
        var _this = this;
        this.routes.push(prefix);
        if (isDefaultPage) {
            this.defaultRoute = prefix;
        }
        return function (location) {
            if (prefix === '/**') {
                return true;
            }
            var route = _this.routes.find(function (r) { return _this.pathMatch(location, r); });
            if (route) {
                return _this.pathMatch(location, prefix);
            }
            else {
                _this.navigate(_this.defaultRoute);
                return false;
            }
        };
    };
    Router.prototype.navigate = function (path) {
        history.pushState(null, null, path);
    };
    Router.prototype.pathMatch = function (location, path) {
        var loc = location.pathname + location.search;
        return loc.indexOf(path) !== -1;
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(9);
window.singleSpaAngularCli = window.singleSpaAngularCli || {};
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.prototype.mount = function (name, router) {
        var _this = this;
        this.name = name;
        this.router = router;
        return Observable_1.Observable.create(function (observer) {
            if (_this.isSingleSpaApp()) {
                window.singleSpaAngularCli[_this.name] = window.singleSpaAngularCli[_this.name] || {};
                window.singleSpaAngularCli[_this.name].mount = function (props) {
                    observer.next({ props: props, attachUnmount: _this.unmount.bind(_this) });
                    observer.complete();
                };
            }
            else {
                observer.next({ props: {}, attachUnmount: _this.unmount.bind(_this) });
                observer.complete();
            }
        });
    };
    Platform.prototype.unmount = function (module) {
        var _this = this;
        if (this.isSingleSpaApp()) {
            window.singleSpaAngularCli[this.name].unmount = function () {
                if (module) {
                    module.destroy();
                    if (_this.router) {
                        module.injector.get(_this.router).dispose();
                    }
                }
            };
        }
    };
    Platform.prototype.isSingleSpaApp = function () {
        return window.singleSpaAngularCli.isSingleSpa;
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=index.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(0);
var toSubscriber_1 = __webpack_require__(11);
var observable_1 = __webpack_require__(18);
var pipe_1 = __webpack_require__(19);
/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    /** @deprecated internal use only */ Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    /* tslint:enable:max-line-length */
    /**
     * Used to stitch together functional operators into a chain.
     * @method pipe
     * @return {Observable} the Observable result of all of the operators having
     * been called in the order they were passed in.
     *
     * @example
     *
     * import { map, filter, scan } from 'rxjs/operators';
     *
     * Rx.Observable.interval(1000)
     *   .pipe(
     *     filter(x => x % 2 === 0),
     *     map(x => x + x),
     *     scan((acc, x) => acc + x)
     *   )
     *   .subscribe(x => console.log(x))
     */
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i - 0] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    /* tslint:enable:max-line-length */
    Observable.prototype.toPromise = function (PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(12);
var rxSubscriber_1 = __webpack_require__(4);
var Observer_1 = __webpack_require__(3);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(1);
var Subscription_1 = __webpack_require__(13);
var Observer_1 = __webpack_require__(3);
var rxSubscriber_1 = __webpack_require__(4);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    // HACK(benlesh): To resolve an issue where Node users may have multiple
                    // copies of rxjs in their node_modules directory.
                    if (isTrustedSubscriber(destinationOrNext)) {
                        var trustedSubscriber = destinationOrNext[rxSubscriber_1.rxSubscriber]();
                        this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                        this.destination = trustedSubscriber;
                        trustedSubscriber.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    /** @deprecated internal use only */ Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    /** @deprecated internal use only */ SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
function isTrustedSubscriber(obj) {
    return obj instanceof Subscriber || ('syncErrorThrowable' in obj && obj[rxSubscriber_1.rxSubscriber]);
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(14);
var isObject_1 = __webpack_require__(15);
var isFunction_1 = __webpack_require__(1);
var tryCatch_1 = __webpack_require__(16);
var errorObject_1 = __webpack_require__(2);
var UnsubscriptionError_1 = __webpack_require__(17);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(2);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(0);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var noop_1 = __webpack_require__(20);
/* tslint:enable:max-line-length */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
/* @internal */
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
window.singleSpaAngularCli = window.singleSpaAngularCli || {};
var xmlToAssets = function (xml) {
    var dom = document.createElement('html');
    dom.innerHTML = xml;
    var linksEls = dom.querySelectorAll('link[rel="stylesheet"]');
    var scriptsEls = dom.querySelectorAll('script[type="text/javascript"]');
    return {
        styles: Array.from(linksEls).map(function (el) { return el.getAttribute('href'); }),
        scripts: Array.from(scriptsEls).map(function (el) { return el.getAttribute('src'); }).filter(function (src) { return !src.match(/zone\.js/); })
    };
};
var transformOptsWithAssets = function (opts) {
    var url = opts.baseHref + "/index.html";
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function (event) {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status >= 200 && req.status < 400) {
                    var res = xmlToAssets(req.responseText);
                    opts.styles = res.styles;
                    opts.scripts = res.scripts;
                    resolve(null);
                }
                else {
                    reject("Try to load " + url + ", status : " + _this.status + " => " + _this.statusText);
                }
            }
        };
        req.open('GET', url, true);
        req.send(null);
    });
};
var getContainerEl = function (opts) {
    var el = document.querySelector(opts.selector);
    if (!el) {
        el = document.createElement(opts.selector);
        var container = opts.container ? document.querySelector(opts.container) : document.body;
        container.appendChild(el);
    }
    return el;
};
var noLoadingApp = function (currentApp, singleSpa) {
    var getAppNames = singleSpa.getAppNames, getAppStatus = singleSpa.getAppStatus, BOOTSTRAPPING = singleSpa.BOOTSTRAPPING;
    var firstInMounting = getAppNames().find(function (appName) {
        return getAppStatus(appName) === BOOTSTRAPPING;
    });
    var firstInMountingIndex = getAppNames().indexOf(firstInMounting);
    var currentIndex = getAppNames().indexOf(currentApp);
    return currentIndex <= firstInMountingIndex;
};
var onNotLoadingApp = function (currentApp, singleSpa) {
    return new Promise(function (resolve, reject) {
        var time = 0;
        var INTERVAL = 100;
        var interval = setInterval(function () {
            time += INTERVAL;
            if (noLoadingApp(currentApp, singleSpa)) {
                clearInterval(interval);
                resolve();
            }
            if (time >= 3000) {
                clearInterval(interval);
                reject("The application could not be loaded because another is still loading more than " + time + " milliseconds");
            }
        }, INTERVAL);
    });
};
var loadAllAssets = function (opts) {
    return new Promise(function (resolve, reject) {
        transformOptsWithAssets(opts).then(function () {
            var scriptsPromise = opts.scripts.reduce(function (prev, fileName) { return prev.then(loadScriptTag(opts.baseHref + "/" + fileName)); }, Promise.resolve(undefined));
            var stylesPromise = opts.styles.reduce(function (prev, fileName) { return prev.then(loadLinkTag(opts.baseHref + "/" + fileName)); }, Promise.resolve(undefined));
            Promise.all([scriptsPromise, stylesPromise]).then(resolve, reject);
        }, reject);
    });
};
var hashCode = function (str) {
    var hash = 0;
    if (str.length == 0)
        return hash.toString();
    for (var i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash = hash & hash;
        hash = hash >>> 1;
    }
    return hash.toString();
};
var loadScriptTag = function (url) {
    return function () {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.onload = function () {
                resolve();
            };
            script.onerror = function (err) {
                reject(err);
            };
            script.src = url;
            script.id = hashCode(url);
            document.head.appendChild(script);
        });
    };
};
var loadLinkTag = function (url) {
    return function () {
        return new Promise(function (resolve, reject) {
            var link = document.createElement('link');
            link.onload = function () {
                resolve();
            };
            link.onerror = function (err) {
                reject(err);
            };
            link.href = url;
            link.rel = 'stylesheet';
            link.id = hashCode(url);
            document.head.appendChild(link);
        });
    };
};
var unloadTag = function (url) {
    return function () {
        return new Promise(function (resolve, reject) {
            var tag = document.getElementById(hashCode(url));
            document.head.removeChild(tag);
            resolve();
        });
    };
};
var bootstrap = function (opts, props) {
    window.singleSpaAngularCli.isSingleSpa = true;
    var singleSpa = props.singleSpa;
    return new Promise(function (resolve, reject) {
        onNotLoadingApp(opts.name, singleSpa).then(function () {
            loadAllAssets(opts).then(resolve, reject);
        }, reject);
    });
};
var mount = function (opts, props) {
    return new Promise(function (resolve, reject) {
        getContainerEl(opts);
        if (window.singleSpaAngularCli[opts.name]) {
            window.singleSpaAngularCli[opts.name].mount(props);
            resolve();
        }
        else {
            console.error("Cannot mount " + opts.name + " because that is not bootstraped");
            reject();
        }
    });
};
var unmount = function (opts, props) {
    var _a = props.singleSpa, unloadApplication = _a.unloadApplication, getAppNames = _a.getAppNames;
    return new Promise(function (resolve, reject) {
        if (window.singleSpaAngularCli[opts.name]) {
            window.singleSpaAngularCli[opts.name].unmount();
            getContainerEl(opts).remove();
            if (getAppNames().indexOf(opts.name) !== -1) {
                unloadApplication(opts.name, { waitForUnmount: true });
                resolve();
            }
            else {
                reject("Cannot unmount " + opts.name + " because that " + opts.name + " is not part of the decalred applications : " + getAppNames());
            }
        }
        else {
            reject("Cannot unmount " + opts.name + " because that is not bootstraped");
        }
    });
};
var unload = function (opts, props) {
    return new Promise(function (resolve, reject) {
        opts.scripts.concat(opts.styles).reduce(function (prev, scriptName) { return prev.then(unloadTag(opts.baseHref + "/" + scriptName)); }, Promise.resolve(undefined));
        resolve();
    });
};
function loader(opts) {
    if (typeof opts !== 'object') {
        throw new Error("single-spa-angular-cli requires a configuration object");
    }
    if (typeof opts.name !== 'string') {
        throw new Error("single-spa-angular-cli must be passed opts.name string (ex : app1)");
    }
    if (typeof opts.baseHref !== 'string') {
        throw new Error("single-spa-angular-cli must be passed opts.baseHref string (ex : /app1)");
    }
    return {
        bootstrap: bootstrap.bind(null, opts),
        mount: mount.bind(null, opts),
        unmount: unmount.bind(null, opts),
        unload: unload.bind(null, opts)
    };
}
exports.loader = loader;
//# sourceMappingURL=index.js.map

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhlMDJiZmVmYTBkNWQ1NmEyMWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL2Vycm9yT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL3N5bWJvbC9yeFN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2luZ2xlU3BhRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbmdsZS1zcGEtYW5ndWxhci1jbGkvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW5nbGUtc3BhLWFuZ3VsYXItY2xpL2xpYi9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbmdsZS1zcGEtYW5ndWxhci1jbGkvbGliL3BsYXRmb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3RyeUNhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3BpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW5nbGUtc3BhLWFuZ3VsYXItY2xpL2xpYi9sb2FkZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSw4Q0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdDOzs7Ozs7OztBQ2xCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7Ozs7QUNMYTtBQUNiO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsdUM7Ozs7Ozs7QUNIYTtBQUNiO0FBQ0E7QUFDQSw0QkFB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QkFBdUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSwrREFBK0QsRUFBRTtBQUM5STtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg4ZTAyYmZlZmEwZDVkNTZhMjFkIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb21tb25KUyAvIE5vZGUgaGF2ZSBnbG9iYWwgY29udGV4dCBleHBvc2VkIGFzIFwiZ2xvYmFsXCIgdmFyaWFibGUuXG4vLyBXZSBkb24ndCB3YW50IHRvIGluY2x1ZGUgdGhlIHdob2xlIG5vZGUuZC50cyB0aGlzIHRoaXMgY29tcGlsYXRpb24gdW5pdCBzbyB3ZSdsbCBqdXN0IGZha2Vcbi8vIHRoZSBnbG9iYWwgXCJnbG9iYWxcIiB2YXIgZm9yIG5vdy5cbnZhciBfX3dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdztcbnZhciBfX3NlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJiBzZWxmO1xudmFyIF9fZ2xvYmFsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsO1xudmFyIF9yb290ID0gX193aW5kb3cgfHwgX19nbG9iYWwgfHwgX19zZWxmO1xuZXhwb3J0cy5yb290ID0gX3Jvb3Q7XG4vLyBXb3JrYXJvdW5kIENsb3N1cmUgQ29tcGlsZXIgcmVzdHJpY3Rpb246IFRoZSBib2R5IG9mIGEgZ29vZy5tb2R1bGUgY2Fubm90IHVzZSB0aHJvdy5cbi8vIFRoaXMgaXMgbmVlZGVkIHdoZW4gdXNlZCB3aXRoIGFuZ3VsYXIvdHNpY2tsZSB3aGljaCBpbnNlcnRzIGEgZ29vZy5tb2R1bGUgc3RhdGVtZW50LlxuLy8gV3JhcCBpbiBJSUZFXG4oZnVuY3Rpb24gKCkge1xuICAgIGlmICghX3Jvb3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSeEpTIGNvdWxkIG5vdCBmaW5kIGFueSBnbG9iYWwgY29udGV4dCAod2luZG93LCBzZWxmLCBnbG9iYWwpJyk7XG4gICAgfVxufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvb3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIHR5cGVvZiBhbnkgc28gdGhhdCBpdCB3ZSBkb24ndCBoYXZlIHRvIGNhc3Qgd2hlbiBjb21wYXJpbmcgYSByZXN1bHQgdG8gdGhlIGVycm9yIG9iamVjdFxuZXhwb3J0cy5lcnJvck9iamVjdCA9IHsgZToge30gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yT2JqZWN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9lcnJvck9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZW1wdHkgPSB7XG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7IHRocm93IGVycjsgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciByb290XzEgPSByZXF1aXJlKCcuLi91dGlsL3Jvb3QnKTtcbnZhciBTeW1ib2wgPSByb290XzEucm9vdC5TeW1ib2w7XG5leHBvcnRzLnJ4U3Vic2NyaWJlciA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nKSA/XG4gICAgU3ltYm9sLmZvcigncnhTdWJzY3JpYmVyJykgOiAnQEByeFN1YnNjcmliZXInO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgcnhTdWJzY3JpYmVyIGluc3RlYWRcbiAqL1xuZXhwb3J0cy4kJHJ4U3Vic2NyaWJlciA9IGV4cG9ydHMucnhTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnhTdWJzY3JpYmVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3J4anMvc3ltYm9sL3J4U3Vic2NyaWJlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2xvYWRlcn0gZnJvbSAnc2luZ2xlLXNwYS1hbmd1bGFyLWNsaSc7XHJcblxyXG5jb25zdCBsaWZlY3ljbGVzID0gbG9hZGVyKHtcclxuICAgIG5hbWU6ICdtYXJ2ZWwnLFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtbWFydmVsJyxcclxuICAgIGJhc2VIcmVmOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMVwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvb3RzdHJhcCA9IFtcclxuICAgIGxpZmVjeWNsZXMuYm9vdHN0cmFwXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbW91bnQgPSBbXHJcbiAgICBsaWZlY3ljbGVzLm1vdW50XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdW5tb3VudCA9IFtcclxuICAgIGxpZmVjeWNsZXMudW5tb3VudFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubG9hZCA9IFtcclxuICAgIGxpZmVjeWNsZXMudW5sb2FkXHJcbl07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2luZ2xlU3BhRW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xyXG52YXIgcGxhdGZvcm1fMSA9IHJlcXVpcmUoXCIuL3BsYXRmb3JtXCIpO1xyXG52YXIgbG9hZGVyXzEgPSByZXF1aXJlKFwiLi9sb2FkZXJcIik7XHJcbmV4cG9ydHMubG9hZGVyID0gbG9hZGVyXzEubG9hZGVyO1xyXG5leHBvcnRzLnJvdXRlciA9IG5ldyByb3V0ZXJfMS5Sb3V0ZXIoKTtcclxuZXhwb3J0cy5wbGF0Zm9ybVNpbmdsZVNwYSA9IG5ldyBwbGF0Zm9ybV8xLlBsYXRmb3JtKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbmdsZS1zcGEtYW5ndWxhci1jbGkvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSb3V0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSb3V0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXTtcclxuICAgIH1cclxuICAgIFJvdXRlci5wcm90b3R5cGUubWF0Y2hSb3V0ZSA9IGZ1bmN0aW9uIChwcmVmaXgsIGlzRGVmYXVsdFBhZ2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucm91dGVzLnB1c2gocHJlZml4KTtcclxuICAgICAgICBpZiAoaXNEZWZhdWx0UGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRSb3V0ZSA9IHByZWZpeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAocHJlZml4ID09PSAnLyoqJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJvdXRlID0gX3RoaXMucm91dGVzLmZpbmQoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIF90aGlzLnBhdGhNYXRjaChsb2NhdGlvbiwgcik7IH0pO1xyXG4gICAgICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5wYXRoTWF0Y2gobG9jYXRpb24sIHByZWZpeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5uYXZpZ2F0ZShfdGhpcy5kZWZhdWx0Um91dGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBSb3V0ZXIucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBwYXRoKTtcclxuICAgIH07XHJcbiAgICBSb3V0ZXIucHJvdG90eXBlLnBhdGhNYXRjaCA9IGZ1bmN0aW9uIChsb2NhdGlvbiwgcGF0aCkge1xyXG4gICAgICAgIHZhciBsb2MgPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICByZXR1cm4gbG9jLmluZGV4T2YocGF0aCkgIT09IC0xO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb3V0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUm91dGVyID0gUm91dGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW5nbGUtc3BhLWFuZ3VsYXItY2xpL2xpYi9yb3V0ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XHJcbndpbmRvdy5zaW5nbGVTcGFBbmd1bGFyQ2xpID0gd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGkgfHwge307XHJcbnZhciBQbGF0Zm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXRmb3JtKCkge1xyXG4gICAgfVxyXG4gICAgUGxhdGZvcm0ucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKG5hbWUsIHJvdXRlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNTaW5nbGVTcGFBcHAoKSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGlbX3RoaXMubmFtZV0gPSB3aW5kb3cuc2luZ2xlU3BhQW5ndWxhckNsaVtfdGhpcy5uYW1lXSB8fCB7fTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zaW5nbGVTcGFBbmd1bGFyQ2xpW190aGlzLm5hbWVdLm1vdW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHByb3BzOiBwcm9wcywgYXR0YWNoVW5tb3VudDogX3RoaXMudW5tb3VudC5iaW5kKF90aGlzKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBwcm9wczoge30sIGF0dGFjaFVubW91bnQ6IF90aGlzLnVubW91bnQuYmluZChfdGhpcykgfSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUGxhdGZvcm0ucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAobW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNwYUFwcCgpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zaW5nbGVTcGFBbmd1bGFyQ2xpW3RoaXMubmFtZV0udW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yb3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluamVjdG9yLmdldChfdGhpcy5yb3V0ZXIpLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXRmb3JtLnByb3RvdHlwZS5pc1NpbmdsZVNwYUFwcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGkuaXNTaW5nbGVTcGE7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXRmb3JtO1xyXG59KCkpO1xyXG5leHBvcnRzLlBsYXRmb3JtID0gUGxhdGZvcm07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbmdsZS1zcGEtYW5ndWxhci1jbGkvbGliL3BsYXRmb3JtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHJvb3RfMSA9IHJlcXVpcmUoJy4vdXRpbC9yb290Jyk7XG52YXIgdG9TdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuL3V0aWwvdG9TdWJzY3JpYmVyJyk7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi9zeW1ib2wvb2JzZXJ2YWJsZScpO1xudmFyIHBpcGVfMSA9IHJlcXVpcmUoJy4vdXRpbC9waXBlJyk7XG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgYW55IHNldCBvZiB2YWx1ZXMgb3ZlciBhbnkgYW1vdW50IG9mIHRpbWUuIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgYnVpbGRpbmcgYmxvY2tcbiAqIG9mIFJ4SlMuXG4gKlxuICogQGNsYXNzIE9ic2VydmFibGU8VD5cbiAqL1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZSB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgT2JzZXJ2YWJsZSBpc1xuICAgICAqIGluaXRpYWxseSBzdWJzY3JpYmVkIHRvLiBUaGlzIGZ1bmN0aW9uIGlzIGdpdmVuIGEgU3Vic2NyaWJlciwgdG8gd2hpY2ggbmV3IHZhbHVlc1xuICAgICAqIGNhbiBiZSBgbmV4dGBlZCwgb3IgYW4gYGVycm9yYCBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byByYWlzZSBhbiBlcnJvciwgb3JcbiAgICAgKiBgY29tcGxldGVgIGNhbiBiZSBjYWxsZWQgdG8gbm90aWZ5IG9mIGEgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUsIHdpdGggdGhpcyBPYnNlcnZhYmxlIGFzIHRoZSBzb3VyY2UsIGFuZCB0aGUgcGFzc2VkXG4gICAgICogb3BlcmF0b3IgZGVmaW5lZCBhcyB0aGUgbmV3IG9ic2VydmFibGUncyBvcGVyYXRvci5cbiAgICAgKiBAbWV0aG9kIGxpZnRcbiAgICAgKiBAcGFyYW0ge09wZXJhdG9yfSBvcGVyYXRvciB0aGUgb3BlcmF0b3IgZGVmaW5pbmcgdGhlIG9wZXJhdGlvbiB0byB0YWtlIG9uIHRoZSBvYnNlcnZhYmxlXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYSBuZXcgb2JzZXJ2YWJsZSB3aXRoIHRoZSBPcGVyYXRvciBhcHBsaWVkXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludm9rZXMgYW4gZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUgYW5kIHJlZ2lzdGVycyBPYnNlcnZlciBoYW5kbGVycyBmb3Igbm90aWZpY2F0aW9ucyBpdCB3aWxsIGVtaXQuXG4gICAgICpcbiAgICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VXNlIGl0IHdoZW4geW91IGhhdmUgYWxsIHRoZXNlIE9ic2VydmFibGVzLCBidXQgc3RpbGwgbm90aGluZyBpcyBoYXBwZW5pbmcuPC9zcGFuPlxuICAgICAqXG4gICAgICogYHN1YnNjcmliZWAgaXMgbm90IGEgcmVndWxhciBvcGVyYXRvciwgYnV0IGEgbWV0aG9kIHRoYXQgY2FsbHMgT2JzZXJ2YWJsZSdzIGludGVybmFsIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLiBJdFxuICAgICAqIG1pZ2h0IGJlIGZvciBleGFtcGxlIGEgZnVuY3Rpb24gdGhhdCB5b3UgcGFzc2VkIHRvIGEge0BsaW5rIGNyZWF0ZX0gc3RhdGljIGZhY3RvcnksIGJ1dCBtb3N0IG9mIHRoZSB0aW1lIGl0IGlzXG4gICAgICogYSBsaWJyYXJ5IGltcGxlbWVudGF0aW9uLCB3aGljaCBkZWZpbmVzIHdoYXQgYW5kIHdoZW4gd2lsbCBiZSBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUuIFRoaXMgbWVhbnMgdGhhdCBjYWxsaW5nXG4gICAgICogYHN1YnNjcmliZWAgaXMgYWN0dWFsbHkgdGhlIG1vbWVudCB3aGVuIE9ic2VydmFibGUgc3RhcnRzIGl0cyB3b3JrLCBub3Qgd2hlbiBpdCBpcyBjcmVhdGVkLCBhcyBpdCBpcyBvZnRlblxuICAgICAqIHRob3VnaHQuXG4gICAgICpcbiAgICAgKiBBcGFydCBmcm9tIHN0YXJ0aW5nIHRoZSBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZSwgdGhpcyBtZXRob2QgYWxsb3dzIHlvdSB0byBsaXN0ZW4gZm9yIHZhbHVlc1xuICAgICAqIHRoYXQgYW4gT2JzZXJ2YWJsZSBlbWl0cywgYXMgd2VsbCBhcyBmb3Igd2hlbiBpdCBjb21wbGV0ZXMgb3IgZXJyb3JzLiBZb3UgY2FuIGFjaGlldmUgdGhpcyBpbiB0d29cbiAgICAgKiBmb2xsb3dpbmcgd2F5cy5cbiAgICAgKlxuICAgICAqIFRoZSBmaXJzdCB3YXkgaXMgY3JlYXRpbmcgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZS4gSXQgc2hvdWxkIGhhdmUgbWV0aG9kc1xuICAgICAqIGRlZmluZWQgYnkgdGhhdCBpbnRlcmZhY2UsIGJ1dCBub3RlIHRoYXQgaXQgc2hvdWxkIGJlIGp1c3QgYSByZWd1bGFyIEphdmFTY3JpcHQgb2JqZWN0LCB3aGljaCB5b3UgY2FuIGNyZWF0ZVxuICAgICAqIHlvdXJzZWxmIGluIGFueSB3YXkgeW91IHdhbnQgKEVTNiBjbGFzcywgY2xhc3NpYyBmdW5jdGlvbiBjb25zdHJ1Y3Rvciwgb2JqZWN0IGxpdGVyYWwgZXRjLikuIEluIHBhcnRpY3VsYXIgZG9cbiAgICAgKiBub3QgYXR0ZW1wdCB0byB1c2UgYW55IFJ4SlMgaW1wbGVtZW50YXRpb24gZGV0YWlscyB0byBjcmVhdGUgT2JzZXJ2ZXJzIC0geW91IGRvbid0IG5lZWQgdGhlbS4gUmVtZW1iZXIgYWxzb1xuICAgICAqIHRoYXQgeW91ciBvYmplY3QgZG9lcyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYWxsIG1ldGhvZHMuIElmIHlvdSBmaW5kIHlvdXJzZWxmIGNyZWF0aW5nIGEgbWV0aG9kIHRoYXQgZG9lc24ndFxuICAgICAqIGRvIGFueXRoaW5nLCB5b3UgY2FuIHNpbXBseSBvbWl0IGl0LiBOb3RlIGhvd2V2ZXIsIHRoYXQgaWYgYGVycm9yYCBtZXRob2QgaXMgbm90IHByb3ZpZGVkLCBhbGwgZXJyb3JzIHdpbGxcbiAgICAgKiBiZSBsZWZ0IHVuY2F1Z2h0LlxuICAgICAqXG4gICAgICogVGhlIHNlY29uZCB3YXkgaXMgdG8gZ2l2ZSB1cCBvbiBPYnNlcnZlciBvYmplY3QgYWx0b2dldGhlciBhbmQgc2ltcGx5IHByb3ZpZGUgY2FsbGJhY2sgZnVuY3Rpb25zIGluIHBsYWNlIG9mIGl0cyBtZXRob2RzLlxuICAgICAqIFRoaXMgbWVhbnMgeW91IGNhbiBwcm92aWRlIHRocmVlIGZ1bmN0aW9ucyBhcyBhcmd1bWVudHMgdG8gYHN1YnNjcmliZWAsIHdoZXJlIGZpcnN0IGZ1bmN0aW9uIGlzIGVxdWl2YWxlbnRcbiAgICAgKiBvZiBhIGBuZXh0YCBtZXRob2QsIHNlY29uZCBvZiBhbiBgZXJyb3JgIG1ldGhvZCBhbmQgdGhpcmQgb2YgYSBgY29tcGxldGVgIG1ldGhvZC4gSnVzdCBhcyBpbiBjYXNlIG9mIE9ic2VydmVyLFxuICAgICAqIGlmIHlvdSBkbyBub3QgbmVlZCB0byBsaXN0ZW4gZm9yIHNvbWV0aGluZywgeW91IGNhbiBvbWl0IGEgZnVuY3Rpb24sIHByZWZlcmFibHkgYnkgcGFzc2luZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsXG4gICAgICogc2luY2UgYHN1YnNjcmliZWAgcmVjb2duaXplcyB0aGVzZSBmdW5jdGlvbnMgYnkgd2hlcmUgdGhleSB3ZXJlIHBsYWNlZCBpbiBmdW5jdGlvbiBjYWxsLiBXaGVuIGl0IGNvbWVzXG4gICAgICogdG8gYGVycm9yYCBmdW5jdGlvbiwganVzdCBhcyBiZWZvcmUsIGlmIG5vdCBwcm92aWRlZCwgZXJyb3JzIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSB3aWxsIGJlIHRocm93bi5cbiAgICAgKlxuICAgICAqIFdoYXRldmVyIHN0eWxlIG9mIGNhbGxpbmcgYHN1YnNjcmliZWAgeW91IHVzZSwgaW4gYm90aCBjYXNlcyBpdCByZXR1cm5zIGEgU3Vic2NyaXB0aW9uIG9iamVjdC5cbiAgICAgKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNhbGwgYHVuc3Vic2NyaWJlYCBvbiBpdCwgd2hpY2ggaW4gdHVybiB3aWxsIHN0b3Agd29yayB0aGF0IGFuIE9ic2VydmFibGUgZG9lcyBhbmQgd2lsbCBjbGVhblxuICAgICAqIHVwIGFsbCByZXNvdXJjZXMgdGhhdCBhbiBPYnNlcnZhYmxlIHVzZWQuIE5vdGUgdGhhdCBjYW5jZWxsaW5nIGEgc3Vic2NyaXB0aW9uIHdpbGwgbm90IGNhbGwgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgICAqIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLCB3aGljaCBpcyByZXNlcnZlZCBmb3IgYSByZWd1bGFyIGNvbXBsZXRpb24gc2lnbmFsIHRoYXQgY29tZXMgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICAgICAqXG4gICAgICogUmVtZW1iZXIgdGhhdCBjYWxsYmFja3MgcHJvdmlkZWQgdG8gYHN1YnNjcmliZWAgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseS5cbiAgICAgKiBJdCBpcyBhbiBPYnNlcnZhYmxlIGl0c2VsZiB0aGF0IGRlY2lkZXMgd2hlbiB0aGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQuIEZvciBleGFtcGxlIHtAbGluayBvZn1cbiAgICAgKiBieSBkZWZhdWx0IGVtaXRzIGFsbCBpdHMgdmFsdWVzIHN5bmNocm9ub3VzbHkuIEFsd2F5cyBjaGVjayBkb2N1bWVudGF0aW9uIGZvciBob3cgZ2l2ZW4gT2JzZXJ2YWJsZVxuICAgICAqIHdpbGwgYmVoYXZlIHdoZW4gc3Vic2NyaWJlZCBhbmQgaWYgaXRzIGRlZmF1bHQgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHdpdGggYSB7QGxpbmsgU2NoZWR1bGVyfS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPlN1YnNjcmliZSB3aXRoIGFuIE9ic2VydmVyPC9jYXB0aW9uPlxuICAgICAqIGNvbnN0IHN1bU9ic2VydmVyID0ge1xuICAgICAqICAgc3VtOiAwLFxuICAgICAqICAgbmV4dCh2YWx1ZSkge1xuICAgICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgICAqICAgICB0aGlzLnN1bSA9IHRoaXMuc3VtICsgdmFsdWU7XG4gICAgICogICB9LFxuICAgICAqICAgZXJyb3IoKSB7IC8vIFdlIGFjdHVhbGx5IGNvdWxkIGp1c3QgcmVtb3ZlIHRoaXMgbWV0aG9kLFxuICAgICAqICAgfSwgICAgICAgIC8vIHNpbmNlIHdlIGRvIG5vdCByZWFsbHkgY2FyZSBhYm91dCBlcnJvcnMgcmlnaHQgbm93LlxuICAgICAqICAgY29tcGxldGUoKSB7XG4gICAgICogICAgIGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgdGhpcy5zdW0pO1xuICAgICAqICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBSeC5PYnNlcnZhYmxlLm9mKDEsIDIsIDMpIC8vIFN5bmNocm9ub3VzbHkgZW1pdHMgMSwgMiwgMyBhbmQgdGhlbiBjb21wbGV0ZXMuXG4gICAgICogLnN1YnNjcmliZShzdW1PYnNlcnZlcik7XG4gICAgICpcbiAgICAgKiAvLyBMb2dzOlxuICAgICAqIC8vIFwiQWRkaW5nOiAxXCJcbiAgICAgKiAvLyBcIkFkZGluZzogMlwiXG4gICAgICogLy8gXCJBZGRpbmc6IDNcIlxuICAgICAqIC8vIFwiU3VtIGVxdWFsczogNlwiXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPlN1YnNjcmliZSB3aXRoIGZ1bmN0aW9uczwvY2FwdGlvbj5cbiAgICAgKiBsZXQgc3VtID0gMDtcbiAgICAgKlxuICAgICAqIFJ4Lk9ic2VydmFibGUub2YoMSwgMiwgMylcbiAgICAgKiAuc3Vic2NyaWJlKFxuICAgICAqICAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgKiAgICAgY29uc29sZS5sb2coJ0FkZGluZzogJyArIHZhbHVlKTtcbiAgICAgKiAgICAgc3VtID0gc3VtICsgdmFsdWU7XG4gICAgICogICB9LFxuICAgICAqICAgdW5kZWZpbmVkLFxuICAgICAqICAgZnVuY3Rpb24oKSB7XG4gICAgICogICAgIGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgc3VtKTtcbiAgICAgKiAgIH1cbiAgICAgKiApO1xuICAgICAqXG4gICAgICogLy8gTG9nczpcbiAgICAgKiAvLyBcIkFkZGluZzogMVwiXG4gICAgICogLy8gXCJBZGRpbmc6IDJcIlxuICAgICAqIC8vIFwiQWRkaW5nOiAzXCJcbiAgICAgKiAvLyBcIlN1bSBlcXVhbHM6IDZcIlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5DYW5jZWwgYSBzdWJzY3JpcHRpb248L2NhcHRpb24+XG4gICAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS5zdWJzY3JpYmUoXG4gICAgICogICBudW0gPT4gY29uc29sZS5sb2cobnVtKSxcbiAgICAgKiAgIHVuZGVmaW5lZCxcbiAgICAgKiAgICgpID0+IGNvbnNvbGUubG9nKCdjb21wbGV0ZWQhJykgLy8gV2lsbCBub3QgYmUgY2FsbGVkLCBldmVuXG4gICAgICogKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gY2FuY2VsbGluZyBzdWJzY3JpcHRpb25cbiAgICAgKlxuICAgICAqXG4gICAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICogICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgKiAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliZWQhJyk7XG4gICAgICogfSwgMjUwMCk7XG4gICAgICpcbiAgICAgKiAvLyBMb2dzOlxuICAgICAqIC8vIDAgYWZ0ZXIgMXNcbiAgICAgKiAvLyAxIGFmdGVyIDJzXG4gICAgICogLy8gXCJ1bnN1YnNjcmliZWQhXCIgYWZ0ZXIgMi41c1xuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09ic2VydmVyfEZ1bmN0aW9ufSBvYnNlcnZlck9yTmV4dCAob3B0aW9uYWwpIEVpdGhlciBhbiBvYnNlcnZlciB3aXRoIG1ldGhvZHMgdG8gYmUgY2FsbGVkLFxuICAgICAqICBvciB0aGUgZmlyc3Qgb2YgdGhyZWUgcG9zc2libGUgaGFuZGxlcnMsIHdoaWNoIGlzIHRoZSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgZnJvbSB0aGUgc3Vic2NyaWJlZFxuICAgICAqICBPYnNlcnZhYmxlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIGFuIGVycm9yLiBJZiBubyBlcnJvciBoYW5kbGVyIGlzIHByb3ZpZGVkLFxuICAgICAqICB0aGUgZXJyb3Igd2lsbCBiZSB0aHJvd24gYXMgdW5oYW5kbGVkLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRlIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICAgKiBAcmV0dXJuIHtJU3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICAgKiBAbWV0aG9kIHN1YnNjcmliZVxuICAgICAqL1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyXzEudG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcy5zb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luay5hZGQodGhpcy5zb3VyY2UgfHwgIXNpbmsuc3luY0Vycm9yVGhyb3dhYmxlID8gdGhpcy5fc3Vic2NyaWJlKHNpbmspIDogdGhpcy5fdHJ5U3Vic2NyaWJlKHNpbmspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaW5rO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3RyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIChzaW5rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZm9yRWFjaFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICAgKiBAcGFyYW0ge1Byb21pc2VDb25zdHJ1Y3Rvcn0gW1Byb21pc2VDdG9yXSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGUgdGhlIFByb21pc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgICAqL1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAobmV4dCwgUHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFQcm9taXNlQ3Rvcikge1xuICAgICAgICAgICAgaWYgKHJvb3RfMS5yb290LlJ4ICYmIHJvb3RfMS5yb290LlJ4LmNvbmZpZyAmJiByb290XzEucm9vdC5SeC5jb25maWcuUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIFByb21pc2VDdG9yID0gcm9vdF8xLnJvb3QuUnguY29uZmlnLlByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyb290XzEucm9vdC5Qcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZUN0b3IgPSByb290XzEucm9vdC5Qcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghUHJvbWlzZUN0b3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gUHJvbWlzZSBpbXBsIGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBNdXN0IGJlIGRlY2xhcmVkIGluIGEgc2VwYXJhdGUgc3RhdGVtZW50IHRvIGF2b2lkIGEgUmVmZXJuY2VFcnJvciB3aGVuXG4gICAgICAgICAgICAvLyBhY2Nlc3Npbmcgc3Vic2NyaXB0aW9uIGJlbG93IGluIHRoZSBjbG9zdXJlIGR1ZSB0byBUZW1wb3JhbCBEZWFkIFpvbmUuXG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzdWJzY3JpcHRpb24sIHRoZW4gd2UgY2FuIHN1cm1pc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgaGFuZGxpbmcgaXMgYXN5bmNocm9ub3VzLiBBbnkgZXJyb3JzIHRocm93blxuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGJlIHJlamVjdGVkIGV4cGxpY2l0bHkgYW5kIHVuc3Vic2NyaWJlIG11c3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGVkIG1hbnVhbGx5XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBOTyBzdWJzY3JpcHRpb24sIHRoZW4gd2UncmUgZ2V0dGluZyBhIG5leHRlZFxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZSBzeW5jaHJvbm91c2x5IGR1cmluZyBzdWJzY3JpcHRpb24uIFdlIGNhbiBqdXN0IGNhbGwgaXQuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGVycm9ycywgT2JzZXJ2YWJsZSdzIGBzdWJzY3JpYmVgIHdpbGwgZW5zdXJlIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bnN1YnNjcmlwdGlvbiBsb2dpYyBpcyBjYWxsZWQsIHRoZW4gc3luY2hyb25vdXNseSByZXRocm93IHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgLy8gQWZ0ZXIgdGhhdCwgUHJvbWlzZSB3aWxsIHRyYXAgdGhlIGVycm9yIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvd24gdGhlIHJlamVjdGlvbiBwYXRoLlxuICAgICAgICAgICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZWplY3QsIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCBpbnRlcm5hbCB1c2Ugb25seSAqLyBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFuIGludGVyb3AgcG9pbnQgZGVmaW5lZCBieSB0aGUgZXM3LW9ic2VydmFibGUgc3BlYyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAgICogQG1ldGhvZCBTeW1ib2wub2JzZXJ2YWJsZVxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoaXMgaW5zdGFuY2Ugb2YgdGhlIG9ic2VydmFibGVcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIHN0aXRjaCB0b2dldGhlciBmdW5jdGlvbmFsIG9wZXJhdG9ycyBpbnRvIGEgY2hhaW4uXG4gICAgICogQG1ldGhvZCBwaXBlXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhlIE9ic2VydmFibGUgcmVzdWx0IG9mIGFsbCBvZiB0aGUgb3BlcmF0b3JzIGhhdmluZ1xuICAgICAqIGJlZW4gY2FsbGVkIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgcGFzc2VkIGluLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGltcG9ydCB7IG1hcCwgZmlsdGVyLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuICAgICAqXG4gICAgICogUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKVxuICAgICAqICAgLnBpcGUoXG4gICAgICogICAgIGZpbHRlcih4ID0+IHggJSAyID09PSAwKSxcbiAgICAgKiAgICAgbWFwKHggPT4geCArIHgpLFxuICAgICAqICAgICBzY2FuKChhY2MsIHgpID0+IGFjYyArIHgpXG4gICAgICogICApXG4gICAgICogICAuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZV8xLnBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChQcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIVByb21pc2VDdG9yKSB7XG4gICAgICAgICAgICBpZiAocm9vdF8xLnJvb3QuUnggJiYgcm9vdF8xLnJvb3QuUnguY29uZmlnICYmIHJvb3RfMS5yb290LlJ4LmNvbmZpZy5Qcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZUN0b3IgPSByb290XzEucm9vdC5SeC5jb25maWcuUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvb3RfMS5yb290LlByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlQ3RvciA9IHJvb3RfMS5yb290LlByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQcm9taXNlQ3Rvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gdmFsdWUgPSB4OyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIEhBQ0s6IFNpbmNlIFR5cGVTY3JpcHQgaW5oZXJpdHMgc3RhdGljIHByb3BlcnRpZXMgdG9vLCB3ZSBoYXZlIHRvXG4gICAgLy8gZmlnaHQgYWdhaW5zdCBUeXBlU2NyaXB0IGhlcmUgc28gU3ViamVjdCBjYW4gaGF2ZSBhIGRpZmZlcmVudCBzdGF0aWMgY3JlYXRlIHNpZ25hdHVyZVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sZCBPYnNlcnZhYmxlIGJ5IGNhbGxpbmcgdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICAgKiBAc3RhdGljIHRydWVcbiAgICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlPyB0aGUgc3Vic2NyaWJlciBmdW5jdGlvbiB0byBiZSBwYXNzZWQgdG8gdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBjb2xkIG9ic2VydmFibGVcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9zeW1ib2wvcnhTdWJzY3JpYmVyJyk7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoJy4uL09ic2VydmVyJyk7XG5mdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlcikge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKE9ic2VydmVyXzEuZW1wdHkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xufVxuZXhwb3J0cy50b1N1YnNjcmliZXIgPSB0b1N1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b1N1YnNjcmliZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3RvU3Vic2NyaWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKCcuL3V0aWwvaXNGdW5jdGlvbicpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi9TdWJzY3JpcHRpb24nKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZSgnLi9PYnNlcnZlcicpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi9zeW1ib2wvcnhTdWJzY3JpYmVyJyk7XG4vKipcbiAqIEltcGxlbWVudHMgdGhlIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlIGFuZCBleHRlbmRzIHRoZVxuICoge0BsaW5rIFN1YnNjcmlwdGlvbn0gY2xhc3MuIFdoaWxlIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGlzIHRoZSBwdWJsaWMgQVBJIGZvclxuICogY29uc3VtaW5nIHRoZSB2YWx1ZXMgb2YgYW4ge0BsaW5rIE9ic2VydmFibGV9LCBhbGwgT2JzZXJ2ZXJzIGdldCBjb252ZXJ0ZWQgdG9cbiAqIGEgU3Vic2NyaWJlciwgaW4gb3JkZXIgdG8gcHJvdmlkZSBTdWJzY3JpcHRpb24tbGlrZSBjYXBhYmlsaXRpZXMgc3VjaCBhc1xuICogYHVuc3Vic2NyaWJlYC4gU3Vic2NyaWJlciBpcyBhIGNvbW1vbiB0eXBlIGluIFJ4SlMsIGFuZCBjcnVjaWFsIGZvclxuICogaW1wbGVtZW50aW5nIG9wZXJhdG9ycywgYnV0IGl0IGlzIHJhcmVseSB1c2VkIGFzIGEgcHVibGljIEFQSS5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaWJlcjxUPlxuICovXG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYnNlcnZlcnxmdW5jdGlvbih2YWx1ZTogVCk6IHZvaWR9IFtkZXN0aW5hdGlvbk9yTmV4dF0gQSBwYXJ0aWFsbHlcbiAgICAgKiBkZWZpbmVkIE9ic2VydmVyIG9yIGEgYG5leHRgIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oZTogP2FueSk6IHZvaWR9IFtlcnJvcl0gVGhlIGBlcnJvcmAgY2FsbGJhY2sgb2YgYW5cbiAgICAgKiBPYnNlcnZlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFtjb21wbGV0ZV0gVGhlIGBjb21wbGV0ZWAgY2FsbGJhY2sgb2YgYW5cbiAgICAgKiBPYnNlcnZlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnN5bmNFcnJvclRocm93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uT3JOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBPYnNlcnZlcl8xLmVtcHR5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk9yTmV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSEFDSyhiZW5sZXNoKTogVG8gcmVzb2x2ZSBhbiBpc3N1ZSB3aGVyZSBOb2RlIHVzZXJzIG1heSBoYXZlIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcGllcyBvZiByeGpzIGluIHRoZWlyIG5vZGVfbW9kdWxlcyBkaXJlY3RvcnkuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RydXN0ZWRTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRydXN0ZWRTdWJzY3JpYmVyID0gZGVzdGluYXRpb25Pck5leHRbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVzdGVkU3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gdHJ1c3RlZFN1YnNjcmliZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVzdGVkU3Vic2NyaWJlci5hZGQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKHRoaXMsIGRlc3RpbmF0aW9uT3JOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKHRoaXMsIGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN1YnNjcmliZXIucHJvdG90eXBlW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgIC8qKlxuICAgICAqIEEgc3RhdGljIGZhY3RvcnkgZm9yIGEgU3Vic2NyaWJlciwgZ2l2ZW4gYSAocG90ZW50aWFsbHkgcGFydGlhbCkgZGVmaW5pdGlvblxuICAgICAqIG9mIGFuIE9ic2VydmVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oeDogP1QpOiB2b2lkfSBbbmV4dF0gVGhlIGBuZXh0YCBjYWxsYmFjayBvZiBhbiBPYnNlcnZlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGU6ID9hbnkpOiB2b2lkfSBbZXJyb3JdIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAgICogT2JzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbY29tcGxldGVdIFRoZSBgY29tcGxldGVgIGNhbGxiYWNrIG9mIGFuXG4gICAgICogT2JzZXJ2ZXIuXG4gICAgICogQHJldHVybiB7U3Vic2NyaWJlcjxUPn0gQSBTdWJzY3JpYmVyIHdyYXBwaW5nIHRoZSAocGFydGlhbGx5IGRlZmluZWQpXG4gICAgICogT2JzZXJ2ZXIgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgICAgKi9cbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBuZXh0YCBmcm9tXG4gICAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlXG4gICAgICogdGltZXMuXG4gICAgICogQHBhcmFtIHtUfSBbdmFsdWVdIFRoZSBgbmV4dGAgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgZXJyb3JgIGZyb21cbiAgICAgKiB0aGUgT2JzZXJ2YWJsZSwgd2l0aCBhbiBhdHRhY2hlZCB7QGxpbmsgRXJyb3J9LiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdFxuICAgICAqIHRoZSBPYnNlcnZhYmxlIGhhcyBleHBlcmllbmNlZCBhbiBlcnJvciBjb25kaXRpb24uXG4gICAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIGEgdmFsdWVsZXNzIG5vdGlmaWNhdGlvbiBvZiB0eXBlXG4gICAgICogYGNvbXBsZXRlYCBmcm9tIHRoZSBPYnNlcnZhYmxlLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZVxuICAgICAqIGhhcyBmaW5pc2hlZCBzZW5kaW5nIHB1c2gtYmFzZWQgbm90aWZpY2F0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgaW50ZXJuYWwgdXNlIG9ubHkgKi8gU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudCA9IF9hLl9wYXJlbnQsIF9wYXJlbnRzID0gX2EuX3BhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIHRoaXMuX3BhcmVudHMgPSBfcGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLlN1YnNjcmliZXIgPSBTdWJzY3JpYmVyO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBTYWZlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNhZmVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNhZmVTdWJzY3JpYmVyKF9wYXJlbnRTdWJzY3JpYmVyLCBvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYnNlcnZlck9yTmV4dCkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0Lm5leHQ7XG4gICAgICAgICAgICBlcnJvciA9IG9ic2VydmVyT3JOZXh0LmVycm9yO1xuICAgICAgICAgICAgY29tcGxldGUgPSBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlck9yTmV4dCAhPT0gT2JzZXJ2ZXJfMS5lbXB0eSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oY29udGV4dC51bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoY29udGV4dC51bnN1YnNjcmliZS5iaW5kKGNvbnRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9IHRoaXMudW5zdWJzY3JpYmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5fbmV4dCA9IG5leHQ7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQgJiYgdGhpcy5fbmV4dCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICghX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fbmV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX25leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY29tcGxldGUuY2FsbChfdGhpcy5fY29udGV4dCk7IH07XG4gICAgICAgICAgICAgICAgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIod3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yU2V0RXJyb3IgPSBmdW5jdGlvbiAocGFyZW50LCBmbiwgdmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqIEBkZXByZWNhdGVkIGludGVybmFsIHVzZSBvbmx5ICovIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgX3BhcmVudFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZnVuY3Rpb24gaXNUcnVzdGVkU3Vic2NyaWJlcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgU3Vic2NyaWJlciB8fCAoJ3N5bmNFcnJvclRocm93YWJsZScgaW4gb2JqICYmIG9ialtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJzY3JpYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKCcuL3V0aWwvaXNBcnJheScpO1xudmFyIGlzT2JqZWN0XzEgPSByZXF1aXJlKCcuL3V0aWwvaXNPYmplY3QnKTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKCcuL3V0aWwvaXNGdW5jdGlvbicpO1xudmFyIHRyeUNhdGNoXzEgPSByZXF1aXJlKCcuL3V0aWwvdHJ5Q2F0Y2gnKTtcbnZhciBlcnJvck9iamVjdF8xID0gcmVxdWlyZSgnLi91dGlsL2Vycm9yT2JqZWN0Jyk7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvcl8xID0gcmVxdWlyZSgnLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3InKTtcbi8qKlxuICogUmVwcmVzZW50cyBhIGRpc3Bvc2FibGUgcmVzb3VyY2UsIHN1Y2ggYXMgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLiBBXG4gKiBTdWJzY3JpcHRpb24gaGFzIG9uZSBpbXBvcnRhbnQgbWV0aG9kLCBgdW5zdWJzY3JpYmVgLCB0aGF0IHRha2VzIG5vIGFyZ3VtZW50XG4gKiBhbmQganVzdCBkaXNwb3NlcyB0aGUgcmVzb3VyY2UgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgc3Vic2NyaXB0aW9ucyBtYXkgYmUgZ3JvdXBlZCB0b2dldGhlciB0aHJvdWdoIHRoZSBgYWRkKClgXG4gKiBtZXRob2QsIHdoaWNoIHdpbGwgYXR0YWNoIGEgY2hpbGQgU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IFN1YnNjcmlwdGlvbi5cbiAqIFdoZW4gYSBTdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLCBhbGwgaXRzIGNoaWxkcmVuIChhbmQgaXRzIGdyYW5kY2hpbGRyZW4pXG4gKiB3aWxsIGJlIHVuc3Vic2NyaWJlZCBhcyB3ZWxsLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25cbiAqL1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbdW5zdWJzY3JpYmVdIEEgZnVuY3Rpb24gZGVzY3JpYmluZyBob3cgdG9cbiAgICAgKiBwZXJmb3JtIHRoZSBkaXNwb3NhbCBvZiByZXNvdXJjZXMgd2hlbiB0aGUgYHVuc3Vic2NyaWJlYCBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbih1bnN1YnNjcmliZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBTdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcG9zZXMgdGhlIHJlc291cmNlcyBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uIE1heSwgZm9yIGluc3RhbmNlLCBjYW5jZWxcbiAgICAgKiBhbiBvbmdvaW5nIE9ic2VydmFibGUgZXhlY3V0aW9uIG9yIGNhbmNlbCBhbnkgb3RoZXIgdHlwZSBvZiB3b3JrIHRoYXRcbiAgICAgKiBzdGFydGVkIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiB3YXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudCA9IF9hLl9wYXJlbnQsIF9wYXJlbnRzID0gX2EuX3BhcmVudHMsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRzID0gbnVsbDtcbiAgICAgICAgLy8gbnVsbCBvdXQgX3N1YnNjcmlwdGlvbnMgZmlyc3Qgc28gYW55IGNoaWxkIHN1YnNjcmlwdGlvbnMgdGhhdCBhdHRlbXB0XG4gICAgICAgIC8vIHRvIHJlbW92ZSB0aGVtc2VsdmVzIGZyb20gdGhpcyBzdWJzY3JpcHRpb24gd2lsbCBub29wXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGxlbiA9IF9wYXJlbnRzID8gX3BhcmVudHMubGVuZ3RoIDogMDtcbiAgICAgICAgLy8gaWYgdGhpcy5fcGFyZW50IGlzIG51bGwsIHRoZW4gc28gaXMgdGhpcy5fcGFyZW50cywgYW5kIHdlXG4gICAgICAgIC8vIGRvbid0IGhhdmUgdG8gcmVtb3ZlIG91cnNlbHZlcyBmcm9tIGFueSBwYXJlbnQgc3Vic2NyaXB0aW9ucy5cbiAgICAgICAgd2hpbGUgKF9wYXJlbnQpIHtcbiAgICAgICAgICAgIF9wYXJlbnQucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgLy8gaWYgdGhpcy5fcGFyZW50cyBpcyBudWxsIG9yIGluZGV4ID49IGxlbixcbiAgICAgICAgICAgIC8vIHRoZW4gX3BhcmVudCBpcyBzZXQgdG8gbnVsbCwgYW5kIHRoZSBsb29wIGV4aXRzXG4gICAgICAgICAgICBfcGFyZW50ID0gKytpbmRleCA8IGxlbiAmJiBfcGFyZW50c1tpbmRleF0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgdmFyIHRyaWFsID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaChfdW5zdWJzY3JpYmUpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAodHJpYWwgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyB8fCAoZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IgP1xuICAgICAgICAgICAgICAgICAgICBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lLmVycm9ycykgOiBbZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlfMS5pc0FycmF5KF9zdWJzY3JpcHRpb25zKSkge1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGxlbiA9IF9zdWJzY3JpcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF9zdWJzY3JpcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3RfMS5pc09iamVjdChzdWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmlhbCA9IHRyeUNhdGNoXzEudHJ5Q2F0Y2goc3ViLnVuc3Vic2NyaWJlKS5jYWxsKHN1Yik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmlhbCA9PT0gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0LmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlcnIuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNFcnJvcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdGVhciBkb3duIHRvIGJlIGNhbGxlZCBkdXJpbmcgdGhlIHVuc3Vic2NyaWJlKCkgb2YgdGhpc1xuICAgICAqIFN1YnNjcmlwdGlvbi5cbiAgICAgKlxuICAgICAqIElmIHRoZSB0ZWFyIGRvd24gYmVpbmcgYWRkZWQgaXMgYSBzdWJzY3JpcHRpb24gdGhhdCBpcyBhbHJlYWR5XG4gICAgICogdW5zdWJzY3JpYmVkLCBpcyB0aGUgc2FtZSByZWZlcmVuY2UgYGFkZGAgaXMgYmVpbmcgY2FsbGVkIG9uLCBvciBpc1xuICAgICAqIGBTdWJzY3JpcHRpb24uRU1QVFlgLCBpdCB3aWxsIG5vdCBiZSBhZGRlZC5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkgaW4gYW4gYGNsb3NlZGAgc3RhdGUsIHRoZSBwYXNzZWRcbiAgICAgKiB0ZWFyIGRvd24gbG9naWMgd2lsbCBiZSBleGVjdXRlZCBpbW1lZGlhdGVseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGVhcmRvd25Mb2dpY30gdGVhcmRvd24gVGhlIGFkZGl0aW9uYWwgbG9naWMgdG8gZXhlY3V0ZSBvblxuICAgICAqIHRlYXJkb3duLlxuICAgICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gUmV0dXJucyB0aGUgU3Vic2NyaXB0aW9uIHVzZWQgb3IgY3JlYXRlZCB0byBiZVxuICAgICAqIGFkZGVkIHRvIHRoZSBpbm5lciBzdWJzY3JpcHRpb25zIGxpc3QuIFRoaXMgU3Vic2NyaXB0aW9uIGNhbiBiZSB1c2VkIHdpdGhcbiAgICAgKiBgcmVtb3ZlKClgIHRvIHJlbW92ZSB0aGUgcGFzc2VkIHRlYXJkb3duIGxvZ2ljIGZyb20gdGhlIGlubmVyIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBsaXN0LlxuICAgICAqL1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIGlmICghdGVhcmRvd24gfHwgKHRlYXJkb3duID09PSBTdWJzY3JpcHRpb24uRU1QVFkpKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZWFyZG93biA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0ZWFyZG93bikge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24odGVhcmRvd24pO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3Vic2NyaXB0aW9uLl9hZGRQYXJlbnQgIT09ICdmdW5jdGlvbicgLyogcXVhY2sgcXVhY2sgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHRlYXJkb3duICcgKyB0ZWFyZG93biArICcgYWRkZWQgdG8gU3Vic2NyaXB0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucyB8fCAodGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdKTtcbiAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIFN1YnNjcmlwdGlvbiBmcm9tIHRoZSBpbnRlcm5hbCBsaXN0IG9mIHN1YnNjcmlwdGlvbnMgdGhhdCB3aWxsXG4gICAgICogdW5zdWJzY3JpYmUgZHVyaW5nIHRoZSB1bnN1YnNjcmliZSBwcm9jZXNzIG9mIHRoaXMgU3Vic2NyaXB0aW9uLlxuICAgICAqIEBwYXJhbSB7U3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbiB0byByZW1vdmUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9hZGRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIF9wYXJlbnQgPSBfYS5fcGFyZW50LCBfcGFyZW50cyA9IF9hLl9wYXJlbnRzO1xuICAgICAgICBpZiAoIV9wYXJlbnQgfHwgX3BhcmVudCA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgcGFyZW50LCBvciB0aGUgbmV3IHBhcmVudCBpcyB0aGUgc2FtZSBhcyB0aGVcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgcGFyZW50LCB0aGVuIHNldCB0aGlzLl9wYXJlbnQgdG8gdGhlIG5ldyBwYXJlbnQuXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIV9wYXJlbnRzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGFscmVhZHkgb25lIHBhcmVudCwgYnV0IG5vdCBtdWx0aXBsZSwgYWxsb2NhdGUgYW4gQXJyYXkgdG9cbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN0IG9mIHRoZSBwYXJlbnQgU3Vic2NyaXB0aW9ucy5cbiAgICAgICAgICAgIHRoaXMuX3BhcmVudHMgPSBbcGFyZW50XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50cy5pbmRleE9mKHBhcmVudCkgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgbmV3IHBhcmVudCB0byB0aGUgX3BhcmVudHMgbGlzdCBpZiBpdCdzIG5vdCBhbHJlYWR5IHRoZXJlLlxuICAgICAgICAgICAgX3BhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0cy5TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb247XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSA/IGVyci5lcnJvcnMgOiBlcnIpOyB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJzY3JpcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzT2JqZWN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXJyb3JPYmplY3RfMSA9IHJlcXVpcmUoJy4vZXJyb3JPYmplY3QnKTtcbnZhciB0cnlDYXRjaFRhcmdldDtcbmZ1bmN0aW9uIHRyeUNhdGNoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyeUNhdGNoVGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyeUNhdGNoKGZuKSB7XG4gICAgdHJ5Q2F0Y2hUYXJnZXQgPSBmbjtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hlcjtcbn1cbmV4cG9ydHMudHJ5Q2F0Y2ggPSB0cnlDYXRjaDtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyeUNhdGNoLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC90cnlDYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gb25lIG9yIG1vcmUgZXJyb3JzIGhhdmUgb2NjdXJyZWQgZHVyaW5nIHRoZVxuICogYHVuc3Vic2NyaWJlYCBvZiBhIHtAbGluayBTdWJzY3JpcHRpb259LlxuICovXG52YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuc3Vic2NyaXB0aW9uRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB2YXIgZXJyID0gRXJyb3IuY2FsbCh0aGlzLCBlcnJvcnMgP1xuICAgICAgICAgICAgZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuICBcIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gKChpICsgMSkgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKSk7IH0pLmpvaW4oJ1xcbiAgJykgOiAnJyk7XG4gICAgICAgIHRoaXMubmFtZSA9IGVyci5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLnN0YWNrID0gZXJyLnN0YWNrO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIFVuc3Vic2NyaXB0aW9uRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnRzLlVuc3Vic2NyaXB0aW9uRXJyb3IgPSBVbnN1YnNjcmlwdGlvbkVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9yb290Jyk7XG5mdW5jdGlvbiBnZXRTeW1ib2xPYnNlcnZhYmxlKGNvbnRleHQpIHtcbiAgICB2YXIgJCRvYnNlcnZhYmxlO1xuICAgIHZhciBTeW1ib2wgPSBjb250ZXh0LlN5bWJvbDtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICQkb2JzZXJ2YWJsZSA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCRvYnNlcnZhYmxlID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICBTeW1ib2wub2JzZXJ2YWJsZSA9ICQkb2JzZXJ2YWJsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJCRvYnNlcnZhYmxlID0gJ0BAb2JzZXJ2YWJsZSc7XG4gICAgfVxuICAgIHJldHVybiAkJG9ic2VydmFibGU7XG59XG5leHBvcnRzLmdldFN5bWJvbE9ic2VydmFibGUgPSBnZXRTeW1ib2xPYnNlcnZhYmxlO1xuZXhwb3J0cy5vYnNlcnZhYmxlID0gZ2V0U3ltYm9sT2JzZXJ2YWJsZShyb290XzEucm9vdCk7XG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBvYnNlcnZhYmxlIGluc3RlYWRcbiAqL1xuZXhwb3J0cy4kJG9ic2VydmFibGUgPSBleHBvcnRzLm9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3J4anMvc3ltYm9sL29ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIG5vb3BfMSA9IHJlcXVpcmUoJy4vbm9vcCcpO1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cbmV4cG9ydHMucGlwZSA9IHBpcGU7XG4vKiBAaW50ZXJuYWwgKi9cbmZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKCFmbnMpIHtcbiAgICAgICAgcmV0dXJuIG5vb3BfMS5ub29wO1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG5leHBvcnRzLnBpcGVGcm9tQXJyYXkgPSBwaXBlRnJvbUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvcGlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuZnVuY3Rpb24gbm9vcCgpIHsgfVxuZXhwb3J0cy5ub29wID0gbm9vcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vb3AuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL25vb3AuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX3RoaXMgPSB0aGlzO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbndpbmRvdy5zaW5nbGVTcGFBbmd1bGFyQ2xpID0gd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGkgfHwge307XHJcbnZhciB4bWxUb0Fzc2V0cyA9IGZ1bmN0aW9uICh4bWwpIHtcclxuICAgIHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sJyk7XHJcbiAgICBkb20uaW5uZXJIVE1MID0geG1sO1xyXG4gICAgdmFyIGxpbmtzRWxzID0gZG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xyXG4gICAgdmFyIHNjcmlwdHNFbHMgPSBkb20ucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3R5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIl0nKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3R5bGVzOiBBcnJheS5mcm9tKGxpbmtzRWxzKS5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTsgfSksXHJcbiAgICAgICAgc2NyaXB0czogQXJyYXkuZnJvbShzY3JpcHRzRWxzKS5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpOyB9KS5maWx0ZXIoZnVuY3Rpb24gKHNyYykgeyByZXR1cm4gIXNyYy5tYXRjaCgvem9uZVxcLmpzLyk7IH0pXHJcbiAgICB9O1xyXG59O1xyXG52YXIgdHJhbnNmb3JtT3B0c1dpdGhBc3NldHMgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgdmFyIHVybCA9IG9wdHMuYmFzZUhyZWYgKyBcIi9pbmRleC5odG1sXCI7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0geG1sVG9Bc3NldHMocmVxLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5zdHlsZXMgPSByZXMuc3R5bGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuc2NyaXB0cyA9IHJlcy5zY3JpcHRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJUcnkgdG8gbG9hZCBcIiArIHVybCArIFwiLCBzdGF0dXMgOiBcIiArIF90aGlzLnN0YXR1cyArIFwiID0+IFwiICsgX3RoaXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHJlcS5zZW5kKG51bGwpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBnZXRDb250YWluZXJFbCA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMuc2VsZWN0b3IpO1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRzLnNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gb3B0cy5jb250YWluZXIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMuY29udGFpbmVyKSA6IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxufTtcclxudmFyIG5vTG9hZGluZ0FwcCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwLCBzaW5nbGVTcGEpIHtcclxuICAgIHZhciBnZXRBcHBOYW1lcyA9IHNpbmdsZVNwYS5nZXRBcHBOYW1lcywgZ2V0QXBwU3RhdHVzID0gc2luZ2xlU3BhLmdldEFwcFN0YXR1cywgQk9PVFNUUkFQUElORyA9IHNpbmdsZVNwYS5CT09UU1RSQVBQSU5HO1xyXG4gICAgdmFyIGZpcnN0SW5Nb3VudGluZyA9IGdldEFwcE5hbWVzKCkuZmluZChmdW5jdGlvbiAoYXBwTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBnZXRBcHBTdGF0dXMoYXBwTmFtZSkgPT09IEJPT1RTVFJBUFBJTkc7XHJcbiAgICB9KTtcclxuICAgIHZhciBmaXJzdEluTW91bnRpbmdJbmRleCA9IGdldEFwcE5hbWVzKCkuaW5kZXhPZihmaXJzdEluTW91bnRpbmcpO1xyXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGdldEFwcE5hbWVzKCkuaW5kZXhPZihjdXJyZW50QXBwKTtcclxuICAgIHJldHVybiBjdXJyZW50SW5kZXggPD0gZmlyc3RJbk1vdW50aW5nSW5kZXg7XHJcbn07XHJcbnZhciBvbk5vdExvYWRpbmdBcHAgPSBmdW5jdGlvbiAoY3VycmVudEFwcCwgc2luZ2xlU3BhKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciB0aW1lID0gMDtcclxuICAgICAgICB2YXIgSU5URVJWQUwgPSAxMDA7XHJcbiAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aW1lICs9IElOVEVSVkFMO1xyXG4gICAgICAgICAgICBpZiAobm9Mb2FkaW5nQXBwKGN1cnJlbnRBcHAsIHNpbmdsZVNwYSkpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aW1lID49IDMwMDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiVGhlIGFwcGxpY2F0aW9uIGNvdWxkIG5vdCBiZSBsb2FkZWQgYmVjYXVzZSBhbm90aGVyIGlzIHN0aWxsIGxvYWRpbmcgbW9yZSB0aGFuIFwiICsgdGltZSArIFwiIG1pbGxpc2Vjb25kc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIElOVEVSVkFMKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgbG9hZEFsbEFzc2V0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHRyYW5zZm9ybU9wdHNXaXRoQXNzZXRzKG9wdHMpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0c1Byb21pc2UgPSBvcHRzLnNjcmlwdHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmaWxlTmFtZSkgeyByZXR1cm4gcHJldi50aGVuKGxvYWRTY3JpcHRUYWcob3B0cy5iYXNlSHJlZiArIFwiL1wiICsgZmlsZU5hbWUpKTsgfSwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkpO1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVzUHJvbWlzZSA9IG9wdHMuc3R5bGVzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZmlsZU5hbWUpIHsgcmV0dXJuIHByZXYudGhlbihsb2FkTGlua1RhZyhvcHRzLmJhc2VIcmVmICsgXCIvXCIgKyBmaWxlTmFtZSkpOyB9LCBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKSk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtzY3JpcHRzUHJvbWlzZSwgc3R5bGVzUHJvbWlzZV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBoYXNoQ29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBoYXNoID0gMDtcclxuICAgIGlmIChzdHIubGVuZ3RoID09IDApXHJcbiAgICAgICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcclxuICAgICAgICBoYXNoID0gaGFzaCA+Pj4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKCk7XHJcbn07XHJcbnZhciBsb2FkU2NyaXB0VGFnID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IGhhc2hDb2RlKHVybCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn07XHJcbnZhciBsb2FkTGlua1RhZyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgIGxpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsaW5rLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgICAgICAgbGluay5pZCA9IGhhc2hDb2RlKHVybCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgdW5sb2FkVGFnID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaENvZGUodXJsKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQodGFnKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufTtcclxudmFyIGJvb3RzdHJhcCA9IGZ1bmN0aW9uIChvcHRzLCBwcm9wcykge1xyXG4gICAgd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGkuaXNTaW5nbGVTcGEgPSB0cnVlO1xyXG4gICAgdmFyIHNpbmdsZVNwYSA9IHByb3BzLnNpbmdsZVNwYTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgb25Ob3RMb2FkaW5nQXBwKG9wdHMubmFtZSwgc2luZ2xlU3BhKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbG9hZEFsbEFzc2V0cyhvcHRzKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgbW91bnQgPSBmdW5jdGlvbiAob3B0cywgcHJvcHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZ2V0Q29udGFpbmVyRWwob3B0cyk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zaW5nbGVTcGFBbmd1bGFyQ2xpW29wdHMubmFtZV0pIHtcclxuICAgICAgICAgICAgd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGlbb3B0cy5uYW1lXS5tb3VudChwcm9wcyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgbW91bnQgXCIgKyBvcHRzLm5hbWUgKyBcIiBiZWNhdXNlIHRoYXQgaXMgbm90IGJvb3RzdHJhcGVkXCIpO1xyXG4gICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxudmFyIHVubW91bnQgPSBmdW5jdGlvbiAob3B0cywgcHJvcHMpIHtcclxuICAgIHZhciBfYSA9IHByb3BzLnNpbmdsZVNwYSwgdW5sb2FkQXBwbGljYXRpb24gPSBfYS51bmxvYWRBcHBsaWNhdGlvbiwgZ2V0QXBwTmFtZXMgPSBfYS5nZXRBcHBOYW1lcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zaW5nbGVTcGFBbmd1bGFyQ2xpW29wdHMubmFtZV0pIHtcclxuICAgICAgICAgICAgd2luZG93LnNpbmdsZVNwYUFuZ3VsYXJDbGlbb3B0cy5uYW1lXS51bm1vdW50KCk7XHJcbiAgICAgICAgICAgIGdldENvbnRhaW5lckVsKG9wdHMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAoZ2V0QXBwTmFtZXMoKS5pbmRleE9mKG9wdHMubmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxvYWRBcHBsaWNhdGlvbihvcHRzLm5hbWUsIHsgd2FpdEZvclVubW91bnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJDYW5ub3QgdW5tb3VudCBcIiArIG9wdHMubmFtZSArIFwiIGJlY2F1c2UgdGhhdCBcIiArIG9wdHMubmFtZSArIFwiIGlzIG5vdCBwYXJ0IG9mIHRoZSBkZWNhbHJlZCBhcHBsaWNhdGlvbnMgOiBcIiArIGdldEFwcE5hbWVzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoXCJDYW5ub3QgdW5tb3VudCBcIiArIG9wdHMubmFtZSArIFwiIGJlY2F1c2UgdGhhdCBpcyBub3QgYm9vdHN0cmFwZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbnZhciB1bmxvYWQgPSBmdW5jdGlvbiAob3B0cywgcHJvcHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgb3B0cy5zY3JpcHRzLmNvbmNhdChvcHRzLnN0eWxlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBzY3JpcHROYW1lKSB7IHJldHVybiBwcmV2LnRoZW4odW5sb2FkVGFnKG9wdHMuYmFzZUhyZWYgKyBcIi9cIiArIHNjcmlwdE5hbWUpKTsgfSwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCkpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pO1xyXG59O1xyXG5mdW5jdGlvbiBsb2FkZXIob3B0cykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInNpbmdsZS1zcGEtYW5ndWxhci1jbGkgcmVxdWlyZXMgYSBjb25maWd1cmF0aW9uIG9iamVjdFwiKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb3B0cy5uYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInNpbmdsZS1zcGEtYW5ndWxhci1jbGkgbXVzdCBiZSBwYXNzZWQgb3B0cy5uYW1lIHN0cmluZyAoZXggOiBhcHAxKVwiKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb3B0cy5iYXNlSHJlZiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaW5nbGUtc3BhLWFuZ3VsYXItY2xpIG11c3QgYmUgcGFzc2VkIG9wdHMuYmFzZUhyZWYgc3RyaW5nIChleCA6IC9hcHAxKVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9vdHN0cmFwOiBib290c3RyYXAuYmluZChudWxsLCBvcHRzKSxcclxuICAgICAgICBtb3VudDogbW91bnQuYmluZChudWxsLCBvcHRzKSxcclxuICAgICAgICB1bm1vdW50OiB1bm1vdW50LmJpbmQobnVsbCwgb3B0cyksXHJcbiAgICAgICAgdW5sb2FkOiB1bmxvYWQuYmluZChudWxsLCBvcHRzKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmxvYWRlciA9IGxvYWRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2luZ2xlLXNwYS1hbmd1bGFyLWNsaS9saWIvbG9hZGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9