/******/
(function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
            /******/
            return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(1);


        /***/
    },
    /* 1 */
    /***/
    function (module, exports, __webpack_require__) {

        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        /* expose jQuery for modules */

        __webpack_require__(3);

        __webpack_require__(5);

        __webpack_require__(10);

        __webpack_require__(11);

        __webpack_require__(12);

        __webpack_require__(13);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        var _events = __webpack_require__(14);

        var _events2 = _interopRequireDefault(_events);

        var _common = __webpack_require__(7);

        // "inherit" EventEmitter
        window.$ = _jquery2['default'];
        window.jQuery = _jquery2['default'];

        for (var i in _events2['default'].prototype) {
            _prestashop2['default'][i] = _events2['default'].prototype[i];
        }

        (0, _jquery2['default'])(document).ready(function () {
            (0, _common.psShowHide)();
        });

        /***/
    },
    /* 2 */
    /***/
    function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * jQuery JavaScript Library v2.2.4
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-05-20T17:23Z
         */
        "use strict";
        (function (global, factory) {
            if (typeof module === "object" && typeof module.exports === "object") { // For CommonJS and CommonJS-like environments where a proper `window`
                // is present, execute the factory and get jQuery.
                // For environments that do not have a `window` with a `document`
                // (such as Node.js), expose a factory as module.exports.
                // This accentuates the need for the creation of a real `window`.
                // e.g. var jQuery = require("jquery")(window);
                // See ticket #14549 for more info.
                module.exports = global.document ? factory(global, true) : function (w) {
                    if (!w.document) {
                        throw new Error("jQuery requires a window with a document");
                    }
                    return factory(w);
                };
            } else {
                factory(global);
            } // Pass this if window is not defined yet
        })(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) { // Support: Firefox 18+
            // Can't be in strict mode, several libs including ASP.NET trace
            // the stack via arguments.caller.callee and Firefox dies if
            // you try to trace through "use strict" call chains. (#13335)
            //"use strict";
            var arr = [];
            var document = window.document;
            var _slice = arr.slice;
            var concat = arr.concat;
            var push = arr.push;
            var indexOf = arr.indexOf;
            var class2type = {};
            var toString = class2type.toString;
            var hasOwn = class2type.hasOwnProperty;
            var support = {};
            var version = "2.2.4", // Define a local copy of jQuery
                jQuery = function jQuery(selector, context) { // The jQuery object is actually just the init constructor 'enhanced'
                    // Need init if jQuery is called (just allow error to be thrown if not included)
                    return new jQuery.fn.init(selector, context);
                }, // Support: Android<4.1
                // Make sure we trim BOM and NBSP
                rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
                rmsPrefix = /^-ms-/,
                rdashAlpha = /-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
                fcamelCase = function fcamelCase(all, letter) {
                    return letter.toUpperCase();
                };
            jQuery.fn = jQuery.prototype = { // The current version of jQuery being used
                jquery: version,
                constructor: jQuery, // Start with an empty selector
                selector: "", // The default length of a jQuery object is 0
                length: 0,
                toArray: function toArray() {
                    return _slice.call(this);
                }, // Get the Nth element in the matched element set OR
                // Get the whole matched element set as a clean array
                get: function get(num) {
                    return num != null ? // Return just the one element from the set
                        num < 0 ? this[num + this.length] : this[num] : // Return all the elements in a clean array
                        _slice.call(this);
                }, // Take an array of elements and push it onto the stack
                // (returning the new matched element set)
                pushStack: function pushStack(elems) { // Build a new jQuery matched element set
                    var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)
                    ret.prevObject = this;
                    ret.context = this.context; // Return the newly-formed element set
                    return ret;
                }, // Execute a callback for every element in the matched set.
                each: function each(callback) {
                    return jQuery.each(this, callback);
                },
                map: function map(callback) {
                    return this.pushStack(jQuery.map(this, function (elem, i) {
                        return callback.call(elem, i, elem);
                    }));
                },
                slice: function slice() {
                    return this.pushStack(_slice.apply(this, arguments));
                },
                first: function first() {
                    return this.eq(0);
                },
                last: function last() {
                    return this.eq(-1);
                },
                eq: function eq(i) {
                    var len = this.length,
                        j = +i + (i < 0 ? len : 0);
                    return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
                },
                end: function end() {
                    return this.prevObject || this.constructor();
                }, // For internal use only.
                // Behaves like an Array's method, not like a jQuery method.
                push: push,
                sort: arr.sort,
                splice: arr.splice
            };
            jQuery.extend = jQuery.fn.extend = function () {
                var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false; // Handle a deep copy situation
                if (typeof target === "boolean") {
                    deep = target; // Skip the boolean and the target
                    target = arguments[i] || {};
                    i++;
                } // Handle case when target is a string or something (possible in deep copy)
                if (typeof target !== "object" && !jQuery.isFunction(target)) {
                    target = {};
                } // Extend jQuery itself if only one argument is passed
                if (i === length) {
                    target = this;
                    i--;
                }
                for (; i < length; i++) { // Only deal with non-null/undefined values
                    if ((options = arguments[i]) != null) { // Extend the base object
                        for (name in options) {
                            src = target[name];
                            copy = options[name]; // Prevent never-ending loop
                            if (target === copy) {
                                continue;
                            } // Recurse if we're merging plain objects or arrays
                            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                                if (copyIsArray) {
                                    copyIsArray = false;
                                    clone = src && jQuery.isArray(src) ? src : [];
                                } else {
                                    clone = src && jQuery.isPlainObject(src) ? src : {};
                                } // Never move original objects, clone them
                                target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
                            } else if (copy !== undefined) {
                                target[name] = copy;
                            }
                        }
                    }
                } // Return the modified object
                return target;
            };
            jQuery.extend({ // Unique for each copy of jQuery on the page
                expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""), // Assume jQuery is ready without the ready module
                isReady: true,
                error: function error(msg) {
                    throw new Error(msg);
                },
                noop: function noop() {},
                isFunction: function isFunction(obj) {
                    return jQuery.type(obj) === "function";
                },
                isArray: Array.isArray,
                isWindow: function isWindow(obj) {
                    return obj != null && obj === obj.window;
                },
                isNumeric: function isNumeric(obj) { // parseFloat NaNs numeric-cast false positives (null|true|false|"")
                    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                    // subtraction forces infinities to NaN
                    // adding 1 corrects loss of precision from parseFloat (#15100)
                    var realStringObj = obj && obj.toString();
                    return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
                },
                isPlainObject: function isPlainObject(obj) {
                    var key; // Not plain objects:
                    // - Any object or value whose internal [[Class]] property is not "[object Object]"
                    // - DOM nodes
                    // - window
                    if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                        return false;
                    } // Not own constructor property must be Object
                    if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                        return false;
                    } // Own properties are enumerated firstly, so to speed up,
                    // if last one is own, then all properties are own
                    for (key in obj) {}
                    return key === undefined || hasOwn.call(obj, key);
                },
                isEmptyObject: function isEmptyObject(obj) {
                    var name;
                    for (name in obj) {
                        return false;
                    }
                    return true;
                },
                type: function type(obj) {
                    if (obj == null) {
                        return obj + "";
                    } // Support: Android<4.0, iOS<6 (functionish RegExp)
                    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
                }, // Evaluates a script in a global context
                globalEval: function globalEval(code) {
                    var script, indirect = eval;
                    code = jQuery.trim(code);
                    if (code) { // If the code includes a valid, prologue position
                        // strict mode pragma, execute code by injecting a
                        // script tag into the document.
                        if (code.indexOf("use strict") === 1) {
                            script = document.createElement("script");
                            script.text = code;
                            document.head.appendChild(script).parentNode.removeChild(script);
                        } else { // Otherwise, avoid the DOM node creation, insertion
                            // and removal by using an indirect global eval
                            indirect(code);
                        }
                    }
                }, // Convert dashed to camelCase; used by the css and data modules
                // Support: IE9-11+
                // Microsoft forgot to hump their vendor prefix (#9572)
                camelCase: function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                },
                nodeName: function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                },
                each: function each(obj, callback) {
                    var length, i = 0;
                    if (isArrayLike(obj)) {
                        length = obj.length;
                        for (; i < length; i++) {
                            if (callback.call(obj[i], i, obj[i]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (i in obj) {
                            if (callback.call(obj[i], i, obj[i]) === false) {
                                break;
                            }
                        }
                    }
                    return obj;
                }, // Support: Android<4.1
                trim: function trim(text) {
                    return text == null ? "" : (text + "").replace(rtrim, "");
                }, // results is for internal usage only
                makeArray: function makeArray(arr, results) {
                    var ret = results || [];
                    if (arr != null) {
                        if (isArrayLike(Object(arr))) {
                            jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                        } else {
                            push.call(ret, arr);
                        }
                    }
                    return ret;
                },
                inArray: function inArray(elem, arr, i) {
                    return arr == null ? -1 : indexOf.call(arr, elem, i);
                },
                merge: function merge(first, second) {
                    var len = +second.length,
                        j = 0,
                        i = first.length;
                    for (; j < len; j++) {
                        first[i++] = second[j];
                    }
                    first.length = i;
                    return first;
                },
                grep: function grep(elems, callback, invert) {
                    var callbackInverse, matches = [],
                        i = 0,
                        length = elems.length,
                        callbackExpect = !invert; // Go through the array, only saving the items
                    // that pass the validator function
                    for (; i < length; i++) {
                        callbackInverse = !callback(elems[i], i);
                        if (callbackInverse !== callbackExpect) {
                            matches.push(elems[i]);
                        }
                    }
                    return matches;
                }, // arg is for internal usage only
                map: function map(elems, callback, arg) {
                    var length, value, i = 0,
                        ret = []; // Go through the array, translating each of the items to their new values
                    if (isArrayLike(elems)) {
                        length = elems.length;
                        for (; i < length; i++) {
                            value = callback(elems[i], i, arg);
                            if (value != null) {
                                ret.push(value);
                            }
                        } // Go through every key on the object,
                    } else {
                        for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (value != null) {
                                ret.push(value);
                            }
                        }
                    } // Flatten any nested arrays
                    return concat.apply([], ret);
                }, // A global GUID counter for objects
                guid: 1, // Bind a function to a context, optionally partially applying any
                // arguments.
                proxy: function proxy(fn, context) {
                    var tmp, args, proxy;
                    if (typeof context === "string") {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    } // Quick check to determine if target is callable, in the spec
                    // this throws a TypeError, but we will just return undefined.
                    if (!jQuery.isFunction(fn)) {
                        return undefined;
                    } // Simulated bind
                    args = _slice.call(arguments, 2);
                    proxy = function () {
                        return fn.apply(context || this, args.concat(_slice.call(arguments)));
                    }; // Set the guid of unique handler to the same of original handler, so it can be removed
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                },
                now: Date.now, // jQuery.support is not used in Core but other projects attach their
                // properties to it so it needs to exist.
                support: support
            }); // JSHint would error on this code due to the Symbol not being defined in ES5.
            // Defining this global in .jshintrc would create a danger of using the global
            // unguarded in another place, it seems safer to just disable JSHint for these
            // three lines.
            /* jshint ignore: start */
            if (typeof Symbol === "function") {
                jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
            } /* jshint ignore: end */ // Populate the class2type map
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });

            function isArrayLike(obj) { // Support: iOS 8.2 (not reproducible in simulator)
                // `in` check used to prevent JIT error (gh-2145)
                // hasOwn isn't used here due to false negatives
                // regarding Nodelist length in IE
                var length = !!obj && "length" in obj && obj.length,
                    type = jQuery.type(obj);
                if (type === "function" || jQuery.isWindow(obj)) {
                    return false;
                }
                return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
            }
            var Sizzle =
                /*!
                 * Sizzle CSS Selector Engine v2.2.1
                 * http://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2015-10-17
                 */
                (function (window) {
                    var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
                        setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
                        expando = "sizzle" + 1 * new Date(),
                        preferredDoc = window.document,
                        dirruns = 0,
                        done = 0,
                        classCache = createCache(),
                        tokenCache = createCache(),
                        compilerCache = createCache(),
                        sortOrder = function sortOrder(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                            }
                            return 0;
                        }, // General-purpose constants
                        MAX_NEGATIVE = 1 << 31, // Instance methods
                        hasOwn = ({}).hasOwnProperty,
                        arr = [],
                        pop = arr.pop,
                        push_native = arr.push,
                        push = arr.push,
                        slice = arr.slice, // Use a stripped-down indexOf as it's faster than native
                        // http://jsperf.com/thor-indexof-vs-for/5
                        indexOf = function indexOf(list, elem) {
                            var i = 0,
                                len = list.length;
                            for (; i < len; i++) {
                                if (list[i] === elem) {
                                    return i;
                                }
                            }
                            return -1;
                        },
                        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
                        // http://www.w3.org/TR/css3-selectors/#whitespace
                        whitespace = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                        identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
                        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                        // 1. quoted (capture 3; capture 4 or capture 5)
                        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
                        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
                        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                        rwhitespace = new RegExp(whitespace + "+", "g"),
                        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                        rpseudo = new RegExp(pseudos),
                        ridentifier = new RegExp("^" + identifier + "$"),
                        matchExpr = {
                            "ID": new RegExp("^#(" + identifier + ")"),
                            "CLASS": new RegExp("^\\.(" + identifier + ")"),
                            "TAG": new RegExp("^(" + identifier + "|[*])"),
                            "ATTR": new RegExp("^" + attributes),
                            "PSEUDO": new RegExp("^" + pseudos),
                            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                            "bool": new RegExp("^(?:" + booleans + ")$", "i"), // For use in libraries implementing .is()
                            // We use this for POS matching in `select`
                            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                        },
                        rinputs = /^(?:input|select|textarea|button)$/i,
                        rheader = /^h\d$/i,
                        rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
                        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        rsibling = /[+~]/,
                        rescape = /'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                        funescape = function funescape(_, escaped, escapedWhitespace) {
                            var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
                            // Support: Firefox<24
                            // Workaround erroneous numeric interpretation of +"0x"
                            return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
                                String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
                                String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                        }, // Used for iframes
                        // See setDocument()
                        // Removing the function wrapper causes a "Permission Denied"
                        // error in IE
                        unloadHandler = function unloadHandler() {
                            setDocument();
                        }; // Optimize for push.apply( _, NodeList )
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
                        // Detect silently failing push.apply
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr.length ? // Leverage slice if possible
                                function (target, els) {
                                    push_native.apply(target, slice.call(els));
                                } : // Support: IE<9
                                function (target, els) {
                                    var j = target.length,
                                        i = 0; // Can't trust NodeList.length
                                    while (target[j++] = els[i++]) {}
                                    target.length = j - 1;
                                }
                        };
                    }

                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
                            nodeType = context ? context.nodeType : 9;
                        results = results || []; // Return early from calls with invalid selector or context
                        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                            return results;
                        } // Try to shortcut find operations (as opposed to filters) in HTML documents
                        if (!seed) {
                            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                                setDocument(context);
                            }
                            context = context || document;
                            if (documentIsHTML) { // If the selector is sufficiently simple, try using a "get*By*" DOM method
                                // (excepting DocumentFragment context, where the methods don't exist)
                                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) { // ID selector
                                    if (m = match[1]) { // Document context
                                        if (nodeType === 9) {
                                            if (elem = context.getElementById(m)) { // Support: IE, Opera, Webkit
                                                // TODO: identify versions
                                                // getElementById can match elements by name instead of ID
                                                if (elem.id === m) {
                                                    results.push(elem);
                                                    return results;
                                                }
                                            } else {
                                                return results;
                                            } // Element context
                                        } else { // Support: IE, Opera, Webkit
                                            // TODO: identify versions
                                            // getElementById can match elements by name instead of ID
                                            if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                                results.push(elem);
                                                return results;
                                            }
                                        } // Type selector
                                    } else if (match[2]) {
                                        push.apply(results, context.getElementsByTagName(selector));
                                        return results; // Class selector
                                    } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                        push.apply(results, context.getElementsByClassName(m));
                                        return results;
                                    }
                                } // Take advantage of querySelectorAll
                                if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                                    if (nodeType !== 1) {
                                        newContext = context;
                                        newSelector = selector; // qSA looks outside Element context, which is not what we want
                                        // Thanks to Andrew Dupont for this workaround technique
                                        // Support: IE <=8
                                        // Exclude object elements
                                    } else if (context.nodeName.toLowerCase() !== "object") { // Capture the context ID, setting it first if necessary
                                        if (nid = context.getAttribute("id")) {
                                            nid = nid.replace(rescape, "\\$&");
                                        } else {
                                            context.setAttribute("id", nid = expando);
                                        } // Prefix every selector in the list
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                        while (i--) {
                                            groups[i] = nidselect + " " + toSelector(groups[i]);
                                        }
                                        newSelector = groups.join(","); // Expand context for sibling selectors
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                    }
                                    if (newSelector) {
                                        try {
                                            push.apply(results, newContext.querySelectorAll(newSelector));
                                            return results;
                                        } catch (qsaError) {} finally {
                                            if (nid === expando) {
                                                context.removeAttribute("id");
                                            }
                                        }
                                    }
                                }
                            }
                        } // All others
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    /**
                     * Create key-value caches of limited size
                     * @returns {function(string, object)} Returns the Object data after storing it on itself with
                     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
                     *	deleting the oldest entry
                     */
                    function createCache() {
                        var keys = [];

                        function cache(key, value) { // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                            if (keys.push(key + " ") > Expr.cacheLength) { // Only keep the most recent entries
                                delete cache[keys.shift()];
                            }
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    /**
                     * Mark a function for special use by Sizzle
                     * @param {Function} fn The function to mark
                     */
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    /**
                     * Support testing using an element
                     * @param {Function} fn Passed the created div and expects a boolean result
                     */
                    function assert(fn) {
                        var div = document.createElement("div");
                        try {
                            return !!fn(div);
                        } catch (e) {
                            return false;
                        } finally { // Remove from its parent by default
                            if (div.parentNode) {
                                div.parentNode.removeChild(div);
                            } // release memory in IE
                            div = null;
                        }
                    }
                    /**
                     * Adds the same handler for all of the specified attrs
                     * @param {String} attrs Pipe-separated list of attributes
                     * @param {Function} handler The method that will be applied
                     */
                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"),
                            i = arr.length;
                        while (i--) {
                            Expr.attrHandle[arr[i]] = handler;
                        }
                    }
                    /**
                     * Checks document order of two siblings
                     * @param {Element} a
                     * @param {Element} b
                     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
                     */
                    function siblingCheck(a, b) {
                        var cur = b && a,
                            diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
                        if (diff) {
                            return diff;
                        } // Check if b follows a
                        if (cur) {
                            while (cur = cur.nextSibling) {
                                if (cur === b) {
                                    return -1;
                                }
                            }
                        }
                        return a ? 1 : -1;
                    }
                    /**
                     * Returns a function to use in pseudos for input types
                     * @param {String} type
                     */
                    function createInputPseudo(type) {
                        return function (elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === type;
                        };
                    }
                    /**
                     * Returns a function to use in pseudos for buttons
                     * @param {String} type
                     */
                    function createButtonPseudo(type) {
                        return function (elem) {
                            var name = elem.nodeName.toLowerCase();
                            return (name === "input" || name === "button") && elem.type === type;
                        };
                    }
                    /**
                     * Returns a function to use in pseudos for positionals
                     * @param {Function} fn
                     */
                    function createPositionalPseudo(fn) {
                        return markFunction(function (argument) {
                            argument = +argument;
                            return markFunction(function (seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument),
                                    i = matchIndexes.length; // Match elements found at the specified indexes
                                while (i--) {
                                    if (seed[j = matchIndexes[i]]) {
                                        seed[j] = !(matches[j] = seed[j]);
                                    }
                                }
                            });
                        });
                    }
                    /**
                     * Checks a node for validity as a Sizzle context
                     * @param {Element|Object=} context
                     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
                     */
                    function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    } // Expose support vars for convenience
                    support = Sizzle.support = {};
                    /**
                     * Detects XML nodes
                     * @param {Element|Object} elem An element or a document
                     * @returns {Boolean} True iff elem is a non-HTML XML node
                     */
                    isXML = Sizzle.isXML = function (elem) { // documentElement is verified for cases where it doesn't yet exist
                        // (such as loading iframes in IE - #4833)
                        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                        return documentElement ? documentElement.nodeName !== "HTML" : false;
                    };
                    /**
                     * Sets document-related variables once based on the current document
                     * @param {Element|Object} [doc] An element or document object to use to set the document
                     * @returns {Object} Returns the current document
                     */
                    setDocument = Sizzle.setDocument = function (node) {
                        var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
                        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                            return document;
                        } // Update global variables
                        document = doc;
                        docElem = document.documentElement;
                        documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
                        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                        if ((parent = document.defaultView) && parent.top !== parent) { // Support: IE 11
                            if (parent.addEventListener) {
                                parent.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
                            } else if (parent.attachEvent) {
                                parent.attachEvent("onunload", unloadHandler);
                            }
                        }
                        /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
                        // Verify that getAttribute really returns attributes and not properties
                        // (excepting IE8 booleans)
                        support.attributes = assert(function (div) {
                            div.className = "i";
                            return !div.getAttribute("className");
                        });
                        /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
                        support.getElementsByTagName = assert(function (div) {
                            div.appendChild(document.createComment(""));
                            return !div.getElementsByTagName("*").length;
                        }); // Support: IE<9
                        support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
                        // Check if getElementById returns elements by name
                        // The broken getElementById methods don't pick up programatically-set names,
                        // so use a roundabout getElementsByName test
                        support.getById = assert(function (div) {
                            docElem.appendChild(div).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        }); // ID find and filter
                        if (support.getById) {
                            Expr.find["ID"] = function (id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var m = context.getElementById(id);
                                    return m ? [m] : [];
                                }
                            };
                            Expr.filter["ID"] = function (id) {
                                var attrId = id.replace(runescape, funescape);
                                return function (elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                        } else { // Support: IE6/7
                            // getElementById is not reliable as a find shortcut
                            delete Expr.find["ID"];
                            Expr.filter["ID"] = function (id) {
                                var attrId = id.replace(runescape, funescape);
                                return function (elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                        } // Tag
                        Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
                            if (typeof context.getElementsByTagName !== "undefined") {
                                return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
                            } else if (support.qsa) {
                                return context.querySelectorAll(tag);
                            }
                        } : function (tag, context) {
                            var elem, tmp = [],
                                i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                                results = context.getElementsByTagName(tag); // Filter out possible comments
                            if (tag === "*") {
                                while (elem = results[i++]) {
                                    if (elem.nodeType === 1) {
                                        tmp.push(elem);
                                    }
                                }
                                return tmp;
                            }
                            return results;
                        }; // Class
                        Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                                return context.getElementsByClassName(className);
                            }
                        };
                        /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
                        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                        rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
                        // We allow this because of a bug in IE8/9 that throws an error
                        // whenever `document.activeElement` is accessed on an iframe
                        // So, we allow :focus to pass through QSA all the time to avoid the IE error
                        // See http://bugs.jquery.com/ticket/13378
                        rbuggyQSA = [];
                        if (support.qsa = rnative.test(document.querySelectorAll)) { // Build QSA regex
                            // Regex strategy adopted from Diego Perini
                            assert(function (div) { // Select is set to empty string on purpose
                                // This is to test IE's treatment of not explicitly
                                // setting a boolean content attribute,
                                // since its presence should be enough
                                // http://bugs.jquery.com/ticket/12359
                                docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
                                // Nothing should be selected when empty strings follow ^= or $= or *=
                                // The test attribute must be unknown in Opera but "safe" for WinRT
                                // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                                if (div.querySelectorAll("[msallowcapture^='']").length) {
                                    rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                } // Support: IE8
                                // Boolean attributes and "value" are not treated correctly
                                if (!div.querySelectorAll("[selected]").length) {
                                    rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                                if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                                    rbuggyQSA.push("~=");
                                } // Webkit/Opera - :checked should return selected option elements
                                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                // IE8 throws error here and will not see later tests
                                if (!div.querySelectorAll(":checked").length) {
                                    rbuggyQSA.push(":checked");
                                } // Support: Safari 8+, iOS 8+
                                // https://bugs.webkit.org/show_bug.cgi?id=136851
                                // In-page `selector#id sibing-combinator selector` fails
                                if (!div.querySelectorAll("a#" + expando + "+*").length) {
                                    rbuggyQSA.push(".#.+[+~]");
                                }
                            });
                            assert(function (div) { // Support: Windows 8 Native Apps
                                // The type and name attributes are restricted during .innerHTML assignment
                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                div.appendChild(input).setAttribute("name", "D"); // Support: IE8
                                // Enforce case-sensitivity of name attribute
                                if (div.querySelectorAll("[name=d]").length) {
                                    rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                                // IE8 throws error here and will not see later tests
                                if (!div.querySelectorAll(":enabled").length) {
                                    rbuggyQSA.push(":enabled", ":disabled");
                                } // Opera 10-11 does not throw on post-comma invalid pseudos
                                div.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            });
                        }
                        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                            assert(function (div) { // Check to see if it's possible to do matchesSelector
                                // on a disconnected node (IE 9)
                                support.disconnectedMatch = matches.call(div, "div"); // This should fail with an exception
                                // Gecko does not error, returns false instead
                                matches.call(div, "[s!='']:x");
                                rbuggyMatches.push("!=", pseudos);
                            });
                        }
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        /* Contains
		---------------------------------------------------------------------- */
                        hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
                        // Purposefully self-exclusive
                        // As in, an element does not contain itself
                        contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
                            var adown = a.nodeType === 9 ? a.documentElement : a,
                                bup = b && b.parentNode;
                            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                        } : function (a, b) {
                            if (b) {
                                while (b = b.parentNode) {
                                    if (b === a) {
                                        return true;
                                    }
                                }
                            }
                            return false;
                        };
                        /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
                        sortOrder = hasCompare ? function (a, b) { // Flag for duplicate removal
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            } // Sort on method existence if only one input has compareDocumentPosition
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) {
                                return compare;
                            } // Calculate position if both inputs belong to the same document
                            compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                                1; // Disconnected nodes
                            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) { // Choose the first element that is related to our preferred document
                                if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                    return -1;
                                }
                                if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                    return 1;
                                } // Maintain original order
                                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            }
                            return compare & 4 ? -1 : 1;
                        } : function (a, b) { // Exit early if the nodes are identical
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur, i = 0,
                                aup = a.parentNode,
                                bup = b.parentNode,
                                ap = [a],
                                bp = [b]; // Parentless nodes are either documents or disconnected
                            if (!aup || !bup) {
                                return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
                            } else if (aup === bup) {
                                return siblingCheck(a, b);
                            } // Otherwise we need full lists of their ancestors for comparison
                            cur = a;
                            while (cur = cur.parentNode) {
                                ap.unshift(cur);
                            }
                            cur = b;
                            while (cur = cur.parentNode) {
                                bp.unshift(cur);
                            } // Walk down the tree looking for a discrepancy
                            while (ap[i] === bp[i]) {
                                i++;
                            }
                            return i ? // Do a sibling check if the nodes have a common ancestor
                                siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                                ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                        };
                        return document;
                    };
                    Sizzle.matches = function (expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function (elem, expr) { // Set document vars if needed
                        if ((elem.ownerDocument || elem) !== document) {
                            setDocument(elem);
                        } // Make sure that attribute selectors are quoted
                        expr = expr.replace(rattributeQuotes, "='$1']");
                        if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                            try {
                                var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes
                                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                                    // fragment in IE 9
                                    elem.document && elem.document.nodeType !== 11) {
                                    return ret;
                                }
                            } catch (e) {}
                        }
                        return Sizzle(expr, document, null, [elem]).length > 0;
                    };
                    Sizzle.contains = function (context, elem) { // Set document vars if needed
                        if ((context.ownerDocument || context) !== document) {
                            setDocument(context);
                        }
                        return contains(context, elem);
                    };
                    Sizzle.attr = function (elem, name) { // Set document vars if needed
                        if ((elem.ownerDocument || elem) !== document) {
                            setDocument(elem);
                        }
                        var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
                            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                        return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    };
                    Sizzle.error = function (msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    /**
                     * Document sorting and removing duplicates
                     * @param {ArrayLike} results
                     */
                    Sizzle.uniqueSort = function (results) {
                        var elem, duplicates = [],
                            j = 0,
                            i = 0; // Unless we *know* we can detect duplicates, assume their presence
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) {
                                if (elem === results[i]) {
                                    j = duplicates.push(i);
                                }
                            }
                            while (j--) {
                                results.splice(duplicates[j], 1);
                            }
                        } // Clear input after sorting to release objects
                        // See https://github.com/jquery/sizzle/pull/225
                        sortInput = null;
                        return results;
                    };
                    /**
                     * Utility function for retrieving the text value of an array of DOM nodes
                     * @param {Array|Element} elem
                     */
                    getText = Sizzle.getText = function (elem) {
                        var node, ret = "",
                            i = 0,
                            nodeType = elem.nodeType;
                        if (!nodeType) { // If no nodeType, this is expected to be an array
                            while (node = elem[i++]) { // Do not traverse comment nodes
                                ret += getText(node);
                            }
                        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) { // Use textContent for elements
                            // innerText usage removed for consistency of new lines (jQuery #11153)
                            if (typeof elem.textContent === "string") {
                                return elem.textContent;
                            } else { // Traverse its children
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                    ret += getText(elem);
                                }
                            }
                        } else if (nodeType === 3 || nodeType === 4) {
                            return elem.nodeValue;
                        } // Do not include comment or processing instruction nodes
                        return ret;
                    };
                    Expr = Sizzle.selectors = { // Can be adjusted by the user
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            "ATTR": function ATTR(match) {
                                match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if (match[2] === "~=") {
                                    match[3] = " " + match[3] + " ";
                                }
                                return match.slice(0, 4);
                            },
                            "CHILD": function CHILD(match) {
                                /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
                                match[1] = match[1].toLowerCase();
                                if (match[1].slice(0, 3) === "nth") { // nth-* requires argument
                                    if (!match[3]) {
                                        Sizzle.error(match[0]);
                                    } // numeric x and y parameters for Expr.filter.CHILD
                                    // remember that false/true cast respectively to 0/1
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
                                } else if (match[3]) {
                                    Sizzle.error(match[0]);
                                }
                                return match;
                            },
                            "PSEUDO": function PSEUDO(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) {
                                    return null;
                                } // Accept quoted arguments as-is
                                if (match[3]) {
                                    match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
                                } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
                                        excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
                                        excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) { // excess is a negative index
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                } // Return only captures needed by the pseudo filter method (type and argument)
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            "TAG": function TAG(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ? function () {
                                    return true;
                                } : function (elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },
                            "CLASS": function CLASS(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                                    return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                });
                            },
                            "ATTR": function ATTR(name, operator, check) {
                                return function (elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (result == null) {
                                        return operator === "!=";
                                    }
                                    if (!operator) {
                                        return true;
                                    }
                                    result += "";
                                    return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                                };
                            },
                            "CHILD": function CHILD(type, what, argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth",
                                    forward = type.slice(-4) !== "last",
                                    ofType = what === "of-type";
                                return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                                    function (elem) {
                                        return !!elem.parentNode;
                                    } : function (elem, context, xml) {
                                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                            parent = elem.parentNode,
                                            name = ofType && elem.nodeName.toLowerCase(),
                                            useCache = !xml && !ofType,
                                            diff = false;
                                        if (parent) { // :(first|last|only)-(child|of-type)
                                            if (simple) {
                                                while (dir) {
                                                    node = elem;
                                                    while (node = node[dir]) {
                                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                            return false;
                                                        }
                                                    } // Reverse direction for :only-* (if we haven't yet done so)
                                                    start = dir = type === "only" && !start && "nextSibling";
                                                }
                                                return true;
                                            }
                                            start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
                                            if (forward && useCache) { // Seek `elem` from a previously-cached index
                                                // ...in a gzip-friendly way
                                                node = parent;
                                                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex && cache[2];
                                                node = nodeIndex && parent.childNodes[nodeIndex];
                                                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                                                        diff = nodeIndex = 0) || start.pop()) { // When found, cache indexes on `parent` and break
                                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                        break;
                                                    }
                                                }
                                            } else { // Use previously-cached element index if available
                                                if (useCache) { // ...in a gzip-friendly way
                                                    node = elem;
                                                    outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                                    // Defend against cloned attroperties (jQuery gh-1709)
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    cache = uniqueCache[type] || [];
                                                    nodeIndex = cache[0] === dirruns && cache[1];
                                                    diff = nodeIndex;
                                                } // xml :nth-child(...)
                                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                                if (diff === false) { // Use the same loop as above to seek `elem` from the start
                                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) { // Cache the index of each encountered element
                                                            if (useCache) {
                                                                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                                uniqueCache[type] = [dirruns, diff];
                                                            }
                                                            if (node === elem) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            } // Incorporate the offset, then check against cycle size
                                            diff -= last;
                                            return diff === first || diff % first === 0 && diff / first >= 0;
                                        }
                                    };
                            },
                            "PSEUDO": function PSEUDO(pseudo, argument) { // pseudo-class names are case-insensitive
                                // http://www.w3.org/TR/selectors/#pseudo-classes
                                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                                // Remember that setFilters inherits from pseudos
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
                                // arguments are needed to create the filter function
                                // just as Sizzle does
                                if (fn[expando]) {
                                    return fn(argument);
                                } // But maintain support for old signatures
                                if (fn.length > 1) {
                                    args = [pseudo, pseudo, "", argument];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                                        var idx, matched = fn(seed, argument),
                                            i = matched.length;
                                        while (i--) {
                                            idx = indexOf(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    }) : function (elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: { // Potentially complex pseudos
                            "not": markFunction(function (selector) { // Trim the selector passed to compile
                                // to avoid treating leading and trailing
                                // spaces as combinators
                                var input = [],
                                    results = [],
                                    matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []),
                                        i = seed.length; // Match elements unmatched by `matcher`
                                    while (i--) {
                                        if (elem = unmatched[i]) {
                                            seed[i] = !(matches[i] = elem);
                                        }
                                    }
                                }) : function (elem, context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results); // Don't keep the element (issue #299)
                                    input[0] = null;
                                    return !results.pop();
                                };
                            }),
                            "has": markFunction(function (selector) {
                                return function (elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            }),
                            "contains": markFunction(function (text) {
                                text = text.replace(runescape, funescape);
                                return function (elem) {
                                    return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                                };
                            }), // "Whether an element is represented by a :lang() selector
                            // is based solely on the element's language value
                            // being equal to the identifier C,
                            // or beginning with the identifier C immediately followed by "-".
                            // The matching of C against the element's language value is performed case-insensitively.
                            // The identifier C does not have to be a valid language name."
                            // http://www.w3.org/TR/selectors/#lang-pseudo
                            "lang": markFunction(function (lang) { // lang value must be a valid identifier
                                if (!ridentifier.test(lang || "")) {
                                    Sizzle.error("unsupported lang: " + lang);
                                }
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function (elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                        }
                                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                    return false;
                                };
                            }), // Miscellaneous
                            "target": function target(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            "root": function root(elem) {
                                return elem === docElem;
                            },
                            "focus": function focus(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            }, // Boolean properties
                            "enabled": function enabled(elem) {
                                return elem.disabled === false;
                            },
                            "disabled": function disabled(elem) {
                                return elem.disabled === true;
                            },
                            "checked": function checked(elem) { // In CSS3, :checked should return both checked and selected elements
                                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                var nodeName = elem.nodeName.toLowerCase();
                                return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                            },
                            "selected": function selected(elem) { // Accessing this property makes selected-by-default
                                // options in Safari work properly
                                if (elem.parentNode) {
                                    elem.parentNode.selectedIndex;
                                }
                                return elem.selected === true;
                            }, // Contents
                            "empty": function empty(elem) { // http://www.w3.org/TR/selectors/#empty-pseudo
                                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                                //   but not by others (comment: 8; processing instruction: 7; etc.)
                                // nodeType < 6 works because attributes (2) do not appear as children
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                    if (elem.nodeType < 6) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            "parent": function parent(elem) {
                                return !Expr.pseudos["empty"](elem);
                            }, // Element/input types
                            "header": function header(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            "input": function input(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            "button": function button(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return name === "input" && elem.type === "button" || name === "button";
                            },
                            "text": function text(elem) {
                                var attr;
                                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
                                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                                    (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                            }, // Position-in-collection
                            "first": createPositionalPseudo(function () {
                                return [0];
                            }),
                            "last": createPositionalPseudo(function (matchIndexes, length) {
                                return [length - 1];
                            }),
                            "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
                                return [argument < 0 ? argument + length : argument];
                            }),
                            "even": createPositionalPseudo(function (matchIndexes, length) {
                                var i = 0;
                                for (; i < length; i += 2) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),
                            "odd": createPositionalPseudo(function (matchIndexes, length) {
                                var i = 1;
                                for (; i < length; i += 2) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),
                            "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (; --i >= 0;) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),
                            "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (; ++i < length;) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            })
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos
                    for (i in {
                            radio: true,
                            checkbox: true,
                            file: true,
                            password: true,
                            image: true
                        }) {
                        Expr.pseudos[i] = createInputPseudo(i);
                    }
                    for (i in {
                            submit: true,
                            reset: true
                        }) {
                        Expr.pseudos[i] = createButtonPseudo(i);
                    } // Easy API for creating new setFilters
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters();
                    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) {
                            return parseOnly ? 0 : cached.slice(0);
                        }
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) { // Comma and first run
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) { // Don't consume trailing commas as valid
                                    soFar = soFar.slice(match[0].length) || soFar;
                                }
                                groups.push(tokens = []);
                            }
                            matched = false; // Combinators
                            if (match = rcombinators.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched, // Cast descendant combinators to space
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            } // Filters
                            for (type in Expr.filter) {
                                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                    matched = match.shift();
                                    tokens.push({
                                        value: matched,
                                        type: type,
                                        matches: match
                                    });
                                    soFar = soFar.slice(matched.length);
                                }
                            }
                            if (!matched) {
                                break;
                            }
                        } // Return the length of the invalid excess
                        // if we're just parsing
                        // Otherwise, throw an error or return tokens
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
                            tokenCache(selector, groups).slice(0);
                    };

                    function toSelector(tokens) {
                        var i = 0,
                            len = tokens.length,
                            selector = "";
                        for (; i < len; i++) {
                            selector += tokens[i].value;
                        }
                        return selector;
                    }

                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir,
                            checkNonElements = base && dir === "parentNode",
                            doneName = done++;
                        return combinator.first ? // Check against closest ancestor/preceding element
                            function (elem, context, xml) {
                                while (elem = elem[dir]) {
                                    if (elem.nodeType === 1 || checkNonElements) {
                                        return matcher(elem, context, xml);
                                    }
                                }
                            } : // Check against all ancestor/preceding elements
                            function (elem, context, xml) {
                                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                                if (xml) {
                                    while (elem = elem[dir]) {
                                        if (elem.nodeType === 1 || checkNonElements) {
                                            if (matcher(elem, context, xml)) {
                                                return true;
                                            }
                                        }
                                    }
                                } else {
                                    while (elem = elem[dir]) {
                                        if (elem.nodeType === 1 || checkNonElements) {
                                            outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                            if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) { // Assign to newCache so results back-propagate to previous elements
                                                return newCache[2] = oldCache[2];
                                            } else { // Reuse newcache so results back-propagate to previous elements
                                                uniqueCache[dir] = newCache; // A match means we're done; a fail means we have to keep checking
                                                if (newCache[2] = matcher(elem, context, xml)) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                    }

                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function (elem, context, xml) {
                            var i = matchers.length;
                            while (i--) {
                                if (!matchers[i](elem, context, xml)) {
                                    return false;
                                }
                            }
                            return true;
                        } : matchers[0];
                    }

                    function multipleContexts(selector, contexts, results) {
                        var i = 0,
                            len = contexts.length;
                        for (; i < len; i++) {
                            Sizzle(selector, contexts[i], results);
                        }
                        return results;
                    }

                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [],
                            i = 0,
                            len = unmatched.length,
                            mapped = map != null;
                        for (; i < len; i++) {
                            if (elem = unmatched[i]) {
                                if (!filter || filter(elem, context, xml)) {
                                    newUnmatched.push(elem);
                                    if (mapped) {
                                        map.push(i);
                                    }
                                }
                            }
                        }
                        return newUnmatched;
                    }

                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) {
                            postFilter = setMatcher(postFilter);
                        }
                        if (postFinder && !postFinder[expando]) {
                            postFinder = setMatcher(postFinder, postSelector);
                        }
                        return markFunction(function (seed, results, context, xml) {
                            var temp, i, elem, preMap = [],
                                postMap = [],
                                preexisting = results.length, // Get initial elements from seed or context
                                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                                matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                                [] : // ...otherwise use results directly
                                results : matcherIn; // Find primary matches
                            if (matcher) {
                                matcher(matcherIn, matcherOut, context, xml);
                            } // Apply postFilter
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn
                                i = temp.length;
                                while (i--) {
                                    if (elem = temp[i]) {
                                        matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                                    }
                                }
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) { // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) {
                                            if (elem = matcherOut[i]) { // Restore matcherIn since elem is not yet a final match
                                                temp.push(matcherIn[i] = elem);
                                            }
                                        }
                                        postFinder(null, matcherOut = [], temp, xml);
                                    } // Move matched elements from seed to results to keep them synchronized
                                    i = matcherOut.length;
                                    while (i--) {
                                        if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                            seed[temp] = !(results[temp] = elem);
                                        }
                                    }
                                } // Add elements to results, through postFinder if defined
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) {
                                    postFinder(null, results, matcherOut, xml);
                                } else {
                                    push.apply(results, matcherOut);
                                }
                            }
                        });
                    }

                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length,
                            leadingRelative = Expr.relative[tokens[0].type],
                            implicitRelative = leadingRelative || Expr.relative[" "],
                            i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
                            matchContext = addCombinator(function (elem) {
                                return elem === checkContext;
                            }, implicitRelative, true),
                            matchAnyContext = addCombinator(function (elem) {
                                return indexOf(checkContext, elem) > -1;
                            }, implicitRelative, true),
                            matchers = [function (elem, context, xml) {
                                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)
                                checkContext = null;
                                return ret;
                            }];
                        for (; i < len; i++) {
                            if (matcher = Expr.relative[tokens[i].type]) {
                                matchers = [addCombinator(elementMatcher(matchers), matcher)];
                            } else {
                                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher
                                if (matcher[expando]) { // Find the next relative operator (if any) for proper handling
                                    j = ++i;
                                    for (; j < len; j++) {
                                        if (Expr.relative[tokens[j].type]) {
                                            break;
                                        }
                                    }
                                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                        tokens.slice(0, i - 1).concat({
                                            value: tokens[i - 2].type === " " ? "*" : ""
                                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                                }
                                matchers.push(matcher);
                            }
                        }
                        return elementMatcher(matchers);
                    }

                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0,
                            byElement = elementMatchers.length > 0,
                            superMatcher = function superMatcher(seed, context, xml, results, outermost) {
                                var elem, j, matcher, matchedCount = 0,
                                    i = "0",
                                    unmatched = seed && [],
                                    setMatched = [],
                                    contextBackup = outermostContext, // We must always have either seed elements or outermost context
                                    elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                                    dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
                                    len = elems.length;
                                if (outermost) {
                                    outermostContext = context === document || context || outermost;
                                } // Add elements passing elementMatchers directly to results
                                // Support: IE<9, Safari
                                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                                for (; i !== len && (elem = elems[i]) != null; i++) {
                                    if (byElement && elem) {
                                        j = 0;
                                        if (!context && elem.ownerDocument !== document) {
                                            setDocument(elem);
                                            xml = !documentIsHTML;
                                        }
                                        while (matcher = elementMatchers[j++]) {
                                            if (matcher(elem, context || document, xml)) {
                                                results.push(elem);
                                                break;
                                            }
                                        }
                                        if (outermost) {
                                            dirruns = dirrunsUnique;
                                        }
                                    } // Track unmatched elements for set filters
                                    if (bySet) { // They will have gone through all possible matchers
                                        if (elem = !matcher && elem) {
                                            matchedCount--;
                                        } // Lengthen the array for every element, matched or not
                                        if (seed) {
                                            unmatched.push(elem);
                                        }
                                    }
                                } // `i` is now the count of elements visited above, and adding it to `matchedCount`
                                // makes the latter nonnegative.
                                matchedCount += i; // Apply set filters to unmatched elements
                                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                                // no element matchers and no seed.
                                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                                // numerically zero.
                                if (bySet && i !== matchedCount) {
                                    j = 0;
                                    while (matcher = setMatchers[j++]) {
                                        matcher(unmatched, setMatched, context, xml);
                                    }
                                    if (seed) { // Reintegrate element matches to eliminate the need for sorting
                                        if (matchedCount > 0) {
                                            while (i--) {
                                                if (!(unmatched[i] || setMatched[i])) {
                                                    setMatched[i] = pop.call(results);
                                                }
                                            }
                                        } // Discard index placeholder values to get only actual matches
                                        setMatched = condense(setMatched);
                                    } // Add matches to results
                                    push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
                                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                                        Sizzle.uniqueSort(results);
                                    }
                                } // Override manipulation of globals by nested matchers
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                    outermostContext = contextBackup;
                                }
                                return unmatched;
                            };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    compile = Sizzle.compile = function (selector, match /* Internal Use Only */ ) {
                        var i, setMatchers = [],
                            elementMatchers = [],
                            cached = compilerCache[selector + " "];
                        if (!cached) { // Generate a function of recursive functions that can be used to check each element
                            if (!match) {
                                match = tokenize(selector);
                            }
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) {
                                    setMatchers.push(cached);
                                } else {
                                    elementMatchers.push(cached);
                                }
                            } // Cache the compiled function
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    /**
                     * A low-level selection function that works with Sizzle's compiled
                     *  selector functions
                     * @param {String|Function} selector A selector or a pre-compiled
                     *  selector function built with Sizzle.compile
                     * @param {Element} context
                     * @param {Array} [results]
                     * @param {Array} [seed] A set of elements to match against
                     */
                    select = Sizzle.select = function (selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                            match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
                        // (the latter of which guarantees us context)
                        if (match.length === 1) { // Reduce context if the leading compound selector is an ID
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) {
                                    return results; // Precompiled matchers will still verify ancestry, so step up a level
                                } else if (compiled) {
                                    context = context.parentNode;
                                }
                                selector = selector.slice(tokens.shift().value.length);
                            } // Fetch a seed set for right-to-left matching
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i]; // Abort if we hit a combinator
                                if (Expr.relative[type = token.type]) {
                                    break;
                                }
                                if (find = Expr.find[type]) { // Search, expanding context for leading sibling combinators
                                    if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) { // If seed is empty or no tokens remain, we can return early
                                        tokens.splice(i, 1);
                                        selector = seed.length && toSelector(tokens);
                                        if (!selector) {
                                            push.apply(results, seed);
                                            return results;
                                        }
                                        break;
                                    }
                                }
                            }
                        } // Compile and execute a filtering function if one is not provided
                        // Provide `match` to avoid retokenization if we modified the selector above
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    }; // One-time assignments
                    // Sort stability
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
                    // Always assume duplicates if they aren't passed to the comparison function
                    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document
                    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
                    // Detached nodes confoundingly follow *each other*
                    support.sortDetached = assert(function (div1) { // Should return 1, but returns 4 (following)
                        return div1.compareDocumentPosition(document.createElement("div")) & 1;
                    }); // Support: IE<8
                    // Prevent attribute/property "interpolation"
                    // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                    if (!assert(function (div) {
                            div.innerHTML = "<a href='#'></a>";
                            return div.firstChild.getAttribute("href") === "#";
                        })) {
                        addHandle("type|href|height|width", function (elem, name, isXML) {
                            if (!isXML) {
                                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                            }
                        });
                    } // Support: IE<9
                    // Use defaultValue in place of getAttribute("value")
                    if (!support.attributes || !assert(function (div) {
                            div.innerHTML = "<input/>";
                            div.firstChild.setAttribute("value", "");
                            return div.firstChild.getAttribute("value") === "";
                        })) {
                        addHandle("value", function (elem, name, isXML) {
                            if (!isXML && elem.nodeName.toLowerCase() === "input") {
                                return elem.defaultValue;
                            }
                        });
                    } // Support: IE<9
                    // Use getAttributeNode to fetch booleans when getAttribute lies
                    if (!assert(function (div) {
                            return div.getAttribute("disabled") == null;
                        })) {
                        addHandle(booleans, function (elem, name, isXML) {
                            var val;
                            if (!isXML) {
                                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                            }
                        });
                    }
                    return Sizzle;
                })(window);
            jQuery.find = Sizzle;
            jQuery.expr = Sizzle.selectors;
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
            jQuery.text = Sizzle.getText;
            jQuery.isXMLDoc = Sizzle.isXML;
            jQuery.contains = Sizzle.contains;
            var dir = function dir(elem, _dir, until) {
                var matched = [],
                    truncate = until !== undefined;
                while ((elem = elem[_dir]) && elem.nodeType !== 9) {
                    if (elem.nodeType === 1) {
                        if (truncate && jQuery(elem).is(until)) {
                            break;
                        }
                        matched.push(elem);
                    }
                }
                return matched;
            };
            var _siblings = function _siblings(n, elem) {
                var matched = [];
                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== elem) {
                        matched.push(n);
                    }
                }
                return matched;
            };
            var rneedsContext = jQuery.expr.match.needsContext;
            var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
            var risSimple = /^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
            function winnow(elements, qualifier, not) {
                if (jQuery.isFunction(qualifier)) {
                    return jQuery.grep(elements, function (elem, i) {
                        /* jshint -W018 */
                        return !!qualifier.call(elem, i, elem) !== not;
                    });
                }
                if (qualifier.nodeType) {
                    return jQuery.grep(elements, function (elem) {
                        return elem === qualifier !== not;
                    });
                }
                if (typeof qualifier === "string") {
                    if (risSimple.test(qualifier)) {
                        return jQuery.filter(qualifier, elements, not);
                    }
                    qualifier = jQuery.filter(qualifier, elements);
                }
                return jQuery.grep(elements, function (elem) {
                    return indexOf.call(qualifier, elem) > -1 !== not;
                });
            }
            jQuery.filter = function (expr, elems, not) {
                var elem = elems[0];
                if (not) {
                    expr = ":not(" + expr + ")";
                }
                return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
                    return elem.nodeType === 1;
                }));
            };
            jQuery.fn.extend({
                find: function find(selector) {
                    var i, len = this.length,
                        ret = [],
                        self = this;
                    if (typeof selector !== "string") {
                        return this.pushStack(jQuery(selector).filter(function () {
                            for (i = 0; i < len; i++) {
                                if (jQuery.contains(self[i], this)) {
                                    return true;
                                }
                            }
                        }));
                    }
                    for (i = 0; i < len; i++) {
                        jQuery.find(selector, self[i], ret);
                    } // Needed because $( selector, context ) becomes $( context ).find( selector )
                    ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                    ret.selector = this.selector ? this.selector + " " + selector : selector;
                    return ret;
                },
                filter: function filter(selector) {
                    return this.pushStack(winnow(this, selector || [], false));
                },
                not: function not(selector) {
                    return this.pushStack(winnow(this, selector || [], true));
                },
                is: function is(selector) {
                    return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
                        // so $("p:first").is("p:last") won't return true for a doc with two "p".
                        typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                }
            }); // Initialize a jQuery object
            // A central reference to the root jQuery(document)
            var rootjQuery, // A simple way to check for HTML strings
                // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
                // Strict HTML recognition (#11290: must start with <)
                rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                init = jQuery.fn.init = function (selector, context, root) {
                    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)
                    if (!selector) {
                        return this;
                    } // Method init() accepts an alternate rootjQuery
                    // so migrate can support jQuery.sub (gh-2101)
                    root = root || rootjQuery; // Handle HTML strings
                    if (typeof selector === "string") {
                        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) { // Assume that strings that start and end with <> are HTML and skip the regex check
                            match = [null, selector, null];
                        } else {
                            match = rquickExpr.exec(selector);
                        } // Match html or make sure no context is specified for #id
                        if (match && (match[1] || !context)) { // HANDLE: $(html) -> $(array)
                            if (match[1]) {
                                context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
                                // Intentionally let the error be thrown if parseHTML is not present
                                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)
                                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                    for (match in context) { // Properties of context are called as methods if possible
                                        if (jQuery.isFunction(this[match])) {
                                            this[match](context[match]); // ...and otherwise set as attributes
                                        } else {
                                            this.attr(match, context[match]);
                                        }
                                    }
                                }
                                return this; // HANDLE: $(#id)
                            } else {
                                elem = document.getElementById(match[2]); // Support: Blackberry 4.6
                                // gEBID returns nodes no longer in the document (#6963)
                                if (elem && elem.parentNode) { // Inject the element directly into the jQuery object
                                    this.length = 1;
                                    this[0] = elem;
                                }
                                this.context = document;
                                this.selector = selector;
                                return this;
                            } // HANDLE: $(expr, $(...))
                        } else if (!context || context.jquery) {
                            return (context || root).find(selector); // HANDLE: $(expr, context)
                            // (which is just equivalent to: $(context).find(expr)
                        } else {
                            return this.constructor(context).find(selector);
                        } // HANDLE: $(DOMElement)
                    } else if (selector.nodeType) {
                        this.context = this[0] = selector;
                        this.length = 1;
                        return this; // HANDLE: $(function)
                        // Shortcut for document ready
                    } else if (jQuery.isFunction(selector)) {
                        return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
                            selector(jQuery);
                    }
                    if (selector.selector !== undefined) {
                        this.selector = selector.selector;
                        this.context = selector.context;
                    }
                    return jQuery.makeArray(selector, this);
                }; // Give the init function the jQuery prototype for later instantiation
            init.prototype = jQuery.fn; // Initialize central reference
            rootjQuery = jQuery(document);
            var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
                guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
            jQuery.fn.extend({
                has: function has(target) {
                    var targets = jQuery(target, this),
                        l = targets.length;
                    return this.filter(function () {
                        var i = 0;
                        for (; i < l; i++) {
                            if (jQuery.contains(this, targets[i])) {
                                return true;
                            }
                        }
                    });
                },
                closest: function closest(selectors, context) {
                    var cur, i = 0,
                        l = this.length,
                        matched = [],
                        pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                    for (; i < l; i++) {
                        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) { // Always skip document fragments
                            if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : // Don't pass non-elements to Sizzle
                                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                                matched.push(cur);
                                break;
                            }
                        }
                    }
                    return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                }, // Determine the position of an element within the set
                index: function index(elem) { // No argument, return index in parent
                    if (!elem) {
                        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    } // Index in selector
                    if (typeof elem === "string") {
                        return indexOf.call(jQuery(elem), this[0]);
                    } // Locate the position of the desired element
                    return indexOf.call(this, // If it receives a jQuery object, the first element is used
                        elem.jquery ? elem[0] : elem);
                },
                add: function add(selector, context) {
                    return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                },
                addBack: function addBack(selector) {
                    return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
                }
            });

            function sibling(cur, dir) {
                while ((cur = cur[dir]) && cur.nodeType !== 1) {}
                return cur;
            }
            jQuery.each({
                parent: function parent(elem) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null;
                },
                parents: function parents(elem) {
                    return dir(elem, "parentNode");
                },
                parentsUntil: function parentsUntil(elem, i, until) {
                    return dir(elem, "parentNode", until);
                },
                next: function next(elem) {
                    return sibling(elem, "nextSibling");
                },
                prev: function prev(elem) {
                    return sibling(elem, "previousSibling");
                },
                nextAll: function nextAll(elem) {
                    return dir(elem, "nextSibling");
                },
                prevAll: function prevAll(elem) {
                    return dir(elem, "previousSibling");
                },
                nextUntil: function nextUntil(elem, i, until) {
                    return dir(elem, "nextSibling", until);
                },
                prevUntil: function prevUntil(elem, i, until) {
                    return dir(elem, "previousSibling", until);
                },
                siblings: function siblings(elem) {
                    return _siblings((elem.parentNode || {}).firstChild, elem);
                },
                children: function children(elem) {
                    return _siblings(elem.firstChild);
                },
                contents: function contents(elem) {
                    return elem.contentDocument || jQuery.merge([], elem.childNodes);
                }
            }, function (name, fn) {
                jQuery.fn[name] = function (until, selector) {
                    var matched = jQuery.map(this, fn, until);
                    if (name.slice(-5) !== "Until") {
                        selector = until;
                    }
                    if (selector && typeof selector === "string") {
                        matched = jQuery.filter(selector, matched);
                    }
                    if (this.length > 1) { // Remove duplicates
                        if (!guaranteedUnique[name]) {
                            jQuery.uniqueSort(matched);
                        } // Reverse order for parents* and prev-derivatives
                        if (rparentsprev.test(name)) {
                            matched.reverse();
                        }
                    }
                    return this.pushStack(matched);
                };
            });
            var rnotwhite = /\S+/g; // Convert String-formatted options into Object-formatted ones
            function createOptions(options) {
                var object = {};
                jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
                    object[flag] = true;
                });
                return object;
            }
            /*
             * Create a callback list using the following parameters:
             *
             *	options: an optional list of space-separated options that will change how
             *			the callback list behaves or a more traditional option object
             *
             * By default a callback list will act like an event callback list and can be
             * "fired" multiple times.
             *
             * Possible options:
             *
             *	once:			will ensure the callback list can only be fired once (like a Deferred)
             *
             *	memory:			will keep track of previous values and will call any callback added
             *					after the list has been fired right away with the latest "memorized"
             *					values (like a Deferred)
             *
             *	unique:			will ensure a callback can only be added once (no duplicate in the list)
             *
             *	stopOnFalse:	interrupt callings when a callback returns false
             *
             */
            jQuery.Callbacks = function (options) { // Convert options from String-formatted to Object-formatted if needed
                // (we check in cache first)
                options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
                var // Flag to know if list is currently firing
                    firing, // Last fire value for non-forgettable lists
                    memory, // Flag to know if list was already fired
                    _fired, // Flag to prevent firing
                    _locked, // Actual callback list
                    list = [], // Queue of execution data for repeatable lists
                    queue = [], // Index of currently firing callback (modified by add/remove as needed)
                    firingIndex = -1, // Fire callbacks
                    fire = function fire() { // Enforce single-firing
                        _locked = options.once; // Execute callbacks for all pending executions,
                        // respecting firingIndex overrides and runtime changes
                        _fired = firing = true;
                        for (; queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) { // Run callback and check for early termination
                                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) { // Jump to end and forget the data so .add doesn't re-fire
                                    firingIndex = list.length;
                                    memory = false;
                                }
                            }
                        } // Forget the data if we're done with it
                        if (!options.memory) {
                            memory = false;
                        }
                        firing = false; // Clean up if we're done firing for good
                        if (_locked) { // Keep an empty list if we have data for future add calls
                            if (memory) {
                                list = []; // Otherwise, this object is spent
                            } else {
                                list = "";
                            }
                        }
                    }, // Actual Callbacks object
                    self = { // Add a callback or a collection of callbacks to the list
                        add: function add() {
                            if (list) { // If we have memory from a past run, we should fire after adding
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }(function add(args) {
                                    jQuery.each(args, function (_, arg) {
                                        if (jQuery.isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) {
                                                list.push(arg);
                                            }
                                        } else if (arg && arg.length && jQuery.type(arg) !== "string") { // Inspect recursively
                                            add(arg);
                                        }
                                    });
                                })(arguments);
                                if (memory && !firing) {
                                    fire();
                                }
                            }
                            return this;
                        }, // Remove a callback from the list
                        remove: function remove() {
                            jQuery.each(arguments, function (_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1); // Handle firing indexes
                                    if (index <= firingIndex) {
                                        firingIndex--;
                                    }
                                }
                            });
                            return this;
                        }, // Check if a given callback is in the list.
                        // If no argument is given, return whether or not list has callbacks attached.
                        has: function has(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        }, // Remove all callbacks from the list
                        empty: function empty() {
                            if (list) {
                                list = [];
                            }
                            return this;
                        }, // Disable .fire and .add
                        // Abort any current/pending executions
                        // Clear all callbacks and values
                        disable: function disable() {
                            _locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function disabled() {
                            return !list;
                        }, // Disable .fire
                        // Also disable .add unless we have memory (since it would have no effect)
                        // Abort any pending executions
                        lock: function lock() {
                            _locked = queue = [];
                            if (!memory) {
                                list = memory = "";
                            }
                            return this;
                        },
                        locked: function locked() {
                            return !!_locked;
                        }, // Call all callbacks with the given context and arguments
                        fireWith: function fireWith(context, args) {
                            if (!_locked) {
                                args = args || [];
                                args = [context, args.slice ? args.slice() : args];
                                queue.push(args);
                                if (!firing) {
                                    fire();
                                }
                            }
                            return this;
                        }, // Call all the callbacks with the given arguments
                        fire: function fire() {
                            self.fireWith(this, arguments);
                            return this;
                        }, // To know if the callbacks have already been called at least once
                        fired: function fired() {
                            return !!_fired;
                        }
                    };
                return self;
            };
            jQuery.extend({
                Deferred: function Deferred(func) {
                    var tuples = [ // action, add listener, listener list, final state
                            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", jQuery.Callbacks("memory")]
                        ],
                        _state = "pending",
                        _promise = {
                            state: function state() {
                                return _state;
                            },
                            always: function always() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            then: function then() /* fnDone, fnFail, fnProgress */ {
                                var fns = arguments;
                                return jQuery.Deferred(function (newDefer) {
                                    jQuery.each(tuples, function (i, tuple) {
                                        var fn = jQuery.isFunction(fns[i]) && fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                        deferred[tuple[1]](function () {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && jQuery.isFunction(returned.promise)) {
                                                returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                            } else {
                                                newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                            }
                                        });
                                    });
                                    fns = null;
                                }).promise();
                            }, // Get a promise for this deferred
                            // If obj is provided, the promise aspect is added to the object
                            promise: function promise(obj) {
                                return obj != null ? jQuery.extend(obj, _promise) : _promise;
                            }
                        },
                        deferred = {}; // Keep pipe for back-compat
                    _promise.pipe = _promise.then; // Add list-specific methods
                    jQuery.each(tuples, function (i, tuple) {
                        var list = tuple[2],
                            stateString = tuple[3]; // promise[ done | fail | progress ] = list.add
                        _promise[tuple[1]] = list.add; // Handle state
                        if (stateString) {
                            list.add(function () { // state = [ resolved | rejected ]
                                _state = stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
                            }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                        } // deferred[ resolve | reject | notify ]
                        deferred[tuple[0]] = function () {
                            deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
                            return this;
                        };
                        deferred[tuple[0] + "With"] = list.fireWith;
                    }); // Make the deferred a promise
                    _promise.promise(deferred); // Call given func if any
                    if (func) {
                        func.call(deferred, deferred);
                    } // All done!
                    return deferred;
                }, // Deferred helper
                when: function when(subordinate /* , ..., subordinateN */ ) {
                    var i = 0,
                        resolveValues = _slice.call(arguments),
                        length = resolveValues.length, // the count of uncompleted subordinates
                        remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, // the master Deferred.
                        // If resolveValues consist of only a single Deferred, just use that.
                        deferred = remaining === 1 ? subordinate : jQuery.Deferred(), // Update function for both resolve and progress values
                        updateFunc = function updateFunc(i, contexts, values) {
                            return function (value) {
                                contexts[i] = this;
                                values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
                                if (values === progressValues) {
                                    deferred.notifyWith(contexts, values);
                                } else if (!--remaining) {
                                    deferred.resolveWith(contexts, values);
                                }
                            };
                        },
                        progressValues, progressContexts, resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
                    if (length > 1) {
                        progressValues = new Array(length);
                        progressContexts = new Array(length);
                        resolveContexts = new Array(length);
                        for (; i < length; i++) {
                            if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                                resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
                            } else {
                                --remaining;
                            }
                        }
                    } // If we're not waiting on anything, resolve the master
                    if (!remaining) {
                        deferred.resolveWith(resolveContexts, resolveValues);
                    }
                    return deferred.promise();
                }
            }); // The deferred used on DOM ready
            var readyList;
            jQuery.fn.ready = function (fn) { // Add the callback
                jQuery.ready.promise().done(fn);
                return this;
            };
            jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
                isReady: false, // A counter to track how many items to wait for before
                // the ready event fires. See #6781
                readyWait: 1, // Hold (or release) the ready event
                holdReady: function holdReady(hold) {
                    if (hold) {
                        jQuery.readyWait++;
                    } else {
                        jQuery.ready(true);
                    }
                }, // Handle when the DOM is ready
                ready: function ready(wait) { // Abort if there are pending holds or we're already ready
                    if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                        return;
                    } // Remember that the DOM is ready
                    jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be
                    if (wait !== true && --jQuery.readyWait > 0) {
                        return;
                    } // If there are functions bound, to execute
                    readyList.resolveWith(document, [jQuery]); // Trigger any bound ready events
                    if (jQuery.fn.triggerHandler) {
                        jQuery(document).triggerHandler("ready");
                        jQuery(document).off("ready");
                    }
                }
            });
            /**
             * The ready event handler and self cleanup method
             */
            function completed() {
                document.removeEventListener("DOMContentLoaded", completed);
                window.removeEventListener("load", completed);
                jQuery.ready();
            }
            jQuery.ready.promise = function (obj) {
                if (!readyList) {
                    readyList = jQuery.Deferred(); // Catch cases where $(document).ready() is called
                    // after the browser event has already occurred.
                    // Support: IE9-10 only
                    // Older IE sometimes signals "interactive" too soon
                    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) { // Handle it asynchronously to allow scripts the opportunity to delay ready
                        window.setTimeout(jQuery.ready);
                    } else { // Use the handy event callback
                        document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work
                        window.addEventListener("load", completed);
                    }
                }
                return readyList.promise(obj);
            }; // Kick off the DOM ready check even if the user does not
            jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
            // The value/s can optionally be executed if it's a function
            var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    len = elems.length,
                    bulk = key == null; // Sets many values
                if (jQuery.type(key) === "object") {
                    chainable = true;
                    for (i in key) {
                        access(elems, fn, i, key[i], true, emptyGet, raw);
                    } // Sets one value
                } else if (value !== undefined) {
                    chainable = true;
                    if (!jQuery.isFunction(value)) {
                        raw = true;
                    }
                    if (bulk) { // Bulk operations run against the entire set
                        if (raw) {
                            fn.call(elems, value);
                            fn = null; // ...except when executing function values
                        } else {
                            bulk = fn;
                            fn = function (elem, key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                    }
                    if (fn) {
                        for (; i < len; i++) {
                            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                        }
                    }
                }
                return chainable ? elems : // Gets
                    bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
            };
            var acceptData = function acceptData(owner) { // Accepts only:
                //  - Node
                //    - Node.ELEMENT_NODE
                //    - Node.DOCUMENT_NODE
                //  - Object
                //    - Any
                /* jshint -W018 */
                return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
            };

            function Data() {
                this.expando = jQuery.expando + Data.uid++;
            }
            Data.uid = 1;
            Data.prototype = {
                register: function register(owner, initial) {
                    var value = initial || {}; // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                        owner[this.expando] = value; // Otherwise secure it in a non-enumerable, non-writable property
                        // configurability must be true to allow the property to be
                        // deleted with the delete operator
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            writable: true,
                            configurable: true
                        });
                    }
                    return owner[this.expando];
                },
                cache: function cache(owner) { // We can accept data for non-element nodes in modern browsers,
                    // but we should not, see #8335.
                    // Always return an empty object.
                    if (!acceptData(owner)) {
                        return {};
                    } // Check if the owner object already has a cache
                    var value = owner[this.expando]; // If not, create one
                    if (!value) {
                        value = {}; // We can accept data for non-element nodes in modern browsers,
                        // but we should not, see #8335.
                        // Always return an empty object.
                        if (acceptData(owner)) { // If it is a node unlikely to be stringify-ed or looped over
                            // use plain assignment
                            if (owner.nodeType) {
                                owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
                                // configurable must be true to allow the property to be
                                // deleted when data is removed
                            } else {
                                Object.defineProperty(owner, this.expando, {
                                    value: value,
                                    configurable: true
                                });
                            }
                        }
                    }
                    return value;
                },
                set: function set(owner, data, value) {
                    var prop, cache = this.cache(owner); // Handle: [ owner, key, value ] args
                    if (typeof data === "string") {
                        cache[data] = value; // Handle: [ owner, { properties } ] args
                    } else { // Copy the properties one-by-one to the cache object
                        for (prop in data) {
                            cache[prop] = data[prop];
                        }
                    }
                    return cache;
                },
                get: function get(owner, key) {
                    return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
                },
                access: function access(owner, key, value) {
                    var stored; // In cases where either:
                    //
                    //   1. No key was specified
                    //   2. A string key was specified, but no value provided
                    //
                    // Take the "read" path and allow the get method to determine
                    // which value to return, respectively either:
                    //
                    //   1. The entire cache object
                    //   2. The data stored at the key
                    //
                    if (key === undefined || key && typeof key === "string" && value === undefined) {
                        stored = this.get(owner, key);
                        return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
                    } // When the key is not a string, or both a key and value
                    // are specified, set or extend (existing objects) with either:
                    //
                    //   1. An object of properties
                    //   2. A key and value
                    //
                    this.set(owner, key, value); // Since the "set" path can have two possible entry points
                    // return the expected data based on which path was taken[*]
                    return value !== undefined ? value : key;
                },
                remove: function remove(owner, key) {
                    var i, name, camel, cache = owner[this.expando];
                    if (cache === undefined) {
                        return;
                    }
                    if (key === undefined) {
                        this.register(owner);
                    } else { // Support array or space separated string of keys
                        if (jQuery.isArray(key)) { // If "name" is an array of keys...
                            // When data is initially created, via ("key", "val") signature,
                            // keys will be converted to camelCase.
                            // Since there is no way to tell _how_ a key was added, remove
                            // both plain key and camelCase key. #12786
                            // This will only penalize the array argument path.
                            name = key.concat(key.map(jQuery.camelCase));
                        } else {
                            camel = jQuery.camelCase(key); // Try the string as a key before any manipulation
                            if (key in cache) {
                                name = [key, camel];
                            } else { // If a key with the spaces exists, use it.
                                // Otherwise, create an array by matching non-whitespace
                                name = camel;
                                name = name in cache ? [name] : name.match(rnotwhite) || [];
                            }
                        }
                        i = name.length;
                        while (i--) {
                            delete cache[name[i]];
                        }
                    } // Remove the expando if there's no more data
                    if (key === undefined || jQuery.isEmptyObject(cache)) { // Support: Chrome <= 35-45+
                        // Webkit & Blink performance suffers when deleting properties
                        // from DOM nodes, so set to undefined instead
                        // https://code.google.com/p/chromium/issues/detail?id=378607
                        if (owner.nodeType) {
                            owner[this.expando] = undefined;
                        } else {
                            delete owner[this.expando];
                        }
                    }
                },
                hasData: function hasData(owner) {
                    var cache = owner[this.expando];
                    return cache !== undefined && !jQuery.isEmptyObject(cache);
                }
            };
            var dataPriv = new Data();
            var dataUser = new Data(); //	Implementation Summary
            //
            //	1. Enforce API surface and semantic compatibility with 1.9.x branch
            //	2. Improve the module's maintainability by reducing the storage
            //		paths to a single mechanism.
            //	3. Use the same single mechanism to support "private" and "user" data.
            //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
            //	5. Avoid exposing implementation details on user objects (eg. expando properties)
            //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
            var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                rmultiDash = /[A-Z]/g;

            function dataAttr(elem, key, data) {
                var name; // If nothing was found internally, try to fetch any
                // data from the HTML5 data-* attribute
                if (data === undefined && elem.nodeType === 1) {
                    name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                    data = elem.getAttribute(name);
                    if (typeof data === "string") {
                        try {
                            data = data === "true" ? true : data === "false" ? false : data === "null" ? null : // Only convert to a number if it doesn't change the string
                                +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                        } catch (e) {} // Make sure we set the data so it isn't changed later
                        dataUser.set(elem, key, data);
                    } else {
                        data = undefined;
                    }
                }
                return data;
            }
            jQuery.extend({
                hasData: function hasData(elem) {
                    return dataUser.hasData(elem) || dataPriv.hasData(elem);
                },
                data: function data(elem, name, _data) {
                    return dataUser.access(elem, name, _data);
                },
                removeData: function removeData(elem, name) {
                    dataUser.remove(elem, name);
                }, // TODO: Now that all calls to _data and _removeData have been replaced
                // with direct calls to dataPriv methods, these can be deprecated.
                _data: function _data(elem, name, data) {
                    return dataPriv.access(elem, name, data);
                },
                _removeData: function _removeData(elem, name) {
                    dataPriv.remove(elem, name);
                }
            });
            jQuery.fn.extend({
                data: function data(key, value) {
                    var i, name, data, elem = this[0],
                        attrs = elem && elem.attributes; // Gets all values
                    if (key === undefined) {
                        if (this.length) {
                            data = dataUser.get(elem);
                            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                i = attrs.length;
                                while (i--) { // Support: IE11+
                                    // The attrs elements can be null (#14894)
                                    if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (name.indexOf("data-") === 0) {
                                            name = jQuery.camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                }
                                dataPriv.set(elem, "hasDataAttrs", true);
                            }
                        }
                        return data;
                    } // Sets multiple values
                    if (typeof key === "object") {
                        return this.each(function () {
                            dataUser.set(this, key);
                        });
                    }
                    return access(this, function (value) {
                        var data, camelKey; // The calling jQuery object (element matches) is not empty
                        // (and therefore has an element appears at this[ 0 ]) and the
                        // `value` parameter was not undefined. An empty jQuery object
                        // will result in `undefined` for elem = this[ 0 ] which will
                        // throw an exception if an attempt to read a data cache is made.
                        if (elem && value === undefined) { // Attempt to get data from the cache
                            // with the key as-is
                            data = dataUser.get(elem, key) || // Try to find dashed key if it exists (gh-2779)
                                // This is for 2.2.x only
                                dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                            if (data !== undefined) {
                                return data;
                            }
                            camelKey = jQuery.camelCase(key); // Attempt to get data from the cache
                            // with the key camelized
                            data = dataUser.get(elem, camelKey);
                            if (data !== undefined) {
                                return data;
                            } // Attempt to "discover" the data in
                            // HTML5 custom data-* attrs
                            data = dataAttr(elem, camelKey, undefined);
                            if (data !== undefined) {
                                return data;
                            } // We tried really hard, but the data doesn't exist.
                            return;
                        } // Set the data...
                        camelKey = jQuery.camelCase(key);
                        this.each(function () { // First, attempt to store a copy or reference of any
                            // data that might've been store with a camelCased key.
                            var data = dataUser.get(this, camelKey); // For HTML5 data-* attribute interop, we have to
                            // store property names with dashes in a camelCase form.
                            // This might not apply to all properties...*
                            dataUser.set(this, camelKey, value); // *... In the case of properties that might _actually_
                            // have dashes, we need to also store a copy of that
                            // unchanged property.
                            if (key.indexOf("-") > -1 && data !== undefined) {
                                dataUser.set(this, key, value);
                            }
                        });
                    }, null, value, arguments.length > 1, null, true);
                },
                removeData: function removeData(key) {
                    return this.each(function () {
                        dataUser.remove(this, key);
                    });
                }
            });
            jQuery.extend({
                queue: function queue(elem, type, data) {
                    var queue;
                    if (elem) {
                        type = (type || "fx") + "queue";
                        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup
                        if (data) {
                            if (!queue || jQuery.isArray(data)) {
                                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                            } else {
                                queue.push(data);
                            }
                        }
                        return queue || [];
                    }
                },
                dequeue: function dequeue(elem, type) {
                    type = type || "fx";
                    var queue = jQuery.queue(elem, type),
                        startLength = queue.length,
                        fn = queue.shift(),
                        hooks = jQuery._queueHooks(elem, type),
                        next = function next() {
                            jQuery.dequeue(elem, type);
                        }; // If the fx queue is dequeued, always remove the progress sentinel
                    if (fn === "inprogress") {
                        fn = queue.shift();
                        startLength--;
                    }
                    if (fn) { // Add a progress sentinel to prevent the fx queue from being
                        // automatically dequeued
                        if (type === "fx") {
                            queue.unshift("inprogress");
                        } // Clear up the last queue stop function
                        delete hooks.stop;
                        fn.call(elem, next, hooks);
                    }
                    if (!startLength && hooks) {
                        hooks.empty.fire();
                    }
                }, // Not public - generate a queueHooks object, or return the current one
                _queueHooks: function _queueHooks(elem, type) {
                    var key = type + "queueHooks";
                    return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                        empty: jQuery.Callbacks("once memory").add(function () {
                            dataPriv.remove(elem, [type + "queue", key]);
                        })
                    });
                }
            });
            jQuery.fn.extend({
                queue: function queue(type, data) {
                    var setter = 2;
                    if (typeof type !== "string") {
                        data = type;
                        type = "fx";
                        setter--;
                    }
                    if (arguments.length < setter) {
                        return jQuery.queue(this[0], type);
                    }
                    return data === undefined ? this : this.each(function () {
                        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue
                        jQuery._queueHooks(this, type);
                        if (type === "fx" && queue[0] !== "inprogress") {
                            jQuery.dequeue(this, type);
                        }
                    });
                },
                dequeue: function dequeue(type) {
                    return this.each(function () {
                        jQuery.dequeue(this, type);
                    });
                },
                clearQueue: function clearQueue(type) {
                    return this.queue(type || "fx", []);
                }, // Get a promise resolved when queues of a certain type
                // are emptied (fx is the type by default)
                promise: function promise(type, obj) {
                    var tmp, count = 1,
                        defer = jQuery.Deferred(),
                        elements = this,
                        i = this.length,
                        resolve = function resolve() {
                            if (!--count) {
                                defer.resolveWith(elements, [elements]);
                            }
                        };
                    if (typeof type !== "string") {
                        obj = type;
                        type = undefined;
                    }
                    type = type || "fx";
                    while (i--) {
                        tmp = dataPriv.get(elements[i], type + "queueHooks");
                        if (tmp && tmp.empty) {
                            count++;
                            tmp.empty.add(resolve);
                        }
                    }
                    resolve();
                    return defer.promise(obj);
                }
            });
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
            var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
            var cssExpand = ["Top", "Right", "Bottom", "Left"];
            var isHidden = function isHidden(elem, el) { // isHidden might be called from jQuery#filter function;
                // in that case, element will be second argument
                elem = el || elem;
                return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
            };

            function adjustCSS(elem, prop, valueParts, tween) {
                var adjusted, scale = 1,
                    maxIterations = 20,
                    currentValue = tween ? function () {
                        return tween.cur();
                    } : function () {
                        return jQuery.css(elem, prop, "");
                    },
                    initial = currentValue(),
                    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
                    initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                if (initialInUnit && initialInUnit[3] !== unit) { // Trust units reported by jQuery.css
                    unit = unit || initialInUnit[3]; // Make sure we update the tween properties later on
                    valueParts = valueParts || []; // Iteratively approximate from a nonzero starting point
                    initialInUnit = +initial || 1;
                    do { // If previous iteration zeroed out, double until we get *something*.
                        // Use string for doubling so we don't accidentally see scale as unchanged below
                        scale = scale || ".5"; // Adjust and apply
                        initialInUnit = initialInUnit / scale;
                        jQuery.style(elem, prop, initialInUnit + unit); // Update scale, tolerating zero or NaN from tween.cur()
                        // Break the loop if scale is unchanged or perfect, or if we've just had enough.
                    } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
                }
                if (valueParts) {
                    initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified
                    adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                    if (tween) {
                        tween.unit = unit;
                        tween.start = initialInUnit;
                        tween.end = adjusted;
                    }
                }
                return adjusted;
            }
            var rcheckableType = /^(?:checkbox|radio)$/i;
            var rtagName = /<([\w:-]+)/;
            var rscriptType = /^$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
            var wrapMap = { // Support: IE9
                option: [1, "<select multiple='multiple'>", "</select>"], // XHTML parsers do not magically insert elements in the
                // same way that tag soup parsers do. So we cannot shorten
                // this by omitting <tbody> or other required elements.
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            }; // Support: IE9
            wrapMap.optgroup = wrapMap.option;
            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
            wrapMap.th = wrapMap.td;

            function getAll(context, tag) { // Support: IE9-11+
                // Use typeof to avoid zero-argument method invocation on host objects (#15151)
                var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
                return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
            } // Mark scripts as having already been evaluated
            function setGlobalEval(elems, refElements) {
                var i = 0,
                    l = elems.length;
                for (; i < l; i++) {
                    dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
            }
            var rhtml = /<|&#?\w+;/;

            function buildFragment(elems, context, scripts, selection, ignored) {
                var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
                    nodes = [],
                    i = 0,
                    l = elems.length;
                for (; i < l; i++) {
                    elem = elems[i];
                    if (elem || elem === 0) { // Add nodes directly
                        if (jQuery.type(elem) === "object") { // Support: Android<4.1, PhantomJS<2
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
                        } else if (!rhtml.test(elem)) {
                            nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
                        } else {
                            tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
                            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content
                            j = wrap[0];
                            while (j--) {
                                tmp = tmp.lastChild;
                            } // Support: Android<4.1, PhantomJS<2
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container
                            tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
                            tmp.textContent = "";
                        }
                    }
                } // Remove wrapper from fragment
                fragment.textContent = "";
                i = 0;
                while (elem = nodes[i++]) { // Skip elements already in the context collection (trac-4087)
                    if (selection && jQuery.inArray(elem, selection) > -1) {
                        if (ignored) {
                            ignored.push(elem);
                        }
                        continue;
                    }
                    contains = jQuery.contains(elem.ownerDocument, elem); // Append to fragment
                    tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history
                    if (contains) {
                        setGlobalEval(tmp);
                    } // Capture executables
                    if (scripts) {
                        j = 0;
                        while (elem = tmp[j++]) {
                            if (rscriptType.test(elem.type || "")) {
                                scripts.push(elem);
                            }
                        }
                    }
                }
                return fragment;
            }(function () {
                var fragment = document.createDocumentFragment(),
                    div = fragment.appendChild(document.createElement("div")),
                    input = document.createElement("input"); // Support: Android 4.0-4.3, Safari<=5.1
                // Check state lost if the name is set (#11217)
                // Support: Windows Web Apps (WWA)
                // `name` and `type` must use .setAttribute for WWA (#14901)
                input.setAttribute("type", "radio");
                input.setAttribute("checked", "checked");
                input.setAttribute("name", "t");
                div.appendChild(input); // Support: Safari<=5.1, Android<4.2
                // Older WebKit doesn't clone checked state correctly in fragments
                support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
                // Make sure textarea (and checkbox) defaultValue is properly cloned
                div.innerHTML = "<textarea>x</textarea>";
                support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
            })();
            var rkeyEvent = /^key/,
                rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

            function returnTrue() {
                return true;
            }

            function returnFalse() {
                return false;
            } // Support: IE9
            // See #13393 for more info
            function safeActiveElement() {
                try {
                    return document.activeElement;
                } catch (err) {}
            }

            function _on(elem, types, selector, data, fn, one) {
                var origFn, type; // Types can be a map of types/handlers
                if (typeof types === "object") { // ( types-Object, selector, data )
                    if (typeof selector !== "string") { // ( types-Object, data )
                        data = data || selector;
                        selector = undefined;
                    }
                    for (type in types) {
                        _on(elem, type, selector, data, types[type], one);
                    }
                    return elem;
                }
                if (data == null && fn == null) { // ( types, fn )
                    fn = selector;
                    data = selector = undefined;
                } else if (fn == null) {
                    if (typeof selector === "string") { // ( types, selector, fn )
                        fn = data;
                        data = undefined;
                    } else { // ( types, data, fn )
                        fn = data;
                        data = selector;
                        selector = undefined;
                    }
                }
                if (fn === false) {
                    fn = returnFalse;
                } else if (!fn) {
                    return elem;
                }
                if (one === 1) {
                    origFn = fn;
                    fn = function (event) { // Can use an empty set, since event contains the info
                        jQuery().off(event);
                        return origFn.apply(this, arguments);
                    }; // Use same guid so caller can remove using origFn
                    fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                }
                return elem.each(function () {
                    jQuery.event.add(this, types, fn, data, selector);
                });
            }
            /*
             * Helper functions for managing events -- not part of the public interface.
             * Props to Dean Edwards' addEvent library for many of the ideas.
             */
            jQuery.event = {
                global: {},
                add: function add(elem, types, handler, data, selector) {
                    var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
                    if (!elemData) {
                        return;
                    } // Caller can pass in an object of custom data in lieu of the handler
                    if (handler.handler) {
                        handleObjIn = handler;
                        handler = handleObjIn.handler;
                        selector = handleObjIn.selector;
                    } // Make sure that the handler has a unique ID, used to find/remove it later
                    if (!handler.guid) {
                        handler.guid = jQuery.guid++;
                    } // Init the element's event structure and main handler, if this is the first
                    if (!(events = elemData.events)) {
                        events = elemData.events = {};
                    }
                    if (!(eventHandle = elemData.handle)) {
                        eventHandle = elemData.handle = function (e) { // Discard the second event of a jQuery.event.trigger() and
                            // when an event is called after a page has unloaded
                            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                        };
                    } // Handle multiple events separated by a space
                    types = (types || "").match(rnotwhite) || [""];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
                        if (!type) {
                            continue;
                        } // If event changes its type, use the special event handlers for the changed type
                        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type
                        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type
                        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers
                        handleObj = jQuery.extend({
                            type: type,
                            origType: origType,
                            data: data,
                            handler: handler,
                            guid: handler.guid,
                            selector: selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                            namespace: namespaces.join(".")
                        }, handleObjIn); // Init the event handler queue if we're the first
                        if (!(handlers = events[type])) {
                            handlers = events[type] = [];
                            handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false
                            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                                if (elem.addEventListener) {
                                    elem.addEventListener(type, eventHandle);
                                }
                            }
                        }
                        if (special.add) {
                            special.add.call(elem, handleObj);
                            if (!handleObj.handler.guid) {
                                handleObj.handler.guid = handler.guid;
                            }
                        } // Add to the element's handler list, delegates in front
                        if (selector) {
                            handlers.splice(handlers.delegateCount++, 0, handleObj);
                        } else {
                            handlers.push(handleObj);
                        } // Keep track of which events have ever been used, for event optimization
                        jQuery.event.global[type] = true;
                    }
                }, // Detach an event or set of events from an element
                remove: function remove(elem, types, handler, selector, mappedTypes) {
                    var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                    if (!elemData || !(events = elemData.events)) {
                        return;
                    } // Once for each type.namespace in types; type may be omitted
                    types = (types || "").match(rnotwhite) || [""];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
                        if (!type) {
                            for (type in events) {
                                jQuery.event.remove(elem, type + types[t], handler, selector, true);
                            }
                            continue;
                        }
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        handlers = events[type] || [];
                        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events
                        origCount = j = handlers.length;
                        while (j--) {
                            handleObj = handlers[j];
                            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                handlers.splice(j, 1);
                                if (handleObj.selector) {
                                    handlers.delegateCount--;
                                }
                                if (special.remove) {
                                    special.remove.call(elem, handleObj);
                                }
                            }
                        } // Remove generic event handler if we removed something and no more handlers exist
                        // (avoids potential for endless recursion during removal of special event handlers)
                        if (origCount && !handlers.length) {
                            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                                jQuery.removeEvent(elem, type, elemData.handle);
                            }
                            delete events[type];
                        }
                    } // Remove data and the expando if it's no longer used
                    if (jQuery.isEmptyObject(events)) {
                        dataPriv.remove(elem, "handle events");
                    }
                },
                dispatch: function dispatch(event) { // Make a writable jQuery.Event from the native event object
                    event = jQuery.event.fix(event);
                    var i, j, ret, matched, handleObj, handlerQueue = [],
                        args = _slice.call(arguments),
                        handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                        special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
                    args[0] = event;
                    event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired
                    if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                        return;
                    } // Determine handlers
                    handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us
                    i = 0;
                    while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                        event.currentTarget = matched.elem;
                        j = 0;
                        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                            // a subset or equal to those in the bound event (both can have no namespace).
                            if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (ret !== undefined) {
                                    if ((event.result = ret) === false) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                }
                            }
                        }
                    } // Call the postDispatch hook for the mapped type
                    if (special.postDispatch) {
                        special.postDispatch.call(this, event);
                    }
                    return event.result;
                },
                handlers: function handlers(event, _handlers) {
                    var i, matches, sel, handleObj, handlerQueue = [],
                        delegateCount = _handlers.delegateCount,
                        cur = event.target; // Support (at least): Chrome, IE9
                    // Find delegate handlers
                    // Black-hole SVG <use> instance trees (#13180)
                    //
                    // Support: Firefox<=42+
                    // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
                    if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                        for (; cur !== this; cur = cur.parentNode || this) { // Don't check non-elements (#13208)
                            // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                            if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                                matches = [];
                                for (i = 0; i < delegateCount; i++) {
                                    handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)
                                    sel = handleObj.selector + " ";
                                    if (matches[sel] === undefined) {
                                        matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                                    }
                                    if (matches[sel]) {
                                        matches.push(handleObj);
                                    }
                                }
                                if (matches.length) {
                                    handlerQueue.push({
                                        elem: cur,
                                        handlers: matches
                                    });
                                }
                            }
                        }
                    } // Add the remaining (directly-bound) handlers
                    if (delegateCount < _handlers.length) {
                        handlerQueue.push({
                            elem: this,
                            handlers: _handlers.slice(delegateCount)
                        });
                    }
                    return handlerQueue;
                }, // Includes some event props shared by KeyEvent and MouseEvent
                props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function filter(event, original) { // Add which for key events
                        if (event.which == null) {
                            event.which = original.charCode != null ? original.charCode : original.keyCode;
                        }
                        return event;
                    }
                },
                mouseHooks: {
                    props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
                    filter: function filter(event, original) {
                        var eventDoc, doc, body, button = original.button; // Calculate pageX/Y if missing and clientX/Y available
                        if (event.pageX == null && original.clientX != null) {
                            eventDoc = event.target.ownerDocument || document;
                            doc = eventDoc.documentElement;
                            body = eventDoc.body;
                            event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                            event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                        } // Add which for click: 1 === left; 2 === middle; 3 === right
                        // Note: button is not normalized, so don't use it
                        if (!event.which && button !== undefined) {
                            event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                        }
                        return event;
                    }
                },
                fix: function fix(event) {
                    if (event[jQuery.expando]) {
                        return event;
                    } // Create a writable copy of the event object and normalize some properties
                    var i, prop, copy, type = event.type,
                        originalEvent = event,
                        fixHook = this.fixHooks[type];
                    if (!fixHook) {
                        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
                    }
                    copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                    event = new jQuery.Event(originalEvent);
                    i = copy.length;
                    while (i--) {
                        prop = copy[i];
                        event[prop] = originalEvent[prop];
                    } // Support: Cordova 2.5 (WebKit) (#13255)
                    // All events should have a target; Cordova deviceready doesn't
                    if (!event.target) {
                        event.target = document;
                    } // Support: Safari 6.0+, Chrome<28
                    // Target should not be a text node (#504, #13143)
                    if (event.target.nodeType === 3) {
                        event.target = event.target.parentNode;
                    }
                    return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
                },
                special: {
                    load: { // Prevent triggered image.load events from bubbling to window.load
                        noBubble: true
                    },
                    focus: { // Fire native event if possible so blur/focus sequence is correct
                        trigger: function trigger() {
                            if (this !== safeActiveElement() && this.focus) {
                                this.focus();
                                return false;
                            }
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function trigger() {
                            if (this === safeActiveElement() && this.blur) {
                                this.blur();
                                return false;
                            }
                        },
                        delegateType: "focusout"
                    },
                    click: { // For checkbox, fire native event so checked state will be right
                        trigger: function trigger() {
                            if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                                this.click();
                                return false;
                            }
                        }, // For cross-browser consistency, don't fire native .click() on links
                        _default: function _default(event) {
                            return jQuery.nodeName(event.target, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function postDispatch(event) { // Support: Firefox 20+
                            // Firefox doesn't alert if the returnValue field is not set.
                            if (event.result !== undefined && event.originalEvent) {
                                event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                }
            };
            jQuery.removeEvent = function (elem, type, handle) { // This "if" is needed for plain objects
                if (elem.removeEventListener) {
                    elem.removeEventListener(type, handle);
                }
            };
            jQuery.Event = function (src, props) { // Allow instantiation without the 'new' keyword
                if (!(this instanceof jQuery.Event)) {
                    return new jQuery.Event(src, props);
                } // Event object
                if (src && src.type) {
                    this.originalEvent = src;
                    this.type = src.type; // Events bubbling up the document may have been marked as prevented
                    // by a handler lower down the tree; reflect the correct value.
                    this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android<4.0
                        src.returnValue === false ? returnTrue : returnFalse; // Event type
                } else {
                    this.type = src;
                } // Put explicitly provided properties onto the event object
                if (props) {
                    jQuery.extend(this, props);
                } // Create a timestamp if incoming event doesn't have one
                this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed
                this[jQuery.expando] = true;
            }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
            // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
            jQuery.Event.prototype = {
                constructor: jQuery.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: false,
                preventDefault: function preventDefault() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue;
                    if (e && !this.isSimulated) {
                        e.preventDefault();
                    }
                },
                stopPropagation: function stopPropagation() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue;
                    if (e && !this.isSimulated) {
                        e.stopPropagation();
                    }
                },
                stopImmediatePropagation: function stopImmediatePropagation() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = returnTrue;
                    if (e && !this.isSimulated) {
                        e.stopImmediatePropagation();
                    }
                    this.stopPropagation();
                }
            }; // Create mouseenter/leave events using mouseover/out and event-time checks
            // so that event delegation works in jQuery.
            // Do the same for pointerenter/pointerleave and pointerover/pointerout
            //
            // Support: Safari 7 only
            // Safari sends mouseenter too often; see:
            // https://code.google.com/p/chromium/issues/detail?id=470258
            // for the description of the bug (it existed in older Chrome versions as well).
            jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,
                    handle: function handle(event) {
                        var ret, target = this,
                            related = event.relatedTarget,
                            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
                        // NB: No relatedTarget if the mouse left/entered the browser window
                        if (!related || related !== target && !jQuery.contains(target, related)) {
                            event.type = handleObj.origType;
                            ret = handleObj.handler.apply(this, arguments);
                            event.type = fix;
                        }
                        return ret;
                    }
                };
            });
            jQuery.fn.extend({
                on: function on(types, selector, data, fn) {
                    return _on(this, types, selector, data, fn);
                },
                one: function one(types, selector, data, fn) {
                    return _on(this, types, selector, data, fn, 1);
                },
                off: function off(types, selector, fn) {
                    var handleObj, type;
                    if (types && types.preventDefault && types.handleObj) { // ( event )  dispatched jQuery.Event
                        handleObj = types.handleObj;
                        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                        return this;
                    }
                    if (typeof types === "object") { // ( types-object [, selector] )
                        for (type in types) {
                            this.off(type, selector, types[type]);
                        }
                        return this;
                    }
                    if (selector === false || typeof selector === "function") { // ( types [, fn] )
                        fn = selector;
                        selector = undefined;
                    }
                    if (fn === false) {
                        fn = returnFalse;
                    }
                    return this.each(function () {
                        jQuery.event.remove(this, types, fn, selector);
                    });
                }
            });
            var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
                // In IE/Edge using regex groups here causes severe slowdowns.
                // See https://connect.microsoft.com/IE/feedback/details/1736512/
                rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rscriptTypeMasked = /^true\/(.*)/,
                rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Manipulating tables requires a tbody
            function manipulationTarget(elem, content) {
                return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
            } // Replace/restore the type attribute of script elements for safe DOM manipulation
            function disableScript(elem) {
                elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                return elem;
            }

            function restoreScript(elem) {
                var match = rscriptTypeMasked.exec(elem.type);
                if (match) {
                    elem.type = match[1];
                } else {
                    elem.removeAttribute("type");
                }
                return elem;
            }

            function cloneCopyEvent(src, dest) {
                var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
                if (dest.nodeType !== 1) {
                    return;
                } // 1. Copy private data: events, handlers, etc.
                if (dataPriv.hasData(src)) {
                    pdataOld = dataPriv.access(src);
                    pdataCur = dataPriv.set(dest, pdataOld);
                    events = pdataOld.events;
                    if (events) {
                        delete pdataCur.handle;
                        pdataCur.events = {};
                        for (type in events) {
                            for (i = 0, l = events[type].length; i < l; i++) {
                                jQuery.event.add(dest, type, events[type][i]);
                            }
                        }
                    }
                } // 2. Copy user data
                if (dataUser.hasData(src)) {
                    udataOld = dataUser.access(src);
                    udataCur = jQuery.extend({}, udataOld);
                    dataUser.set(dest, udataCur);
                }
            } // Fix IE bugs, see support tests
            function fixInput(src, dest) {
                var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
                if (nodeName === "input" && rcheckableType.test(src.type)) {
                    dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
                } else if (nodeName === "input" || nodeName === "textarea") {
                    dest.defaultValue = src.defaultValue;
                }
            }

            function domManip(collection, args, callback, ignored) { // Flatten any nested arrays
                args = concat.apply([], args);
                var fragment, first, scripts, hasScripts, node, doc, i = 0,
                    l = collection.length,
                    iNoClone = l - 1,
                    value = args[0],
                    isFunction = jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
                if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                    return collection.each(function (index) {
                        var self = collection.eq(index);
                        if (isFunction) {
                            args[0] = value.call(this, index, self.html());
                        }
                        domManip(self, args, callback, ignored);
                    });
                }
                if (l) {
                    fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                    first = fragment.firstChild;
                    if (fragment.childNodes.length === 1) {
                        fragment = first;
                    } // Require either new content or an interest in ignored elements to invoke the callback
                    if (first || ignored) {
                        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                        hasScripts = scripts.length; // Use the original fragment for the last item
                        // instead of the first because it can end up
                        // being emptied incorrectly in certain situations (#8070).
                        for (; i < l; i++) {
                            node = fragment;
                            if (i !== iNoClone) {
                                node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration
                                if (hasScripts) { // Support: Android<4.1, PhantomJS<2
                                    // push.apply(_, arraylike) throws on ancient WebKit
                                    jQuery.merge(scripts, getAll(node, "script"));
                                }
                            }
                            callback.call(collection[i], node, i);
                        }
                        if (hasScripts) {
                            doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts
                            jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion
                            for (i = 0; i < hasScripts; i++) {
                                node = scripts[i];
                                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                    if (node.src) { // Optional AJAX dependency, but won't run scripts if not present
                                        if (jQuery._evalUrl) {
                                            jQuery._evalUrl(node.src);
                                        }
                                    } else {
                                        jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                                    }
                                }
                            }
                        }
                    }
                }
                return collection;
            }

            function _remove(elem, selector, keepData) {
                var node, nodes = selector ? jQuery.filter(selector, elem) : elem,
                    i = 0;
                for (;
                    (node = nodes[i]) != null; i++) {
                    if (!keepData && node.nodeType === 1) {
                        jQuery.cleanData(getAll(node));
                    }
                    if (node.parentNode) {
                        if (keepData && jQuery.contains(node.ownerDocument, node)) {
                            setGlobalEval(getAll(node, "script"));
                        }
                        node.parentNode.removeChild(node);
                    }
                }
                return elem;
            }
            jQuery.extend({
                htmlPrefilter: function htmlPrefilter(html) {
                    return html.replace(rxhtmlTag, "<$1></$2>");
                },
                clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
                    var i, l, srcElements, destElements, clone = elem.cloneNode(true),
                        inPage = jQuery.contains(elem.ownerDocument, elem); // Fix IE cloning issues
                    if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) { // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                        destElements = getAll(clone);
                        srcElements = getAll(elem);
                        for (i = 0, l = srcElements.length; i < l; i++) {
                            fixInput(srcElements[i], destElements[i]);
                        }
                    } // Copy the events from the original to the clone
                    if (dataAndEvents) {
                        if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0, l = srcElements.length; i < l; i++) {
                                cloneCopyEvent(srcElements[i], destElements[i]);
                            }
                        } else {
                            cloneCopyEvent(elem, clone);
                        }
                    } // Preserve script evaluation history
                    destElements = getAll(clone, "script");
                    if (destElements.length > 0) {
                        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                    } // Return the cloned set
                    return clone;
                },
                cleanData: function cleanData(elems) {
                    var data, elem, type, special = jQuery.event.special,
                        i = 0;
                    for (;
                        (elem = elems[i]) !== undefined; i++) {
                        if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) {
                                    for (type in data.events) {
                                        if (special[type]) {
                                            jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                                        } else {
                                            jQuery.removeEvent(elem, type, data.handle);
                                        }
                                    }
                                } // Support: Chrome <= 35-45+
                                // Assign undefined instead of using delete, see Data#remove
                                elem[dataPriv.expando] = undefined;
                            }
                            if (elem[dataUser.expando]) { // Support: Chrome <= 35-45+
                                // Assign undefined instead of using delete, see Data#remove
                                elem[dataUser.expando] = undefined;
                            }
                        }
                    }
                }
            });
            jQuery.fn.extend({ // Keep domManip exposed until 3.0 (gh-2225)
                domManip: domManip,
                detach: function detach(selector) {
                    return _remove(this, selector, true);
                },
                remove: function remove(selector) {
                    return _remove(this, selector);
                },
                text: function text(value) {
                    return access(this, function (value) {
                        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                this.textContent = value;
                            }
                        });
                    }, null, value, arguments.length);
                },
                append: function append() {
                    return domManip(this, arguments, function (elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.appendChild(elem);
                        }
                    });
                },
                prepend: function prepend() {
                    return domManip(this, arguments, function (elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.insertBefore(elem, target.firstChild);
                        }
                    });
                },
                before: function before() {
                    return domManip(this, arguments, function (elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this);
                        }
                    });
                },
                after: function after() {
                    return domManip(this, arguments, function (elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this.nextSibling);
                        }
                    });
                },
                empty: function empty() {
                    var elem, i = 0;
                    for (;
                        (elem = this[i]) != null; i++) {
                        if (elem.nodeType === 1) { // Prevent memory leaks
                            jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes
                            elem.textContent = "";
                        }
                    }
                    return this;
                },
                clone: function clone(dataAndEvents, deepDataAndEvents) {
                    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                    return this.map(function () {
                        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                    });
                },
                html: function html(value) {
                    return access(this, function (value) {
                        var elem = this[0] || {},
                            i = 0,
                            l = this.length;
                        if (value === undefined && elem.nodeType === 1) {
                            return elem.innerHTML;
                        } // See if we can take a shortcut and just use innerHTML
                        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                            value = jQuery.htmlPrefilter(value);
                            try {
                                for (; i < l; i++) {
                                    elem = this[i] || {}; // Remove element nodes and prevent memory leaks
                                    if (elem.nodeType === 1) {
                                        jQuery.cleanData(getAll(elem, false));
                                        elem.innerHTML = value;
                                    }
                                }
                                elem = 0; // If using innerHTML throws an exception, use the fallback method
                            } catch (e) {}
                        }
                        if (elem) {
                            this.empty().append(value);
                        }
                    }, null, value, arguments.length);
                },
                replaceWith: function replaceWith() {
                    var ignored = []; // Make the changes, replacing each non-ignored context element with the new content
                    return domManip(this, arguments, function (elem) {
                        var parent = this.parentNode;
                        if (jQuery.inArray(this, ignored) < 0) {
                            jQuery.cleanData(getAll(this));
                            if (parent) {
                                parent.replaceChild(elem, this);
                            }
                        } // Force callback invocation
                    }, ignored);
                }
            });
            jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (name, original) {
                jQuery.fn[name] = function (selector) {
                    var elems, ret = [],
                        insert = jQuery(selector),
                        last = insert.length - 1,
                        i = 0;
                    for (; i <= last; i++) {
                        elems = i === last ? this : this.clone(true);
                        jQuery(insert[i])[original](elems); // Support: QtWebKit
                        // .get() because push.apply(_, arraylike) throws
                        push.apply(ret, elems.get());
                    }
                    return this.pushStack(ret);
                };
            });
            var iframe, elemdisplay = { // Support: Firefox
                // We have to pre-define these values for FF (#10227)
                HTML: "block",
                BODY: "block"
            };
            /**
             * Retrieve the actual display of a element
             * @param {String} name nodeName of the element
             * @param {Object} doc Document object
             */ // Called only from within defaultDisplay
            function actualDisplay(name, doc) {
                var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                    display = jQuery.css(elem[0], "display"); // We don't have any data stored on the element,
                // so use "detach" method as fast way to get rid of the element
                elem.detach();
                return display;
            }
            /**
             * Try to determine the default display value of an element
             * @param {String} nodeName
             */
            function defaultDisplay(nodeName) {
                var doc = document,
                    display = elemdisplay[nodeName];
                if (!display) {
                    display = actualDisplay(nodeName, doc); // If the simple way fails, read from inside an iframe
                    if (display === "none" || !display) { // Use the already-created iframe if possible
                        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                        doc = iframe[0].contentDocument; // Support: IE
                        doc.write();
                        doc.close();
                        display = actualDisplay(nodeName, doc);
                        iframe.detach();
                    } // Store the correct default display
                    elemdisplay[nodeName] = display;
                }
                return display;
            }
            var rmargin = /^margin/;
            var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
            var getStyles = function getStyles(elem) { // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
                // IE throws on elements created in popups
                // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                var view = elem.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = window;
                }
                return view.getComputedStyle(elem);
            };
            var swap = function swap(elem, options, callback, args) {
                var ret, name, old = {}; // Remember the old values, and insert the new ones
                for (name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name];
                }
                ret = callback.apply(elem, args || []); // Revert the old values
                for (name in options) {
                    elem.style[name] = old[name];
                }
                return ret;
            };
            var documentElement = document.documentElement;
            (function () {
                var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
                    div = document.createElement("div"); // Finish early in limited (non-browser) environments
                if (!div.style) {
                    return;
                } // Support: IE9-11+
                // Style of cloned element affects source element cloned (#8908)
                div.style.backgroundClip = "content-box";
                div.cloneNode(true).style.backgroundClip = "";
                support.clearCloneStyle = div.style.backgroundClip === "content-box";
                container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
                container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
                // so they're executed at the same time to save the second computation.
                function computeStyleTests() {
                    div.style.cssText = // Support: Firefox<29, Android 2.3
                        // Vendor-prefix box-sizing
                        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                    div.innerHTML = "";
                    documentElement.appendChild(container);
                    var divStyle = window.getComputedStyle(div);
                    pixelPositionVal = divStyle.top !== "1%";
                    reliableMarginLeftVal = divStyle.marginLeft === "2px";
                    boxSizingReliableVal = divStyle.width === "4px"; // Support: Android 4.0 - 4.3 only
                    // Some styles come back with percentage values, even though they shouldn't
                    div.style.marginRight = "50%";
                    pixelMarginRightVal = divStyle.marginRight === "4px";
                    documentElement.removeChild(container);
                }
                jQuery.extend(support, {
                    pixelPosition: function pixelPosition() { // This test is executed only once but we still do memoizing
                        // since we can use the boxSizingReliable pre-computing.
                        // No need to check if the test was already performed, though.
                        computeStyleTests();
                        return pixelPositionVal;
                    },
                    boxSizingReliable: function boxSizingReliable() {
                        if (boxSizingReliableVal == null) {
                            computeStyleTests();
                        }
                        return boxSizingReliableVal;
                    },
                    pixelMarginRight: function pixelMarginRight() { // Support: Android 4.0-4.3
                        // We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
                        // since that compresses better and they're computed together anyway.
                        if (boxSizingReliableVal == null) {
                            computeStyleTests();
                        }
                        return pixelMarginRightVal;
                    },
                    reliableMarginLeft: function reliableMarginLeft() { // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
                        if (boxSizingReliableVal == null) {
                            computeStyleTests();
                        }
                        return reliableMarginLeftVal;
                    },
                    reliableMarginRight: function reliableMarginRight() { // Support: Android 2.3
                        // Check if div with explicit width and no margin-right incorrectly
                        // gets computed margin-right based on width of container. (#3333)
                        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                        // This support function is only executed once so no memoizing is needed.
                        var ret, marginDiv = div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
                        marginDiv.style.cssText = div.style.cssText = // Support: Android 2.3
                            // Vendor-prefix box-sizing
                            "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                        marginDiv.style.marginRight = marginDiv.style.width = "0";
                        div.style.width = "1px";
                        documentElement.appendChild(container);
                        ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                        documentElement.removeChild(container);
                        div.removeChild(marginDiv);
                        return ret;
                    }
                });
            })();

            function curCSS(elem, name, computed) {
                var width, minWidth, maxWidth, ret, style = elem.style;
                computed = computed || getStyles(elem);
                ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined; // Support: Opera 12.1x only
                // Fall back to style even without computed
                // computed is undefined for elems on document fragments
                if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                } // Support: IE9
                // getPropertyValue is only needed for .css('filter') (#12537)
                if (computed) { // A tribute to the "awesome hack by Dean Edwards"
                    // Android Browser returns percentage for some values,
                    // but width seems to be reliably pixels.
                    // This is against the CSSOM draft spec:
                    // http://dev.w3.org/csswg/cssom/#resolved-values
                    if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) { // Remember the original values
                        width = style.width;
                        minWidth = style.minWidth;
                        maxWidth = style.maxWidth; // Put in the new values to get a computed value out
                        style.minWidth = style.maxWidth = style.width = ret;
                        ret = computed.width; // Revert the changed values
                        style.width = width;
                        style.minWidth = minWidth;
                        style.maxWidth = maxWidth;
                    }
                }
                return ret !== undefined ? // Support: IE9-11+
                    // IE returns zIndex value as an integer.
                    ret + "" : ret;
            }

            function addGetHookIf(conditionFn, hookFn) { // Define the hook, we'll check on the first run if it's really needed.
                return {
                    get: function get() {
                        if (conditionFn()) { // Hook not needed (or it's not possible to use it due
                            // to missing dependency), remove it.
                            delete this.get;
                            return;
                        } // Hook needed; redefine it so that the support test is not executed again.
                        return (this.get = hookFn).apply(this, arguments);
                    }
                };
            }
            var // Swappable if display is none or starts with table
                // except "table", "table-cell", or "table-caption"
                // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
                rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                cssPrefixes = ["Webkit", "O", "Moz", "ms"],
                emptyStyle = document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
            function vendorPropName(name) { // Shortcut for names that are not vendor prefixed
                if (name in emptyStyle) {
                    return name;
                } // Check for vendor prefixed names
                var capName = name[0].toUpperCase() + name.slice(1),
                    i = cssPrefixes.length;
                while (i--) {
                    name = cssPrefixes[i] + capName;
                    if (name in emptyStyle) {
                        return name;
                    }
                }
            }

            function setPositiveNumber(elem, value, subtract) { // Any relative (+/-) values have already been
                // normalized at this point
                var matches = rcssNum.exec(value);
                return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
                    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
            }

            function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
                var i = extra === (isBorderBox ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
                    4 : // Otherwise initialize for horizontal or vertical properties
                    name === "width" ? 1 : 0,
                    val = 0;
                for (; i < 4; i += 2) { // Both box models exclude margin, so add it if we want it
                    if (extra === "margin") {
                        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
                    }
                    if (isBorderBox) { // border-box includes padding, so remove it if we want content
                        if (extra === "content") {
                            val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                        } // At this point, extra isn't border nor margin, so remove border
                        if (extra !== "margin") {
                            val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    } else { // At this point, extra isn't content, so add padding
                        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // At this point, extra isn't content nor padding, so add border
                        if (extra !== "padding") {
                            val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                }
                return val;
            }

            function getWidthOrHeight(elem, name, extra) { // Start with offset property, which is equivalent to the border-box value
                var valueIsBorderBox = true,
                    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                    styles = getStyles(elem),
                    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
                // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
                // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
                if (val <= 0 || val == null) { // Fall back to computed then uncomputed css if necessary
                    val = curCSS(elem, name, styles);
                    if (val < 0 || val == null) {
                        val = elem.style[name];
                    } // Computed unit is not pixels. Stop here and return.
                    if (rnumnonpx.test(val)) {
                        return val;
                    } // Check for style in case a browser which returns unreliable values
                    // for getComputedStyle silently falls back to the reliable elem.style
                    valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]); // Normalize "", auto, and prepare for extra
                    val = parseFloat(val) || 0;
                } // Use the active box-sizing model to add/subtract irrelevant styles
                return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
            }

            function showHide(elements, show) {
                var display, elem, hidden, values = [],
                    index = 0,
                    length = elements.length;
                for (; index < length; index++) {
                    elem = elements[index];
                    if (!elem.style) {
                        continue;
                    }
                    values[index] = dataPriv.get(elem, "olddisplay");
                    display = elem.style.display;
                    if (show) { // Reset the inline display of this element to learn if it is
                        // being hidden by cascaded rules or not
                        if (!values[index] && display === "none") {
                            elem.style.display = "";
                        } // Set elements which have been overridden with display: none
                        // in a stylesheet to whatever the default browser style is
                        // for such an element
                        if (elem.style.display === "" && isHidden(elem)) {
                            values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                        }
                    } else {
                        hidden = isHidden(elem);
                        if (display !== "none" || !hidden) {
                            dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                        }
                    }
                } // Set the display of most of the elements in a second loop
                // to avoid the constant reflow
                for (index = 0; index < length; index++) {
                    elem = elements[index];
                    if (!elem.style) {
                        continue;
                    }
                    if (!show || elem.style.display === "none" || elem.style.display === "") {
                        elem.style.display = show ? values[index] || "" : "none";
                    }
                }
                return elements;
            }
            jQuery.extend({ // Add in style property hooks for overriding the default
                // behavior of getting and setting a style property
                cssHooks: {
                    opacity: {
                        get: function get(elem, computed) {
                            if (computed) { // We should always get a number back from opacity
                                var ret = curCSS(elem, "opacity");
                                return ret === "" ? "1" : ret;
                            }
                        }
                    }
                }, // Don't automatically add "px" to these possibly-unitless properties
                cssNumber: {
                    "animationIterationCount": true,
                    "columnCount": true,
                    "fillOpacity": true,
                    "flexGrow": true,
                    "flexShrink": true,
                    "fontWeight": true,
                    "lineHeight": true,
                    "opacity": true,
                    "order": true,
                    "orphans": true,
                    "widows": true,
                    "zIndex": true,
                    "zoom": true
                }, // Add in properties whose names you wish to fix before
                // setting or getting the value
                cssProps: {
                    "float": "cssFloat"
                }, // Get and set the style property on a DOM Node
                style: function style(elem, name, value, extra) { // Don't set styles on text and comment nodes
                    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                        return;
                    } // Make sure that we're working with the right name
                    var ret, type, hooks, origName = jQuery.camelCase(name),
                        style = elem.style;
                    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName); // Gets hook for the prefixed version, then unprefixed version
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value
                    if (value !== undefined) {
                        type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)
                        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                            value = adjustCSS(elem, name, ret); // Fixes bug #9237
                            type = "number";
                        } // Make sure that null and NaN values aren't set (#7116)
                        if (value == null || value !== value) {
                            return;
                        } // If a number was passed in, add the unit (except for certain CSS properties)
                        if (type === "number") {
                            value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                        } // Support: IE9-11+
                        // background-* props affect original clone's values
                        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                            style[name] = "inherit";
                        } // If a hook was provided, use that value, otherwise just set the specified value
                        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                            style[name] = value;
                        }
                    } else { // If a hook was provided get the non-computed value from there
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                            return ret;
                        } // Otherwise just get the value from the style object
                        return style[name];
                    }
                },
                css: function css(elem, name, extra, styles) {
                    var val, num, hooks, origName = jQuery.camelCase(name); // Make sure that we're working with the right name
                    name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName); // Try prefixed name followed by the unprefixed name
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
                    if (hooks && "get" in hooks) {
                        val = hooks.get(elem, true, extra);
                    } // Otherwise, if a way to get the computed value exists, use that
                    if (val === undefined) {
                        val = curCSS(elem, name, styles);
                    } // Convert "normal" to computed value
                    if (val === "normal" && name in cssNormalTransform) {
                        val = cssNormalTransform[name];
                    } // Make numeric if forced or a qualifier was provided and val looks numeric
                    if (extra === "" || extra) {
                        num = parseFloat(val);
                        return extra === true || isFinite(num) ? num || 0 : val;
                    }
                    return val;
                }
            });
            jQuery.each(["height", "width"], function (i, name) {
                jQuery.cssHooks[name] = {
                    get: function get(elem, computed, extra) {
                        if (computed) { // Certain elements can have dimension info if we invisibly show them
                            // but it must have a current display style that would benefit
                            return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function () {
                                return getWidthOrHeight(elem, name, extra);
                            }) : getWidthOrHeight(elem, name, extra);
                        }
                    },
                    set: function set(elem, value, extra) {
                        var matches, styles = extra && getStyles(elem),
                            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles); // Convert to pixels if value adjustment is needed
                        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                            elem.style[name] = value;
                            value = jQuery.css(elem, name);
                        }
                        return setPositiveNumber(elem, value, subtract);
                    }
                };
            });
            jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
                if (computed) {
                    return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, function () {
                        return elem.getBoundingClientRect().left;
                    })) + "px";
                }
            }); // Support: Android 2.3
            jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
                if (computed) {
                    return swap(elem, {
                        "display": "inline-block"
                    }, curCSS, [elem, "marginRight"]);
                }
            }); // These hooks are used by animate to expand properties
            jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function expand(value) {
                        var i = 0,
                            expanded = {}, // Assumes a single number if not a string
                            parts = typeof value === "string" ? value.split(" ") : [value];
                        for (; i < 4; i++) {
                            expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                        }
                        return expanded;
                    }
                };
                if (!rmargin.test(prefix)) {
                    jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }
            });
            jQuery.fn.extend({
                css: function css(name, value) {
                    return access(this, function (elem, name, value) {
                        var styles, len, map = {},
                            i = 0;
                        if (jQuery.isArray(name)) {
                            styles = getStyles(elem);
                            len = name.length;
                            for (; i < len; i++) {
                                map[name[i]] = jQuery.css(elem, name[i], false, styles);
                            }
                            return map;
                        }
                        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                    }, name, value, arguments.length > 1);
                },
                show: function show() {
                    return showHide(this, true);
                },
                hide: function hide() {
                    return showHide(this);
                },
                toggle: function toggle(state) {
                    if (typeof state === "boolean") {
                        return state ? this.show() : this.hide();
                    }
                    return this.each(function () {
                        if (isHidden(this)) {
                            jQuery(this).show();
                        } else {
                            jQuery(this).hide();
                        }
                    });
                }
            });

            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing);
            }
            jQuery.Tween = Tween;
            Tween.prototype = {
                constructor: Tween,
                init: function init(elem, options, prop, end, easing, unit) {
                    this.elem = elem;
                    this.prop = prop;
                    this.easing = easing || jQuery.easing._default;
                    this.options = options;
                    this.start = this.now = this.cur();
                    this.end = end;
                    this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                },
                cur: function cur() {
                    var hooks = Tween.propHooks[this.prop];
                    return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                },
                run: function run(percent) {
                    var eased, hooks = Tween.propHooks[this.prop];
                    if (this.options.duration) {
                        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                    } else {
                        this.pos = eased = percent;
                    }
                    this.now = (this.end - this.start) * eased + this.start;
                    if (this.options.step) {
                        this.options.step.call(this.elem, this.now, this);
                    }
                    if (hooks && hooks.set) {
                        hooks.set(this);
                    } else {
                        Tween.propHooks._default.set(this);
                    }
                    return this;
                }
            };
            Tween.prototype.init.prototype = Tween.prototype;
            Tween.propHooks = {
                _default: {
                    get: function get(tween) {
                        var result; // Use a property on the element directly when it is not a DOM element,
                        // or when there is no matching style property that exists.
                        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                            return tween.elem[tween.prop];
                        } // Passing an empty string as a 3rd parameter to .css will automatically
                        // attempt a parseFloat and fallback to a string if the parse fails.
                        // Simple values such as "10px" are parsed to Float;
                        // complex values such as "rotate(1rad)" are returned as-is.
                        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.
                        return !result || result === "auto" ? 0 : result;
                    },
                    set: function set(tween) { // Use step hook for back compat.
                        // Use cssHook if its there.
                        // Use .style if available and use plain properties where available.
                        if (jQuery.fx.step[tween.prop]) {
                            jQuery.fx.step[tween.prop](tween);
                        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                        } else {
                            tween.elem[tween.prop] = tween.now;
                        }
                    }
                }
            }; // Support: IE9
            // Panic based approach to setting things on disconnected nodes
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function set(tween) {
                    if (tween.elem.nodeType && tween.elem.parentNode) {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            };
            jQuery.easing = {
                linear: function linear(p) {
                    return p;
                },
                swing: function swing(p) {
                    return 0.5 - Math.cos(p * Math.PI) / 2;
                },
                _default: "swing"
            };
            jQuery.fx = Tween.prototype.init; // Back Compat <1.8 extension point
            jQuery.fx.step = {};
            var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
                rrun = /queueHooks$/; // Animations created synchronously will run synchronously
            function createFxNow() {
                window.setTimeout(function () {
                    fxNow = undefined;
                });
                return fxNow = jQuery.now();
            } // Generate parameters to create a standard animation
            function genFx(type, includeWidth) {
                var which, i = 0,
                    attrs = {
                        height: type
                    }; // If we include width, step value is 1 to do all cssExpand values,
                // otherwise step value is 2 to skip over Left and Right
                includeWidth = includeWidth ? 1 : 0;
                for (; i < 4; i += 2 - includeWidth) {
                    which = cssExpand[i];
                    attrs["margin" + which] = attrs["padding" + which] = type;
                }
                if (includeWidth) {
                    attrs.opacity = attrs.width = type;
                }
                return attrs;
            }

            function createTween(value, prop, animation) {
                var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
                    index = 0,
                    length = collection.length;
                for (; index < length; index++) {
                    if (tween = collection[index].call(animation, prop, value)) { // We're done with this property
                        return tween;
                    }
                }
            }

            function defaultPrefilter(elem, props, opts) {
                /* jshint validthis: true */
                var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
                    orig = {},
                    style = elem.style,
                    hidden = elem.nodeType && isHidden(elem),
                    dataShow = dataPriv.get(elem, "fxshow"); // Handle queue: false promises
                if (!opts.queue) {
                    hooks = jQuery._queueHooks(elem, "fx");
                    if (hooks.unqueued == null) {
                        hooks.unqueued = 0;
                        oldfire = hooks.empty.fire;
                        hooks.empty.fire = function () {
                            if (!hooks.unqueued) {
                                oldfire();
                            }
                        };
                    }
                    hooks.unqueued++;
                    anim.always(function () { // Ensure the complete handler is called before this completes
                        anim.always(function () {
                            hooks.unqueued--;
                            if (!jQuery.queue(elem, "fx").length) {
                                hooks.empty.fire();
                            }
                        });
                    });
                } // Height/width overflow pass
                if (elem.nodeType === 1 && ("height" in props || "width" in props)) { // Make sure that nothing sneaks out
                    // Record all 3 overflow attributes because IE9-10 do not
                    // change the overflow attribute when overflowX and
                    // overflowY are set to the same value
                    opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Set display property to inline-block for height/width
                    // animations on inline elements that are having width/height animated
                    display = jQuery.css(elem, "display"); // Test default display if display is currently "none"
                    checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
                    if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                        style.display = "inline-block";
                    }
                }
                if (opts.overflow) {
                    style.overflow = "hidden";
                    anim.always(function () {
                        style.overflow = opts.overflow[0];
                        style.overflowX = opts.overflow[1];
                        style.overflowY = opts.overflow[2];
                    });
                } // show/hide pass
                for (prop in props) {
                    value = props[prop];
                    if (rfxtypes.exec(value)) {
                        delete props[prop];
                        toggle = toggle || value === "toggle";
                        if (value === (hidden ? "hide" : "show")) { // If there is dataShow left over from a stopped hide or show
                            // and we are going to proceed with show, we should pretend to be hidden
                            if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                                hidden = true;
                            } else {
                                continue;
                            }
                        }
                        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop); // Any non-fx value stops us from restoring the original display value
                    } else {
                        display = undefined;
                    }
                }
                if (!jQuery.isEmptyObject(orig)) {
                    if (dataShow) {
                        if ("hidden" in dataShow) {
                            hidden = dataShow.hidden;
                        }
                    } else {
                        dataShow = dataPriv.access(elem, "fxshow", {});
                    } // Store state if its toggle - enables .stop().toggle() to "reverse"
                    if (toggle) {
                        dataShow.hidden = !hidden;
                    }
                    if (hidden) {
                        jQuery(elem).show();
                    } else {
                        anim.done(function () {
                            jQuery(elem).hide();
                        });
                    }
                    anim.done(function () {
                        var prop;
                        dataPriv.remove(elem, "fxshow");
                        for (prop in orig) {
                            jQuery.style(elem, prop, orig[prop]);
                        }
                    });
                    for (prop in orig) {
                        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = tween.start;
                            if (hidden) {
                                tween.end = tween.start;
                                tween.start = prop === "width" || prop === "height" ? 1 : 0;
                            }
                        }
                    } // If this is a noop like .hide().hide(), restore an overwritten display value
                } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
                    style.display = display;
                }
            }

            function propFilter(props, specialEasing) {
                var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass
                for (index in props) {
                    name = jQuery.camelCase(index);
                    easing = specialEasing[name];
                    value = props[index];
                    if (jQuery.isArray(value)) {
                        easing = value[1];
                        value = props[index] = value[0];
                    }
                    if (index !== name) {
                        props[name] = value;
                        delete props[index];
                    }
                    hooks = jQuery.cssHooks[name];
                    if (hooks && "expand" in hooks) {
                        value = hooks.expand(value);
                        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
                        // Reusing 'index' because we have the correct "name"
                        for (index in value) {
                            if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        }
                    } else {
                        specialEasing[name] = easing;
                    }
                }
            }

            function Animation(elem, properties, options) {
                var result, stopped, index = 0,
                    length = Animation.prefilters.length,
                    deferred = jQuery.Deferred().always(function () { // Don't match elem in the :animated selector
                        delete tick.elem;
                    }),
                    tick = function tick() {
                        if (stopped) {
                            return false;
                        }
                        var currentTime = fxNow || createFxNow(),
                            remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3
                            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                            temp = remaining / animation.duration || 0,
                            percent = 1 - temp,
                            index = 0,
                            length = animation.tweens.length;
                        for (; index < length; index++) {
                            animation.tweens[index].run(percent);
                        }
                        deferred.notifyWith(elem, [animation, percent, remaining]);
                        if (percent < 1 && length) {
                            return remaining;
                        } else {
                            deferred.resolveWith(elem, [animation]);
                            return false;
                        }
                    },
                    animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function createTween(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function stop(gotoEnd) {
                            var index = 0, // If we are going to the end, we want to run all the tweens
                                // otherwise we skip this part
                                length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) {
                                return this;
                            }
                            stopped = true;
                            for (; index < length; index++) {
                                animation.tweens[index].run(1);
                            } // Resolve when we played the last frame; otherwise, reject
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [animation, 1, 0]);
                                deferred.resolveWith(elem, [animation, gotoEnd]);
                            } else {
                                deferred.rejectWith(elem, [animation, gotoEnd]);
                            }
                            return this;
                        }
                    }),
                    props = animation.props;
                propFilter(props, animation.opts.specialEasing);
                for (; index < length; index++) {
                    result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                    if (result) {
                        if (jQuery.isFunction(result.stop)) {
                            jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
                        }
                        return result;
                    }
                }
                jQuery.map(props, createTween, animation);
                if (jQuery.isFunction(animation.opts.start)) {
                    animation.opts.start.call(elem, animation);
                }
                jQuery.fx.timer(jQuery.extend(tick, {
                    elem: elem,
                    anim: animation,
                    queue: animation.opts.queue
                })); // attach callbacks from options
                return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
            }
            jQuery.Animation = jQuery.extend(Animation, {
                tweeners: {
                    "*": [function (prop, value) {
                        var tween = this.createTween(prop, value);
                        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                        return tween;
                    }]
                },
                tweener: function tweener(props, callback) {
                    if (jQuery.isFunction(props)) {
                        callback = props;
                        props = ["*"];
                    } else {
                        props = props.match(rnotwhite);
                    }
                    var prop, index = 0,
                        length = props.length;
                    for (; index < length; index++) {
                        prop = props[index];
                        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                        Animation.tweeners[prop].unshift(callback);
                    }
                },
                prefilters: [defaultPrefilter],
                prefilter: function prefilter(callback, prepend) {
                    if (prepend) {
                        Animation.prefilters.unshift(callback);
                    } else {
                        Animation.prefilters.push(callback);
                    }
                }
            });
            jQuery.speed = function (speed, easing, fn) {
                var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                };
                opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
                if (opt.queue == null || opt.queue === true) {
                    opt.queue = "fx";
                } // Queueing
                opt.old = opt.complete;
                opt.complete = function () {
                    if (jQuery.isFunction(opt.old)) {
                        opt.old.call(this);
                    }
                    if (opt.queue) {
                        jQuery.dequeue(this, opt.queue);
                    }
                };
                return opt;
            };
            jQuery.fn.extend({
                fadeTo: function fadeTo(speed, to, easing, callback) { // Show any hidden elements after setting opacity to 0
                    return this.filter(isHidden).css("opacity", 0).show() // Animate to the value specified
                        .end().animate({
                            opacity: to
                        }, speed, easing, callback);
                },
                animate: function animate(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop),
                        optall = jQuery.speed(speed, easing, callback),
                        doAnimation = function doAnimation() { // Operate on a copy of prop so per-property easing won't be lost
                            var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately
                            if (empty || dataPriv.get(this, "finish")) {
                                anim.stop(true);
                            }
                        };
                    doAnimation.finish = doAnimation;
                    return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                },
                stop: function stop(type, clearQueue, gotoEnd) {
                    var stopQueue = function stopQueue(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop;
                        stop(gotoEnd);
                    };
                    if (typeof type !== "string") {
                        gotoEnd = clearQueue;
                        clearQueue = type;
                        type = undefined;
                    }
                    if (clearQueue && type !== false) {
                        this.queue(type || "fx", []);
                    }
                    return this.each(function () {
                        var dequeue = true,
                            index = type != null && type + "queueHooks",
                            timers = jQuery.timers,
                            data = dataPriv.get(this);
                        if (index) {
                            if (data[index] && data[index].stop) {
                                stopQueue(data[index]);
                            }
                        } else {
                            for (index in data) {
                                if (data[index] && data[index].stop && rrun.test(index)) {
                                    stopQueue(data[index]);
                                }
                            }
                        }
                        for (index = timers.length; index--;) {
                            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                        } // Start the next in the queue if the last step wasn't forced.
                        // Timers currently will call their complete callbacks, which
                        // will dequeue but only if they were gotoEnd.
                        if (dequeue || !gotoEnd) {
                            jQuery.dequeue(this, type);
                        }
                    });
                },
                finish: function finish(type) {
                    if (type !== false) {
                        type = type || "fx";
                    }
                    return this.each(function () {
                        var index, data = dataPriv.get(this),
                            queue = data[type + "queue"],
                            hooks = data[type + "queueHooks"],
                            timers = jQuery.timers,
                            length = queue ? queue.length : 0; // Enable finishing flag on private data
                        data.finish = true; // Empty the queue first
                        jQuery.queue(this, type, []);
                        if (hooks && hooks.stop) {
                            hooks.stop.call(this, true);
                        } // Look for any active animations, and finish them
                        for (index = timers.length; index--;) {
                            if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                        } // Look for any animations in the old queue and finish them
                        for (index = 0; index < length; index++) {
                            if (queue[index] && queue[index].finish) {
                                queue[index].finish.call(this);
                            }
                        } // Turn off finishing flag
                        delete data.finish;
                    });
                }
            });
            jQuery.each(["toggle", "show", "hide"], function (i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function (speed, easing, callback) {
                    return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                };
            }); // Generate shortcuts for custom animations
            jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (name, props) {
                jQuery.fn[name] = function (speed, easing, callback) {
                    return this.animate(props, speed, easing, callback);
                };
            });
            jQuery.timers = [];
            jQuery.fx.tick = function () {
                var timer, i = 0,
                    timers = jQuery.timers;
                fxNow = jQuery.now();
                for (; i < timers.length; i++) {
                    timer = timers[i]; // Checks the timer has not already been removed
                    if (!timer() && timers[i] === timer) {
                        timers.splice(i--, 1);
                    }
                }
                if (!timers.length) {
                    jQuery.fx.stop();
                }
                fxNow = undefined;
            };
            jQuery.fx.timer = function (timer) {
                jQuery.timers.push(timer);
                if (timer()) {
                    jQuery.fx.start();
                } else {
                    jQuery.timers.pop();
                }
            };
            jQuery.fx.interval = 13;
            jQuery.fx.start = function () {
                if (!timerId) {
                    timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
                }
            };
            jQuery.fx.stop = function () {
                window.clearInterval(timerId);
                timerId = null;
            };
            jQuery.fx.speeds = {
                slow: 600,
                fast: 200, // Default speed
                _default: 400
            }; // Based off of the plugin by Clint Helfers, with permission.
            // http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
            jQuery.fn.delay = function (time, type) {
                time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                type = type || "fx";
                return this.queue(type, function (next, hooks) {
                    var timeout = window.setTimeout(next, time);
                    hooks.stop = function () {
                        window.clearTimeout(timeout);
                    };
                });
            };
            (function () {
                var input = document.createElement("input"),
                    select = document.createElement("select"),
                    opt = select.appendChild(document.createElement("option"));
                input.type = "checkbox"; // Support: iOS<=5.1, Android<=4.2+
                // Default value for a checkbox should be "on"
                support.checkOn = input.value !== ""; // Support: IE<=11+
                // Must access selectedIndex to make default options select
                support.optSelected = opt.selected; // Support: Android<=2.3
                // Options inside disabled selects are incorrectly marked as disabled
                select.disabled = true;
                support.optDisabled = !opt.disabled; // Support: IE<=11+
                // An input loses its value after becoming a radio
                input = document.createElement("input");
                input.value = "t";
                input.type = "radio";
                support.radioValue = input.value === "t";
            })();
            var boolHook, attrHandle = jQuery.expr.attrHandle;
            jQuery.fn.extend({
                attr: function attr(name, value) {
                    return access(this, jQuery.attr, name, value, arguments.length > 1);
                },
                removeAttr: function removeAttr(name) {
                    return this.each(function () {
                        jQuery.removeAttr(this, name);
                    });
                }
            });
            jQuery.extend({
                attr: function attr(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
                    if (nType === 3 || nType === 8 || nType === 2) {
                        return;
                    } // Fallback to prop when attributes are not supported
                    if (typeof elem.getAttribute === "undefined") {
                        return jQuery.prop(elem, name, value);
                    } // All attributes are lowercase
                    // Grab necessary hook if one is defined
                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                        name = name.toLowerCase();
                        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                    }
                    if (value !== undefined) {
                        if (value === null) {
                            jQuery.removeAttr(elem, name);
                            return;
                        }
                        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                            return ret;
                        }
                        elem.setAttribute(name, value + "");
                        return value;
                    }
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                        return ret;
                    }
                    ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined
                    return ret == null ? undefined : ret;
                },
                attrHooks: {
                    type: {
                        set: function set(elem, value) {
                            if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                                var val = elem.value;
                                elem.setAttribute("type", value);
                                if (val) {
                                    elem.value = val;
                                }
                                return value;
                            }
                        }
                    }
                },
                removeAttr: function removeAttr(elem, value) {
                    var name, propName, i = 0,
                        attrNames = value && value.match(rnotwhite);
                    if (attrNames && elem.nodeType === 1) {
                        while (name = attrNames[i++]) {
                            propName = jQuery.propFix[name] || name; // Boolean attributes get special treatment (#10870)
                            if (jQuery.expr.match.bool.test(name)) { // Set corresponding property to false
                                elem[propName] = false;
                            }
                            elem.removeAttribute(name);
                        }
                    }
                }
            }); // Hooks for boolean attributes
            boolHook = {
                set: function set(elem, value, name) {
                    if (value === false) { // Remove boolean attributes when set to false
                        jQuery.removeAttr(elem, name);
                    } else {
                        elem.setAttribute(name, name);
                    }
                    return name;
                }
            };
            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;
                attrHandle[name] = function (elem, name, isXML) {
                    var ret, handle;
                    if (!isXML) { // Avoid an infinite loop by temporarily removing this function from the getter
                        handle = attrHandle[name];
                        attrHandle[name] = ret;
                        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                        attrHandle[name] = handle;
                    }
                    return ret;
                };
            });
            var rfocusable = /^(?:input|select|textarea|button)$/i,
                rclickable = /^(?:a|area)$/i;
            jQuery.fn.extend({
                prop: function prop(name, value) {
                    return access(this, jQuery.prop, name, value, arguments.length > 1);
                },
                removeProp: function removeProp(name) {
                    return this.each(function () {
                        delete this[jQuery.propFix[name] || name];
                    });
                }
            });
            jQuery.extend({
                prop: function prop(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
                    if (nType === 3 || nType === 8 || nType === 2) {
                        return;
                    }
                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) { // Fix name and attach hooks
                        name = jQuery.propFix[name] || name;
                        hooks = jQuery.propHooks[name];
                    }
                    if (value !== undefined) {
                        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                            return ret;
                        }
                        return elem[name] = value;
                    }
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                        return ret;
                    }
                    return elem[name];
                },
                propHooks: {
                    tabIndex: {
                        get: function get(elem) { // elem.tabIndex doesn't always return the
                            // correct value when it hasn't been explicitly set
                            // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                            // Use proper attribute retrieval(#12072)
                            var tabindex = jQuery.find.attr(elem, "tabindex");
                            return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }); // Support: IE <=11 only
            // Accessing the selectedIndex property
            // forces the browser to respect setting selected
            // on the option
            // The getter ensures a default option is selected
            // when in an optgroup
            if (!support.optSelected) {
                jQuery.propHooks.selected = {
                    get: function get(elem) {
                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) {
                            parent.parentNode.selectedIndex;
                        }
                        return null;
                    },
                    set: function set(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) {
                                parent.parentNode.selectedIndex;
                            }
                        }
                    }
                };
            }
            jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                jQuery.propFix[this.toLowerCase()] = this;
            });
            var rclass = /[\t\r\n\f]/g;

            function getClass(elem) {
                return elem.getAttribute && elem.getAttribute("class") || "";
            }
            jQuery.fn.extend({
                addClass: function addClass(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                    if (jQuery.isFunction(value)) {
                        return this.each(function (j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        });
                    }
                    if (typeof value === "string" && value) {
                        classes = value.match(rnotwhite) || [];
                        while (elem = this[i++]) {
                            curValue = getClass(elem);
                            cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                            if (cur) {
                                j = 0;
                                while (clazz = classes[j++]) {
                                    if (cur.indexOf(" " + clazz + " ") < 0) {
                                        cur += clazz + " ";
                                    }
                                } // Only assign if different to avoid unneeded rendering.
                                finalValue = jQuery.trim(cur);
                                if (curValue !== finalValue) {
                                    elem.setAttribute("class", finalValue);
                                }
                            }
                        }
                    }
                    return this;
                },
                removeClass: function removeClass(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                    if (jQuery.isFunction(value)) {
                        return this.each(function (j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        });
                    }
                    if (!arguments.length) {
                        return this.attr("class", "");
                    }
                    if (typeof value === "string" && value) {
                        classes = value.match(rnotwhite) || [];
                        while (elem = this[i++]) {
                            curValue = getClass(elem); // This expression is here for better compressibility (see addClass)
                            cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                            if (cur) {
                                j = 0;
                                while (clazz = classes[j++]) { // Remove *all* instances
                                    while (cur.indexOf(" " + clazz + " ") > -1) {
                                        cur = cur.replace(" " + clazz + " ", " ");
                                    }
                                } // Only assign if different to avoid unneeded rendering.
                                finalValue = jQuery.trim(cur);
                                if (curValue !== finalValue) {
                                    elem.setAttribute("class", finalValue);
                                }
                            }
                        }
                    }
                    return this;
                },
                toggleClass: function toggleClass(value, stateVal) {
                    var type = typeof value;
                    if (typeof stateVal === "boolean" && type === "string") {
                        return stateVal ? this.addClass(value) : this.removeClass(value);
                    }
                    if (jQuery.isFunction(value)) {
                        return this.each(function (i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        });
                    }
                    return this.each(function () {
                        var className, i, self, classNames;
                        if (type === "string") { // Toggle individual class names
                            i = 0;
                            self = jQuery(this);
                            classNames = value.match(rnotwhite) || [];
                            while (className = classNames[i++]) { // Check each className given, space separated list
                                if (self.hasClass(className)) {
                                    self.removeClass(className);
                                } else {
                                    self.addClass(className);
                                }
                            } // Toggle whole class name
                        } else if (value === undefined || type === "boolean") {
                            className = getClass(this);
                            if (className) { // Store className if set
                                dataPriv.set(this, "__className__", className);
                            } // If the element has a class name or if we're passed `false`,
                            // then remove the whole classname (if there was one, the above saved it).
                            // Otherwise bring back whatever was previously saved (if anything),
                            // falling back to the empty string if nothing was stored.
                            if (this.setAttribute) {
                                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        }
                    });
                },
                hasClass: function hasClass(selector) {
                    var className, elem, i = 0;
                    className = " " + selector + " ";
                    while (elem = this[i++]) {
                        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                            return true;
                        }
                    }
                    return false;
                }
            });
            var rreturn = /\r/g,
                rspaces = /[\x20\t\r\n\f]+/g;
            jQuery.fn.extend({
                val: function val(value) {
                    var hooks, ret, isFunction, elem = this[0];
                    if (!arguments.length) {
                        if (elem) {
                            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                                return ret;
                            }
                            ret = elem.value;
                            return typeof ret === "string" ? // Handle most common string cases
                                ret.replace(rreturn, "") : // Handle cases where value is null/undef or number
                                ret == null ? "" : ret;
                        }
                        return;
                    }
                    isFunction = jQuery.isFunction(value);
                    return this.each(function (i) {
                        var val;
                        if (this.nodeType !== 1) {
                            return;
                        }
                        if (isFunction) {
                            val = value.call(this, i, jQuery(this).val());
                        } else {
                            val = value;
                        } // Treat null/undefined as ""; convert numbers to string
                        if (val == null) {
                            val = "";
                        } else if (typeof val === "number") {
                            val += "";
                        } else if (jQuery.isArray(val)) {
                            val = jQuery.map(val, function (value) {
                                return value == null ? "" : value + "";
                            });
                        }
                        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
                        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                            this.value = val;
                        }
                    });
                }
            });
            jQuery.extend({
                valHooks: {
                    option: {
                        get: function get(elem) {
                            var val = jQuery.find.attr(elem, "value");
                            return val != null ? val : // Support: IE10-11+
                                // option.text throws exceptions (#14686, #14858)
                                // Strip and collapse whitespace
                                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                                jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
                        }
                    },
                    select: {
                        get: function get(elem) {
                            var value, option, options = elem.options,
                                index = elem.selectedIndex,
                                one = elem.type === "select-one" || index < 0,
                                values = one ? null : [],
                                max = one ? index + 1 : options.length,
                                i = index < 0 ? max : one ? index : 0; // Loop through all the selected options
                            for (; i < max; i++) {
                                option = options[i]; // IE8-9 doesn't update selected after form reset (#2551)
                                if ((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
                                        support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) { // Get the specific value for the option
                                    value = jQuery(option).val(); // We don't need an array for one selects
                                    if (one) {
                                        return value;
                                    } // Multi-Selects return an array
                                    values.push(value);
                                }
                            }
                            return values;
                        },
                        set: function set(elem, value) {
                            var optionSet, option, options = elem.options,
                                values = jQuery.makeArray(value),
                                i = options.length;
                            while (i--) {
                                option = options[i];
                                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                    optionSet = true;
                                }
                            } // Force browsers to behave consistently when non-matching value is set
                            if (!optionSet) {
                                elem.selectedIndex = -1;
                            }
                            return values;
                        }
                    }
                }
            }); // Radios and checkboxes getter/setter
            jQuery.each(["radio", "checkbox"], function () {
                jQuery.valHooks[this] = {
                    set: function set(elem, value) {
                        if (jQuery.isArray(value)) {
                            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    }
                };
                if (!support.checkOn) {
                    jQuery.valHooks[this].get = function (elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                }
            }); // Return jQuery for attributes-only inclusion
            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
            jQuery.extend(jQuery.event, {
                trigger: function trigger(event, data, elem, onlyHandlers) {
                    var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                        type = hasOwn.call(event, "type") ? event.type : event,
                        namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                    cur = tmp = elem = elem || document; // Don't do events on text and comment nodes
                    if (elem.nodeType === 3 || elem.nodeType === 8) {
                        return;
                    } // focus/blur morphs to focusin/out; ensure we're not firing them right now
                    if (rfocusMorph.test(type + jQuery.event.triggered)) {
                        return;
                    }
                    if (type.indexOf(".") > -1) { // Namespaced trigger; create a regexp to match event type in handle()
                        namespaces = type.split(".");
                        type = namespaces.shift();
                        namespaces.sort();
                    }
                    ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
                    event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                    event.isTrigger = onlyHandlers ? 2 : 3;
                    event.namespace = namespaces.join(".");
                    event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused
                    event.result = undefined;
                    if (!event.target) {
                        event.target = elem;
                    } // Clone any incoming data and prepend the event, creating the handler arg list
                    data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines
                    special = jQuery.event.special[type] || {};
                    if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                        return;
                    } // Determine event propagation path in advance, per W3C events spec (#9951)
                    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        bubbleType = special.delegateType || type;
                        if (!rfocusMorph.test(bubbleType + type)) {
                            cur = cur.parentNode;
                        }
                        for (; cur; cur = cur.parentNode) {
                            eventPath.push(cur);
                            tmp = cur;
                        } // Only add window if we got to document (e.g., not plain obj or detached DOM)
                        if (tmp === (elem.ownerDocument || document)) {
                            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                    } // Fire handlers on the event path
                    i = 0;
                    while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler
                        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                        if (handle) {
                            handle.apply(cur, data);
                        } // Native handler
                        handle = ontype && cur[ontype];
                        if (handle && handle.apply && acceptData(cur)) {
                            event.result = handle.apply(cur, data);
                            if (event.result === false) {
                                event.preventDefault();
                            }
                        }
                    }
                    event.type = type; // If nobody prevented the default action, do it now
                    if (!onlyHandlers && !event.isDefaultPrevented()) {
                        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) { // Call a native DOM method on the target with the same name name as the event.
                            // Don't do default actions on window, that's where global variables be (#6170)
                            if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) { // Don't re-trigger an onFOO event when we call its FOO() method
                                tmp = elem[ontype];
                                if (tmp) {
                                    elem[ontype] = null;
                                } // Prevent re-triggering of the same event, since we already bubbled it above
                                jQuery.event.triggered = type;
                                elem[type]();
                                jQuery.event.triggered = undefined;
                                if (tmp) {
                                    elem[ontype] = tmp;
                                }
                            }
                        }
                    }
                    return event.result;
                }, // Piggyback on a donor event to simulate a different one
                // Used only for `focus(in | out)` events
                simulate: function simulate(type, elem, event) {
                    var e = jQuery.extend(new jQuery.Event(), event, {
                        type: type,
                        isSimulated: true
                    });
                    jQuery.event.trigger(e, null, elem);
                }
            });
            jQuery.fn.extend({
                trigger: function trigger(type, data) {
                    return this.each(function () {
                        jQuery.event.trigger(type, data, this);
                    });
                },
                triggerHandler: function triggerHandler(type, data) {
                    var elem = this[0];
                    if (elem) {
                        return jQuery.event.trigger(type, data, elem, true);
                    }
                }
            });
            jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) { // Handle event binding
                jQuery.fn[name] = function (data, fn) {
                    return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                };
            });
            jQuery.fn.extend({
                hover: function hover(fnOver, fnOut) {
                    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                }
            });
            support.focusin = "onfocusin" in window; // Support: Firefox
            // Firefox doesn't have focus(in | out) events
            // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
            //
            // Support: Chrome, Safari
            // focus(in | out) events fire after focus & blur events,
            // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
            // Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
            if (!support.focusin) {
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function (orig, fix) { // Attach a single capturing handler on the document while someone wants focusin/focusout
                    var handler = function handler(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                    };
                    jQuery.event.special[fix] = {
                        setup: function setup() {
                            var doc = this.ownerDocument || this,
                                attaches = dataPriv.access(doc, fix);
                            if (!attaches) {
                                doc.addEventListener(orig, handler, true);
                            }
                            dataPriv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function teardown() {
                            var doc = this.ownerDocument || this,
                                attaches = dataPriv.access(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                dataPriv.remove(doc, fix);
                            } else {
                                dataPriv.access(doc, fix, attaches);
                            }
                        }
                    };
                });
            }
            var location = window.location;
            var nonce = jQuery.now();
            var rquery = /\?/; // Support: Android 2.3
            // Workaround failure to string-cast null input
            jQuery.parseJSON = function (data) {
                return JSON.parse(data + "");
            }; // Cross-browser xml parsing
            jQuery.parseXML = function (data) {
                var xml;
                if (!data || typeof data !== "string") {
                    return null;
                } // Support: IE9
                try {
                    xml = new window.DOMParser().parseFromString(data, "text/xml");
                } catch (e) {
                    xml = undefined;
                }
                if (!xml || xml.getElementsByTagName("parsererror").length) {
                    jQuery.error("Invalid XML: " + data);
                }
                return xml;
            };
            var rhash = /#.*$/,
                rts = /([?&])_=[^&]*/,
                rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
                rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                rnoContent = /^(?:GET|HEAD)$/,
                rprotocol = /^\/\//,
                /* Prefilters
                 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
                 * 2) These are called:
                 *    - BEFORE asking for a transport
                 *    - AFTER param serialization (s.data is a string if s.processData is true)
                 * 3) key is the dataType
                 * 4) the catchall symbol "*" can be used
                 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
                 */
                prefilters = {},
                /* Transports bindings
                 * 1) key is the dataType
                 * 2) the catchall symbol "*" can be used
                 * 3) selection will start with transport dataType and THEN go to "*" if needed
                 */
                transports = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
                allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
                originAnchor = document.createElement("a");
            originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
            function addToPrefiltersOrTransports(structure) { // dataTypeExpression is optional and defaults to "*"
                return function (dataTypeExpression, func) {
                    if (typeof dataTypeExpression !== "string") {
                        func = dataTypeExpression;
                        dataTypeExpression = "*";
                    }
                    var dataType, i = 0,
                        dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                    if (jQuery.isFunction(func)) { // For each dataType in the dataTypeExpression
                        while (dataType = dataTypes[i++]) { // Prepend if requested
                            if (dataType[0] === "+") {
                                dataType = dataType.slice(1) || "*";
                                (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
                            } else {
                                (structure[dataType] = structure[dataType] || []).push(func);
                            }
                        }
                    }
                };
            } // Base inspection function for prefilters and transports
            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                var inspected = {},
                    seekingTransport = structure === transports;

                function inspect(dataType) {
                    var selected;
                    inspected[dataType] = true;
                    jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                            options.dataTypes.unshift(dataTypeOrTransport);
                            inspect(dataTypeOrTransport);
                            return false;
                        } else if (seekingTransport) {
                            return !(selected = dataTypeOrTransport);
                        }
                    });
                    return selected;
                }
                return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
            } // A special extend for ajax options
            // that takes "flat" options (not to be deep extended)
            // Fixes #9887
            function ajaxExtend(target, src) {
                var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                for (key in src) {
                    if (src[key] !== undefined) {
                        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    }
                }
                if (deep) {
                    jQuery.extend(true, target, deep);
                }
                return target;
            }
            /* Handles responses to an ajax request:
             * - finds the right dataType (mediates between content-type and expected dataType)
             * - returns the corresponding response
             */
            function ajaxHandleResponses(s, jqXHR, responses) {
                var ct, type, finalDataType, firstDataType, contents = s.contents,
                    dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process
                while (dataTypes[0] === "*") {
                    dataTypes.shift();
                    if (ct === undefined) {
                        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                } // Check if we're dealing with a known content-type
                if (ct) {
                    for (type in contents) {
                        if (contents[type] && contents[type].test(ct)) {
                            dataTypes.unshift(type);
                            break;
                        }
                    }
                } // Check to see if we have a response for the expected dataType
                if (dataTypes[0] in responses) {
                    finalDataType = dataTypes[0];
                } else { // Try convertible dataTypes
                    for (type in responses) {
                        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                            finalDataType = type;
                            break;
                        }
                        if (!firstDataType) {
                            firstDataType = type;
                        }
                    } // Or just use first one
                    finalDataType = finalDataType || firstDataType;
                } // If we found a dataType
                // We add the dataType to the list if needed
                // and return the corresponding response
                if (finalDataType) {
                    if (finalDataType !== dataTypes[0]) {
                        dataTypes.unshift(finalDataType);
                    }
                    return responses[finalDataType];
                }
            }
            /* Chain conversions given the request and the original response
             * Also sets the responseXXX fields on the jqXHR instance
             */
            function ajaxConvert(s, response, jqXHR, isSuccess) {
                var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
                    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys
                if (dataTypes[1]) {
                    for (conv in s.converters) {
                        converters[conv.toLowerCase()] = s.converters[conv];
                    }
                }
                current = dataTypes.shift(); // Convert to each sequential dataType
                while (current) {
                    if (s.responseFields[current]) {
                        jqXHR[s.responseFields[current]] = response;
                    } // Apply the dataFilter if provided
                    if (!prev && isSuccess && s.dataFilter) {
                        response = s.dataFilter(response, s.dataType);
                    }
                    prev = current;
                    current = dataTypes.shift();
                    if (current) { // There's only work to do if current dataType is non-auto
                        if (current === "*") {
                            current = prev; // Convert response if prev dataType is non-auto and differs from current
                        } else if (prev !== "*" && prev !== current) { // Seek a direct converter
                            conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair
                            if (!conv) {
                                for (conv2 in converters) { // If conv2 outputs current
                                    tmp = conv2.split(" ");
                                    if (tmp[1] === current) { // If prev can be converted to accepted input
                                        conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                        if (conv) { // Condense equivalence converters
                                            if (conv === true) {
                                                conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                                            } else if (converters[conv2] !== true) {
                                                current = tmp[0];
                                                dataTypes.unshift(tmp[1]);
                                            }
                                            break;
                                        }
                                    }
                                }
                            } // Apply converter (if not an equivalence)
                            if (conv !== true) { // Unless errors are allowed to bubble, catch and return them
                                if (conv && s.throws) {
                                    response = conv(response);
                                } else {
                                    try {
                                        response = conv(response);
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: conv ? e : "No conversion from " + prev + " to " + current
                                        };
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    state: "success",
                    data: response
                };
            }
            jQuery.extend({ // Counter for holding the number of active queries
                active: 0, // Last-Modified header cache for next request
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: location.href,
                    type: "GET",
                    isLocal: rlocalProtocol.test(location.protocol),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
                    accepts: {
                        "*": allTypes,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    }, // Data converters
                    // Keys separate source (or catchall "*") and destination types with a single space
                    converters: { // Convert anything to text
                        "* text": String, // Text to html (true = no transformation)
                        "text html": true, // Evaluate text as a json expression
                        "text json": jQuery.parseJSON, // Parse text as xml
                        "text xml": jQuery.parseXML
                    }, // For options that shouldn't be deep extended:
                    // you can add your own custom options here if
                    // and when you create one that shouldn't be
                    // deep extended (see ajaxExtend)
                    flatOptions: {
                        url: true,
                        context: true
                    }
                }, // Creates a full fledged settings object into target
                // with both ajaxSettings and settings fields.
                // If target is omitted, writes into ajaxSettings.
                ajaxSetup: function ajaxSetup(target, settings) {
                    return settings ? // Building a settings object
                        ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
                        ajaxExtend(jQuery.ajaxSettings, target);
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports), // Main method
                ajax: function ajax(url, options) { // If url is an object, simulate pre-1.5 signature
                    if (typeof url === "object") {
                        options = url;
                        url = undefined;
                    } // Force options to be an object
                    options = options || {};
                    var transport, // URL without anti-cache param
                        cacheURL, // Response headers
                        responseHeadersString, responseHeaders, // timeout handle
                        timeoutTimer, // Url cleanup var
                        urlAnchor, // To know if global events are to be dispatched
                        fireGlobals, // Loop variable
                        i, // Create the final options object
                        s = jQuery.ajaxSetup({}, options), // Callbacks context
                        callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
                        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
                        deferred = jQuery.Deferred(),
                        completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
                        _statusCode = s.statusCode || {}, // Headers (they are sent all at once)
                        requestHeaders = {},
                        requestHeadersNames = {}, // The jqXHR state
                        state = 0, // Default abort message
                        strAbort = "canceled", // Fake xhr
                        jqXHR = {
                            readyState: 0, // Builds headers hashtable if needed
                            getResponseHeader: function getResponseHeader(key) {
                                var match;
                                if (state === 2) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) {
                                            responseHeaders[match[1].toLowerCase()] = match[2];
                                        }
                                    }
                                    match = responseHeaders[key.toLowerCase()];
                                }
                                return match == null ? null : match;
                            }, // Raw string
                            getAllResponseHeaders: function getAllResponseHeaders() {
                                return state === 2 ? responseHeadersString : null;
                            }, // Caches the header
                            setRequestHeader: function setRequestHeader(name, value) {
                                var lname = name.toLowerCase();
                                if (!state) {
                                    name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            }, // Overrides response content-type header
                            overrideMimeType: function overrideMimeType(type) {
                                if (!state) {
                                    s.mimeType = type;
                                }
                                return this;
                            }, // Status-dependent callbacks
                            statusCode: function statusCode(map) {
                                var code;
                                if (map) {
                                    if (state < 2) {
                                        for (code in map) { // Lazy-add the new callback in a way that preserves old ones
                                            _statusCode[code] = [_statusCode[code], map[code]];
                                        }
                                    } else { // Execute the appropriate callbacks
                                        jqXHR.always(map[jqXHR.status]);
                                    }
                                }
                                return this;
                            }, // Cancel the request
                            abort: function abort(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) {
                                    transport.abort(finalText);
                                }
                                done(0, finalText);
                                return this;
                            }
                        }; // Attach deferreds
                    deferred.promise(jqXHR).complete = completeDeferred.add;
                    jqXHR.success = jqXHR.done;
                    jqXHR.error = jqXHR.fail; // Remove hash character (#7531: and string promotion)
                    // Add protocol if not provided (prefilters might expect it)
                    // Handle falsy url in the settings object (#10093: consistency with old signature)
                    // We also use the url parameter if available
                    s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004
                    s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list
                    s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.
                    if (s.crossDomain == null) {
                        urlAnchor = document.createElement("a"); // Support: IE8-11+
                        // IE throws exception if url is malformed, e.g. http://example.com:80x/
                        try {
                            urlAnchor.href = s.url; // Support: IE8-11+
                            // Anchor's host property isn't correctly set when s.url is relative
                            urlAnchor.href = urlAnchor.href;
                            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                        } catch (e) { // If there is an error parsing the URL, assume it is crossDomain,
                            // it can be rejected by the transport if it is invalid
                            s.crossDomain = true;
                        }
                    } // Convert data if not already a string
                    if (s.data && s.processData && typeof s.data !== "string") {
                        s.data = jQuery.param(s.data, s.traditional);
                    } // Apply prefilters
                    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there
                    if (state === 2) {
                        return jqXHR;
                    } // We can fire global events as of now if asked to
                    // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
                    fireGlobals = jQuery.event && s.global; // Watch for a new set of requests
                    if (fireGlobals && jQuery.active++ === 0) {
                        jQuery.event.trigger("ajaxStart");
                    } // Uppercase the type
                    s.type = s.type.toUpperCase(); // Determine if request has content
                    s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
                    // and/or If-None-Match header later on
                    cacheURL = s.url; // More options handling for requests with no content
                    if (!s.hasContent) { // If data is available, append data to url
                        if (s.data) {
                            cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry
                            delete s.data;
                        } // Add anti-cache in url if needed
                        if (s.cache === false) {
                            s.url = rts.test(cacheURL) ? // If there is already a '_' parameter, set its value
                                cacheURL.replace(rts, "$1_=" + nonce++) : // Otherwise add one to the end
                                cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                        }
                    } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        if (jQuery.lastModified[cacheURL]) {
                            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                        }
                        if (jQuery.etag[cacheURL]) {
                            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                    } // Set the correct header, if data is being sent
                    if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                        jqXHR.setRequestHeader("Content-Type", s.contentType);
                    } // Set the Accepts header for the server, depending on the dataType
                    jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option
                    for (i in s.headers) {
                        jqXHR.setRequestHeader(i, s.headers[i]);
                    } // Allow custom headers/mimetypes and early abort
                    if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) { // Abort if not done already and return
                        return jqXHR.abort();
                    } // Aborting is no longer a cancellation
                    strAbort = "abort"; // Install callbacks on deferreds
                    for (i in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) {
                        jqXHR[i](s[i]);
                    } // Get transport
                    transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort
                    if (!transport) {
                        done(-1, "No Transport");
                    } else {
                        jqXHR.readyState = 1; // Send global event
                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                        } // If request was aborted inside ajaxSend, stop there
                        if (state === 2) {
                            return jqXHR;
                        } // Timeout
                        if (s.async && s.timeout > 0) {
                            timeoutTimer = window.setTimeout(function () {
                                jqXHR.abort("timeout");
                            }, s.timeout);
                        }
                        try {
                            state = 1;
                            transport.send(requestHeaders, done);
                        } catch (e) { // Propagate exception as error if not done
                            if (state < 2) {
                                done(-1, e); // Simply rethrow otherwise
                            } else {
                                throw e;
                            }
                        }
                    } // Callback for when everything is done
                    function done(status, nativeStatusText, responses, headers) {
                        var isSuccess, success, error, response, modified, statusText = nativeStatusText; // Called once
                        if (state === 2) {
                            return;
                        } // State is "done" now
                        state = 2; // Clear timeout if it exists
                        if (timeoutTimer) {
                            window.clearTimeout(timeoutTimer);
                        } // Dereference transport for early garbage collection
                        // (no matter how long the jqXHR object will be used)
                        transport = undefined; // Cache response headers
                        responseHeadersString = headers || ""; // Set readyState
                        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful
                        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data
                        if (responses) {
                            response = ajaxHandleResponses(s, jqXHR, responses);
                        } // Convert no matter what (that way responseXXX fields are always set)
                        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining
                        if (isSuccess) { // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                            if (s.ifModified) {
                                modified = jqXHR.getResponseHeader("Last-Modified");
                                if (modified) {
                                    jQuery.lastModified[cacheURL] = modified;
                                }
                                modified = jqXHR.getResponseHeader("etag");
                                if (modified) {
                                    jQuery.etag[cacheURL] = modified;
                                }
                            } // if no content
                            if (status === 204 || s.type === "HEAD") {
                                statusText = "nocontent"; // if not modified
                            } else if (status === 304) {
                                statusText = "notmodified"; // If we have data, let's convert it
                            } else {
                                statusText = response.state;
                                success = response.data;
                                error = response.error;
                                isSuccess = !error;
                            }
                        } else { // Extract error from statusText and normalize for non-aborts
                            error = statusText;
                            if (status || !statusText) {
                                statusText = "error";
                                if (status < 0) {
                                    status = 0;
                                }
                            }
                        } // Set data for the fake xhr object
                        jqXHR.status = status;
                        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error
                        if (isSuccess) {
                            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                        } else {
                            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                        } // Status-dependent callbacks
                        jqXHR.statusCode(_statusCode);
                        _statusCode = undefined;
                        if (fireGlobals) {
                            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                        } // Complete
                        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter
                            if (!--jQuery.active) {
                                jQuery.event.trigger("ajaxStop");
                            }
                        }
                    }
                    return jqXHR;
                },
                getJSON: function getJSON(url, data, callback) {
                    return jQuery.get(url, data, callback, "json");
                },
                getScript: function getScript(url, callback) {
                    return jQuery.get(url, undefined, callback, "script");
                }
            });
            jQuery.each(["get", "post"], function (i, method) {
                jQuery[method] = function (url, data, callback, type) { // Shift arguments if data argument was omitted
                    if (jQuery.isFunction(data)) {
                        type = type || callback;
                        callback = data;
                        data = undefined;
                    } // The url can be an options object (which then must have .url)
                    return jQuery.ajax(jQuery.extend({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    }, jQuery.isPlainObject(url) && url));
                };
            });
            jQuery._evalUrl = function (url) {
                return jQuery.ajax({
                    url: url, // Make this explicit, since user can override this through ajaxSetup (#11264)
                    type: "GET",
                    dataType: "script",
                    async: false,
                    global: false,
                    "throws": true
                });
            };
            jQuery.fn.extend({
                wrapAll: function wrapAll(html) {
                    var wrap;
                    if (jQuery.isFunction(html)) {
                        return this.each(function (i) {
                            jQuery(this).wrapAll(html.call(this, i));
                        });
                    }
                    if (this[0]) { // The elements to wrap the target around
                        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) {
                            wrap.insertBefore(this[0]);
                        }
                        wrap.map(function () {
                            var elem = this;
                            while (elem.firstElementChild) {
                                elem = elem.firstElementChild;
                            }
                            return elem;
                        }).append(this);
                    }
                    return this;
                },
                wrapInner: function wrapInner(html) {
                    if (jQuery.isFunction(html)) {
                        return this.each(function (i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        });
                    }
                    return this.each(function () {
                        var self = jQuery(this),
                            contents = self.contents();
                        if (contents.length) {
                            contents.wrapAll(html);
                        } else {
                            self.append(html);
                        }
                    });
                },
                wrap: function wrap(html) {
                    var isFunction = jQuery.isFunction(html);
                    return this.each(function (i) {
                        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
                    });
                },
                unwrap: function unwrap() {
                    return this.parent().each(function () {
                        if (!jQuery.nodeName(this, "body")) {
                            jQuery(this).replaceWith(this.childNodes);
                        }
                    }).end();
                }
            });
            jQuery.expr.filters.hidden = function (elem) {
                return !jQuery.expr.filters.visible(elem);
            };
            jQuery.expr.filters.visible = function (elem) { // Support: Opera <= 12.12
                // Opera reports offsetWidths and offsetHeights less than zero on some elements
                // Use OR instead of AND as the element is not visible if either is true
                // See tickets #10406 and #13132
                return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
            };
            var r20 = /%20/g,
                rbracket = /\[\]$/,
                rCRLF = /\r?\n/g,
                rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
                rsubmittable = /^(?:input|select|textarea|keygen)/i;

            function buildParams(prefix, obj, traditional, add) {
                var name;
                if (jQuery.isArray(obj)) { // Serialize array item.
                    jQuery.each(obj, function (i, v) {
                        if (traditional || rbracket.test(prefix)) { // Treat each array item as a scalar.
                            add(prefix, v);
                        } else { // Item is non-scalar (array or object), encode its numeric index.
                            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                        }
                    });
                } else if (!traditional && jQuery.type(obj) === "object") { // Serialize object item.
                    for (name in obj) {
                        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                    }
                } else { // Serialize scalar item.
                    add(prefix, obj);
                }
            } // Serialize an array of form elements or a set of
            // key/values into a query string
            jQuery.param = function (a, traditional) {
                var prefix, s = [],
                    add = function add(key, value) { // If value is a function, invoke it and return its value
                        value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                    }; // Set traditional to true for jQuery <= 1.3.2 behavior.
                if (traditional === undefined) {
                    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
                } // If an array was passed in, assume that it is an array of form elements.
                if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) { // Serialize the form elements
                    jQuery.each(a, function () {
                        add(this.name, this.value);
                    });
                } else { // If traditional, encode the "old" way (the way 1.3.2 or older
                    // did it), otherwise encode params recursively.
                    for (prefix in a) {
                        buildParams(prefix, a[prefix], traditional, add);
                    }
                } // Return the resulting serialization
                return s.join("&").replace(r20, "+");
            };
            jQuery.fn.extend({
                serialize: function serialize() {
                    return jQuery.param(this.serializeArray());
                },
                serializeArray: function serializeArray() {
                    return this.map(function () { // Can add propHook for "elements" to filter or add form elements
                        var elements = jQuery.prop(this, "elements");
                        return elements ? jQuery.makeArray(elements) : this;
                    }).filter(function () {
                        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
                        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                    }).map(function (i, elem) {
                        var val = jQuery(this).val();
                        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        }) : {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        };
                    }).get();
                }
            });
            jQuery.ajaxSettings.xhr = function () {
                try {
                    return new window.XMLHttpRequest();
                } catch (e) {}
            };
            var xhrSuccessStatus = { // File protocol always yields status code 0, assume 200
                    0: 200, // Support: IE9
                    // #1450: sometimes IE returns 1223 when it should be 204
                    1223: 204
                },
                xhrSupported = jQuery.ajaxSettings.xhr();
            support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
            support.ajax = xhrSupported = !!xhrSupported;
            jQuery.ajaxTransport(function (options) {
                var callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
                if (support.cors || xhrSupported && !options.crossDomain) {
                    return {
                        send: function send(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided
                            if (options.xhrFields) {
                                for (i in options.xhrFields) {
                                    xhr[i] = options.xhrFields[i];
                                }
                            } // Override mime type if needed
                            if (options.mimeType && xhr.overrideMimeType) {
                                xhr.overrideMimeType(options.mimeType);
                            } // X-Requested-With header
                            // For cross-domain requests, seeing as conditions for a preflight are
                            // akin to a jigsaw puzzle, we simply never set it to be sure.
                            // (it can always be set on a per-request basis or even using ajaxSetup)
                            // For same-domain requests, won't change header if already provided.
                            if (!options.crossDomain && !headers["X-Requested-With"]) {
                                headers["X-Requested-With"] = "XMLHttpRequest";
                            } // Set headers
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            } // Callback
                            callback = function (type) {
                                return function () {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                        if (type === "abort") {
                                            xhr.abort();
                                        } else if (type === "error") { // Support: IE9
                                            // On a manual native abort, IE9 throws
                                            // errors on any property access that is not readyState
                                            if (typeof xhr.status !== "number") {
                                                complete(0, "error");
                                            } else {
                                                complete( // File: protocol always yields status 0; see #8605, #14207
                                                    xhr.status, xhr.statusText);
                                            }
                                        } else {
                                            complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE9 only
                                                // IE9 has no XHR2 but throws on binary (trac-11426)
                                                // For XHR2 non-text, let the caller handle it (gh-2498)
                                                (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                                    binary: xhr.response
                                                } : {
                                                    text: xhr.responseText
                                                }, xhr.getAllResponseHeaders());
                                        }
                                    }
                                };
                            }; // Listen to events
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = callback("error"); // Support: IE9
                            // Use onreadystatechange to replace onabort
                            // to handle uncaught aborts
                            if (xhr.onabort !== undefined) {
                                xhr.onabort = errorCallback;
                            } else {
                                xhr.onreadystatechange = function () { // Check readyState before timeout as it changes
                                    if (xhr.readyState === 4) { // Allow onerror to be called first,
                                        // but that will not handle a native abort
                                        // Also, save errorCallback to a variable
                                        // as xhr.onerror cannot be accessed
                                        window.setTimeout(function () {
                                            if (callback) {
                                                errorCallback();
                                            }
                                        });
                                    }
                                };
                            } // Create the abort callback
                            callback = callback("abort");
                            try { // Do send the request (this may raise an exception)
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) { // #14683: Only rethrow if this hasn't been notified as an error yet
                                if (callback) {
                                    throw e;
                                }
                            }
                        },
                        abort: function abort() {
                            if (callback) {
                                callback();
                            }
                        }
                    };
                }
            }); // Install script dataType
            jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function textScript(text) {
                        jQuery.globalEval(text);
                        return text;
                    }
                }
            }); // Handle cache's special case and crossDomain
            jQuery.ajaxPrefilter("script", function (s) {
                if (s.cache === undefined) {
                    s.cache = false;
                }
                if (s.crossDomain) {
                    s.type = "GET";
                }
            }); // Bind script tag hack transport
            jQuery.ajaxTransport("script", function (s) { // This transport only deals with cross domain requests
                if (s.crossDomain) {
                    var script, callback;
                    return {
                        send: function send(_, complete) {
                            script = jQuery("<script>").prop({
                                charset: s.scriptCharset,
                                src: s.url
                            }).on("load error", callback = function (evt) {
                                script.remove();
                                callback = null;
                                if (evt) {
                                    complete(evt.type === "error" ? 404 : 200, evt.type);
                                }
                            }); // Use native DOM manipulation to avoid our domManip AJAX trickery
                            document.head.appendChild(script[0]);
                        },
                        abort: function abort() {
                            if (callback) {
                                callback();
                            }
                        }
                    };
                }
            });
            var oldCallbacks = [],
                rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings
            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function jsonpCallback() {
                    var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                    this[callback] = true;
                    return callback;
                }
            }); // Detect, normalize options and install callbacks for jsonp requests
            jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
                var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
                if (jsonProp || s.dataTypes[0] === "jsonp") { // Get callback name, remembering preexisting value associated with it
                    callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data
                    if (jsonProp) {
                        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                    } else if (s.jsonp !== false) {
                        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                    } // Use data converter to retrieve json after script execution
                    s.converters["script json"] = function () {
                        if (!responseContainer) {
                            jQuery.error(callbackName + " was not called");
                        }
                        return responseContainer[0];
                    }; // Force json dataType
                    s.dataTypes[0] = "json"; // Install callback
                    overwritten = window[callbackName];
                    window[callbackName] = function () {
                        responseContainer = arguments;
                    }; // Clean-up function (fires after converters)
                    jqXHR.always(function () { // If previous value didn't exist - remove it
                        if (overwritten === undefined) {
                            jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
                        } else {
                            window[callbackName] = overwritten;
                        } // Save back as free
                        if (s[callbackName]) { // Make sure that re-using the options doesn't screw things around
                            s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use
                            oldCallbacks.push(callbackName);
                        } // Call if it was a function and we have a response
                        if (responseContainer && jQuery.isFunction(overwritten)) {
                            overwritten(responseContainer[0]);
                        }
                        responseContainer = overwritten = undefined;
                    }); // Delegate to script
                    return "script";
                }
            }); // Argument "data" should be string of html
            // context (optional): If specified, the fragment will be created in this context,
            // defaults to document
            // keepScripts (optional): If true, will include scripts passed in the html string
            jQuery.parseHTML = function (data, context, keepScripts) {
                if (!data || typeof data !== "string") {
                    return null;
                }
                if (typeof context === "boolean") {
                    keepScripts = context;
                    context = false;
                }
                context = context || document;
                var parsed = rsingleTag.exec(data),
                    scripts = !keepScripts && []; // Single tag
                if (parsed) {
                    return [context.createElement(parsed[1])];
                }
                parsed = buildFragment([data], context, scripts);
                if (scripts && scripts.length) {
                    jQuery(scripts).remove();
                }
                return jQuery.merge([], parsed.childNodes);
            }; // Keep a copy of the old load method
            var _load = jQuery.fn.load;
            /**
             * Load a url into a page
             */
            jQuery.fn.load = function (url, params, callback) {
                if (typeof url !== "string" && _load) {
                    return _load.apply(this, arguments);
                }
                var selector, type, response, self = this,
                    off = url.indexOf(" ");
                if (off > -1) {
                    selector = jQuery.trim(url.slice(off));
                    url = url.slice(0, off);
                } // If it's a function
                if (jQuery.isFunction(params)) { // We assume that it's the callback
                    callback = params;
                    params = undefined; // Otherwise, build a param string
                } else if (params && typeof params === "object") {
                    type = "POST";
                } // If we have elements to modify, make the request
                if (self.length > 0) {
                    jQuery.ajax({
                        url: url, // If "type" variable is undefined, then "GET" method will be used.
                        // Make value of this field explicit since
                        // user can override it through ajaxSetup method
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done(function (responseText) { // Save response for use in complete callback
                        response = arguments;
                        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
                            // Exclude scripts to avoid IE 'Permission Denied' errors
                            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
                            responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
                        // but they are ignored because response was set above.
                        // If it fails, this function gets "jqXHR", "status", "error"
                    }).always(callback && function (jqXHR, status) {
                        self.each(function () {
                            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                        });
                    });
                }
                return this;
            }; // Attach a bunch of functions for handling common AJAX events
            jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
                jQuery.fn[type] = function (fn) {
                    return this.on(type, fn);
                };
            });
            jQuery.expr.filters.animated = function (elem) {
                return jQuery.grep(jQuery.timers, function (fn) {
                    return elem === fn.elem;
                }).length;
            };
            /**
             * Gets a window from an element
             */
            function getWindow(elem) {
                return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
            }
            jQuery.offset = {
                setOffset: function setOffset(elem, options, i) {
                    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                        curElem = jQuery(elem),
                        props = {}; // Set position first, in-case top/left are set even on static elem
                    if (position === "static") {
                        elem.style.position = "relative";
                    }
                    curOffset = curElem.offset();
                    curCSSTop = jQuery.css(elem, "top");
                    curCSSLeft = jQuery.css(elem, "left");
                    calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
                    // top or left is auto and position is either absolute or fixed
                    if (calculatePosition) {
                        curPosition = curElem.position();
                        curTop = curPosition.top;
                        curLeft = curPosition.left;
                    } else {
                        curTop = parseFloat(curCSSTop) || 0;
                        curLeft = parseFloat(curCSSLeft) || 0;
                    }
                    if (jQuery.isFunction(options)) { // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                        options = options.call(elem, i, jQuery.extend({}, curOffset));
                    }
                    if (options.top != null) {
                        props.top = options.top - curOffset.top + curTop;
                    }
                    if (options.left != null) {
                        props.left = options.left - curOffset.left + curLeft;
                    }
                    if ("using" in options) {
                        options.using.call(elem, props);
                    } else {
                        curElem.css(props);
                    }
                }
            };
            jQuery.fn.extend({
                offset: function offset(options) {
                    if (arguments.length) {
                        return options === undefined ? this : this.each(function (i) {
                            jQuery.offset.setOffset(this, options, i);
                        });
                    }
                    var docElem, win, elem = this[0],
                        box = {
                            top: 0,
                            left: 0
                        },
                        doc = elem && elem.ownerDocument;
                    if (!doc) {
                        return;
                    }
                    docElem = doc.documentElement; // Make sure it's not a disconnected DOM node
                    if (!jQuery.contains(docElem, elem)) {
                        return box;
                    }
                    box = elem.getBoundingClientRect();
                    win = getWindow(doc);
                    return {
                        top: box.top + win.pageYOffset - docElem.clientTop,
                        left: box.left + win.pageXOffset - docElem.clientLeft
                    };
                },
                position: function position() {
                    if (!this[0]) {
                        return;
                    }
                    var offsetParent, offset, elem = this[0],
                        parentOffset = {
                            top: 0,
                            left: 0
                        }; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
                    // because it is its only offset parent
                    if (jQuery.css(elem, "position") === "fixed") { // Assume getBoundingClientRect is there when computed position is fixed
                        offset = elem.getBoundingClientRect();
                    } else { // Get *real* offsetParent
                        offsetParent = this.offsetParent(); // Get correct offsets
                        offset = this.offset();
                        if (!jQuery.nodeName(offsetParent[0], "html")) {
                            parentOffset = offsetParent.offset();
                        } // Add offsetParent borders
                        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
                    } // Subtract parent offsets and element margins
                    return {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                    };
                }, // This method will return documentElement in the following cases:
                // 1) For the element inside the iframe without offsetParent, this method will return
                //    documentElement of the parent window
                // 2) For the hidden or detached element
                // 3) For body or html element, i.e. in case of the html node - it will return itself
                //
                // but those exceptions were never presented as a real life use-cases
                // and might be considered as more preferable results.
                //
                // This logic, however, is not guaranteed and can change at any point in the future
                offsetParent: function offsetParent() {
                    return this.map(function () {
                        var offsetParent = this.offsetParent;
                        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                            offsetParent = offsetParent.offsetParent;
                        }
                        return offsetParent || documentElement;
                    });
                }
            }); // Create scrollLeft and scrollTop methods
            jQuery.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (method, prop) {
                var top = "pageYOffset" === prop;
                jQuery.fn[method] = function (val) {
                    return access(this, function (elem, method, val) {
                        var win = getWindow(elem);
                        if (val === undefined) {
                            return win ? win[prop] : elem[method];
                        }
                        if (win) {
                            win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                        } else {
                            elem[method] = val;
                        }
                    }, method, val, arguments.length);
                };
            }); // Support: Safari<7-8+, Chrome<37-44+
            // Add the top/left cssHooks using jQuery.fn.position
            // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
            // Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
            // getComputedStyle returns percent when specified for top/left/bottom/right;
            // rather than make the css module depend on the offset module, just check for it here
            jQuery.each(["top", "left"], function (i, prop) {
                jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
                    if (computed) {
                        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset
                        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                    }
                });
            }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
            jQuery.each({
                Height: "height",
                Width: "width"
            }, function (name, type) {
                jQuery.each({
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name
                }, function (defaultExtra, funcName) { // Margin is only for outerHeight, outerWidth
                    jQuery.fn[funcName] = function (margin, value) {
                        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                        return access(this, function (elem, type, value) {
                            var doc;
                            if (jQuery.isWindow(elem)) { // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                                // isn't a whole lot we can do. See pull request at this URL for discussion:
                                // https://github.com/jquery/jquery/pull/764
                                return elem.document.documentElement["client" + name];
                            } // Get document width or height
                            if (elem.nodeType === 9) {
                                doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                                // whichever is greatest
                                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                            }
                            return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                                jQuery.css(elem, type, extra) : // Set width or height on the element
                                jQuery.style(elem, type, value, extra);
                        }, type, chainable ? margin : undefined, chainable, null);
                    };
                });
            });
            jQuery.fn.extend({
                bind: function bind(types, data, fn) {
                    return this.on(types, null, data, fn);
                },
                unbind: function unbind(types, fn) {
                    return this.off(types, null, fn);
                },
                delegate: function delegate(selector, types, data, fn) {
                    return this.on(types, selector, data, fn);
                },
                undelegate: function undelegate(selector, types, fn) { // ( namespace ) or ( selector, types [, fn] )
                    return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                },
                size: function size() {
                    return this.length;
                }
            });
            jQuery.fn.andSelf = jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
            // files that may use define, but not via a proper concatenation script that
            // understands anonymous AMD modules. A named AMD is safest and most robust
            // way to register. Lowercase jquery is used because AMD module names are
            // derived from file names, and jQuery is normally delivered in a lowercase
            // file name. Do this after creating the global so that if an AMD module wants
            // to call noConflict to hide this version of jQuery, it will work.
            // Note that for maximum portability, libraries that are not jQuery should
            // declare themselves as anonymous modules, and avoid setting a global if an
            // AMD loader is present. jQuery is a special case. For more information, see
            // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
            if (true) {
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }
            var // Map over jQuery in case of overwrite
                _jQuery = window.jQuery, // Map over the $ in case of overwrite
                _$ = window.$;
            jQuery.noConflict = function (deep) {
                if (window.$ === jQuery) {
                    window.$ = _$;
                }
                if (deep && window.jQuery === jQuery) {
                    window.jQuery = _jQuery;
                }
                return jQuery;
            }; // Expose jQuery and $ identifiers, even in AMD
            // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
            // and CommonJS for browser emulators (#13566)
            if (!noGlobal) {
                window.jQuery = window.$ = jQuery;
            }
            return jQuery;
        }); // Otherwise append directly

        /***/
    },
    /* 3 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        (0, _jquery2['default'])(document).ready(function () {
            _prestashop2['default'].on('updateCart', function (event) {
                _prestashop2['default'].cart = event.reason.cart;
                var getCartViewUrl = (0, _jquery2['default'])('.js-cart').data('refresh-url');
                var requestData = {};

                if (event && event.reason) {
                    requestData = {
                        id_product_attribute: event.reason.idProductAttribute,
                        id_product: event.reason.idProduct
                    };
                }

                _jquery2['default'].post(getCartViewUrl, requestData).then(function (resp) {
                    (0, _jquery2['default'])('.cart-detailed-totals').replaceWith(resp.cart_detailed_totals);
                    (0, _jquery2['default'])('.cart-summary-items-subtotal').replaceWith(resp.cart_summary_items_subtotal);
                    (0, _jquery2['default'])('.cart-summary-totals').replaceWith(resp.cart_summary_totals);
                    (0, _jquery2['default'])('.cart-detailed-actions').replaceWith(resp.cart_detailed_actions);
                    (0, _jquery2['default'])('.cart-voucher').replaceWith(resp.cart_voucher);
                    (0, _jquery2['default'])('.cart-overview').replaceWith(resp.cart_detailed);

                    (0, _jquery2['default'])('#product_customization_id').val(0);

                    (0, _jquery2['default'])('.js-cart-line-product-quantity').each(function (index, input) {
                        var $input = (0, _jquery2['default'])(input);
                        $input.attr('value', $input.val());
                    });

                    _prestashop2['default'].emit('updatedCart', {
                        eventType: 'updateCart',
                        resp: resp
                    });
                }).fail(function (resp) {
                    _prestashop2['default'].emit('handleError', {
                        eventType: 'updateCart',
                        resp: resp
                    });
                });
            });

            var $body = (0, _jquery2['default'])('body');

            $body.on('click', '[data-button-action="add-to-cart"]', function (event) {
                event.preventDefault();
                if ((0, _jquery2['default'])('#quantity_wanted').val() > (0, _jquery2['default'])('[data-stock]').data('stock') && (0, _jquery2['default'])('[data-allow-oosp]').data('allow-oosp').length === 0) {
                    (0, _jquery2['default'])('[data-button-action="add-to-cart"]').attr('disabled', 'disabled');
                } else {
                    var _ret = (function () {
                        var $form = (0, _jquery2['default'])(event.target).closest('form');
                        var query = $form.serialize() + '&add=1&action=update';
                        var actionURL = $form.attr('action');

                        var isQuantityInputValid = function isQuantityInputValid($input) {
                            var validInput = true;

                            $input.each(function (index, input) {
                                var $input = (0, _jquery2['default'])(input);
                                var minimalValue = parseInt($input.attr('min'), 10);
                                if (minimalValue && $input.val() < minimalValue) {
                                    onInvalidQuantity($input);
                                    validInput = false;
                                }
                            });

                            return validInput;
                        };

                        var onInvalidQuantity = function onInvalidQuantity($input) {
                            $input.parents('.product-add-to-cart').first().find('.product-minimal-quantity').addClass('error');
                            $input.parent().find('label').addClass('error');
                        };

                        var $quantityInput = $form.find('input[min]');
                        if (!isQuantityInputValid($quantityInput)) {
                            onInvalidQuantity($quantityInput);

                            return {
                                v: undefined
                            };
                        }

                        _jquery2['default'].post(actionURL, query, null, 'json').then(function (resp) {
                            _prestashop2['default'].emit('updateCart', {
                                reason: {
                                    idProduct: resp.id_product,
                                    idProductAttribute: resp.id_product_attribute,
                                    linkAction: 'add-to-cart',
                                    cart: resp.cart
                                },
                                resp: resp
                            });
                        }).fail(function (resp) {
                            _prestashop2['default'].emit('handleError', {
                                eventType: 'addProductToCart',
                                resp: resp
                            });
                        });
                    })();

                    if (typeof _ret === 'object') return _ret.v;
                }
            });

            $body.on('submit', '[data-link-action="add-voucher"]', function (event) {
                event.preventDefault();

                var $addVoucherForm = (0, _jquery2['default'])(event.currentTarget);
                var getCartViewUrl = $addVoucherForm.attr('action');

                if (0 === $addVoucherForm.find('[name=action]').length) {
                    $addVoucherForm.append((0, _jquery2['default'])('<input>', {
                        'type': 'hidden',
                        'name': 'ajax',
                        "value": 1
                    }));
                }
                if (0 === $addVoucherForm.find('[name=action]').length) {
                    $addVoucherForm.append((0, _jquery2['default'])('<input>', {
                        'type': 'hidden',
                        'name': 'action',
                        "value": "update"
                    }));
                }

                _jquery2['default'].post(getCartViewUrl, $addVoucherForm.serialize(), null, 'json').then(function (resp) {
                    if (resp.hasError) {
                        (0, _jquery2['default'])('.js-error').show().find('.js-error-text').text(resp.errors[0]);

                        return;
                    }

                    // Refresh cart preview
                    _prestashop2['default'].emit('updateCart', {
                        reason: event.target.dataset,
                        resp: resp
                    });
                }).fail(function (resp) {
                    _prestashop2['default'].emit('handleError', {
                        eventType: 'updateCart',
                        resp: resp
                    });
                });
            });
        });

        /***/
    },
    /* 4 */
    /***/
    function (module, exports) {

        module.exports = prestashop;

        /***/
    },
    /* 5 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        var _checkoutAddress = __webpack_require__(6);

        var _checkoutAddress2 = _interopRequireDefault(_checkoutAddress);

        var _checkoutDelivery = __webpack_require__(8);

        var _checkoutDelivery2 = _interopRequireDefault(_checkoutDelivery);

        var _checkoutPayment = __webpack_require__(9);

        var _checkoutPayment2 = _interopRequireDefault(_checkoutPayment);

        function setUpCheckout() {
            (0, _checkoutAddress2['default'])();
            (0, _checkoutDelivery2['default'])();
            (0, _checkoutPayment2['default'])();

            handleCheckoutStepChange();
        }

        function handleCheckoutStepChange() {
            (0, _jquery2['default'])('.checkout-step').off('click');

            var currentStepClass = 'js-current-step';
            var currentStepSelector = '.' + currentStepClass;
            var stepsAfterPersonalInformation = (0, _jquery2['default'])('#checkout-personal-information-step').nextAll();

            (0, _jquery2['default'])(currentStepSelector).prevAll().add(stepsAfterPersonalInformation).on('click', function (event) {
                var $nextStep = (0, _jquery2['default'])(event.target).closest('.checkout-step');
                if (!$nextStep.hasClass('-unreachable')) {
                    (0, _jquery2['default'])(currentStepSelector + ', .-current').removeClass(currentStepClass + ' -current');
                    $nextStep.toggleClass('-current');
                    $nextStep.toggleClass(currentStepClass);
                }
                _prestashop2['default'].emit('changedCheckoutStep', {
                    event: event
                });
            });

            (0, _jquery2['default'])(currentStepSelector + ':not(#checkout-personal-information-step)').nextAll().on('click', function (event) {
                (0, _jquery2['default'])(currentStepSelector + ' button.continue').click();
                _prestashop2['default'].emit('changedCheckoutStep', {
                    event: event
                });
            });
        }

        (0, _jquery2['default'])(document).ready(function () {
            if ((0, _jquery2['default'])('#checkout').length === 1) {
                setUpCheckout();
            }
        });

        /***/
    },
    /* 6 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        var _common = __webpack_require__(7);

        var editAddress = (0, _common.psGetRequestParameter)('editAddress');
        var useSameAddress = (0, _common.psGetRequestParameter)('use_same_address');

        exports['default'] = function () {
            (0, _jquery2['default'])('.js-edit-addresses').on('click', function (event) {
                event.stopPropagation();
                (0, _jquery2['default'])('#checkout-addresses-step').trigger('click');
                _prestashop2['default'].emit('editAddress');
            });

            (0, _jquery2['default'])('#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]').on('click', function () {
                (0, _jquery2['default'])('.address-item').removeClass('selected');
                (0, _jquery2['default'])('.address-item:has(input[type=radio]:checked)').addClass('selected');

                var idFailureAddress = (0, _jquery2['default'])(".js-address-error").prop('id').split('-').pop();
                var notValidAddresses = (0, _jquery2['default'])('#not-valid-addresses').val();
                var addressType = this.name.split('_').pop();
                var $addressError = (0, _jquery2['default'])('.js-address-error[name=alert-' + addressType + ']');

                switchEditAddressButtonColor(false, idFailureAddress, addressType);

                if (notValidAddresses !== "" && editAddress === null) {
                    if (notValidAddresses.split(',').indexOf(this.value) >= 0) {
                        $addressError.show();
                        switchEditAddressButtonColor(true, this.value, addressType);
                        (0, _jquery2['default'])(".js-address-error").prop('id', "id-failure-address-" + this.value);
                    } else {
                        $addressError.hide();
                    }
                } else {
                    $addressError.hide();
                }

                var $visibleAddressError = (0, _jquery2['default'])('.js-address-error:visible');
                switchConfirmAddressesButtonState($visibleAddressError.length <= 0);
            });
        };

        (0, _jquery2['default'])(window).load(function () {
            var $visibleAddressError = (0, _jquery2['default'])('.js-address-error:visible');

            if (parseInt(useSameAddress) === 0) {
                (0, _jquery2['default'])('#invoice-addresses input[type=radio]:checked').trigger('click');
            }
            if (editAddress !== null || (0, _jquery2['default'])('.js-address-form:visible').length > 1) {
                $visibleAddressError.hide();
            }

            if ($visibleAddressError.length > 0) {
                (function () {
                    var idFailureAddress = (0, _jquery2['default'])(".js-address-error").prop('id').split('-').pop();

                    $visibleAddressError.each(function () {
                        switchEditAddressButtonColor(true, idFailureAddress, (0, _jquery2['default'])(this).attr('name').split('-').pop());
                    });
                })();
            }
            $visibleAddressError = (0, _jquery2['default'])('.js-address-error:visible'); // Refresh after possible hide
            switchConfirmAddressesButtonState($visibleAddressError.length <= 0);
        });

        /**
         * Change the color of the edit button for the wrong address
         * @param {Boolean} enabled
         * @param {Number} id
         * @param {String} type
         */
        var switchEditAddressButtonColor = function switchEditAddressButtonColor(enabled, id, type) {
            var color = "#7a7a7a";

            if (enabled) {
                (0, _jquery2['default'])('#' + type + '-addresses a.edit-address').prop('style', 'color: #7a7a7a !important');
                color = "#2fb5d2";
            }

            (0, _jquery2['default'])('#id-address-' + type + '-address-' + id + ' a.edit-address').prop('style', 'color: ' + color + ' !important');
        };

        /**
         * Enable/disable the continue address button
         */
        var switchConfirmAddressesButtonState = function switchConfirmAddressesButtonState(enable) {
            (0, _jquery2['default'])('button[name=confirm-addresses]').prop("disabled", !enable);
        };
        module.exports = exports['default'];

        /***/
    },
    /* 7 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        exports.psShowHide = psShowHide;
        exports.psGetRequestParameter = psGetRequestParameter;

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        function psShowHide() {
            (0, _jquery2['default'])('.ps-shown-by-js').show();
            (0, _jquery2['default'])('.ps-hidden-by-js').hide();
        }

        /**
         * This function returns the value of the requested parameter from the URL
         * @param {string} paramName - the name of the requested parameter
         * @returns {string|null|object}
         */

        function psGetRequestParameter(paramName) {
            var vars = {};
            window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function (m, key, value) {
                vars[key] = value !== undefined ? value : '';
            });
            if (paramName !== undefined) {
                return vars[paramName] ? vars[paramName] : null;
            }

            return vars;
        }

        /***/
    },
    /* 8 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        exports['default'] = function () {
            var $body = (0, _jquery2['default'])('body');
            var deliveryFormSelector = '#js-delivery';
            var summarySelector = '#js-checkout-summary';
            var deliveryStepSelector = '#checkout-delivery-step';
            var editDeliveryButtonSelector = '.js-edit-delivery';

            var updateDeliveryForm = function updateDeliveryForm(event) {
                var $deliveryMethodForm = (0, _jquery2['default'])(deliveryFormSelector);
                var requestData = $deliveryMethodForm.serialize();
                var $inputChecked = (0, _jquery2['default'])(event.currentTarget);
                var $newDeliveryOption = $inputChecked.parents("div.delivery-option");

                _jquery2['default'].post($deliveryMethodForm.data('url-update'), requestData).then(function (resp) {
                    (0, _jquery2['default'])(summarySelector).replaceWith(resp.preview);
                    _prestashop2['default'].emit('updatedDeliveryForm', {
                        dataForm: $deliveryMethodForm.serializeArray(),
                        deliveryOption: $newDeliveryOption,
                        resp: resp
                    });
                }).fail(function (resp) {
                    _prestashop2['default'].trigger('handleError', {
                        eventType: 'updateDeliveryOptions',
                        resp: resp
                    });
                });
            };

            $body.on('change', deliveryFormSelector + ' input', updateDeliveryForm);

            $body.on('click', editDeliveryButtonSelector, function (event) {
                event.stopPropagation();
                (0, _jquery2['default'])(deliveryStepSelector).trigger('click');
                _prestashop2['default'].emit('editDelivery');
            });
        };

        module.exports = exports['default'];

        /***/
    },
    /* 9 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var Payment = (function () {
            function Payment() {
                _classCallCheck(this, Payment);

                this.confirmationSelector = '#payment-confirmation';
                this.paymentSelector = '#payment-section';
                this.conditionsSelector = '#conditions-to-approve';
                this.conditionAlertSelector = '.js-alert-payment-conditions';
                this.additionalInformatonSelector = '.js-additional-information';
                this.optionsForm = '.js-payment-option-form';
            }

            _createClass(Payment, [{
                key: 'init',
                value: function init() {
                    (0, _jquery2['default'])(this.paymentSelector + ' input[type="checkbox"][disabled]').attr('disabled', false);

                    var $body = (0, _jquery2['default'])('body');

                    $body.on('change', this.conditionsSelector + ' input[type="checkbox"]', _jquery2['default'].proxy(this.toggleOrderButton, this));
                    $body.on('change', 'input[name="payment-option"]', _jquery2['default'].proxy(this.toggleOrderButton, this));
                    $body.on('click', this.confirmationSelector + ' button', _jquery2['default'].proxy(this.confirm, this));

                    this.collapseOptions();
                }
            }, {
                key: 'collapseOptions',
                value: function collapseOptions() {
                    (0, _jquery2['default'])(this.additionalInformatonSelector + ', ' + this.optionsForm).hide();
                }
            }, {
                key: 'getSelectedOption',
                value: function getSelectedOption() {
                    return (0, _jquery2['default'])('input[name="payment-option"]:checked').attr('id');
                }
            }, {
                key: 'hideConfirmation',
                value: function hideConfirmation() {
                    (0, _jquery2['default'])(this.confirmationSelector).hide();
                }
            }, {
                key: 'showConfirmation',
                value: function showConfirmation() {
                    (0, _jquery2['default'])(this.confirmationSelector).show();
                }
            }, {
                key: 'toggleOrderButton',
                value: function toggleOrderButton() {
                    var show = true;
                    (0, _jquery2['default'])(this.conditionsSelector + ' input[type="checkbox"]').each(function (_, checkbox) {
                        if (!checkbox.checked) {
                            show = false;
                        }
                    });

                    this.collapseOptions();

                    var selectedOption = this.getSelectedOption();
                    if (!selectedOption) {
                        show = false;
                    }

                    (0, _jquery2['default'])('#' + selectedOption + '-additional-information').show();
                    (0, _jquery2['default'])('#pay-with-' + selectedOption + '-form').show();

                    (0, _jquery2['default'])('.js-payment-binary').hide();
                    if ((0, _jquery2['default'])('#' + selectedOption).hasClass('binary')) {
                        var paymentOption = this.getPaymentOptionSelector(selectedOption);
                        this.hideConfirmation();
                        (0, _jquery2['default'])(paymentOption).show();

                        if (show) {
                            (0, _jquery2['default'])(paymentOption).removeClass('disabled');
                        } else {
                            (0, _jquery2['default'])(paymentOption).addClass('disabled');
                        }
                    } else {
                        this.showConfirmation();
                        (0, _jquery2['default'])(this.confirmationSelector + ' button').attr('disabled', !show);

                        if (show) {
                            (0, _jquery2['default'])(this.conditionAlertSelector).hide();
                        } else {
                            (0, _jquery2['default'])(this.conditionAlertSelector).show();
                        }
                    }
                }
            }, {
                key: 'getPaymentOptionSelector',
                value: function getPaymentOptionSelector(option) {
                    var moduleName = (0, _jquery2['default'])('#' + option).data('module-name');

                    return '.js-payment-' + moduleName;
                }
            }, {
                key: 'confirm',
                value: function confirm() {
                    var option = this.getSelectedOption();
                    if (option) {
                        (0, _jquery2['default'])('#pay-with-' + option + '-form form').submit();
                    }
                }
            }]);

            return Payment;
        })();

        exports['default'] = function () {
            var payment = new Payment();
            payment.init();

            return payment;
        };

        module.exports = exports['default'];

        /***/
    },
    /* 10 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var pendingQuery = false;

        function updateResults(data) {
            pendingQuery = false;
            prestashop.emit('updateProductList', data);
            window.history.pushState(data, document.title, data.current_url);
            window.scrollTo(0, 0);
        }

        function handleError() {
            // TODO: feedback
            pendingQuery = false;
        }

        function makeQuery(url) {
            if (pendingQuery) {
                // wait for current results
            } else {

                // We need to add a parameter to the URL
                // to make it different from the one we're on,
                // otherwise when you do "duplicate tab" under chrome
                // it mixes up the cache between the AJAX request (that
                // returns JSON) and the non-AJAX request (that returns
                // HTML) and you just get a mess of JSON on the duplicated tab.

                var slightlyDifferentURL = [url, url.indexOf('?') >= 0 ? '&' : '?', 'from-xhr'].join('');

                _jquery2['default'].get(slightlyDifferentURL, null, null, 'json').then(updateResults).fail(handleError);
            }
        }

        (0, _jquery2['default'])(document).ready(function () {
            prestashop.on('updateFacets', function (param) {
                makeQuery(param);
            });
        });

        /***/
    },
    /* 11 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        (0, _jquery2['default'])(document).ready(function () {
            (0, _jquery2['default'])('body').on('click', '.quick-view', function (event) {
                _prestashop2['default'].emit('clickQuickView', {
                    dataset: (0, _jquery2['default'])(event.target).closest('.js-product-miniature').data()
                });
                event.preventDefault();
            });
        });

        /***/
    },
    /* 12 */
    /***/
    function (module, exports, __webpack_require__) {

        /**
         * 2007-2018 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * https://opensource.org/licenses/OSL-3.0
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2018 PrestaShop SA
         * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        var _common = __webpack_require__(7);

        // Used to be able to abort request if user modify something
        var currentRequest = null;

        // Used to clearTimeout if user flood the product quantity input
        var currentRequestDelayedId = null;

        /**
         * Get product update URL from different
         * sources if needed (for compatibility)
         *
         * @return {Promise}
         */
        function getProductUpdateUrl() {
            var dfd = _jquery2['default'].Deferred();
            var $productActions = (0, _jquery2['default'])('.product-actions');
            var $quantityWantedInput = (0, _jquery2['default'])('#quantity_wanted');

            if (_prestashop2['default'] !== null && _prestashop2['default'].urls !== null && _prestashop2['default'].urls.pages !== null && _prestashop2['default'].urls.pages.product !== '' && _prestashop2['default'].urls.pages.product !== null) {
                dfd.resolve(_prestashop2['default'].urls.pages.product);

                return dfd.promise();
            }
            var formData = {};

            (0, _jquery2['default'])($productActions.find('form:first').serializeArray()).each(function (k, v) {
                formData[v.name] = v.value;
            });

            _jquery2['default'].ajax({
                url: $productActions.find('form:first').attr('action'),
                method: 'POST',
                data: Object.assign({
                    ajax: 1,
                    action: 'productrefresh',
                    quantity_wanted: $quantityWantedInput.val()
                }, formData),
                dataType: 'json',
                success: function success(data) {
                    var productUpdateUrl = data.productUrl;
                    _prestashop2['default'].page.canonical = productUpdateUrl;
                    dfd.resolve(productUpdateUrl);
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                    dfd.reject({
                        "jqXHR": jqXHR,
                        "textStatus": textStatus,
                        "errorThrown": errorThrown
                    });
                }
            });

            return dfd.promise();
        }

        /**
         * Update the product html
         *
         * @param {string} event
         * @param {string} eventType
         * @param {string} updateUrl
         */
        function updateProduct(event, eventType, updateUrl) {
            var $productActions = (0, _jquery2['default'])('.product-actions');
            var $quantityWantedInput = $productActions.find('#quantity_wanted:first');
            var formSerialized = $productActions.find('form:first').serialize();
            var preview = (0, _common.psGetRequestParameter)('preview');

            if (preview !== null) {
                preview = '&preview=' + preview;
            } else {
                preview = '';
            }

            // Can not get product ajax url
            if (updateUrl === null) {
                showError((0, _jquery2['default'])('#product-availability'), 'An error occurred while processing your request');

                return;
            }

            // New request only if new value
            if (event && event.type === 'keyup' && $quantityWantedInput.val() === $quantityWantedInput.data('old-value')) {
                return;
            }
            $quantityWantedInput.data('old-value', $quantityWantedInput.val());

            if (currentRequestDelayedId) {
                clearTimeout(currentRequestDelayedId);
            }

            currentRequestDelayedId = setTimeout((function updateProductRequest() {
                currentRequest = _jquery2['default'].ajax({
                    url: updateUrl + '?' + formSerialized + preview,
                    method: 'POST',
                    data: {
                        ajax: 1,
                        action: 'refresh',
                        quantity_wanted: $quantityWantedInput.val()
                    },
                    dataType: 'json',
                    beforeSend: function beforeSend() {
                        if (currentRequest !== null) {
                            currentRequest.abort();
                        }
                    },
                    error: function error(jqXHR, textStatus, errorThrown) {
                        if (textStatus !== 'abort' && (0, _jquery2['default'])('section#main > .ajax-error').length === 0) {
                            showError((0, _jquery2['default'])('#product-availability'), 'An error occurred while processing your request');
                        }
                    },
                    success: function success(data, textStatus, errorThrown) {
                        // Avoid image to blink each time we modify the product quantity
                        // Can not compare directly cause of HTML comments in data.
                        var $newImagesContainer = (0, _jquery2['default'])('<div>').append(data.product_cover_thumbnails);

                        // Used to avoid image blinking if same image = epileptic friendly
                        if ((0, _jquery2['default'])('.images-container').html() !== $newImagesContainer.find('.images-container').html()) {
                            (0, _jquery2['default'])('.images-container').replaceWith(data.product_cover_thumbnails);
                        }
                        (0, _jquery2['default'])('.product-prices').replaceWith(data.product_prices);
                        (0, _jquery2['default'])('.product-customization').replaceWith(data.product_customization);
                        (0, _jquery2['default'])('.product-variants').replaceWith(data.product_variants);
                        (0, _jquery2['default'])('.product-discounts').replaceWith(data.product_discounts);
                        (0, _jquery2['default'])('.product-additional-info').replaceWith(data.product_additional_info);
                        (0, _jquery2['default'])('#product-details').replaceWith(data.product_details);
                        replaceAddToCartSections(data);
                        var minimalProductQuantity = parseInt(data.product_minimal_quantity, 10);

                        // Prevent quantity input from blinking with classic theme.
                        if (!isNaN(minimalProductQuantity) && $quantityWantedInput.val() < minimalProductQuantity && eventType !== 'updatedProductQuantity') {
                            $quantityWantedInput.attr('min', minimalProductQuantity);
                            $quantityWantedInput.val(minimalProductQuantity);
                        }
                        _prestashop2['default'].emit('updatedProduct', data);
                    },
                    complete: function complete(jqXHR, textStatus) {
                        currentRequest = null;
                        currentRequestDelayedId = null;
                    }
                });
            }).bind(currentRequest, currentRequestDelayedId), 250);
        }

        /**
         * Replace all "add to cart" sections but the quantity input
         * in order to keep quantity field intact i.e.
         *
         * @param {object} data of updated product and cat
         */
        function replaceAddToCartSections(data) {
            var $productAddToCart = null;

            (0, _jquery2['default'])(data.product_add_to_cart).each(function (index, value) {
                if ((0, _jquery2['default'])(value).hasClass('product-add-to-cart')) {
                    $productAddToCart = (0, _jquery2['default'])(value);

                    return false;
                }
            });

            if ($productAddToCart === null) {
                showError((0, _jquery2['default'])('#product-availability'), 'An error occurred while processing your request');
            }
            var $addProductToCart = (0, _jquery2['default'])('.product-add-to-cart');
            var productAvailabilitySelector = '.add';
            var productAvailabilityMessageSelector = '#product-availability';
            var productMinimalQuantitySelector = '.product-minimal-quantity';

            replaceAddToCartSection({
                $addToCartSnippet: $productAddToCart,
                $targetParent: $addProductToCart,
                targetSelector: productAvailabilitySelector
            });

            replaceAddToCartSection({
                $addToCartSnippet: $productAddToCart,
                $targetParent: $addProductToCart,
                targetSelector: productAvailabilityMessageSelector
            });

            replaceAddToCartSection({
                $addToCartSnippet: $productAddToCart,
                $targetParent: $addProductToCart,
                targetSelector: productMinimalQuantitySelector
            });
        }

        /**
         * Find DOM elements and replace their content
         *
         * @param {object} replacement Data to be replaced on the current page
         */
        function replaceAddToCartSection(replacement) {
            var destinationObject = (0, _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector));
            if (destinationObject.length <= 0) {
                return;
            }
            var replace = replacement.$addToCartSnippet.find(replacement.targetSelector);

            if (replace.length > 0) {
                destinationObject.replaceWith(replace[0].outerHTML);
            } else {
                destinationObject.html('');
            }
        }

        /**
         * @param {jQuery} $container
         * @param {string} textError
         */
        function showError($container, textError) {
            var $error = (0, _jquery2['default'])('<div class="alert alert-danger ajax-error" role="alert">' + textError + '</div>');
            $container.replaceWith($error);
        }

        (0, _jquery2['default'])(document).ready(function () {
            // Listen on all form elements + those who have a data-product-attribute
            (0, _jquery2['default'])('body').on('change touchspin.on.startspin', '.product-variants *[name]', function (e) {
                _prestashop2['default'].emit('updateProduct', {
                    eventType: 'updatedProductCombination',
                    event: e,
                    // Following variables are not used anymore, but kept for backward compatibility
                    resp: {},
                    reason: {
                        productUrl: _prestashop2['default'].urls.pages.product || ''
                    }
                });
            });

            /**
             * Button has been removed on classic theme, but event triggering has been kept for compatibility
             */
            (0, _jquery2['default'])('body').on('click', '.product-refresh', function (e, extraParameters) {
                e.preventDefault();
                var eventType = 'updatedProductCombination';

                if (typeof extraParameters !== 'undefined' && extraParameters.eventType) {
                    eventType = extraParameters.eventType;
                }
                _prestashop2['default'].emit('updateProduct', {
                    eventType: eventType,
                    event: e,
                    // Following variables are not used anymore, but kept for backward compatibility
                    resp: {},
                    reason: {
                        productUrl: _prestashop2['default'].urls.pages.product || ''
                    }
                });
            });

            // Refresh all the product content
            _prestashop2['default'].on('updateProduct', function (args) {
                var eventType = args.eventType;
                var event = args.event;

                getProductUpdateUrl().done(function (productUpdateUrl) {
                    return updateProduct(event, eventType, productUpdateUrl);
                }).fail(function () {
                    if ((0, _jquery2['default'])('section#main > .ajax-error').length === 0) {
                        showError((0, _jquery2['default'])('#product-availability'), 'An error occurred while processing your request');
                    }
                });
            });

            _prestashop2['default'].on('updatedProduct', function (args) {
                if (!args.product_url || !args.id_product_attribute) {
                    return;
                }
                window.history.pushState({
                    id_product_attribute: args.id_product_attribute
                }, document.title, args.product_url);
            });
        });

        /***/
    },
    /* 13 */
    /***/
    function (module, exports, __webpack_require__) {

        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            };
        }

        var _jquery = __webpack_require__(2);

        var _jquery2 = _interopRequireDefault(_jquery);

        var _prestashop = __webpack_require__(4);

        var _prestashop2 = _interopRequireDefault(_prestashop);

        /**
         * Update address form on country change
         * Emit "addressFormUpdated" event
         *
         * @param selectors
         */
        function handleCountryChange(selectors) {
            (0, _jquery2['default'])('body').on('change', selectors.country, function () {
                var requestData = {
                    id_country: (0, _jquery2['default'])(selectors.country).val(),
                    id_address: (0, _jquery2['default'])(selectors.address + ' form').data('id-address')
                };
                var getFormViewUrl = (0, _jquery2['default'])(selectors.address + ' form').data('refresh-url');
                var formFieldsSelector = selectors.address + ' input';

                _jquery2['default'].post(getFormViewUrl, requestData).then(function (resp) {
                    var inputs = [];

                    // Store fields values before updating form
                    (0, _jquery2['default'])(formFieldsSelector).each(function () {
                        inputs[(0, _jquery2['default'])(this).prop('name')] = (0, _jquery2['default'])(this).val();
                    });

                    (0, _jquery2['default'])(selectors.address).replaceWith(resp.address_form);

                    // Restore fields values
                    (0, _jquery2['default'])(formFieldsSelector).each(function () {
                        (0, _jquery2['default'])(this).val(inputs[(0, _jquery2['default'])(this).prop('name')]);
                    });

                    _prestashop2['default'].emit('updatedAddressForm', {
                        target: (0, _jquery2['default'])(selectors.address),
                        resp: resp
                    });
                }).fail(function (resp) {
                    _prestashop2['default'].emit('handleError', {
                        eventType: 'updateAddressForm',
                        resp: resp
                    });
                });
            });
        }

        (0, _jquery2['default'])(document).ready(function () {
            handleCountryChange({
                'country': '.js-country',
                'address': '.js-address-form'
            });
        });

        /***/
    },
    /* 14 */
    /***/
    function (module, exports) {

        /**
         * 2007-2017 PrestaShop
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Open Software License (OSL 3.0)
         * that is bundled with this package in the file LICENSE.txt.
         * It is also available through the world-wide-web at this URL:
         * http://opensource.org/licenses/osl-3.0.php
         * If you did not receive a copy of the license and are unable to
         * obtain it through the world-wide-web, please send an email
         * to license@prestashop.com so we can send you a copy immediately.
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
         * versions in the future. If you wish to customize PrestaShop for your
         * needs please refer to http://www.prestashop.com for more information.
         *
         * @author    PrestaShop SA <contact@prestashop.com>
         * @copyright 2007-2017 PrestaShop SA
         * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
         * International Registered Trademark & Property of PrestaShop SA
         */
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        'use strict';

        function EventEmitter() {
            this._events = this._events || {};
            this._maxListeners = this._maxListeners || undefined;
        }
        module.exports = EventEmitter;

        // Backwards-compat with node 0.10.x
        EventEmitter.EventEmitter = EventEmitter;

        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;

        // By default EventEmitters will print a warning if more than 10 listeners are
        // added to it. This is a useful default which helps finding memory leaks.
        EventEmitter.defaultMaxListeners = 10;

        // Obviously not all Emitters should be limited to 10. This function allows
        // that to be increased. Set to zero for unlimited.
        EventEmitter.prototype.setMaxListeners = function (n) {
            if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
            this._maxListeners = n;
            return this;
        };

        EventEmitter.prototype.emit = function (type) {
            var er, handler, len, args, i, listeners;

            if (!this._events) this._events = {};

            // If there is no 'error' event listener then throw.
            if (type === 'error') {
                if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                    er = arguments[1];
                    if (er instanceof Error) {
                        throw er; // Unhandled 'error' event
                    } else {
                        // At least give some kind of context to the user
                        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                        err.context = er;
                        throw err;
                    }
                }
            }

            handler = this._events[type];

            if (isUndefined(handler)) return false;

            if (isFunction(handler)) {
                switch (arguments.length) {
                    // fast cases
                    case 1:
                        handler.call(this);
                        break;
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                        // slower
                    default:
                        args = Array.prototype.slice.call(arguments, 1);
                        handler.apply(this, args);
                }
            } else if (isObject(handler)) {
                args = Array.prototype.slice.call(arguments, 1);
                listeners = handler.slice();
                len = listeners.length;
                for (i = 0; i < len; i++) listeners[i].apply(this, args);
            }

            return true;
        };

        EventEmitter.prototype.addListener = function (type, listener) {
            var m;

            if (!isFunction(listener)) throw TypeError('listener must be a function');

            if (!this._events) this._events = {};

            // To avoid recursion in the case that type === "newListener"! Before
            // adding it to the listeners, first emit "newListener".
            if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

            if (!this._events[type])
                // Optimize the case of one listener. Don't need the extra array object.
                this._events[type] = listener;
            else if (isObject(this._events[type]))
                // If we've already got an array, just append.
                this._events[type].push(listener);
            else
                // Adding the second element, need to change to array.
                this._events[type] = [this._events[type], listener];

            // Check for listener leak
            if (isObject(this._events[type]) && !this._events[type].warned) {
                if (!isUndefined(this._maxListeners)) {
                    m = this._maxListeners;
                } else {
                    m = EventEmitter.defaultMaxListeners;
                }

                if (m && m > 0 && this._events[type].length > m) {
                    this._events[type].warned = true;
                    console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                    if (typeof console.trace === 'function') {
                        // not supported in IE 10
                        console.trace();
                    }
                }
            }

            return this;
        };

        EventEmitter.prototype.on = EventEmitter.prototype.addListener;

        EventEmitter.prototype.once = function (type, listener) {
            if (!isFunction(listener)) throw TypeError('listener must be a function');

            var fired = false;

            function g() {
                this.removeListener(type, g);

                if (!fired) {
                    fired = true;
                    listener.apply(this, arguments);
                }
            }

            g.listener = listener;
            this.on(type, g);

            return this;
        };

        // emits a 'removeListener' event iff the listener was removed
        EventEmitter.prototype.removeListener = function (type, listener) {
            var list, position, length, i;

            if (!isFunction(listener)) throw TypeError('listener must be a function');

            if (!this._events || !this._events[type]) return this;

            list = this._events[type];
            length = list.length;
            position = -1;

            if (list === listener || isFunction(list.listener) && list.listener === listener) {
                delete this._events[type];
                if (this._events.removeListener) this.emit('removeListener', type, listener);
            } else if (isObject(list)) {
                for (i = length; i-- > 0;) {
                    if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                        position = i;
                        break;
                    }
                }

                if (position < 0) return this;

                if (list.length === 1) {
                    list.length = 0;
                    delete this._events[type];
                } else {
                    list.splice(position, 1);
                }

                if (this._events.removeListener) this.emit('removeListener', type, listener);
            }

            return this;
        };

        EventEmitter.prototype.removeAllListeners = function (type) {
            var key, listeners;

            if (!this._events) return this;

            // not listening for removeListener, no need to emit
            if (!this._events.removeListener) {
                if (arguments.length === 0) this._events = {};
                else if (this._events[type]) delete this._events[type];
                return this;
            }

            // emit removeListener for all listeners on all events
            if (arguments.length === 0) {
                for (key in this._events) {
                    if (key === 'removeListener') continue;
                    this.removeAllListeners(key);
                }
                this.removeAllListeners('removeListener');
                this._events = {};
                return this;
            }

            listeners = this._events[type];

            if (isFunction(listeners)) {
                this.removeListener(type, listeners);
            } else if (listeners) {
                // LIFO order
                while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
            }
            delete this._events[type];

            return this;
        };

        EventEmitter.prototype.listeners = function (type) {
            var ret;
            if (!this._events || !this._events[type]) ret = [];
            else if (isFunction(this._events[type])) ret = [this._events[type]];
            else ret = this._events[type].slice();
            return ret;
        };

        EventEmitter.prototype.listenerCount = function (type) {
            if (this._events) {
                var evlistener = this._events[type];

                if (isFunction(evlistener)) return 1;
                else if (evlistener) return evlistener.length;
            }
            return 0;
        };

        EventEmitter.listenerCount = function (emitter, type) {
            return emitter.listenerCount(type);
        };

        function isFunction(arg) {
            return typeof arg === 'function';
        }

        function isNumber(arg) {
            return typeof arg === 'number';
        }

        function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
        }

        function isUndefined(arg) {
            return arg === void 0;
        }

        /***/
    }
    /******/
]);


! function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    t.exports = n(1)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    n(2), n(4), n(5), n(6), n(7), n(10), n(11), n(12), n(15), n(16);
    var r = n(17),
        o = i(r),
        a = n(18),
        s = i(a),
        l = n(14),
        u = i(l),
        c = n(19),
        f = i(c),
        d = n(20),
        p = i(d),
        h = n(9),
        m = i(h),
        g = n(21),
        y = i(g);
    n(22), n(23), n(24);
    for (var v in y.default.prototype) m.default[v] = y.default.prototype[v];
    $(document).ready(function () {
        var t = $(".js-dropdown"),
            e = new s.default,
            n = $('.js-top-menu ul[data-depth="0"]'),
            i = new o.default(t),
            r = new p.default(n),
            a = new u.default,
            l = new f.default;
        i.init(), e.init(), r.init(), a.init(), l.init()
    })
}, function (t, e, n) {
    (function (e) {
        t.exports = e.Tether = n(3)
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    var i, r;
    ! function (o, a) {
        i = a, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function (t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t) {
            var e = t.getBoundingClientRect(),
                n = {};
            for (var i in e) n[i] = e[i];
            if (t.ownerDocument !== document) {
                var o = t.ownerDocument.defaultView.frameElement;
                if (o) {
                    var a = r(o);
                    n.top += a.top, n.bottom += a.top, n.left += a.left, n.right += a.left
                }
            }
            return n
        }

        function o(t) {
            var e = getComputedStyle(t) || {},
                n = e.position,
                i = [];
            if ("fixed" === n) return [t];
            for (var r = t;
                (r = r.parentNode) && r && 1 === r.nodeType;) {
                var o = void 0;
                try {
                    o = getComputedStyle(r)
                } catch (t) {}
                if ("undefined" == typeof o || null === o) return i.push(r), i;
                var a = o,
                    s = a.overflow,
                    l = a.overflowX,
                    u = a.overflowY;
                /(auto|scroll)/.test(s + u + l) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && i.push(r)
            }
            return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
        }

        function a() {
            C && document.body.removeChild(C), C = null
        }

        function s(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var n = e.documentElement,
                i = r(t),
                o = I();
            return i.top -= o.top, i.left -= o.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
        }

        function l(t) {
            return t.offsetParent || document.documentElement
        }

        function u() {
            if (O) return O;
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            c(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var n = t.offsetWidth;
            e.style.overflow = "scroll";
            var i = t.offsetWidth;
            n === i && (i = e.clientWidth), document.body.removeChild(e);
            var r = n - i;
            return O = {
                width: r,
                height: r
            }
        }

        function c() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
                if (e)
                    for (var n in e)({}).hasOwnProperty.call(e, n) && (t[n] = e[n])
            }), t
        }

        function f(t, e) {
            if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
                e.trim() && t.classList.remove(e)
            });
            else {
                var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                    i = h(t).replace(n, " ");
                m(t, i)
            }
        }

        function d(t, e) {
            if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
                e.trim() && t.classList.add(e)
            });
            else {
                f(t, e);
                var n = h(t) + (" " + e);
                m(t, n)
            }
        }

        function p(t, e) {
            if ("undefined" != typeof t.classList) return t.classList.contains(e);
            var n = h(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(n)
        }

        function h(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }

        function m(t, e) {
            t.setAttribute("class", e)
        }

        function g(t, e, n) {
            n.forEach(function (n) {
                e.indexOf(n) === -1 && p(t, n) && f(t, n)
            }), e.forEach(function (e) {
                p(t, e) || d(t, e)
            })
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function y(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function v(t, e) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + n >= e && e >= t - n
        }

        function b() {
            return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
        }

        function _() {
            for (var t = {
                    top: 0,
                    left: 0
                }, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return n.forEach(function (e) {
                var n = e.top,
                    i = e.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += n, t.left += i
            }), t
        }

        function x(t, e) {
            return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }

        function S(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function () {
                var t = e,
                    n = s(e),
                    i = n,
                    r = getComputedStyle(e);
                if (e = [i.left, i.top, n.width + i.left, n.height + i.top], t.ownerDocument !== document) {
                    var o = t.ownerDocument.defaultView;
                    e[0] += o.pageXOffset, e[1] += o.pageYOffset, e[2] += o.pageXOffset, e[3] += o.pageYOffset
                }
                Y.forEach(function (t, n) {
                    t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[n] += parseFloat(r["border" + t + "Width"]) : e[n] -= parseFloat(r["border" + t + "Width"])
                })
            }(), e
        }
        var w = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            E = void 0;
        "undefined" == typeof E && (E = {
            modules: []
        });
        var C = null,
            T = function () {
                var t = 0;
                return function () {
                    return ++t
                }
            }(),
            A = {},
            I = function () {
                var t = C;
                t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), c(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(t), C = t);
                var e = t.getAttribute("data-tether-id");
                return "undefined" == typeof A[e] && (A[e] = r(t), D(function () {
                    delete A[e]
                })), A[e]
            },
            O = null,
            k = [],
            D = function (t) {
                k.push(t)
            },
            N = function () {
                for (var t = void 0; t = k.pop();) t()
            },
            P = function () {
                function t() {
                    i(this, t)
                }
                return w(t, [{
                    key: "on",
                    value: function (t, e, n) {
                        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                            handler: e,
                            ctx: n,
                            once: i
                        })
                    }
                }, {
                    key: "once",
                    value: function (t, e, n) {
                        this.on(t, e, n, !0)
                    }
                }, {
                    key: "off",
                    value: function (t, e) {
                        if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                            if ("undefined" == typeof e) delete this.bindings[t];
                            else
                                for (var n = 0; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function (t) {
                        if ("undefined" != typeof this.bindings && this.bindings[t]) {
                            for (var e = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            for (; e < this.bindings[t].length;) {
                                var o = this.bindings[t][e],
                                    a = o.handler,
                                    s = o.ctx,
                                    l = o.once,
                                    u = s;
                                "undefined" == typeof u && (u = this), a.apply(u, i), l ? this.bindings[t].splice(e, 1) : ++e
                            }
                        }
                    }
                }]), t
            }();
        E.Utils = {
            getActualBoundingClientRect: r,
            getScrollParents: o,
            getBounds: s,
            getOffsetParent: l,
            extend: c,
            addClass: d,
            removeClass: f,
            hasClass: p,
            updateClasses: g,
            defer: D,
            flush: N,
            uniqueId: T,
            Evented: P,
            getScrollBarSize: u,
            removeUtilElements: a
        };
        var L = function () {
                function t(t, e) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        r = !0, o = t
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }
                return function (e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            w = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            j = function (t, e, n) {
                for (var i = !0; i;) {
                    var r = t,
                        o = e,
                        a = n;
                    i = !1, null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a)
                    }
                    var u = Object.getPrototypeOf(r);
                    if (null === u) return;
                    t = u, e = o, n = a, i = !0, s = u = void 0
                }
            };
        if ("undefined" == typeof E) throw new Error("You must include the utils.js file before tether.js");
        var B = E.Utils,
            o = B.getScrollParents,
            s = B.getBounds,
            l = B.getOffsetParent,
            c = B.extend,
            d = B.addClass,
            f = B.removeClass,
            g = B.updateClasses,
            D = B.defer,
            N = B.flush,
            u = B.getScrollBarSize,
            a = B.removeUtilElements,
            V = function () {
                if ("undefined" == typeof document) return "";
                for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (void 0 !== t.style[i]) return i
                }
            }(),
            F = [],
            R = function () {
                F.forEach(function (t) {
                    t.position(!1)
                }), N()
            };
        ! function () {
            var t = null,
                e = null,
                n = null,
                i = function i() {
                    return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(n = setTimeout(i, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != n && (clearTimeout(n), n = null), t = b(), R(), e = b() - t))
                };
            "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
                window.addEventListener(t, i)
            })
        }();
        var M = {
                center: "center",
                left: "right",
                right: "left"
            },
            H = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            W = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            U = function (t, e) {
                var n = t.left,
                    i = t.top;
                return "auto" === n && (n = M[e.left]), "auto" === i && (i = H[e.top]), {
                    left: n,
                    top: i
                }
            },
            z = function (t) {
                var e = t.left,
                    n = t.top;
                return "undefined" != typeof W[t.left] && (e = W[t.left]), "undefined" != typeof W[t.top] && (n = W[t.top]), {
                    left: e,
                    top: n
                }
            },
            $ = function (t) {
                var e = t.split(" "),
                    n = L(e, 2),
                    i = n[0],
                    r = n[1];
                return {
                    top: i,
                    left: r
                }
            },
            q = $,
            Q = function (t) {
                function e(t) {
                    var n = this;
                    i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), F.push(this), this.history = [], this.setOptions(t, !1), E.modules.forEach(function (t) {
                        "undefined" != typeof t.initialize && t.initialize.call(n)
                    }), this.position()
                }
                return y(e, t), w(e, [{
                    key: "getClass",
                    value: function () {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            e = this.options.classes;
                        return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                    }
                }, {
                    key: "setOptions",
                    value: function (t) {
                        var e = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            i = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = c(i, t);
                        var r = this.options,
                            a = r.element,
                            s = r.target,
                            l = r.targetModifier;
                        if (this.element = a, this.target = s, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
                                if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                                "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                            }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = $(this.options.offset), this.targetOffset = $(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = o(this.target), this.options.enabled !== !1 && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function () {
                        if ("undefined" == typeof this.targetModifier) return s(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var t = s(this.target),
                                e = {
                                    height: t.height,
                                    width: t.width,
                                    top: t.top,
                                    left: t.left
                                };
                            return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var t = void 0,
                                n = this.target;
                            n === document.body ? (n = document.documentElement, t = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : t = s(n);
                            var i = getComputedStyle(n),
                                r = n.scrollWidth > n.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                o = 0;
                            r && (o = 15);
                            var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - o,
                                e = {
                                    width: 15,
                                    height: .975 * a * (a / n.scrollHeight),
                                    left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                                },
                                l = 0;
                            a < 408 && this.target === document.body && (l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                            var u = this.target.scrollTop / (n.scrollHeight - a);
                            return e.top = u * (a - e.height - l) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function () {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function (t, e) {
                        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                    }
                }, {
                    key: "enable",
                    value: function () {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
                            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                        }), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function () {
                        var t = this;
                        f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
                            e.removeEventListener("scroll", t.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        var t = this;
                        this.disable(), F.forEach(function (e, n) {
                            e === t && F.splice(n, 1)
                        }), 0 === F.length && a()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function (t, e) {
                        var n = this;
                        t = t || this.attachment, e = e || this.targetAttachment;
                        var i = ["left", "top", "bottom", "right", "middle", "center"];
                        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                        var r = this._addAttachClasses;
                        t.top && r.push(this.getClass("element-attached") + "-" + t.top), t.left && r.push(this.getClass("element-attached") + "-" + t.left), e.top && r.push(this.getClass("target-attached") + "-" + e.top), e.left && r.push(this.getClass("target-attached") + "-" + e.left);
                        var o = [];
                        i.forEach(function (t) {
                            o.push(n.getClass("element-attached") + "-" + t), o.push(n.getClass("target-attached") + "-" + t)
                        }), D(function () {
                            "undefined" != typeof n._addAttachClasses && (g(n.element, n._addAttachClasses, o), n.options.addTargetClasses !== !1 && g(n.target, n._addAttachClasses, o), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function () {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = U(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var i = this.cache("element-bounds", function () {
                                    return s(t.element)
                                }),
                                r = i.width,
                                o = i.height;
                            if (0 === r && 0 === o && "undefined" != typeof this.lastSize) {
                                var a = this.lastSize;
                                r = a.width, o = a.height
                            } else this.lastSize = {
                                width: r,
                                height: o
                            };
                            var c = this.cache("target-bounds", function () {
                                    return t.getTargetBounds()
                                }),
                                f = c,
                                d = x(z(this.attachment), {
                                    width: r,
                                    height: o
                                }),
                                p = x(z(n), f),
                                h = x(this.offset, {
                                    width: r,
                                    height: o
                                }),
                                m = x(this.targetOffset, f);
                            d = _(d, h), p = _(p, m);
                            for (var g = c.left + p.left - d.left, y = c.top + p.top - d.top, v = 0; v < E.modules.length; ++v) {
                                var b = E.modules[v],
                                    S = b.position.call(this, {
                                        left: g,
                                        top: y,
                                        targetAttachment: n,
                                        targetPos: c,
                                        elementPos: i,
                                        offset: d,
                                        targetOffset: p,
                                        manualOffset: h,
                                        manualTargetOffset: m,
                                        scrollbarSize: A,
                                        attachment: this.attachment
                                    });
                                if (S === !1) return !1;
                                "undefined" != typeof S && "object" == typeof S && (y = S.top, g = S.left)
                            }
                            var w = {
                                    page: {
                                        top: y,
                                        left: g
                                    },
                                    viewport: {
                                        top: y - pageYOffset,
                                        bottom: pageYOffset - y - o + innerHeight,
                                        left: g - pageXOffset,
                                        right: pageXOffset - g - r + innerWidth
                                    }
                                },
                                C = this.target.ownerDocument,
                                T = C.defaultView,
                                A = void 0;
                            return T.innerHeight > C.documentElement.clientHeight && (A = this.cache("scrollbar-size", u), w.viewport.bottom -= A.height), T.innerWidth > C.documentElement.clientWidth && (A = this.cache("scrollbar-size", u), w.viewport.right -= A.width), ["", "static"].indexOf(C.body.style.position) !== -1 && ["", "static"].indexOf(C.body.parentElement.style.position) !== -1 || (w.page.bottom = C.body.scrollHeight - y - o, w.page.right = C.body.scrollWidth - g - r), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function () {
                                var e = t.cache("target-offsetparent", function () {
                                        return l(t.target)
                                    }),
                                    n = t.cache("target-offsetparent-bounds", function () {
                                        return s(e)
                                    }),
                                    i = getComputedStyle(e),
                                    r = n,
                                    o = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                                        o[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                    }), n.right = C.body.scrollWidth - n.left - r.width + o.right, n.bottom = C.body.scrollHeight - n.top - r.height + o.bottom, w.page.top >= n.top + o.top && w.page.bottom >= n.bottom && w.page.left >= n.left + o.left && w.page.right >= n.right) {
                                    var a = e.scrollTop,
                                        u = e.scrollLeft;
                                    w.offset = {
                                        top: w.page.top - n.top + a - o.top,
                                        left: w.page.left - n.left + u - o.left
                                    }
                                }
                            }(), this.move(w), this.history.unshift(w), this.history.length > 3 && this.history.pop(), e && N(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function (t) {
                        var e = this;
                        if ("undefined" != typeof this.element.parentNode) {
                            var n = {};
                            for (var i in t) {
                                n[i] = {};
                                for (var r in t[i]) {
                                    for (var o = !1, a = 0; a < this.history.length; ++a) {
                                        var s = this.history[a];
                                        if ("undefined" != typeof s[i] && !v(s[i][r], t[i][r])) {
                                            o = !0;
                                            break
                                        }
                                    }
                                    o || (n[i][r] = !0)
                                }
                            }
                            var u = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                f = function (t, n) {
                                    var i = "undefined" != typeof e.options.optimizations,
                                        r = i ? e.options.optimizations.gpu : null;
                                    if (r !== !1) {
                                        var o = void 0,
                                            a = void 0;
                                        if (t.top ? (u.top = 0, o = n.top) : (u.bottom = 0, o = -n.bottom), t.left ? (u.left = 0, a = n.left) : (u.right = 0, a = -n.right), window.matchMedia) {
                                            var s = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                            s || (a = Math.round(a), o = Math.round(o))
                                        }
                                        u[V] = "translateX(" + a + "px) translateY(" + o + "px)", "msTransform" !== V && (u[V] += " translateZ(0)")
                                    } else t.top ? u.top = n.top + "px" : u.bottom = n.bottom + "px", t.left ? u.left = n.left + "px" : u.right = n.right + "px"
                                },
                                d = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (u.position = "absolute", f(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (u.position = "fixed", f(n.viewport, t.viewport)) : "undefined" != typeof n.offset && n.offset.top && n.offset.left ? ! function () {
                                    u.position = "absolute";
                                    var i = e.cache("target-offsetparent", function () {
                                        return l(e.target)
                                    });
                                    l(e.element) !== i && D(function () {
                                        e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                    }), f(n.offset, t.offset), d = !0
                                }() : (u.position = "absolute", f({
                                    top: !0,
                                    left: !0
                                }, t.page)), !d)
                                if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                                else {
                                    for (var p = !0, h = this.element.parentNode; h && 1 === h.nodeType && "BODY" !== h.tagName;) {
                                        if ("static" !== getComputedStyle(h).position) {
                                            p = !1;
                                            break
                                        }
                                        h = h.parentNode
                                    }
                                    p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                                } var m = {},
                                g = !1;
                            for (var r in u) {
                                var y = u[r],
                                    b = this.element.style[r];
                                b !== y && (g = !0, m[r] = y)
                            }
                            g && D(function () {
                                c(e.element.style, m), e.trigger("repositioned")
                            })
                        }
                    }
                }]), e
            }(P);
        Q.modules = [], E.position = R;
        var G = c(Q, E),
            L = function () {
                function t(t, e) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        r = !0, o = t
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }
                return function (e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            B = E.Utils,
            s = B.getBounds,
            c = B.extend,
            g = B.updateClasses,
            D = B.defer,
            Y = ["left", "top", "right", "bottom"];
        E.modules.push({
            position: function (t) {
                var e = this,
                    n = t.top,
                    i = t.left,
                    r = t.targetAttachment;
                if (!this.options.constraints) return !0;
                var o = this.cache("element-bounds", function () {
                        return s(e.element)
                    }),
                    a = o.height,
                    l = o.width;
                if (0 === l && 0 === a && "undefined" != typeof this.lastSize) {
                    var u = this.lastSize;
                    l = u.width, a = u.height
                }
                var f = this.cache("target-bounds", function () {
                        return e.getTargetBounds()
                    }),
                    d = f.height,
                    p = f.width,
                    h = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function (t) {
                    var e = t.outOfBoundsClass,
                        n = t.pinnedClass;
                    e && h.push(e), n && h.push(n)
                }), h.forEach(function (t) {
                    ["left", "top", "right", "bottom"].forEach(function (e) {
                        h.push(t + "-" + e)
                    })
                });
                var m = [],
                    y = c({}, r),
                    v = c({}, this.attachment);
                return this.options.constraints.forEach(function (t) {
                    var o = t.to,
                        s = t.attachment,
                        u = t.pin;
                    "undefined" == typeof s && (s = "");
                    var c = void 0,
                        f = void 0;
                    if (s.indexOf(" ") >= 0) {
                        var h = s.split(" "),
                            g = L(h, 2);
                        f = g[0], c = g[1]
                    } else c = f = s;
                    var b = S(e, o);
                    "target" !== f && "both" !== f || (n < b[1] && "top" === y.top && (n += d, y.top = "bottom"), n + a > b[3] && "bottom" === y.top && (n -= d, y.top = "top")), "together" === f && ("top" === y.top && ("bottom" === v.top && n < b[1] ? (n += d, y.top = "bottom", n += a, v.top = "top") : "top" === v.top && n + a > b[3] && n - (a - d) >= b[1] && (n -= a - d, y.top = "bottom", v.top = "bottom")), "bottom" === y.top && ("top" === v.top && n + a > b[3] ? (n -= d, y.top = "top", n -= a, v.top = "bottom") : "bottom" === v.top && n < b[1] && n + (2 * a - d) <= b[3] && (n += a - d, y.top = "top", v.top = "top")), "middle" === y.top && (n + a > b[3] && "top" === v.top ? (n -= a, v.top = "bottom") : n < b[1] && "bottom" === v.top && (n += a, v.top = "top"))), "target" !== c && "both" !== c || (i < b[0] && "left" === y.left && (i += p, y.left = "right"), i + l > b[2] && "right" === y.left && (i -= p, y.left = "left")), "together" === c && (i < b[0] && "left" === y.left ? "right" === v.left ? (i += p, y.left = "right", i += l, v.left = "left") : "left" === v.left && (i += p, y.left = "right", i -= l, v.left = "right") : i + l > b[2] && "right" === y.left ? "left" === v.left ? (i -= p, y.left = "left", i -= l, v.left = "right") : "right" === v.left && (i -= p, y.left = "left", i += l, v.left = "left") : "center" === y.left && (i + l > b[2] && "left" === v.left ? (i -= l, v.left = "right") : i < b[0] && "right" === v.left && (i += l, v.left = "left"))), "element" !== f && "both" !== f || (n < b[1] && "bottom" === v.top && (n += a, v.top = "top"), n + a > b[3] && "top" === v.top && (n -= a, v.top = "bottom")), "element" !== c && "both" !== c || (i < b[0] && ("right" === v.left ? (i += l, v.left = "left") : "center" === v.left && (i += l / 2, v.left = "left")), i + l > b[2] && ("left" === v.left ? (i -= l, v.left = "right") : "center" === v.left && (i -= l / 2, v.left = "right"))), "string" == typeof u ? u = u.split(",").map(function (t) {
                        return t.trim()
                    }) : u === !0 && (u = ["top", "left", "right", "bottom"]), u = u || [];
                    var _ = [],
                        x = [];
                    n < b[1] && (u.indexOf("top") >= 0 ? (n = b[1], _.push("top")) : x.push("top")), n + a > b[3] && (u.indexOf("bottom") >= 0 ? (n = b[3] - a, _.push("bottom")) : x.push("bottom")), i < b[0] && (u.indexOf("left") >= 0 ? (i = b[0], _.push("left")) : x.push("left")), i + l > b[2] && (u.indexOf("right") >= 0 ? (i = b[2] - l, _.push("right")) : x.push("right")), _.length && ! function () {
                        var t = void 0;
                        t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), _.forEach(function (e) {
                            m.push(t + "-" + e)
                        })
                    }(), x.length && ! function () {
                        var t = void 0;
                        t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), x.forEach(function (e) {
                            m.push(t + "-" + e)
                        })
                    }(), (_.indexOf("left") >= 0 || _.indexOf("right") >= 0) && (v.left = y.left = !1), (_.indexOf("top") >= 0 || _.indexOf("bottom") >= 0) && (v.top = y.top = !1), y.top === r.top && y.left === r.left && v.top === e.attachment.top && v.left === e.attachment.left || (e.updateAttachClasses(v, y), e.trigger("update", {
                        attachment: v,
                        targetAttachment: y
                    }))
                }), D(function () {
                    e.options.addTargetClasses !== !1 && g(e.target, m, h), g(e.element, m, h)
                }), {
                    top: n,
                    left: i
                }
            }
        });
        var B = E.Utils,
            s = B.getBounds,
            g = B.updateClasses,
            D = B.defer;
        E.modules.push({
            position: function (t) {
                var e = this,
                    n = t.top,
                    i = t.left,
                    r = this.cache("element-bounds", function () {
                        return s(e.element)
                    }),
                    o = r.height,
                    a = r.width,
                    l = this.getTargetBounds(),
                    u = n + o,
                    c = i + a,
                    f = [];
                n <= l.bottom && u >= l.top && ["left", "right"].forEach(function (t) {
                    var e = l[t];
                    e !== i && e !== c || f.push(t)
                }), i <= l.right && c >= l.left && ["top", "bottom"].forEach(function (t) {
                    var e = l[t];
                    e !== n && e !== u || f.push(t)
                });
                var d = [],
                    p = [],
                    h = ["left", "top", "right", "bottom"];
                return d.push(this.getClass("abutted")), h.forEach(function (t) {
                    d.push(e.getClass("abutted") + "-" + t)
                }), f.length && p.push(this.getClass("abutted")), f.forEach(function (t) {
                    p.push(e.getClass("abutted") + "-" + t)
                }), D(function () {
                    e.options.addTargetClasses !== !1 && g(e.target, p, d), g(e.element, p, d)
                }), !0
            }
        });
        var L = function () {
            function t(t, e) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    r = !0, o = t
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function (e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return E.modules.push({
            position: function (t) {
                var e = t.top,
                    n = t.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                        top: e,
                        left: n
                    }));
                    var r = void 0,
                        o = void 0;
                    if ("string" == typeof i) {
                        i = i.split(" "), i[1] = i[1] || i[0];
                        var a = i,
                            s = L(a, 2);
                        r = s[0], o = s[1], r = parseFloat(r, 10), o = parseFloat(o, 10)
                    } else r = i.top, o = i.left;
                    return e += r, n += o, {
                        top: e,
                        left: n
                    }
                }
            }
        }), G
    })
}, function (t, e) {
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(jQuery), + function () {
        function t(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function e(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            r = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            o = function (t) {
                function e(t) {
                    return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                }

                function n(t) {
                    return (t[0] || t).nodeType
                }

                function i() {
                    return {
                        bindType: s.end,
                        delegateType: s.end,
                        handle: function (e) {
                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    }
                }

                function r() {
                    if (window.QUnit) return !1;
                    var t = document.createElement("bootstrap");
                    for (var e in u)
                        if (void 0 !== t.style[e]) return {
                            end: u[e]
                        };
                    return !1
                }

                function o(e) {
                    var n = this,
                        i = !1;
                    return t(this).one(c.TRANSITION_END, function () {
                        i = !0
                    }), setTimeout(function () {
                        i || c.triggerTransitionEnd(n)
                    }, e), this
                }

                function a() {
                    s = r(), t.fn.emulateTransitionEnd = o, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i())
                }
                var s = !1,
                    l = 1e6,
                    u = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    c = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function (t) {
                            do t += ~~(Math.random() * l); while (document.getElementById(t));
                            return t
                        },
                        getSelectorFromElement: function (t) {
                            var e = t.getAttribute("data-target");
                            return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                        },
                        reflow: function (t) {
                            new Function("bs", "return bs")(t.offsetHeight)
                        },
                        triggerTransitionEnd: function (e) {
                            t(e).trigger(s.end)
                        },
                        supportsTransitionEnd: function () {
                            return Boolean(s)
                        },
                        typeCheckConfig: function (t, i, r) {
                            for (var o in r)
                                if (r.hasOwnProperty(o)) {
                                    var a = r[o],
                                        s = i[o],
                                        l = void 0;
                                    if (l = s && n(s) ? "element" : e(s), !new RegExp(a).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + l + '" ') + ('but expected type "' + a + '".'))
                                }
                        }
                    };
                return a(), c
            }(jQuery),
            a = (function (t) {
                var e = "alert",
                    i = "4.0.0-alpha.5",
                    a = "bs.alert",
                    s = "." + a,
                    l = ".data-api",
                    u = t.fn[e],
                    c = 150,
                    f = {
                        DISMISS: '[data-dismiss="alert"]'
                    },
                    d = {
                        CLOSE: "close" + s,
                        CLOSED: "closed" + s,
                        CLICK_DATA_API: "click" + s + l
                    },
                    p = {
                        ALERT: "alert",
                        FADE: "fade",
                        IN: "in"
                    },
                    h = function () {
                        function e(t) {
                            n(this, e), this._element = t
                        }
                        return e.prototype.close = function (t) {
                            t = t || this._element;
                            var e = this._getRootElement(t),
                                n = this._triggerCloseEvent(e);
                            n.isDefaultPrevented() || this._removeElement(e)
                        }, e.prototype.dispose = function () {
                            t.removeData(this._element, a), this._element = null
                        }, e.prototype._getRootElement = function (e) {
                            var n = o.getSelectorFromElement(e),
                                i = !1;
                            return n && (i = t(n)[0]), i || (i = t(e).closest("." + p.ALERT)[0]), i
                        }, e.prototype._triggerCloseEvent = function (e) {
                            var n = t.Event(d.CLOSE);
                            return t(e).trigger(n), n
                        }, e.prototype._removeElement = function (e) {
                            return t(e).removeClass(p.IN), o.supportsTransitionEnd() && t(e).hasClass(p.FADE) ? void t(e).one(o.TRANSITION_END, t.proxy(this._destroyElement, this, e)).emulateTransitionEnd(c) : void this._destroyElement(e)
                        }, e.prototype._destroyElement = function (e) {
                            t(e).detach().trigger(d.CLOSED).remove()
                        }, e._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = t(this),
                                    r = i.data(a);
                                r || (r = new e(this), i.data(a, r)), "close" === n && r[n](this)
                            })
                        }, e._handleDismiss = function (t) {
                            return function (e) {
                                e && e.preventDefault(), t.close(this)
                            }
                        }, r(e, null, [{
                            key: "VERSION",
                            get: function () {
                                return i
                            }
                        }]), e
                    }();
                return t(document).on(d.CLICK_DATA_API, f.DISMISS, h._handleDismiss(new h)), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
                    return t.fn[e] = u, h._jQueryInterface
                }, h
            }(jQuery), function (t) {
                var e = "button",
                    i = "4.0.0-alpha.5",
                    o = "bs.button",
                    a = "." + o,
                    s = ".data-api",
                    l = t.fn[e],
                    u = {
                        ACTIVE: "active",
                        BUTTON: "btn",
                        FOCUS: "focus"
                    },
                    c = {
                        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                        DATA_TOGGLE: '[data-toggle="buttons"]',
                        INPUT: "input",
                        ACTIVE: ".active",
                        BUTTON: ".btn"
                    },
                    f = {
                        CLICK_DATA_API: "click" + a + s,
                        FOCUS_BLUR_DATA_API: "focus" + a + s + " " + ("blur" + a + s)
                    },
                    d = function () {
                        function e(t) {
                            n(this, e), this._element = t
                        }
                        return e.prototype.toggle = function () {
                            var e = !0,
                                n = t(this._element).closest(c.DATA_TOGGLE)[0];
                            if (n) {
                                var i = t(this._element).find(c.INPUT)[0];
                                if (i) {
                                    if ("radio" === i.type)
                                        if (i.checked && t(this._element).hasClass(u.ACTIVE)) e = !1;
                                        else {
                                            var r = t(n).find(c.ACTIVE)[0];
                                            r && t(r).removeClass(u.ACTIVE)
                                        } e && (i.checked = !t(this._element).hasClass(u.ACTIVE), t(this._element).trigger("change")), i.focus()
                                }
                            } else this._element.setAttribute("aria-pressed", !t(this._element).hasClass(u.ACTIVE));
                            e && t(this._element).toggleClass(u.ACTIVE)
                        }, e.prototype.dispose = function () {
                            t.removeData(this._element, o), this._element = null
                        }, e._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = t(this).data(o);
                                i || (i = new e(this), t(this).data(o, i)), "toggle" === n && i[n]()
                            })
                        }, r(e, null, [{
                            key: "VERSION",
                            get: function () {
                                return i
                            }
                        }]), e
                    }();
                return t(document).on(f.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
                    e.preventDefault();
                    var n = e.target;
                    t(n).hasClass(u.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle")
                }).on(f.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
                    var n = t(e.target).closest(c.BUTTON)[0];
                    t(n).toggleClass(u.FOCUS, /^focus(in)?$/.test(e.type))
                }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
                    return t.fn[e] = l, d._jQueryInterface
                }, d
            }(jQuery), function (t) {
                var e = "carousel",
                    a = "4.0.0-alpha.5",
                    s = "bs.carousel",
                    l = "." + s,
                    u = ".data-api",
                    c = t.fn[e],
                    f = 600,
                    d = 37,
                    p = 39,
                    h = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    m = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    g = {
                        NEXT: "next",
                        PREVIOUS: "prev"
                    },
                    y = {
                        SLIDE: "slide" + l,
                        SLID: "slid" + l,
                        KEYDOWN: "keydown" + l,
                        MOUSEENTER: "mouseenter" + l,
                        MOUSELEAVE: "mouseleave" + l,
                        LOAD_DATA_API: "load" + l + u,
                        CLICK_DATA_API: "click" + l + u
                    },
                    v = {
                        CAROUSEL: "carousel",
                        ACTIVE: "active",
                        SLIDE: "slide",
                        RIGHT: "right",
                        LEFT: "left",
                        ITEM: "carousel-item"
                    },
                    b = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".next, .prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    _ = function () {
                        function u(e, i) {
                            n(this, u), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(b.INDICATORS)[0], this._addEventListeners()
                        }
                        return u.prototype.next = function () {
                            this._isSliding || this._slide(g.NEXT)
                        }, u.prototype.nextWhenVisible = function () {
                            document.hidden || this.next()
                        }, u.prototype.prev = function () {
                            this._isSliding || this._slide(g.PREVIOUS)
                        }, u.prototype.pause = function (e) {
                            e || (this._isPaused = !0), t(this._element).find(b.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, u.prototype.cycle = function (e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(t.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                        }, u.prototype.to = function (e) {
                            var n = this;
                            this._activeElement = t(this._element).find(b.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(e > this._items.length - 1 || e < 0)) {
                                if (this._isSliding) return void t(this._element).one(y.SLID, function () {
                                    return n.to(e)
                                });
                                if (i === e) return this.pause(), void this.cycle();
                                var r = e > i ? g.NEXT : g.PREVIOUS;
                                this._slide(r, this._items[e])
                            }
                        }, u.prototype.dispose = function () {
                            t(this._element).off(l), t.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, u.prototype._getConfig = function (n) {
                            return n = t.extend({}, h, n), o.typeCheckConfig(e, n, m), n
                        }, u.prototype._addEventListeners = function () {
                            this._config.keyboard && t(this._element).on(y.KEYDOWN, t.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(y.MOUSEENTER, t.proxy(this.pause, this)).on(y.MOUSELEAVE, t.proxy(this.cycle, this))
                        }, u.prototype._keydown = function (t) {
                            if (t.preventDefault(), !/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                                case d:
                                    this.prev();
                                    break;
                                case p:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                        }, u.prototype._getItemIndex = function (e) {
                            return this._items = t.makeArray(t(e).parent().find(b.ITEM)), this._items.indexOf(e)
                        }, u.prototype._getItemByDirection = function (t, e) {
                            var n = t === g.NEXT,
                                i = t === g.PREVIOUS,
                                r = this._getItemIndex(e),
                                o = this._items.length - 1,
                                a = i && 0 === r || n && r === o;
                            if (a && !this._config.wrap) return e;
                            var s = t === g.PREVIOUS ? -1 : 1,
                                l = (r + s) % this._items.length;
                            return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                        }, u.prototype._triggerSlideEvent = function (e, n) {
                            var i = t.Event(y.SLIDE, {
                                relatedTarget: e,
                                direction: n
                            });
                            return t(this._element).trigger(i), i
                        }, u.prototype._setActiveIndicatorElement = function (e) {
                            if (this._indicatorsElement) {
                                t(this._indicatorsElement).find(b.ACTIVE).removeClass(v.ACTIVE);
                                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                n && t(n).addClass(v.ACTIVE)
                            }
                        }, u.prototype._slide = function (e, n) {
                            var i = this,
                                r = t(this._element).find(b.ACTIVE_ITEM)[0],
                                a = n || r && this._getItemByDirection(e, r),
                                s = Boolean(this._interval),
                                l = e === g.NEXT ? v.LEFT : v.RIGHT;
                            if (a && t(a).hasClass(v.ACTIVE)) return void(this._isSliding = !1);
                            var u = this._triggerSlideEvent(a, l);
                            if (!u.isDefaultPrevented() && r && a) {
                                this._isSliding = !0, s && this.pause(), this._setActiveIndicatorElement(a);
                                var c = t.Event(y.SLID, {
                                    relatedTarget: a,
                                    direction: l
                                });
                                o.supportsTransitionEnd() && t(this._element).hasClass(v.SLIDE) ? (t(a).addClass(e), o.reflow(a), t(r).addClass(l), t(a).addClass(l), t(r).one(o.TRANSITION_END, function () {
                                    t(a).removeClass(l).removeClass(e), t(a).addClass(v.ACTIVE), t(r).removeClass(v.ACTIVE).removeClass(e).removeClass(l), i._isSliding = !1, setTimeout(function () {
                                        return t(i._element).trigger(c)
                                    }, 0)
                                }).emulateTransitionEnd(f)) : (t(r).removeClass(v.ACTIVE), t(a).addClass(v.ACTIVE), this._isSliding = !1, t(this._element).trigger(c)), s && this.cycle()
                            }
                        }, u._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this).data(s),
                                    r = t.extend({}, h, t(this).data());
                                "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(r, e);
                                var o = "string" == typeof e ? e : r.slide;
                                if (n || (n = new u(this, r), t(this).data(s, n)), "number" == typeof e) n.to(e);
                                else if ("string" == typeof o) {
                                    if (void 0 === n[o]) throw new Error('No method named "' + o + '"');
                                    n[o]()
                                } else r.interval && (n.pause(), n.cycle())
                            })
                        }, u._dataApiClickHandler = function (e) {
                            var n = o.getSelectorFromElement(this);
                            if (n) {
                                var i = t(n)[0];
                                if (i && t(i).hasClass(v.CAROUSEL)) {
                                    var r = t.extend({}, t(i).data(), t(this).data()),
                                        a = this.getAttribute("data-slide-to");
                                    a && (r.interval = !1), u._jQueryInterface.call(t(i), r), a && t(i).data(s).to(a), e.preventDefault()
                                }
                            }
                        }, r(u, null, [{
                            key: "VERSION",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return h
                            }
                        }]), u
                    }();
                return t(document).on(y.CLICK_DATA_API, b.DATA_SLIDE, _._dataApiClickHandler), t(window).on(y.LOAD_DATA_API, function () {
                    t(b.DATA_RIDE).each(function () {
                        var e = t(this);
                        _._jQueryInterface.call(e, e.data())
                    })
                }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
                    return t.fn[e] = c, _._jQueryInterface
                }, _
            }(jQuery), function (t) {
                var e = "collapse",
                    a = "4.0.0-alpha.5",
                    s = "bs.collapse",
                    l = "." + s,
                    u = ".data-api",
                    c = t.fn[e],
                    f = 600,
                    d = {
                        toggle: !0,
                        parent: ""
                    },
                    p = {
                        toggle: "boolean",
                        parent: "string"
                    },
                    h = {
                        SHOW: "show" + l,
                        SHOWN: "shown" + l,
                        HIDE: "hide" + l,
                        HIDDEN: "hidden" + l,
                        CLICK_DATA_API: "click" + l + u
                    },
                    m = {
                        IN: "in",
                        COLLAPSE: "collapse",
                        COLLAPSING: "collapsing",
                        COLLAPSED: "collapsed"
                    },
                    g = {
                        WIDTH: "width",
                        HEIGHT: "height"
                    },
                    y = {
                        ACTIVES: ".card > .in, .card > .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    v = function () {
                        function l(e, i) {
                            n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        return l.prototype.toggle = function () {
                            t(this._element).hasClass(m.IN) ? this.hide() : this.show()
                        }, l.prototype.show = function () {
                            var e = this;
                            if (!this._isTransitioning && !t(this._element).hasClass(m.IN)) {
                                var n = void 0,
                                    i = void 0;
                                if (this._parent && (n = t.makeArray(t(y.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(s), i && i._isTransitioning))) {
                                    var r = t.Event(h.SHOW);
                                    if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                                        n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(s, null));
                                        var a = this._getDimension();
                                        t(this._element).removeClass(m.COLLAPSE).addClass(m.COLLAPSING), this._element.style[a] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(m.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var u = function () {
                                            t(e._element).removeClass(m.COLLAPSING).addClass(m.COLLAPSE).addClass(m.IN), e._element.style[a] = "", e.setTransitioning(!1), t(e._element).trigger(h.SHOWN)
                                        };
                                        if (!o.supportsTransitionEnd()) return void u();
                                        var c = a[0].toUpperCase() + a.slice(1),
                                            d = "scroll" + c;
                                        t(this._element).one(o.TRANSITION_END, u).emulateTransitionEnd(f), this._element.style[a] = this._element[d] + "px"
                                    }
                                }
                            }
                        }, l.prototype.hide = function () {
                            var e = this;
                            if (!this._isTransitioning && t(this._element).hasClass(m.IN)) {
                                var n = t.Event(h.HIDE);
                                if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension(),
                                        r = i === g.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[i] = this._element[r] + "px", o.reflow(this._element), t(this._element).addClass(m.COLLAPSING).removeClass(m.COLLAPSE).removeClass(m.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(m.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                    var a = function () {
                                        e.setTransitioning(!1), t(e._element).removeClass(m.COLLAPSING).addClass(m.COLLAPSE).trigger(h.HIDDEN)
                                    };
                                    return this._element.style[i] = "", o.supportsTransitionEnd() ? void t(this._element).one(o.TRANSITION_END, a).emulateTransitionEnd(f) : void a()
                                }
                            }
                        }, l.prototype.setTransitioning = function (t) {
                            this._isTransitioning = t
                        }, l.prototype.dispose = function () {
                            t.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, l.prototype._getConfig = function (n) {
                            return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), o.typeCheckConfig(e, n, p), n
                        }, l.prototype._getDimension = function () {
                            var e = t(this._element).hasClass(g.WIDTH);
                            return e ? g.WIDTH : g.HEIGHT
                        }, l.prototype._getParent = function () {
                            var e = this,
                                n = t(this._config.parent)[0],
                                i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return t(n).find(i).each(function (t, n) {
                                e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n])
                            }), n
                        }, l.prototype._addAriaAndCollapsedClass = function (e, n) {
                            if (e) {
                                var i = t(e).hasClass(m.IN);
                                e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(m.COLLAPSED, !i).attr("aria-expanded", i)
                            }
                        }, l._getTargetFromElement = function (e) {
                            var n = o.getSelectorFromElement(e);
                            return n ? t(n)[0] : null
                        }, l._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this),
                                    r = n.data(s),
                                    o = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                                if (!r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || (r = new l(this, o), n.data(s, r)), "string" == typeof e) {
                                    if (void 0 === r[e]) throw new Error('No method named "' + e + '"');
                                    r[e]()
                                }
                            })
                        }, r(l, null, [{
                            key: "VERSION",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return d
                            }
                        }]), l
                    }();
                return t(document).on(h.CLICK_DATA_API, y.DATA_TOGGLE, function (e) {
                    e.preventDefault();
                    var n = v._getTargetFromElement(this),
                        i = t(n).data(s),
                        r = i ? "toggle" : t(this).data();
                    v._jQueryInterface.call(t(n), r)
                }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
                    return t.fn[e] = c, v._jQueryInterface
                }, v
            }(jQuery), function (t) {
                var e = "dropdown",
                    i = "4.0.0-alpha.5",
                    a = "bs.dropdown",
                    s = "." + a,
                    l = ".data-api",
                    u = t.fn[e],
                    c = 27,
                    f = 38,
                    d = 40,
                    p = 3,
                    h = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK: "click" + s,
                        CLICK_DATA_API: "click" + s + l,
                        KEYDOWN_DATA_API: "keydown" + s + l
                    },
                    m = {
                        BACKDROP: "dropdown-backdrop",
                        DISABLED: "disabled",
                        OPEN: "open"
                    },
                    g = {
                        BACKDROP: ".dropdown-backdrop",
                        DATA_TOGGLE: '[data-toggle="dropdown"]',
                        FORM_CHILD: ".dropdown form",
                        ROLE_MENU: '[role="menu"]',
                        ROLE_LISTBOX: '[role="listbox"]',
                        NAVBAR_NAV: ".navbar-nav",
                        VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                    },
                    y = function () {
                        function e(t) {
                            n(this, e), this._element = t, this._addEventListeners()
                        }
                        return e.prototype.toggle = function () {
                            if (this.disabled || t(this).hasClass(m.DISABLED)) return !1;
                            var n = e._getParentFromElement(this),
                                i = t(n).hasClass(m.OPEN);
                            if (e._clearMenus(), i) return !1;
                            if ("ontouchstart" in document.documentElement && !t(n).closest(g.NAVBAR_NAV).length) {
                                var r = document.createElement("div");
                                r.className = m.BACKDROP, t(r).insertBefore(this), t(r).on("click", e._clearMenus)
                            }
                            var o = {
                                    relatedTarget: this
                                },
                                a = t.Event(h.SHOW, o);
                            return t(n).trigger(a), !a.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), t(n).toggleClass(m.OPEN), t(n).trigger(t.Event(h.SHOWN, o)), !1)
                        }, e.prototype.dispose = function () {
                            t.removeData(this._element, a), t(this._element).off(s), this._element = null
                        }, e.prototype._addEventListeners = function () {
                            t(this._element).on(h.CLICK, this.toggle)
                        }, e._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = t(this).data(a);
                                if (i || t(this).data(a, i = new e(this)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                                    i[n].call(this)
                                }
                            })
                        }, e._clearMenus = function (n) {
                            if (!n || n.which !== p) {
                                var i = t(g.BACKDROP)[0];
                                i && i.parentNode.removeChild(i);
                                for (var r = t.makeArray(t(g.DATA_TOGGLE)), o = 0; o < r.length; o++) {
                                    var a = e._getParentFromElement(r[o]),
                                        s = {
                                            relatedTarget: r[o]
                                        };
                                    if (t(a).hasClass(m.OPEN) && !(n && "click" === n.type && /input|textarea/i.test(n.target.tagName) && t.contains(a, n.target))) {
                                        var l = t.Event(h.HIDE, s);
                                        t(a).trigger(l), l.isDefaultPrevented() || (r[o].setAttribute("aria-expanded", "false"), t(a).removeClass(m.OPEN).trigger(t.Event(h.HIDDEN, s)))
                                    }
                                }
                            }
                        }, e._getParentFromElement = function (e) {
                            var n = void 0,
                                i = o.getSelectorFromElement(e);
                            return i && (n = t(i)[0]), n || e.parentNode
                        }, e._dataApiKeydownHandler = function (n) {
                            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(m.DISABLED))) {
                                var i = e._getParentFromElement(this),
                                    r = t(i).hasClass(m.OPEN);
                                if (!r && n.which !== c || r && n.which === c) {
                                    if (n.which === c) {
                                        var o = t(i).find(g.DATA_TOGGLE)[0];
                                        t(o).trigger("focus")
                                    }
                                    return void t(this).trigger("click")
                                }
                                var a = t.makeArray(t(g.VISIBLE_ITEMS));
                                if (a = a.filter(function (t) {
                                        return t.offsetWidth || t.offsetHeight
                                    }), a.length) {
                                    var s = a.indexOf(n.target);
                                    n.which === f && s > 0 && s--, n.which === d && s < a.length - 1 && s++, s < 0 && (s = 0), a[s].focus()
                                }
                            }
                        }, r(e, null, [{
                            key: "VERSION",
                            get: function () {
                                return i
                            }
                        }]), e
                    }();
                return t(document).on(h.KEYDOWN_DATA_API, g.DATA_TOGGLE, y._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, g.ROLE_MENU, y._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, g.ROLE_LISTBOX, y._dataApiKeydownHandler).on(h.CLICK_DATA_API, y._clearMenus).on(h.CLICK_DATA_API, g.DATA_TOGGLE, y.prototype.toggle).on(h.CLICK_DATA_API, g.FORM_CHILD, function (t) {
                    t.stopPropagation()
                }), t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function () {
                    return t.fn[e] = u, y._jQueryInterface
                }, y
            }(jQuery), function (t) {
                var e = "modal",
                    a = "4.0.0-alpha.5",
                    s = "bs.modal",
                    l = "." + s,
                    u = ".data-api",
                    c = t.fn[e],
                    f = 300,
                    d = 150,
                    p = 27,
                    h = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    m = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    g = {
                        HIDE: "hide" + l,
                        HIDDEN: "hidden" + l,
                        SHOW: "show" + l,
                        SHOWN: "shown" + l,
                        FOCUSIN: "focusin" + l,
                        RESIZE: "resize" + l,
                        CLICK_DISMISS: "click.dismiss" + l,
                        KEYDOWN_DISMISS: "keydown.dismiss" + l,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + l,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
                        CLICK_DATA_API: "click" + l + u
                    },
                    y = {
                        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                        BACKDROP: "modal-backdrop",
                        OPEN: "modal-open",
                        FADE: "fade",
                        IN: "in"
                    },
                    v = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                    },
                    b = function () {
                        function u(e, i) {
                            n(this, u), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(v.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        return u.prototype.toggle = function (t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }, u.prototype.show = function (e) {
                            var n = this,
                                i = t.Event(g.SHOW, {
                                    relatedTarget: e
                                });
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(y.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(g.CLICK_DISMISS, v.DATA_DISMISS, t.proxy(this.hide, this)), t(this._dialog).on(g.MOUSEDOWN_DISMISS, function () {
                                t(n._element).one(g.MOUSEUP_DISMISS, function (e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(t.proxy(this._showElement, this, e)))
                        }, u.prototype.hide = function (e) {
                            e && e.preventDefault();
                            var n = t.Event(g.HIDE);
                            t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(g.FOCUSIN), t(this._element).removeClass(y.IN), t(this._element).off(g.CLICK_DISMISS), t(this._dialog).off(g.MOUSEDOWN_DISMISS), o.supportsTransitionEnd() && t(this._element).hasClass(y.FADE) ? t(this._element).one(o.TRANSITION_END, t.proxy(this._hideModal, this)).emulateTransitionEnd(f) : this._hideModal())
                        }, u.prototype.dispose = function () {
                            t.removeData(this._element, s), t(window).off(l), t(document).off(l), t(this._element).off(l), t(this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }, u.prototype._getConfig = function (n) {
                            return n = t.extend({}, h, n), o.typeCheckConfig(e, n, m), n
                        }, u.prototype._showElement = function (e) {
                            var n = this,
                                i = o.supportsTransitionEnd() && t(this._element).hasClass(y.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && o.reflow(this._element), t(this._element).addClass(y.IN), this._config.focus && this._enforceFocus();
                            var r = t.Event(g.SHOWN, {
                                    relatedTarget: e
                                }),
                                a = function () {
                                    n._config.focus && n._element.focus(), t(n._element).trigger(r)
                                };
                            i ? t(this._dialog).one(o.TRANSITION_END, a).emulateTransitionEnd(f) : a()
                        }, u.prototype._enforceFocus = function () {
                            var e = this;
                            t(document).off(g.FOCUSIN).on(g.FOCUSIN, function (n) {
                                document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                            })
                        }, u.prototype._setEscapeEvent = function () {
                            var e = this;
                            this._isShown && this._config.keyboard ? t(this._element).on(g.KEYDOWN_DISMISS, function (t) {
                                t.which === p && e.hide()
                            }) : this._isShown || t(this._element).off(g.KEYDOWN_DISMISS)
                        }, u.prototype._setResizeEvent = function () {
                            this._isShown ? t(window).on(g.RESIZE, t.proxy(this._handleUpdate, this)) : t(window).off(g.RESIZE)
                        }, u.prototype._hideModal = function () {
                            var e = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function () {
                                t(document.body).removeClass(y.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(g.HIDDEN)
                            })
                        }, u.prototype._removeBackdrop = function () {
                            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                        }, u.prototype._showBackdrop = function (e) {
                            var n = this,
                                i = t(this._element).hasClass(y.FADE) ? y.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var r = o.supportsTransitionEnd() && i;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = y.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(g.CLICK_DISMISS, function (t) {
                                        return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                    }), r && o.reflow(this._backdrop), t(this._backdrop).addClass(y.IN), !e) return;
                                if (!r) return void e();
                                t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(d)
                            } else if (!this._isShown && this._backdrop) {
                                t(this._backdrop).removeClass(y.IN);
                                var a = function () {
                                    n._removeBackdrop(), e && e()
                                };
                                o.supportsTransitionEnd() && t(this._element).hasClass(y.FADE) ? t(this._backdrop).one(o.TRANSITION_END, a).emulateTransitionEnd(d) : a()
                            } else e && e()
                        }, u.prototype._handleUpdate = function () {
                            this._adjustDialog()
                        }, u.prototype._adjustDialog = function () {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, u.prototype._resetAdjustments = function () {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, u.prototype._checkScrollbar = function () {
                            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, u.prototype._setScrollbar = function () {
                            var e = parseInt(t(v.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                        }, u.prototype._resetScrollbar = function () {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }, u.prototype._getScrollbarWidth = function () {
                            var t = document.createElement("div");
                            t.className = y.SCROLLBAR_MEASURER, document.body.appendChild(t);
                            var e = t.offsetWidth - t.clientWidth;
                            return document.body.removeChild(t), e
                        }, u._jQueryInterface = function (e, n) {
                            return this.each(function () {
                                var r = t(this).data(s),
                                    o = t.extend({}, u.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                                if (r || (r = new u(this, o), t(this).data(s, r)), "string" == typeof e) {
                                    if (void 0 === r[e]) throw new Error('No method named "' + e + '"');
                                    r[e](n)
                                } else o.show && r.show(n)
                            })
                        }, r(u, null, [{
                            key: "VERSION",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return h
                            }
                        }]), u
                    }();
                return t(document).on(g.CLICK_DATA_API, v.DATA_TOGGLE, function (e) {
                    var n = this,
                        i = void 0,
                        r = o.getSelectorFromElement(this);
                    r && (i = t(r)[0]);
                    var a = t(i).data(s) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
                    "A" === this.tagName && e.preventDefault();
                    var l = t(i).one(g.SHOW, function (e) {
                        e.isDefaultPrevented() || l.one(g.HIDDEN, function () {
                            t(n).is(":visible") && n.focus()
                        })
                    });
                    b._jQueryInterface.call(t(i), a, this)
                }), t.fn[e] = b._jQueryInterface, t.fn[e].Constructor = b, t.fn[e].noConflict = function () {
                    return t.fn[e] = c, b._jQueryInterface
                }, b
            }(jQuery), function (t) {
                var e = "scrollspy",
                    a = "4.0.0-alpha.5",
                    s = "bs.scrollspy",
                    l = "." + s,
                    u = ".data-api",
                    c = t.fn[e],
                    f = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    d = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    p = {
                        ACTIVATE: "activate" + l,
                        SCROLL: "scroll" + l,
                        LOAD_DATA_API: "load" + l + u
                    },
                    h = {
                        DROPDOWN_ITEM: "dropdown-item",
                        DROPDOWN_MENU: "dropdown-menu",
                        NAV_LINK: "nav-link",
                        NAV: "nav",
                        ACTIVE: "active"
                    },
                    m = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        LIST_ITEM: ".list-item",
                        LI: "li",
                        LI_DROPDOWN: "li.dropdown",
                        NAV_LINKS: ".nav-link",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    g = {
                        OFFSET: "offset",
                        POSITION: "position"
                    },
                    y = function () {
                        function u(e, i) {
                            n(this, u), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + m.NAV_LINKS + "," + (this._config.target + " " + m.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(p.SCROLL, t.proxy(this._process, this)), this.refresh(), this._process()
                        }
                        return u.prototype.refresh = function () {
                            var e = this,
                                n = this._scrollElement !== this._scrollElement.window ? g.POSITION : g.OFFSET,
                                i = "auto" === this._config.method ? n : this._config.method,
                                r = i === g.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                            var a = t.makeArray(t(this._selector));
                            a.map(function (e) {
                                var n = void 0,
                                    a = o.getSelectorFromElement(e);
                                return a && (n = t(a)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + r, a] : null
                            }).filter(function (t) {
                                return t
                            }).sort(function (t, e) {
                                return t[0] - e[0]
                            }).forEach(function (t) {
                                e._offsets.push(t[0]), e._targets.push(t[1])
                            })
                        }, u.prototype.dispose = function () {
                            t.removeData(this._element, s), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, u.prototype._getConfig = function (n) {
                            if (n = t.extend({}, f, n), "string" != typeof n.target) {
                                var i = t(n.target).attr("id");
                                i || (i = o.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                            }
                            return o.typeCheckConfig(e, n, d), n
                        }, u.prototype._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                        }, u.prototype._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, u.prototype._process = function () {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                n = this._config.offset + e - this._scrollElement.offsetHeight;
                            if (this._scrollHeight !== e && this.refresh(), t >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            }
                            if (this._activeTarget && t < this._offsets[0]) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) {
                                var o = this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]);
                                o && this._activate(this._targets[r])
                            }
                        }, u.prototype._activate = function (e) {
                            this._activeTarget = e, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function (t) {
                                return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                            });
                            var i = t(n.join(","));
                            i.hasClass(h.DROPDOWN_ITEM) ? (i.closest(m.DROPDOWN).find(m.DROPDOWN_TOGGLE).addClass(h.ACTIVE), i.addClass(h.ACTIVE)) : i.parents(m.LI).find(m.NAV_LINKS).addClass(h.ACTIVE), t(this._scrollElement).trigger(p.ACTIVATE, {
                                relatedTarget: e
                            })
                        }, u.prototype._clear = function () {
                            t(this._selector).filter(m.ACTIVE).removeClass(h.ACTIVE)
                        }, u._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this).data(s),
                                    r = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e || null;
                                if (n || (n = new u(this, r), t(this).data(s, n)), "string" == typeof e) {
                                    if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                    n[e]()
                                }
                            })
                        }, r(u, null, [{
                            key: "VERSION",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return f
                            }
                        }]), u
                    }();
                return t(window).on(p.LOAD_DATA_API, function () {
                    for (var e = t.makeArray(t(m.DATA_SPY)), n = e.length; n--;) {
                        var i = t(e[n]);
                        y._jQueryInterface.call(i, i.data())
                    }
                }), t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function () {
                    return t.fn[e] = c, y._jQueryInterface
                }, y
            }(jQuery), function (t) {
                var e = "tab",
                    i = "4.0.0-alpha.5",
                    a = "bs.tab",
                    s = "." + a,
                    l = ".data-api",
                    u = t.fn[e],
                    c = 150,
                    f = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK_DATA_API: "click" + s + l
                    },
                    d = {
                        DROPDOWN_MENU: "dropdown-menu",
                        ACTIVE: "active",
                        FADE: "fade",
                        IN: "in"
                    },
                    p = {
                        A: "a",
                        LI: "li",
                        DROPDOWN: ".dropdown",
                        UL: "ul:not(.dropdown-menu)",
                        FADE_CHILD: "> .nav-item .fade, > .fade",
                        ACTIVE: ".active",
                        ACTIVE_CHILD: "> .nav-item > .active, > .active",
                        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                        DROPDOWN_TOGGLE: ".dropdown-toggle",
                        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                    },
                    h = function () {
                        function e(t) {
                            n(this, e), this._element = t
                        }
                        return e.prototype.show = function () {
                            var e = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !t(this._element).hasClass(d.ACTIVE)) {
                                var n = void 0,
                                    i = void 0,
                                    r = t(this._element).closest(p.UL)[0],
                                    a = o.getSelectorFromElement(this._element);
                                r && (i = t.makeArray(t(r).find(p.ACTIVE)), i = i[i.length - 1]);
                                var s = t.Event(f.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    l = t.Event(f.SHOW, {
                                        relatedTarget: i
                                    });
                                if (i && t(i).trigger(s), t(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                                    a && (n = t(a)[0]), this._activate(this._element, r);
                                    var u = function () {
                                        var n = t.Event(f.HIDDEN, {
                                                relatedTarget: e._element
                                            }),
                                            r = t.Event(f.SHOWN, {
                                                relatedTarget: i
                                            });
                                        t(i).trigger(n), t(e._element).trigger(r)
                                    };
                                    n ? this._activate(n, n.parentNode, u) : u()
                                }
                            }
                        }, e.prototype.dispose = function () {
                            t.removeClass(this._element, a), this._element = null
                        }, e.prototype._activate = function (e, n, i) {
                            var r = t(n).find(p.ACTIVE_CHILD)[0],
                                a = i && o.supportsTransitionEnd() && (r && t(r).hasClass(d.FADE) || Boolean(t(n).find(p.FADE_CHILD)[0])),
                                s = t.proxy(this._transitionComplete, this, e, r, a, i);
                            r && a ? t(r).one(o.TRANSITION_END, s).emulateTransitionEnd(c) : s(), r && t(r).removeClass(d.IN)
                        }, e.prototype._transitionComplete = function (e, n, i, r) {
                            if (n) {
                                t(n).removeClass(d.ACTIVE);
                                var a = t(n).find(p.DROPDOWN_ACTIVE_CHILD)[0];
                                a && t(a).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
                            }
                            if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (o.reflow(e), t(e).addClass(d.IN)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
                                var s = t(e).closest(p.DROPDOWN)[0];
                                s && t(s).find(p.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0)
                            }
                            r && r()
                        }, e._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = t(this),
                                    r = i.data(a);
                                if (r || (r = r = new e(this), i.data(a, r)), "string" == typeof n) {
                                    if (void 0 === r[n]) throw new Error('No method named "' + n + '"');
                                    r[n]()
                                }
                            })
                        }, r(e, null, [{
                            key: "VERSION",
                            get: function () {
                                return i
                            }
                        }]), e
                    }();
                return t(document).on(f.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
                    e.preventDefault(), h._jQueryInterface.call(t(this), "show")
                }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
                    return t.fn[e] = u, h._jQueryInterface
                }, h
            }(jQuery), function (t) {
                if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
                var e = "tooltip",
                    a = "4.0.0-alpha.5",
                    s = "bs.tooltip",
                    l = "." + s,
                    u = t.fn[e],
                    c = 150,
                    f = "bs-tether",
                    d = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: "0 0",
                        constraints: []
                    },
                    p = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "string",
                        constraints: "array"
                    },
                    h = {
                        TOP: "bottom center",
                        RIGHT: "middle left",
                        BOTTOM: "top center",
                        LEFT: "middle right"
                    },
                    m = {
                        IN: "in",
                        OUT: "out"
                    },
                    g = {
                        HIDE: "hide" + l,
                        HIDDEN: "hidden" + l,
                        SHOW: "show" + l,
                        SHOWN: "shown" + l,
                        INSERTED: "inserted" + l,
                        CLICK: "click" + l,
                        FOCUSIN: "focusin" + l,
                        FOCUSOUT: "focusout" + l,
                        MOUSEENTER: "mouseenter" + l,
                        MOUSELEAVE: "mouseleave" + l
                    },
                    y = {
                        FADE: "fade",
                        IN: "in"
                    },
                    v = {
                        TOOLTIP: ".tooltip",
                        TOOLTIP_INNER: ".tooltip-inner"
                    },
                    b = {
                        element: !1,
                        enabled: !1
                    },
                    _ = {
                        HOVER: "hover",
                        FOCUS: "focus",
                        CLICK: "click",
                        MANUAL: "manual"
                    },
                    x = function () {
                        function u(t, e) {
                            n(this, u), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                        }
                        return u.prototype.enable = function () {
                            this._isEnabled = !0
                        }, u.prototype.disable = function () {
                            this._isEnabled = !1
                        }, u.prototype.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled
                        }, u.prototype.toggle = function (e) {
                            if (e) {
                                var n = this.constructor.DATA_KEY,
                                    i = t(e.currentTarget).data(n);
                                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (t(this.getTipElement()).hasClass(y.IN)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }, u.prototype.dispose = function () {
                            clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }, u.prototype.show = function () {
                            var e = this,
                                n = t.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                t(this.element).trigger(n);
                                var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                                if (n.isDefaultPrevented() || !i) return;
                                var r = this.getTipElement(),
                                    a = o.getUID(this.constructor.NAME);
                                r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(r).addClass(y.FADE);
                                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                    l = this._getAttachment(s);
                                t(r).data(this.constructor.DATA_KEY, this).appendTo(document.body), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: l,
                                    element: r,
                                    target: this.element,
                                    classes: b,
                                    classPrefix: f,
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), o.reflow(r), this._tether.position(), t(r).addClass(y.IN);
                                var c = function () {
                                    var n = e._hoverState;
                                    e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === m.OUT && e._leave(null, e)
                                };
                                if (o.supportsTransitionEnd() && t(this.tip).hasClass(y.FADE)) return void t(this.tip).one(o.TRANSITION_END, c).emulateTransitionEnd(u._TRANSITION_DURATION);
                                c()
                            }
                        }, u.prototype.hide = function (e) {
                            var n = this,
                                i = this.getTipElement(),
                                r = t.Event(this.constructor.Event.HIDE),
                                a = function () {
                                    n._hoverState !== m.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), e && e()
                                };
                            t(this.element).trigger(r),
                                r.isDefaultPrevented() || (t(i).removeClass(y.IN), o.supportsTransitionEnd() && t(this.tip).hasClass(y.FADE) ? t(i).one(o.TRANSITION_END, a).emulateTransitionEnd(c) : a(), this._hoverState = "")
                        }, u.prototype.isWithContent = function () {
                            return Boolean(this.getTitle())
                        }, u.prototype.getTipElement = function () {
                            return this.tip = this.tip || t(this.config.template)[0]
                        }, u.prototype.setContent = function () {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(v.TOOLTIP_INNER), this.getTitle()), e.removeClass(y.FADE).removeClass(y.IN), this.cleanupTether()
                        }, u.prototype.setElementContent = function (e, n) {
                            var r = this.config.html;
                            "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? r ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()): e[r ? "html" : "text"](n)
                        }, u.prototype.getTitle = function () {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                        }, u.prototype.cleanupTether = function () {
                            this._tether && this._tether.destroy()
                        }, u.prototype._getAttachment = function (t) {
                            return h[t.toUpperCase()]
                        }, u.prototype._setListeners = function () {
                            var e = this,
                                n = this.config.trigger.split(" ");
                            n.forEach(function (n) {
                                if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, t.proxy(e.toggle, e));
                                else if (n !== _.MANUAL) {
                                    var i = n === _.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                        r = n === _.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                    t(e.element).on(i, e.config.selector, t.proxy(e._enter, e)).on(r, e.config.selector, t.proxy(e._leave, e))
                                }
                            }), this.config.selector ? this.config = t.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, u.prototype._fixTitle = function () {
                            var t = i(this.element.getAttribute("data-original-title"));
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, u.prototype._enter = function (e, n) {
                            var i = this.constructor.DATA_KEY;
                            return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? _.FOCUS : _.HOVER] = !0), t(n.getTipElement()).hasClass(y.IN) || n._hoverState === m.IN ? void(n._hoverState = m.IN) : (clearTimeout(n._timeout), n._hoverState = m.IN, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
                                n._hoverState === m.IN && n.show()
                            }, n.config.delay.show)) : void n.show())
                        }, u.prototype._leave = function (e, n) {
                            var i = this.constructor.DATA_KEY;
                            if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? _.FOCUS : _.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = m.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function () {
                                n._hoverState === m.OUT && n.hide()
                            }, n.config.delay.hide)) : void n.hide()
                        }, u.prototype._isWithActiveTrigger = function () {
                            for (var t in this._activeTrigger)
                                if (this._activeTrigger[t]) return !0;
                            return !1
                        }, u.prototype._getConfig = function (n) {
                            return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), o.typeCheckConfig(e, n, this.constructor.DefaultType), n
                        }, u.prototype._getDelegateConfig = function () {
                            var t = {};
                            if (this.config)
                                for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t
                        }, u._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this).data(s),
                                    r = "object" === ("undefined" == typeof e ? "undefined" : i(e)) ? e : null;
                                if ((n || !/dispose|hide/.test(e)) && (n || (n = new u(this, r), t(this).data(s, n)), "string" == typeof e)) {
                                    if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                    n[e]()
                                }
                            })
                        }, r(u, null, [{
                            key: "VERSION",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return d
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return e
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return s
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return g
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return l
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return p
                            }
                        }]), u
                    }();
                return t.fn[e] = x._jQueryInterface, t.fn[e].Constructor = x, t.fn[e].noConflict = function () {
                    return t.fn[e] = u, x._jQueryInterface
                }, x
            }(jQuery));
        ! function (o) {
            var s = "popover",
                l = "4.0.0-alpha.5",
                u = "bs.popover",
                c = "." + u,
                f = o.fn[s],
                d = o.extend({}, a.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }),
                p = o.extend({}, a.DefaultType, {
                    content: "(string|element|function)"
                }),
                h = {
                    FADE: "fade",
                    IN: "in"
                },
                m = {
                    TITLE: ".popover-title",
                    CONTENT: ".popover-content"
                },
                g = {
                    HIDE: "hide" + c,
                    HIDDEN: "hidden" + c,
                    SHOW: "show" + c,
                    SHOWN: "shown" + c,
                    INSERTED: "inserted" + c,
                    CLICK: "click" + c,
                    FOCUSIN: "focusin" + c,
                    FOCUSOUT: "focusout" + c,
                    MOUSEENTER: "mouseenter" + c,
                    MOUSELEAVE: "mouseleave" + c
                },
                y = function (a) {
                    function f() {
                        return n(this, f), t(this, a.apply(this, arguments))
                    }
                    return e(f, a), f.prototype.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, f.prototype.getTipElement = function () {
                        return this.tip = this.tip || o(this.config.template)[0]
                    }, f.prototype.setContent = function () {
                        var t = o(this.getTipElement());
                        this.setElementContent(t.find(m.TITLE), this.getTitle()), this.setElementContent(t.find(m.CONTENT), this._getContent()), t.removeClass(h.FADE).removeClass(h.IN), this.cleanupTether()
                    }, f.prototype._getContent = function () {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, f._jQueryInterface = function (t) {
                        return this.each(function () {
                            var e = o(this).data(u),
                                n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
                            if ((e || !/destroy|hide/.test(t)) && (e || (e = new f(this, n), o(this).data(u, e)), "string" == typeof t)) {
                                if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                                e[t]()
                            }
                        })
                    }, r(f, null, [{
                        key: "VERSION",
                        get: function () {
                            return l
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return d
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return s
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return u
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return g
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return c
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return p
                        }
                    }]), f
                }(a);
            return o.fn[s] = y._jQueryInterface, o.fn[s].Constructor = y, o.fn[s].noConflict = function () {
                return o.fn[s] = f, y._jQueryInterface
            }, y
        }(jQuery)
    }()
}, function (t, e, n) {
    var i, i;
    ! function (e) {
        t.exports = e()
    }(function () {
        return function t(e, n, r) {
            function o(s, l) {
                if (!n[s]) {
                    if (!e[s]) {
                        var u = "function" == typeof i && i;
                        if (!l && u) return i(s, !0);
                        if (a) return a(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var f = n[s] = {
                        exports: {}
                    };
                    e[s][0].call(f.exports, function (t) {
                        var n = e[s][1][t];
                        return o(n ? n : t)
                    }, f, f.exports, t, e, n, r)
                }
                return n[s].exports
            }
            for (var a = "function" == typeof i && i, s = 0; s < r.length; s++) o(r[s]);
            return o
        }({
            1: [function (t, e, n) {
                e.exports = function (t) {
                    var e, n, i, r = -1;
                    if (t.lines.length > 1 && "flex-start" === t.style.alignContent)
                        for (e = 0; i = t.lines[++r];) i.crossStart = e, e += i.cross;
                    else if (t.lines.length > 1 && "flex-end" === t.style.alignContent)
                        for (e = t.flexStyle.crossSpace; i = t.lines[++r];) i.crossStart = e, e += i.cross;
                    else if (t.lines.length > 1 && "center" === t.style.alignContent)
                        for (e = t.flexStyle.crossSpace / 2; i = t.lines[++r];) i.crossStart = e, e += i.cross;
                    else if (t.lines.length > 1 && "space-between" === t.style.alignContent)
                        for (n = t.flexStyle.crossSpace / (t.lines.length - 1), e = 0; i = t.lines[++r];) i.crossStart = e, e += i.cross + n;
                    else if (t.lines.length > 1 && "space-around" === t.style.alignContent)
                        for (n = 2 * t.flexStyle.crossSpace / (2 * t.lines.length), e = n / 2; i = t.lines[++r];) i.crossStart = e, e += i.cross + n;
                    else
                        for (n = t.flexStyle.crossSpace / t.lines.length, e = t.flexStyle.crossInnerBefore; i = t.lines[++r];) i.crossStart = e, i.cross += n, e += i.cross
                }
            }, {}],
            2: [function (t, e, n) {
                e.exports = function (t) {
                    for (var e, n = -1; line = t.lines[++n];)
                        for (e = -1; child = line.children[++e];) {
                            var i = child.style.alignSelf;
                            "auto" === i && (i = t.style.alignItems), "flex-start" === i ? child.flexStyle.crossStart = line.crossStart : "flex-end" === i ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === i ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                        }
                }
            }, {}],
            3: [function (t, e, n) {
                e.exports = function t(e, t) {
                    var n = "row" === t || "row-reverse" === t,
                        i = e.mainAxis;
                    if (i) {
                        var r = n && "inline" === i || !n && "block" === i;
                        r || (e.flexStyle = {
                            main: e.flexStyle.cross,
                            cross: e.flexStyle.main,
                            mainOffset: e.flexStyle.crossOffset,
                            crossOffset: e.flexStyle.mainOffset,
                            mainBefore: e.flexStyle.crossBefore,
                            mainAfter: e.flexStyle.crossAfter,
                            crossBefore: e.flexStyle.mainBefore,
                            crossAfter: e.flexStyle.mainAfter,
                            mainInnerBefore: e.flexStyle.crossInnerBefore,
                            mainInnerAfter: e.flexStyle.crossInnerAfter,
                            crossInnerBefore: e.flexStyle.mainInnerBefore,
                            crossInnerAfter: e.flexStyle.mainInnerAfter,
                            mainBorderBefore: e.flexStyle.crossBorderBefore,
                            mainBorderAfter: e.flexStyle.crossBorderAfter,
                            crossBorderBefore: e.flexStyle.mainBorderBefore,
                            crossBorderAfter: e.flexStyle.mainBorderAfter
                        })
                    } else n ? e.flexStyle = {
                        main: e.style.width,
                        cross: e.style.height,
                        mainOffset: e.style.offsetWidth,
                        crossOffset: e.style.offsetHeight,
                        mainBefore: e.style.marginLeft,
                        mainAfter: e.style.marginRight,
                        crossBefore: e.style.marginTop,
                        crossAfter: e.style.marginBottom,
                        mainInnerBefore: e.style.paddingLeft,
                        mainInnerAfter: e.style.paddingRight,
                        crossInnerBefore: e.style.paddingTop,
                        crossInnerAfter: e.style.paddingBottom,
                        mainBorderBefore: e.style.borderLeftWidth,
                        mainBorderAfter: e.style.borderRightWidth,
                        crossBorderBefore: e.style.borderTopWidth,
                        crossBorderAfter: e.style.borderBottomWidth
                    } : e.flexStyle = {
                        main: e.style.height,
                        cross: e.style.width,
                        mainOffset: e.style.offsetHeight,
                        crossOffset: e.style.offsetWidth,
                        mainBefore: e.style.marginTop,
                        mainAfter: e.style.marginBottom,
                        crossBefore: e.style.marginLeft,
                        crossAfter: e.style.marginRight,
                        mainInnerBefore: e.style.paddingTop,
                        mainInnerAfter: e.style.paddingBottom,
                        crossInnerBefore: e.style.paddingLeft,
                        crossInnerAfter: e.style.paddingRight,
                        mainBorderBefore: e.style.borderTopWidth,
                        mainBorderAfter: e.style.borderBottomWidth,
                        crossBorderBefore: e.style.borderLeftWidth,
                        crossBorderAfter: e.style.borderRightWidth
                    }, "content-box" === e.style.boxSizing && ("number" == typeof e.flexStyle.main && (e.flexStyle.main += e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), "number" == typeof e.flexStyle.cross && (e.flexStyle.cross += e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter));
                    e.mainAxis = n ? "inline" : "block", e.crossAxis = n ? "block" : "inline", "number" == typeof e.style.flexBasis && (e.flexStyle.main = e.style.flexBasis + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), e.flexStyle.mainOuter = e.flexStyle.main, e.flexStyle.crossOuter = e.flexStyle.cross, "auto" === e.flexStyle.mainOuter && (e.flexStyle.mainOuter = e.flexStyle.mainOffset), "auto" === e.flexStyle.crossOuter && (e.flexStyle.crossOuter = e.flexStyle.crossOffset), "number" == typeof e.flexStyle.mainBefore && (e.flexStyle.mainOuter += e.flexStyle.mainBefore), "number" == typeof e.flexStyle.mainAfter && (e.flexStyle.mainOuter += e.flexStyle.mainAfter), "number" == typeof e.flexStyle.crossBefore && (e.flexStyle.crossOuter += e.flexStyle.crossBefore), "number" == typeof e.flexStyle.crossAfter && (e.flexStyle.crossOuter += e.flexStyle.crossAfter)
                }
            }, {}],
            4: [function (t, e, n) {
                var i = t("../reduce");
                e.exports = function (t) {
                    if (t.mainSpace > 0) {
                        var e = i(t.children, function (t, e) {
                            return t + parseFloat(e.style.flexGrow)
                        }, 0);
                        e > 0 && (t.main = i(t.children, function (n, i) {
                            return "auto" === i.flexStyle.main ? i.flexStyle.main = i.flexStyle.mainOffset + parseFloat(i.style.flexGrow) / e * t.mainSpace : i.flexStyle.main += parseFloat(i.style.flexGrow) / e * t.mainSpace, i.flexStyle.mainOuter = i.flexStyle.main + i.flexStyle.mainBefore + i.flexStyle.mainAfter, n + i.flexStyle.mainOuter
                        }, 0), t.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            5: [function (t, e, n) {
                var i = t("../reduce");
                e.exports = function (t) {
                    if (t.mainSpace < 0) {
                        var e = i(t.children, function (t, e) {
                            return t + parseFloat(e.style.flexShrink)
                        }, 0);
                        e > 0 && (t.main = i(t.children, function (n, i) {
                            return i.flexStyle.main += parseFloat(i.style.flexShrink) / e * t.mainSpace, i.flexStyle.mainOuter = i.flexStyle.main + i.flexStyle.mainBefore + i.flexStyle.mainAfter, n + i.flexStyle.mainOuter
                        }, 0), t.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            6: [function (t, e, n) {
                var i = t("../reduce");
                e.exports = function (t) {
                    var e;
                    t.lines = [e = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    for (var n, r = -1; n = t.children[++r];) "nowrap" === t.style.flexWrap || 0 === e.children.length || "auto" === t.flexStyle.main || t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter >= e.main + n.flexStyle.mainOuter ? (e.main += n.flexStyle.mainOuter, e.cross = Math.max(e.cross, n.flexStyle.crossOuter)) : t.lines.push(e = {
                        main: n.flexStyle.mainOuter,
                        cross: n.flexStyle.crossOuter,
                        children: []
                    }), e.children.push(n);
                    t.flexStyle.mainLines = i(t.lines, function (t, e) {
                        return Math.max(t, e.main)
                    }, 0), t.flexStyle.crossLines = i(t.lines, function (t, e) {
                        return t + e.cross
                    }, 0), "auto" === t.flexStyle.main && (t.flexStyle.main = Math.max(t.flexStyle.mainOffset, t.flexStyle.mainLines + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter)), "auto" === t.flexStyle.cross && (t.flexStyle.cross = Math.max(t.flexStyle.crossOffset, t.flexStyle.crossLines + t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter)), t.flexStyle.crossSpace = t.flexStyle.cross - t.flexStyle.crossInnerBefore - t.flexStyle.crossInnerAfter - t.flexStyle.crossBorderBefore - t.flexStyle.crossBorderAfter - t.flexStyle.crossLines, t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter, t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                }
            }, {
                "../reduce": 12
            }],
            7: [function (t, e, n) {
                function i(e) {
                    for (var n, i = -1; n = e.children[++i];) t("./flex-direction")(n, e.style.flexDirection);
                    t("./flex-direction")(e, e.style.flexDirection), t("./order")(e), t("./flexbox-lines")(e), t("./align-content")(e), i = -1;
                    for (var r; r = e.lines[++i];) r.mainSpace = e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter - r.main, t("./flex-grow")(r), t("./flex-shrink")(r), t("./margin-main")(r), t("./margin-cross")(r), t("./justify-content")(r, e.style.justifyContent, e);
                    t("./align-items")(e)
                }
                e.exports = i
            }, {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function (t, e, n) {
                e.exports = function (t, e, n) {
                    var i, r, o, a = n.flexStyle.mainInnerBefore,
                        s = -1;
                    if ("flex-end" === e)
                        for (i = t.mainSpace, i += a; o = t.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter;
                    else if ("center" === e)
                        for (i = t.mainSpace / 2, i += a; o = t.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter;
                    else if ("space-between" === e)
                        for (r = t.mainSpace / (t.children.length - 1), i = 0, i += a; o = t.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter + r;
                    else if ("space-around" === e)
                        for (r = 2 * t.mainSpace / (2 * t.children.length), i = r / 2, i += a; o = t.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter + r;
                    else
                        for (i = 0, i += a; o = t.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter
                }
            }, {}],
            9: [function (t, e, n) {
                e.exports = function (t) {
                    for (var e, n = -1; e = t.children[++n];) {
                        var i = 0;
                        "auto" === e.flexStyle.crossBefore && ++i, "auto" === e.flexStyle.crossAfter && ++i;
                        var r = t.cross - e.flexStyle.crossOuter;
                        "auto" === e.flexStyle.crossBefore && (e.flexStyle.crossBefore = r / i), "auto" === e.flexStyle.crossAfter && (e.flexStyle.crossAfter = r / i), "auto" === e.flexStyle.cross ? e.flexStyle.crossOuter = e.flexStyle.crossOffset + e.flexStyle.crossBefore + e.flexStyle.crossAfter : e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                    }
                }
            }, {}],
            10: [function (t, e, n) {
                e.exports = function (t) {
                    for (var e, n = 0, i = -1; e = t.children[++i];) "auto" === e.flexStyle.mainBefore && ++n, "auto" === e.flexStyle.mainAfter && ++n;
                    if (n > 0) {
                        for (i = -1; e = t.children[++i];) "auto" === e.flexStyle.mainBefore && (e.flexStyle.mainBefore = t.mainSpace / n), "auto" === e.flexStyle.mainAfter && (e.flexStyle.mainAfter = t.mainSpace / n), "auto" === e.flexStyle.main ? e.flexStyle.mainOuter = e.flexStyle.mainOffset + e.flexStyle.mainBefore + e.flexStyle.mainAfter : e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter;
                        t.mainSpace = 0
                    }
                }
            }, {}],
            11: [function (t, e, n) {
                var i = /^(column|row)-reverse$/;
                e.exports = function (t) {
                    t.children.sort(function (t, e) {
                        return t.style.order - e.style.order || t.index - e.index
                    }), i.test(t.style.flexDirection) && t.children.reverse()
                }
            }, {}],
            12: [function (t, e, n) {
                function i(t, e, n) {
                    for (var i = t.length, r = -1; ++r < i;) r in t && (n = e(n, t[r], r));
                    return n
                }
                e.exports = i
            }, {}],
            13: [function (t, e, n) {
                function i(t) {
                    s(a(t))
                }
                var r = t("./read"),
                    o = t("./write"),
                    a = t("./readAll"),
                    s = t("./writeAll");
                e.exports = i, e.exports.read = r, e.exports.write = o, e.exports.readAll = a, e.exports.writeAll = s
            }, {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function (t, e, n) {
                function i(t, e) {
                    var n = String(t).match(o);
                    if (!n) return t;
                    var i = n[1],
                        a = n[2];
                    return "px" === a ? 1 * i : "cm" === a ? .3937 * i * 96 : "in" === a ? 96 * i : "mm" === a ? .3937 * i * 96 / 10 : "pc" === a ? 12 * i * 96 / 72 : "pt" === a ? 96 * i / 72 : "rem" === a ? 16 * i : r(t, e)
                }

                function r(t, e) {
                    a.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + t + "!important", e.parentNode.insertBefore(a, e.nextSibling);
                    var n = a.offsetWidth;
                    return e.parentNode.removeChild(a), n
                }
                e.exports = i;
                var o = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                    a = document.createElement("div")
            }, {}],
            15: [function (t, e, n) {
                function i(t) {
                    var e = {
                            alignContent: "stretch",
                            alignItems: "stretch",
                            alignSelf: "auto",
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            boxSizing: "content-box",
                            display: "inline",
                            flexBasis: "auto",
                            flexDirection: "row",
                            flexGrow: 0,
                            flexShrink: 1,
                            flexWrap: "nowrap",
                            justifyContent: "flex-start",
                            height: "auto",
                            marginTop: 0,
                            marginRight: 0,
                            marginLeft: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            minHeight: 0,
                            minWidth: 0,
                            order: 0,
                            position: "static",
                            width: "auto"
                        },
                        n = t instanceof Element;
                    if (n) {
                        var i = t.hasAttribute("data-style"),
                            s = i ? t.getAttribute("data-style") : t.getAttribute("style") || "";
                        i || t.setAttribute("data-style", s);
                        var u = window.getComputedStyle && getComputedStyle(t) || {};
                        a(e, u);
                        var c = t.currentStyle || {};
                        r(e, c), o(e, s);
                        for (var f in e) e[f] = l(e[f], t);
                        var d = t.getBoundingClientRect();
                        e.offsetHeight = d.height || t.offsetHeight, e.offsetWidth = d.width || t.offsetWidth
                    }
                    var p = {
                        element: t,
                        style: e
                    };
                    return p
                }

                function r(t, e) {
                    for (var n in t) {
                        var i = n in e;
                        if (i) t[n] = e[n];
                        else {
                            var r = n.replace(/[A-Z]/g, "-$&").toLowerCase(),
                                o = r in e;
                            o && (t[n] = e[r])
                        }
                    }
                    var a = "-js-display" in e;
                    a && (t.display = e["-js-display"])
                }

                function o(t, e) {
                    for (var n; n = s.exec(e);) {
                        var i = n[1].toLowerCase().replace(/-[a-z]/g, function (t) {
                            return t.slice(1).toUpperCase()
                        });
                        t[i] = n[2]
                    }
                }

                function a(t, e) {
                    for (var n in t) {
                        var i = n in e;
                        i && !/^(alignSelf|height|width)$/.test(n) && (t[n] = e[n])
                    }
                }
                e.exports = i;
                var s = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                    l = t("./getComputedLength")
            }, {
                "./getComputedLength": 14
            }],
            16: [function (t, e, n) {
                function i(t) {
                    var e = [];
                    return r(t, e), e
                }

                function r(t, e) {
                    for (var n, i = o(t), s = [], l = -1; n = t.childNodes[++l];) {
                        var u = 3 === n.nodeType && !/^\s*$/.test(n.nodeValue);
                        if (i && u) {
                            var c = n;
                            n = t.insertBefore(document.createElement("flex-item"), c), n.appendChild(c)
                        }
                        var f = n instanceof Element;
                        if (f) {
                            var d = r(n, e);
                            if (i) {
                                var p = n.style;
                                p.display = "inline-block", p.position = "absolute", d.style = a(n).style, s.push(d)
                            }
                        }
                    }
                    var h = {
                        element: t,
                        children: s
                    };
                    return i && (h.style = a(t).style, e.push(h)), h
                }

                function o(t) {
                    var e = t instanceof Element,
                        n = e && t.getAttribute("data-style"),
                        i = e && t.currentStyle && t.currentStyle["-js-display"],
                        r = s.test(n) || l.test(i);
                    return r
                }
                e.exports = i;
                var a = t("../read"),
                    s = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                    l = /^(inline-)?flex$/i
            }, {
                "../read": 15
            }],
            17: [function (t, e, n) {
                function i(t) {
                    o(t);
                    var e = t.element.style,
                        n = "inline" === t.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    e.boxSizing = "content-box", e.display = "block", e.position = "relative", e.width = r(t.flexStyle[n[0]] - t.flexStyle[n[0] + "InnerBefore"] - t.flexStyle[n[0] + "InnerAfter"] - t.flexStyle[n[0] + "BorderBefore"] - t.flexStyle[n[0] + "BorderAfter"]), e.height = r(t.flexStyle[n[1]] - t.flexStyle[n[1] + "InnerBefore"] - t.flexStyle[n[1] + "InnerAfter"] - t.flexStyle[n[1] + "BorderBefore"] - t.flexStyle[n[1] + "BorderAfter"]);
                    for (var i, a = -1; i = t.children[++a];) {
                        var s = i.element.style,
                            l = "inline" === i.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        s.boxSizing = "content-box", s.display = "block", s.position = "absolute", "auto" !== i.flexStyle[l[0]] && (s.width = r(i.flexStyle[l[0]] - i.flexStyle[l[0] + "InnerBefore"] - i.flexStyle[l[0] + "InnerAfter"] - i.flexStyle[l[0] + "BorderBefore"] - i.flexStyle[l[0] + "BorderAfter"])), "auto" !== i.flexStyle[l[1]] && (s.height = r(i.flexStyle[l[1]] - i.flexStyle[l[1] + "InnerBefore"] - i.flexStyle[l[1] + "InnerAfter"] - i.flexStyle[l[1] + "BorderBefore"] - i.flexStyle[l[1] + "BorderAfter"])), s.top = r(i.flexStyle[l[1] + "Start"]), s.left = r(i.flexStyle[l[0] + "Start"]), s.marginTop = r(i.flexStyle[l[1] + "Before"]), s.marginRight = r(i.flexStyle[l[0] + "After"]), s.marginBottom = r(i.flexStyle[l[1] + "After"]), s.marginLeft = r(i.flexStyle[l[0] + "Before"])
                    }
                }

                function r(t) {
                    return "string" == typeof t ? t : Math.max(t, 0) + "px"
                }
                e.exports = i;
                var o = t("../flexbox")
            }, {
                "../flexbox": 7
            }],
            18: [function (t, e, n) {
                function i(t) {
                    for (var e, n = -1; e = t[++n];) r(e)
                }
                e.exports = i;
                var r = t("../write")
            }, {
                "../write": 17
            }]
        }, {}, [13])(13)
    })
}, function (t, e) {
    ! function (t) {
        "use strict";

        function e(t, e) {
            return t + ".touchspin_" + e
        }

        function n(n, i) {
            return t.map(n, function (t) {
                return e(t, i)
            })
        }
        var i = 0;
        t.fn.TouchSpin = function (e) {
            if ("destroy" === e) return void this.each(function () {
                var e = t(this),
                    i = e.data();
                t(document).off(n(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], i.spinnerid).join(" "))
            });
            var r = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalupclass: "glyphicon glyphicon-chevron-up",
                    verticaldownclass: "glyphicon glyphicon-chevron-down",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-default",
                    buttonup_class: "btn btn-default",
                    buttondown_txt: "-",
                    buttonup_txt: "+"
                },
                o = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function () {
                function a() {
                    j.data("alreadyinitialized") || (j.data("alreadyinitialized", !0), i += 1, j.data("spinnerid", i), j.is("input") && (u(), s(), _(), d(), m(), g(), y(), v(), O.input.css("display", "block")))
                }

                function s() {
                    "" !== A.initval && "" === j.val() && j.val(A.initval)
                }

                function l(t) {
                    f(t), _();
                    var e = O.input.val();
                    "" !== e && (e = Number(O.input.val()), O.input.val(e.toFixed(A.decimals)))
                }

                function u() {
                    A = t.extend({}, r, B, c(), e)
                }

                function c() {
                    var e = {};
                    return t.each(o, function (t, n) {
                        var i = "bts-" + n;
                        j.is("[data-" + i + "]") && (e[t] = j.data(i))
                    }), e
                }

                function f(e) {
                    A = t.extend({}, A, e)
                }

                function d() {
                    var t = j.val(),
                        e = j.parent();
                    "" !== t && (t = Number(t).toFixed(A.decimals)), j.data("initvalue", t).val(t), j.addClass("form-control"), e.hasClass("input-group") ? p(e) : h()
                }

                function p(e) {
                    e.addClass("bootstrap-touchspin");
                    var n, i, r = j.prev(),
                        o = j.next(),
                        a = '<span class="input-group-addon bootstrap-touchspin-prefix">' + A.prefix + "</span>",
                        s = '<span class="input-group-addon bootstrap-touchspin-postfix">' + A.postfix + "</span>";
                    r.hasClass("input-group-btn") ? (n = '<button class="' + A.buttondown_class + ' bootstrap-touchspin-down" type="button">' + A.buttondown_txt + "</button>", r.append(n)) : (n = '<span class="input-group-btn"><button class="' + A.buttondown_class + ' bootstrap-touchspin-down" type="button">' + A.buttondown_txt + "</button></span>", t(n).insertBefore(j)), o.hasClass("input-group-btn") ? (i = '<button class="' + A.buttonup_class + ' bootstrap-touchspin-up" type="button">' + A.buttonup_txt + "</button>", o.prepend(i)) : (i = '<span class="input-group-btn"><button class="' + A.buttonup_class + ' bootstrap-touchspin-up" type="button">' + A.buttonup_txt + "</button></span>", t(i).insertAfter(j)), t(a).insertBefore(j), t(s).insertAfter(j), I = e
                }

                function h() {
                    var e;
                    e = A.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + A.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + A.postfix + '</span><span class="input-group-btn-vertical"><button class="' + A.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + A.verticalupclass + '"></i></button><button class="' + A.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + A.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + A.buttondown_class + ' bootstrap-touchspin-down" type="button">' + A.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + A.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + A.postfix + '</span><span class="input-group-btn"><button class="' + A.buttonup_class + ' bootstrap-touchspin-up" type="button">' + A.buttonup_txt + "</button></span></div>", I = t(e).insertBefore(j), t(".bootstrap-touchspin-prefix", I).after(j), j.hasClass("input-sm") ? I.addClass("input-group-sm") : j.hasClass("input-lg") && I.addClass("input-group-lg")
                }

                function m() {
                    O = {
                        down: t(".bootstrap-touchspin-down", I),
                        up: t(".bootstrap-touchspin-up", I),
                        input: t("input", I),
                        prefix: t(".bootstrap-touchspin-prefix", I).addClass(A.prefix_extraclass),
                        postfix: t(".bootstrap-touchspin-postfix", I).addClass(A.postfix_extraclass)
                    }
                }

                function g() {
                    "" === A.prefix && O.prefix.hide(), "" === A.postfix && O.postfix.hide()
                }

                function y() {
                    j.on("keydown", function (t) {
                        var e = t.keyCode || t.which;
                        38 === e ? ("up" !== F && (S(), C()), t.preventDefault()) : 40 === e && ("down" !== F && (w(), E()), t.preventDefault())
                    }), j.on("keyup", function (t) {
                        var e = t.keyCode || t.which;
                        38 === e ? T() : 40 === e && T()
                    }), j.on("blur", function () {
                        _()
                    }), O.down.on("keydown", function (t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("down" !== F && (w(), E()), t.preventDefault())
                    }), O.down.on("keyup", function (t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || T()
                    }), O.up.on("keydown", function (t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("up" !== F && (S(), C()), t.preventDefault())
                    }), O.up.on("keyup", function (t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || T()
                    }), O.down.on("mousedown.touchspin", function (t) {
                        O.down.off("touchstart.touchspin"), j.is(":disabled") || (w(), E(), t.preventDefault(), t.stopPropagation())
                    }), O.down.on("touchstart.touchspin", function (t) {
                        O.down.off("mousedown.touchspin"), j.is(":disabled") || (w(), E(), t.preventDefault(), t.stopPropagation())
                    }), O.up.on("mousedown.touchspin", function (t) {
                        O.up.off("touchstart.touchspin"), j.is(":disabled") || (S(), C(), t.preventDefault(), t.stopPropagation())
                    }), O.up.on("touchstart.touchspin", function (t) {
                        O.up.off("mousedown.touchspin"), j.is(":disabled") || (S(), C(), t.preventDefault(), t.stopPropagation())
                    }), O.up.on("mouseout touchleave touchend touchcancel", function (t) {
                        F && (t.stopPropagation(), T())
                    }), O.down.on("mouseout touchleave touchend touchcancel", function (t) {
                        F && (t.stopPropagation(), T())
                    }), O.down.on("mousemove touchmove", function (t) {
                        F && (t.stopPropagation(), t.preventDefault())
                    }), O.up.on("mousemove touchmove", function (t) {
                        F && (t.stopPropagation(), t.preventDefault())
                    }), t(document).on(n(["mouseup", "touchend", "touchcancel"], i).join(" "), function (t) {
                        F && (t.preventDefault(), T())
                    }), t(document).on(n(["mousemove", "touchmove", "scroll", "scrollstart"], i).join(" "), function (t) {
                        F && (t.preventDefault(), T())
                    }), j.on("mousewheel DOMMouseScroll", function (t) {
                        if (A.mousewheel && j.is(":focus")) {
                            var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(), t.preventDefault(), e < 0 ? w() : S()
                        }
                    })
                }

                function v() {
                    j.on("touchspin.uponce", function () {
                        T(), S()
                    }), j.on("touchspin.downonce", function () {
                        T(), w()
                    }), j.on("touchspin.startupspin", function () {
                        C()
                    }), j.on("touchspin.startdownspin", function () {
                        E()
                    }), j.on("touchspin.stopspin", function () {
                        T()
                    }), j.on("touchspin.updatesettings", function (t, e) {
                        l(e)
                    })
                }

                function b(t) {
                    switch (A.forcestepdivisibility) {
                        case "round":
                            return (Math.round(t / A.step) * A.step).toFixed(A.decimals);
                        case "floor":
                            return (Math.floor(t / A.step) * A.step).toFixed(A.decimals);
                        case "ceil":
                            return (Math.ceil(t / A.step) * A.step).toFixed(A.decimals);
                        default:
                            return t
                    }
                }

                function _() {
                    var t, e, n;
                    return t = j.val(), "" === t ? void("" !== A.replacementval && (j.val(A.replacementval), j.trigger("change"))) : void(A.decimals > 0 && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== A.replacementval ? A.replacementval : 0), n = e, e.toString() !== t && (n = e), e < A.min && (n = A.min), e > A.max && (n = A.max), n = b(n), Number(t).toString() !== n.toString() && (j.val(n), j.trigger("change"))))
                }

                function x() {
                    if (A.booster) {
                        var t = Math.pow(2, Math.floor(V / A.boostat)) * A.step;
                        return A.maxboostedstep && t > A.maxboostedstep && (t = A.maxboostedstep, k = Math.round(k / t) * t), Math.max(A.step, t)
                    }
                    return A.step
                }

                function S() {
                    _(), k = parseFloat(O.input.val()), isNaN(k) && (k = 0);
                    var t = k,
                        e = x();
                    k += e, k > A.max && (k = A.max, j.trigger("touchspin.on.max"), T()), O.input.val(Number(k).toFixed(A.decimals)), t !== k && j.trigger("change")
                }

                function w() {
                    _(), k = parseFloat(O.input.val()), isNaN(k) && (k = 0);
                    var t = k,
                        e = x();
                    k -= e, k < A.min && (k = A.min, j.trigger("touchspin.on.min"), T()), O.input.val(k.toFixed(A.decimals)), t !== k && j.trigger("change")
                }

                function E() {
                    T(), V = 0, F = "down", j.trigger("touchspin.on.startspin"), j.trigger("touchspin.on.startdownspin"), P = setTimeout(function () {
                        D = setInterval(function () {
                            V++, w()
                        }, A.stepinterval)
                    }, A.stepintervaldelay)
                }

                function C() {
                    T(), V = 0, F = "up", j.trigger("touchspin.on.startspin"), j.trigger("touchspin.on.startupspin"), L = setTimeout(function () {
                        N = setInterval(function () {
                            V++, S()
                        }, A.stepinterval)
                    }, A.stepintervaldelay)
                }

                function T() {
                    switch (clearTimeout(P), clearTimeout(L), clearInterval(D), clearInterval(N), F) {
                        case "up":
                            j.trigger("touchspin.on.stopupspin"), j.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            j.trigger("touchspin.on.stopdownspin"), j.trigger("touchspin.on.stopspin")
                    }
                    V = 0, F = !1
                }
                var A, I, O, k, D, N, P, L, j = t(this),
                    B = j.data(),
                    V = 0,
                    F = !1;
                a()
            })
        }
    }(jQuery)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        var n = e.children().detach();
        e.empty().append(t.children().detach()), t.append(n)
    }

    function o() {
        u.default.responsive.mobile ? (0, s.default)("*[id^='_desktop_']").each(function (t, e) {
            var n = (0, s.default)("#" + e.id.replace("_desktop_", "_mobile_"));
            n.length && r((0, s.default)(e), n)
        }) : (0, s.default)("*[id^='_mobile_']").each(function (t, e) {
            var n = (0, s.default)("#" + e.id.replace("_mobile_", "_desktop_"));
            n.length && r((0, s.default)(e), n)
        }), u.default.emit("responsive update", {
            mobile: u.default.responsive.mobile
        })
    }
    var a = n(8),
        s = i(a),
        l = n(9),
        u = i(l);
    u.default.responsive = u.default.responsive || {}, u.default.responsive.current_width = window.innerWidth, u.default.responsive.min_width = 992, u.default.responsive.mobile = u.default.responsive.current_width < u.default.responsive.min_width, (0, s.default)(window).on("resize", function () {
        var t = u.default.responsive.current_width,
            e = u.default.responsive.min_width,
            n = window.innerWidth,
            i = t >= e && n < e || t < e && n >= e;
        u.default.responsive.current_width = n, u.default.responsive.mobile = u.default.responsive.current_width < u.default.responsive.min_width, i && o()
    }), (0, s.default)(document).ready(function () {
        u.default.responsive.mobile && o()
    })
}, function (t, e) {
    t.exports = jQuery
}, function (t, e) {
    t.exports = prestashop
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r() {
        0 !== (0, a.default)(".js-cancel-address").length && (0, a.default)(".checkout-step:not(.js-current-step) .step-title").addClass("not-allowed"),
            (0, a.default)(".js-terms a").on("click", function (t) {
                t.preventDefault();
                var e = (0, a.default)(t.target).attr("href");
                e && (e += "?content_only=1", a.default.get(e, function (t) {
                    (0, a.default)("#modal").find(".js-modal-content").html((0, a.default)(t).find(".page-cms").contents())
                }).fail(function (t) {
                    l.default.emit("handleError", {
                        eventType: "clickTerms",
                        resp: t
                    })
                })), (0, a.default)("#modal").modal("show")
            }), (0, a.default)(".js-gift-checkbox").on("click", function (t) {
                (0, a.default)("#gift").collapse("toggle")
            })
    }
    var o = n(8),
        a = i(o),
        s = n(9),
        l = i(s);
    (0, a.default)(document).ready(function () {
        1 === (0, a.default)("body#checkout").length && r(), l.default.on("updatedDeliveryForm", function (t) {
            "undefined" != typeof t.deliveryOption && 0 !== t.deliveryOption.length && ((0, a.default)(".carrier-extra-content").hide(), t.deliveryOption.next(".carrier-extra-content").slideDown())
        })
    })
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r() {
        (0, s.default)("#order-return-form table thead input[type=checkbox]").on("click", function () {
            var t = (0, s.default)(this).prop("checked");
            (0, s.default)("#order-return-form table tbody input[type=checkbox]").each(function (e, n) {
                (0, s.default)(n).prop("checked", t)
            })
        })
    }

    function o() {
        (0, s.default)("body#order-detail") && r()
    }
    var a = n(8),
        s = i(a);
    (0, s.default)(document).ready(o)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t) {
        (0, s.default)("#search_filters").replaceWith(t.rendered_facets), (0, s.default)("#js-active-search-filters").replaceWith(t.rendered_active_filters), (0, s.default)("#js-product-list-top").replaceWith(t.rendered_products_top), (0, s.default)("#js-product-list").replaceWith(t.rendered_products), (0, s.default)("#js-product-list-bottom").replaceWith(t.rendered_products_bottom);
        var e = new f.default;
        e.init()
    }

    function o() {
        (0, s.default)(".product-actions .add-to-cart-or-refresh").attr("action", (0, s.default)("#getCartLink").val()), (0, s.default)(".product-actions .add-to-cart-or-refresh #tokenId").attr("value", (0, s.default)("#getTokenId").val())
    }
    var a = n(8),
        s = i(a),
        l = n(9),
        u = i(l);
    n(13);
    var c = n(14),
        f = i(c);
    (0, s.default)(document).ready(function () {
        o(), u.default.on("clickQuickView", function (e) {
            var n = {
                action: "quickview",
                id_product: e.dataset.idProduct,
                id_product_attribute: e.dataset.idProductAttribute
            };
            s.default.post(u.default.urls.pages.product, n, null, "json").then(function (e) {
                (0, s.default)("body").append(e.quickview_html);
                var n = (0, s.default)("#quickview-modal-" + e.product.id + "-" + e.product.id_product_attribute);
                n.modal("show"), t(n), n.on("hidden.bs.modal", function () {
                    n.remove()
                }), additionalCarousel(".modal.quickview .additional-carousel")
            }).fail(function (t) {
                u.default.emit("handleError", {
                    eventType: "clickQuickView",
                    resp: t
                })
            })
        });
        var t = function (t) {
                var n = 4,
                    i = (0, s.default)(".js-arrows"),
                    r = t.find(".js-qv-product-images");
                (0, s.default)(".js-thumb").on("click", function (t) {
                    (0, s.default)(".js-thumb").hasClass("selected") && (0, s.default)(".js-thumb").removeClass("selected"), (0, s.default)(t.currentTarget).addClass("selected"), (0, s.default)(".js-qv-product-cover").attr("src", (0, s.default)(t.target).data("image-large-src"))
                }), r.find("li").length <= n ? i.hide() : i.on("click", function (t) {
                    (0, s.default)(t.target).hasClass("arrow-up") && (0, s.default)(".js-qv-product-images").position().top < 0 ? (e("up"), (0, s.default)(".arrow-down").css("opacity", "1")) : (0, s.default)(t.target).hasClass("arrow-down") && r.position().top + r.height() > (0, s.default)(".js-qv-mask").height() && (e("down"), (0, s.default)(".arrow-up").css("opacity", "1"))
                }), t.find("#quantity_wanted").TouchSpin({
                    verticalbuttons: !0,
                    verticalupclass: "material-icons touchspin-up",
                    verticaldownclass: "material-icons touchspin-down",
                    buttondown_class: "btn btn-touchspin js-touchspin",
                    buttonup_class: "btn btn-touchspin js-touchspin",
                    min: 1,
                    max: 1e6
                })
            },
            e = function (t) {
                var e = 20,
                    n = (0, s.default)(".js-qv-product-images"),
                    i = (0, s.default)(".js-qv-product-images li img").height() + e,
                    r = n.position().top;
                n.velocity({
                    translateY: "up" === t ? r + i : r - i
                }, function () {
                    n.position().top >= 0 ? (0, s.default)(".arrow-up").css("opacity", ".2") : n.position().top + n.height() <= (0, s.default)(".js-qv-mask").height() && (0, s.default)(".arrow-down").css("opacity", ".2")
                })
            };
        (0, s.default)("body").on("click", "#search_filter_toggler", function () {
            (0, s.default)("#search_filters_wrapper").removeClass("hidden-md-down"), (0, s.default)("#content-wrapper").addClass("hidden-md-down"), (0, s.default)("#footer").addClass("hidden-md-down")
        }), (0, s.default)("#search_filter_controls .clear").on("click", function () {
            (0, s.default)("#search_filters_wrapper").addClass("hidden-md-down"), (0, s.default)("#content-wrapper").removeClass("hidden-md-down"), (0, s.default)("#footer").removeClass("hidden-md-down")
        }), (0, s.default)("#search_filter_controls .ok").on("click", function () {
            (0, s.default)("#search_filters_wrapper").addClass("hidden-md-down"), (0, s.default)("#content-wrapper").removeClass("hidden-md-down"), (0, s.default)("#footer").removeClass("hidden-md-down")
        });
        var n = function (t) {
            if (void 0 !== t.target.dataset.searchUrl) return t.target.dataset.searchUrl;
            if (void 0 === (0, s.default)(t.target).parent()[0].dataset.searchUrl) throw new Error("Can not parse search URL");
            return (0, s.default)(t.target).parent()[0].dataset.searchUrl
        };
        (0, s.default)("body").on("change", "#search_filters input[data-search-url]", function (t) {
            u.default.emit("updateFacets", n(t))
        }), (0, s.default)("body").on("click", ".js-search-filters-clear-all", function (t) {
            u.default.emit("updateFacets", n(t))
        }), (0, s.default)("body").on("click", ".js-search-link", function (t) {
            t.preventDefault(), u.default.emit("updateFacets", (0, s.default)(t.target).closest("a").get(0).href)
        }), (0, s.default)("body").on("change", "#search_filters select", function (t) {
            var e = (0, s.default)(t.target).closest("form");
            u.default.emit("updateFacets", "?" + e.serialize())
        }), u.default.on("updateProductList", function (t) {
            r(t), o();
            var e = s.default.totalStorage("display");
            e && "grid" != e ? display(e) : (0, s.default)(".display").find("li#grid").addClass("selected")
        })
    })
}, function (t, e, n) {
    var i, r;
    ! function (t) {
        "use strict";

        function e(t) {
            var e = t.length,
                i = n.type(t);
            return "function" !== i && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var n = function (t, e) {
                return new n.fn.init(t, e)
            };
            n.isWindow = function (t) {
                return t && t === t.window
            }, n.type = function (t) {
                return t ? "object" == typeof t || "function" == typeof t ? r[a.call(t)] || "object" : typeof t : t + ""
            }, n.isArray = Array.isArray || function (t) {
                return "array" === n.type(t)
            }, n.isPlainObject = function (t) {
                var e;
                if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
                try {
                    if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                for (e in t);
                return void 0 === e || o.call(t, e)
            }, n.each = function (t, n, i) {
                var r, o = 0,
                    a = t.length,
                    s = e(t);
                if (i) {
                    if (s)
                        for (; o < a && (r = n.apply(t[o], i), r !== !1); o++);
                    else
                        for (o in t)
                            if (t.hasOwnProperty(o) && (r = n.apply(t[o], i), r === !1)) break
                } else if (s)
                    for (; o < a && (r = n.call(t[o], o, t[o]), r !== !1); o++);
                else
                    for (o in t)
                        if (t.hasOwnProperty(o) && (r = n.call(t[o], o, t[o]), r === !1)) break;
                return t
            }, n.data = function (t, e, r) {
                if (void 0 === r) {
                    var o = t[n.expando],
                        a = o && i[o];
                    if (void 0 === e) return a;
                    if (a && e in a) return a[e]
                } else if (void 0 !== e) {
                    var s = t[n.expando] || (t[n.expando] = ++n.uuid);
                    return i[s] = i[s] || {}, i[s][e] = r, r
                }
            }, n.removeData = function (t, e) {
                var r = t[n.expando],
                    o = r && i[r];
                o && (e ? n.each(e, function (t, e) {
                    delete o[e]
                }) : delete i[r])
            }, n.extend = function () {
                var t, e, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
                    if (o = arguments[l])
                        for (r in o) o.hasOwnProperty(r) && (t = s[r], i = o[r], s !== i && (c && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, a = t && n.isArray(t) ? t : []) : a = t && n.isPlainObject(t) ? t : {}, s[r] = n.extend(c, a, i)) : void 0 !== i && (s[r] = i)));
                return s
            }, n.queue = function (t, i, r) {
                function o(t, n) {
                    var i = n || [];
                    return t && (e(Object(t)) ? ! function (t, e) {
                        for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
                        if (n !== n)
                            for (; void 0 !== e[i];) t[r++] = e[i++];
                        return t.length = r, t
                    }(i, "string" == typeof t ? [t] : t) : [].push.call(i, t)), i
                }
                if (t) {
                    i = (i || "fx") + "queue";
                    var a = n.data(t, i);
                    return r ? (!a || n.isArray(r) ? a = n.data(t, i, o(r)) : a.push(r), a) : a || []
                }
            }, n.dequeue = function (t, e) {
                n.each(t.nodeType ? [t] : t, function (t, i) {
                    e = e || "fx";
                    var r = n.queue(i, e),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === e && r.unshift("inprogress"), o.call(i, function () {
                        n.dequeue(i, e)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function (t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function () {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function () {
                    function t(t) {
                        for (var e = t.offsetParent; e && "html" !== e.nodeName.toLowerCase() && e.style && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var e = this[0],
                        i = t(e),
                        r = this.offset(),
                        o = /^(?:body|html)$/i.test(i.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(i).offset();
                    return r.top -= parseFloat(e.style.marginTop) || 0, r.left -= parseFloat(e.style.marginLeft) || 0, i.style && (o.top += parseFloat(i.style.borderTopWidth) || 0, o.left += parseFloat(i.style.borderLeftWidth) || 0), {
                        top: r.top - o.top,
                        left: r.left - o.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, t.Velocity = {
                Utilities: n
            }
        }
    }(window),
    function (o) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = o() : (i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r)))
    }(function () {
        "use strict";
        return function (t, e, n, i) {
            function r(t) {
                for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                    var r = t[e];
                    r && i.push(r)
                }
                return i
            }

            function o(t) {
                return _.isWrapped(t) ? t = v.call(t) : _.isNode(t) && (t = [t]), t
            }

            function a(t) {
                var e = h.data(t, "velocity");
                return null === e ? i : e
            }

            function s(t, e) {
                var n = a(t);
                n && n.delayTimer && !n.delayPaused && (n.delayRemaining = n.delay - e + n.delayBegin, n.delayPaused = !0, clearTimeout(n.delayTimer.setTimeout))
            }

            function l(t, e) {
                var n = a(t);
                n && n.delayTimer && n.delayPaused && (n.delayPaused = !1, n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining))
            }

            function u(t) {
                return function (e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function c(t, n, i, r) {
                function o(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function a(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function l(t, e, n) {
                    return ((o(e, n) * t + a(e, n)) * t + s(e)) * t
                }

                function u(t, e, n) {
                    return 3 * o(e, n) * t * t + 2 * a(e, n) * t + s(e)
                }

                function c(e, n) {
                    for (var r = 0; r < m; ++r) {
                        var o = u(n, t, i);
                        if (0 === o) return n;
                        var a = l(n, t, i) - e;
                        n -= a / o
                    }
                    return n
                }

                function f() {
                    for (var e = 0; e < b; ++e) w[e] = l(e * _, t, i)
                }

                function d(e, n, r) {
                    var o, a, s = 0;
                    do a = n + (r - n) / 2, o = l(a, t, i) - e, o > 0 ? r = a : n = a; while (Math.abs(o) > y && ++s < v);
                    return a
                }

                function p(e) {
                    for (var n = 0, r = 1, o = b - 1; r !== o && w[r] <= e; ++r) n += _;
                    --r;
                    var a = (e - w[r]) / (w[r + 1] - w[r]),
                        s = n + a * _,
                        l = u(s, t, i);
                    return l >= g ? c(e, s) : 0 === l ? s : d(e, n, n + _)
                }

                function h() {
                    E = !0, t === n && i === r || f()
                }
                var m = 4,
                    g = .001,
                    y = 1e-7,
                    v = 10,
                    b = 11,
                    _ = 1 / (b - 1),
                    x = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var S = 0; S < 4; ++S)
                    if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S])) return !1;
                t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
                var w = x ? new Float32Array(b) : new Array(b),
                    E = !1,
                    C = function (e) {
                        return E || h(), t === n && i === r ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), n, r)
                    };
                C.getControlPoints = function () {
                    return [{
                        x: t,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var T = "generateBezier(" + [t, n, i, r] + ")";
                return C.toString = function () {
                    return T
                }, C
            }

            function f(t, e) {
                var n = t;
                return _.isString(t) ? E.Easings[t] || (n = !1) : n = _.isArray(t) && 1 === t.length ? u.apply(null, t) : _.isArray(t) && 2 === t.length ? C.apply(null, t.concat([e])) : !(!_.isArray(t) || 4 !== t.length) && c.apply(null, t), n === !1 && (n = E.Easings[E.defaults.easing] ? E.defaults.easing : w), n
            }

            function d(t) {
                if (t) {
                    var e = E.timestamp && t !== !0 ? t : y.now(),
                        n = E.State.calls.length;
                    n > 1e4 && (E.State.calls = r(E.State.calls), n = E.State.calls.length);
                    for (var o = 0; o < n; o++)
                        if (E.State.calls[o]) {
                            var s = E.State.calls[o],
                                l = s[0],
                                u = s[2],
                                c = s[3],
                                f = !!c,
                                g = null,
                                v = s[5],
                                b = s[6];
                            if (c || (c = E.State.calls[o][3] = e - 16), v) {
                                if (v.resume !== !0) continue;
                                c = s[3] = Math.round(e - b - 16), s[5] = null
                            }
                            b = s[6] = e - c;
                            for (var x = Math.min(b / u.duration, 1), S = 0, w = l.length; S < w; S++) {
                                var C = l[S],
                                    A = C.element;
                                if (a(A)) {
                                    var O = !1;
                                    if (u.display !== i && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var k = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            h.each(k, function (t, e) {
                                                T.setPropertyValue(A, "display", e)
                                            })
                                        }
                                        T.setPropertyValue(A, "display", u.display)
                                    }
                                    u.visibility !== i && "hidden" !== u.visibility && T.setPropertyValue(A, "visibility", u.visibility);
                                    for (var D in C)
                                        if (C.hasOwnProperty(D) && "element" !== D) {
                                            var N, P = C[D],
                                                L = _.isString(P.easing) ? E.Easings[P.easing] : P.easing;
                                            if (_.isString(P.pattern)) {
                                                var j = 1 === x ? function (t, e, n) {
                                                    var i = P.endValue[e];
                                                    return n ? Math.round(i) : i
                                                } : function (t, e, n) {
                                                    var i = P.startValue[e],
                                                        r = P.endValue[e] - i,
                                                        o = i + r * L(x, u, r);
                                                    return n ? Math.round(o) : o
                                                };
                                                N = P.pattern.replace(/{(\d+)(!)?}/g, j)
                                            } else if (1 === x) N = P.endValue;
                                            else {
                                                var B = P.endValue - P.startValue;
                                                N = P.startValue + B * L(x, u, B)
                                            }
                                            if (!f && N === P.currentValue) continue;
                                            if (P.currentValue = N, "tween" === D) g = N;
                                            else {
                                                var V;
                                                if (T.Hooks.registered[D]) {
                                                    V = T.Hooks.getRoot(D);
                                                    var F = a(A).rootPropertyValueCache[V];
                                                    F && (P.rootPropertyValue = F)
                                                }
                                                var R = T.setPropertyValue(A, D, P.currentValue + (m < 9 && 0 === parseFloat(N) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                T.Hooks.registered[D] && (T.Normalizations.registered[V] ? a(A).rootPropertyValueCache[V] = T.Normalizations.registered[V]("extract", null, R[1]) : a(A).rootPropertyValueCache[V] = R[1]), "transform" === R[0] && (O = !0)
                                            }
                                        } u.mobileHA && a(A).transformCache.translate3d === i && (a(A).transformCache.translate3d = "(0px, 0px, 0px)", O = !0), O && T.flushTransformCache(A)
                                }
                            }
                            u.display !== i && "none" !== u.display && (E.State.calls[o][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (E.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], x, Math.max(0, c + u.duration - e), c, g), 1 === x && p(o)
                        }
                }
                E.State.isTicking && I(d)
            }

            function p(t, e) {
                if (!E.State.calls[t]) return !1;
                for (var n = E.State.calls[t][0], r = E.State.calls[t][1], o = E.State.calls[t][2], s = E.State.calls[t][4], l = !1, u = 0, c = n.length; u < c; u++) {
                    var f = n[u].element;
                    e || o.loop || ("none" === o.display && T.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && T.setPropertyValue(f, "visibility", o.visibility));
                    var d = a(f);
                    if (o.loop !== !0 && (h.queue(f)[1] === i || !/\.velocityQueueEntryFlag/i.test(h.queue(f)[1])) && d) {
                        d.isAnimating = !1, d.rootPropertyValueCache = {};
                        var p = !1;
                        h.each(T.Lists.transforms3D, function (t, e) {
                            var n = /^scale/.test(e) ? 1 : 0,
                                r = d.transformCache[e];
                            d.transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0, delete d.transformCache[e])
                        }), o.mobileHA && (p = !0, delete d.transformCache.translate3d), p && T.flushTransformCache(f), T.Values.removeClass(f, "velocity-animating")
                    }
                    if (!e && o.complete && !o.loop && u === c - 1) try {
                        o.complete.call(r, r)
                    } catch (t) {
                        setTimeout(function () {
                            throw t
                        }, 1)
                    }
                    s && o.loop !== !0 && s(r), d && o.loop === !0 && !e && (h.each(d.tweensContainer, function (t, e) {
                        if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 === 0) {
                            var n = e.startValue;
                            e.startValue = e.endValue, e.endValue = n
                        }
                        /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), E(f, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), o.queue !== !1 && h.dequeue(f, o.queue)
                }
                E.State.calls[t] = !1;
                for (var m = 0, g = E.State.calls.length; m < g; m++)
                    if (E.State.calls[m] !== !1) {
                        l = !0;
                        break
                    } l === !1 && (E.State.isTicking = !1, delete E.State.calls, E.State.calls = [])
            }
            var h, m = function () {
                    if (n.documentMode) return n.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = n.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return i
                }(),
                g = function () {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
                            e(i + n)
                        }, n)
                    }
                }(),
                y = function () {
                    var t = e.performance || {};
                    if ("function" != typeof t.now) {
                        var n = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                        t.now = function () {
                            return (new Date).getTime() - n
                        }
                    }
                    return t
                }(),
                v = function () {
                    var t = Array.prototype.slice;
                    try {
                        return t.call(n.documentElement), t
                    } catch (e) {
                        return function (e, n) {
                            var i = this.length;
                            if ("number" != typeof e && (e = 0), "number" != typeof n && (n = i), this.slice) return t.call(this, e, n);
                            var r, o = [],
                                a = e >= 0 ? e : Math.max(0, i + e),
                                s = n < 0 ? i + n : Math.min(n, i),
                                l = s - a;
                            if (l > 0)
                                if (o = new Array(l), this.charAt)
                                    for (r = 0; r < l; r++) o[r] = this.charAt(a + r);
                                else
                                    for (r = 0; r < l; r++) o[r] = this[a + r];
                            return o
                        }
                    }
                }(),
                b = function () {
                    return Array.prototype.includes ? function (t, e) {
                        return t.includes(e)
                    } : Array.prototype.indexOf ? function (t, e) {
                        return t.indexOf(e) >= 0
                    } : function (t, e) {
                        for (var n = 0; n < t.length; n++)
                            if (t[n] === e) return !0;
                        return !1
                    }
                },
                _ = {
                    isNumber: function (t) {
                        return "number" == typeof t
                    },
                    isString: function (t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function (t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function (t) {
                        return t && t.nodeType
                    },
                    isWrapped: function (t) {
                        return t && t !== e && _.isNumber(t.length) && !_.isString(t) && !_.isFunction(t) && !_.isNode(t) && (0 === t.length || _.isNode(t[0]))
                    },
                    isSVG: function (t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function (t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) return !1;
                        return !0
                    }
                },
                x = !1;
            if (t.fn && t.fn.jquery ? (h = t, x = !0) : h = e.Velocity.Utilities, m <= 8 && !x) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (m <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var S = 400,
                w = "swing",
                E = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: h,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: S,
                        easing: w,
                        begin: i,
                        complete: i,
                        progress: i,
                        display: i,
                        visibility: i,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function (t) {
                        h.data(t, "velocity", {
                            isSVG: _.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 0
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function (t) {
                        var e = (new Date).getTime();
                        h.each(E.State.calls, function (e, n) {
                            if (n) {
                                if (t !== i && (n[2].queue !== t || n[2].queue === !1)) return !0;
                                n[5] = {
                                    resume: !1
                                }
                            }
                        }), h.each(E.State.delayedElements, function (t, n) {
                            n && s(n, e)
                        })
                    },
                    resumeAll: function (t) {
                        var e = (new Date).getTime();
                        h.each(E.State.calls, function (e, n) {
                            if (n) {
                                if (t !== i && (n[2].queue !== t || n[2].queue === !1)) return !0;
                                n[5] && (n[5].resume = !0)
                            }
                        }), h.each(E.State.delayedElements, function (t, n) {
                            n && l(n, e)
                        })
                    }
                };
            e.pageYOffset !== i ? (E.State.scrollAnchor = e, E.State.scrollPropertyLeft = "pageXOffset", E.State.scrollPropertyTop = "pageYOffset") : (E.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, E.State.scrollPropertyLeft = "scrollLeft", E.State.scrollPropertyTop = "scrollTop");
            var C = function () {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, n, i) {
                    var r = {
                        x: e.x + i.dx * n,
                        v: e.v + i.dv * n,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: r.v,
                        dv: t(r)
                    }
                }

                function n(n, i) {
                    var r = {
                            dx: n.v,
                            dv: t(n)
                        },
                        o = e(n, .5 * i, r),
                        a = e(n, .5 * i, o),
                        s = e(n, i, a),
                        l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                        u = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + u * i, n
                }
                return function t(e, i, r) {
                    var o, a, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        f = 1e-4,
                        d = .016;
                    for (e = parseFloat(e) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = e, l.friction = i, o = null !== r, o ? (c = t(e, i), a = c / r * d) : a = d;;)
                        if (s = n(s || l, a), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > f && Math.abs(s.v) > f)) break;
                    return o ? function (t) {
                        return u[t * (u.length - 1) | 0]
                    } : c
                }
            }();
            E.Easings = {
                linear: function (t) {
                    return t
                },
                swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function (t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, h.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function (t, e) {
                E.Easings[e[0]] = c.apply(null, e[1])
            });
            var T = E.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function () {
                        for (var t = 0; t < T.Lists.colors.length; t++) {
                            var e = "color" === T.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            T.Hooks.templates[T.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var n, i, r;
                        if (m)
                            for (n in T.Hooks.templates)
                                if (T.Hooks.templates.hasOwnProperty(n)) {
                                    i = T.Hooks.templates[n], r = i[0].split(" ");
                                    var o = i[1].match(T.RegEx.valueSplit);
                                    "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), T.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                                } for (n in T.Hooks.templates)
                            if (T.Hooks.templates.hasOwnProperty(n)) {
                                i = T.Hooks.templates[n], r = i[0].split(" ");
                                for (var a in r)
                                    if (r.hasOwnProperty(a)) {
                                        var s = n + r[a],
                                            l = a;
                                        T.Hooks.registered[s] = [n, l]
                                    }
                            }
                    },
                    getRoot: function (t) {
                        var e = T.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    getUnit: function (t, e) {
                        var n = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return n && b(T.Lists.units, n) ? n : ""
                    },
                    fixColors: function (t) {
                        return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (t, e, n) {
                            return T.Lists.colorNames.hasOwnProperty(n) ? (e ? e : "rgba(") + T.Lists.colorNames[n] + (e ? "" : ",1)") : e + n
                        })
                    },
                    cleanRootPropertyValue: function (t, e) {
                        return T.RegEx.valueUnwrap.test(e) && (e = e.match(T.RegEx.valueUnwrap)[1]), T.Values.isCSSNullValue(e) && (e = T.Hooks.templates[t][1]), e
                    },
                    extractValue: function (t, e) {
                        var n = T.Hooks.registered[t];
                        if (n) {
                            var i = n[0],
                                r = n[1];
                            return e = T.Hooks.cleanRootPropertyValue(i, e), e.toString().match(T.RegEx.valueSplit)[r]
                        }
                        return e
                    },
                    injectValue: function (t, e, n) {
                        var i = T.Hooks.registered[t];
                        if (i) {
                            var r, o, a = i[0],
                                s = i[1];
                            return n = T.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(T.RegEx.valueSplit), r[s] = e, o = r.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (t, e, n) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return T.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(T.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function (t, e, n) {
                            switch (t) {
                                case "name":
                                    return E.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = r ? r[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function (t, e, n) {
                            if (m <= 8) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = i ? i[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return n;
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function () {
                        function t(t, e, n) {
                            var i = "border-box" === T.getPropertyValue(e, "boxSizing").toString().toLowerCase();
                            if (i === (n || !1)) {
                                var r, o, a = 0,
                                    s = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                                    l = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                for (r = 0; r < l.length; r++) o = parseFloat(T.getPropertyValue(e, l[r])), isNaN(o) || (a += o);
                                return n ? -a : a
                            }
                            return 0
                        }

                        function e(e, n) {
                            return function (i, r, o) {
                                switch (i) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        return parseFloat(o) + t(e, r, n);
                                    case "inject":
                                        return parseFloat(o) - t(e, r, n) + "px"
                                }
                            }
                        }
                        m && !(m > 9) || E.State.isGingerbread || (T.Lists.transformsBase = T.Lists.transformsBase.concat(T.Lists.transforms3D));
                        for (var n = 0; n < T.Lists.transformsBase.length; n++) ! function () {
                            var t = T.Lists.transformsBase[n];
                            T.Normalizations.registered[t] = function (e, n, r) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(n) === i || a(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                E.State.isAndroid && a(n).transformCache[t] === i && r < 1 && (r = 1), o = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(r)
                                        }
                                        return o || (a(n).transformCache[t] = "(" + r + ")"), a(n).transformCache[t]
                                }
                            }
                        }();
                        for (var r = 0; r < T.Lists.colors.length; r++) ! function () {
                            var t = T.Lists.colors[r];
                            T.Normalizations.registered[t] = function (e, n, r) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var o;
                                        if (T.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                        else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : T.RegEx.isHex.test(r) ? a = "rgb(" + T.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!m || m > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                                    case "inject":
                                        return /^rgb/.test(r) ? r : (m <= 8 ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (m <= 8 ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                }
                            }
                        }();
                        T.Normalizations.registered.innerWidth = e("width", !0), T.Normalizations.registered.innerHeight = e("height", !0), T.Normalizations.registered.outerWidth = e("width"), T.Normalizations.registered.outerHeight = e("height")
                    }
                },
                Names: {
                    camelCase: function (t) {
                        return t.replace(/-(\w)/g, function (t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function (t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (m || E.State.isAndroid && !E.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function (t) {
                        if (E.State.prefixMatches[t]) return [E.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; n < i; n++) {
                            var r;
                            if (r = 0 === n ? t : e[n] + t.replace(/^\w/, function (t) {
                                    return t.toUpperCase()
                                }), _.isString(E.State.prefixElement.style[r])) return E.State.prefixMatches[t] = r, [r, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function (t) {
                        var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(n, function (t, e, n, i) {
                            return e + e + n + n + i + i
                        }), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function (t) {
                        return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function (t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function (t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function (t, e) {
                        if (t)
                            if (t.classList) t.classList.add(e);
                            else if (_.isString(t.className)) t.className += (t.className.length ? " " : "") + e;
                        else {
                            var n = t.getAttribute(m <= 7 ? "className" : "class") || "";
                            t.setAttribute("class", n + (n ? " " : "") + e)
                        }
                    },
                    removeClass: function (t, e) {
                        if (t)
                            if (t.classList) t.classList.remove(e);
                            else if (_.isString(t.className)) t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                        else {
                            var n = t.getAttribute(m <= 7 ? "className" : "class") || "";
                            t.setAttribute("class", n.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)", "gi"), " "))
                        }
                    }
                },
                getPropertyValue: function (t, n, r, o) {
                    function s(t, n) {
                        var r = 0;
                        if (m <= 8) r = h.css(t, n);
                        else {
                            var l = !1;
                            /^(width|height)$/.test(n) && 0 === T.getPropertyValue(t, "display") && (l = !0, T.setPropertyValue(t, "display", T.Values.getDisplayType(t)));
                            var u = function () {
                                l && T.setPropertyValue(t, "display", "none")
                            };
                            if (!o) {
                                if ("height" === n && "border-box" !== T.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var c = t.offsetHeight - (parseFloat(T.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(T.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(T.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(T.getPropertyValue(t, "paddingBottom")) || 0);
                                    return u(), c
                                }
                                if ("width" === n && "border-box" !== T.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var f = t.offsetWidth - (parseFloat(T.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(T.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(T.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(T.getPropertyValue(t, "paddingRight")) || 0);
                                    return u(), f
                                }
                            }
                            var d;
                            d = a(t) === i ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), r = 9 === m && "filter" === n ? d.getPropertyValue(n) : d[n], "" !== r && null !== r || (r = t.style[n]), u()
                        }
                        if ("auto" === r && /^(top|right|bottom|left)$/i.test(n)) {
                            var p = s(t, "position");
                            ("fixed" === p || "absolute" === p && /top|left/i.test(n)) && (r = h(t).position()[n] + "px")
                        }
                        return r
                    }
                    var l;
                    if (T.Hooks.registered[n]) {
                        var u = n,
                            c = T.Hooks.getRoot(u);
                        r === i && (r = T.getPropertyValue(t, T.Names.prefixCheck(c)[0])), T.Normalizations.registered[c] && (r = T.Normalizations.registered[c]("extract", t, r)), l = T.Hooks.extractValue(u, r)
                    } else if (T.Normalizations.registered[n]) {
                        var f, d;
                        f = T.Normalizations.registered[n]("name", t), "transform" !== f && (d = s(t, T.Names.prefixCheck(f)[0]), T.Values.isCSSNullValue(d) && T.Hooks.templates[n] && (d = T.Hooks.templates[n][1])), l = T.Normalizations.registered[n]("extract", t, d)
                    }
                    if (!/^[\d-]/.test(l)) {
                        var p = a(t);
                        if (p && p.isSVG && T.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = t.getBBox()[n]
                            } catch (t) {
                                l = 0
                            } else l = t.getAttribute(n);
                            else l = s(t, T.Names.prefixCheck(n)[0])
                    }
                    return T.Values.isCSSNullValue(l) && (l = 0), E.debug >= 2, l
                },
                setPropertyValue: function (t, n, i, r, o) {
                    var s = n;
                    if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? e.scrollTo(i, o.alternateValue) : e.scrollTo(o.alternateValue, i);
                    else if (T.Normalizations.registered[n] && "transform" === T.Normalizations.registered[n]("name", t)) T.Normalizations.registered[n]("inject", t, i), s = "transform", i = a(t).transformCache[n];
                    else {
                        if (T.Hooks.registered[n]) {
                            var l = n,
                                u = T.Hooks.getRoot(n);
                            r = r || T.getPropertyValue(t, u), i = T.Hooks.injectValue(l, i, r), n = u
                        }
                        if (T.Normalizations.registered[n] && (i = T.Normalizations.registered[n]("inject", t, i), n = T.Normalizations.registered[n]("name", t)), s = T.Names.prefixCheck(n)[0], m <= 8) try {
                            t.style[s] = i
                        } catch (t) {
                            E.debug
                        } else {
                            var c = a(t);
                            c && c.isSVG && T.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i
                        }
                        E.debug >= 2
                    }
                    return [s, i]
                },
                flushTransformCache: function (t) {
                    var e = "",
                        n = a(t);
                    if ((m || E.State.isAndroid && !E.State.isChrome) && n && n.isSVG) {
                        var i = function (e) {
                                return parseFloat(T.getPropertyValue(t, e))
                            },
                            r = {
                                translate: [i("translateX"), i("translateY")],
                                skewX: [i("skewX")],
                                skewY: [i("skewY")],
                                scale: 1 !== i("scale") ? [i("scale"), i("scale")] : [i("scaleX"), i("scaleY")],
                                rotate: [i("rotateZ"), 0, 0]
                            };
                        h.each(a(t).transformCache, function (t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), r[t] && (e += t + "(" + r[t].join(" ") + ") ", delete r[t])
                        })
                    } else {
                        var o, s;
                        h.each(a(t).transformCache, function (n) {
                            return o = a(t).transformCache[n], "transformPerspective" === n ? (s = o, !0) : (9 === m && "rotateZ" === n && (n = "rotate"), void(e += n + o + " "))
                        }), s && (e = "perspective" + s + " " + e)
                    }
                    T.setPropertyValue(t, "transform", e)
                }
            };
            T.Hooks.register(), T.Normalizations.register(), E.hook = function (t, e, n) {
                var r;
                return t = o(t), h.each(t, function (t, o) {
                    if (a(o) === i && E.init(o), n === i) r === i && (r = T.getPropertyValue(o, e));
                    else {
                        var s = T.setPropertyValue(o, e, n);
                        "transform" === s[0] && E.CSS.flushTransformCache(o), r = s
                    }
                }), r
            };
            var A = function () {
                function t() {
                    return c ? C.promise || null : m
                }

                function r(t, r) {
                    function o(o) {
                        var c, p;
                        if (l.begin && 0 === O) try {
                            l.begin.call(y, y)
                        } catch (t) {
                            setTimeout(function () {
                                throw t
                            }, 1)
                        }
                        if ("scroll" === N) {
                            var m, g, S, w = /^x$/i.test(l.axis) ? "Left" : "Top",
                                A = parseFloat(l.offset) || 0;
                            l.container ? _.isWrapped(l.container) || _.isNode(l.container) ? (l.container = l.container[0] || l.container, m = l.container["scroll" + w], S = m + h(t).position()[w.toLowerCase()] + A) : l.container = null : (m = E.State.scrollAnchor[E.State["scrollProperty" + w]], g = E.State.scrollAnchor[E.State["scrollProperty" + ("Left" === w ? "Top" : "Left")]], S = h(t).offset()[w.toLowerCase()] + A), u = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: m,
                                    currentValue: m,
                                    endValue: S,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: w,
                                        alternateValue: g
                                    }
                                },
                                element: t
                            }, E.debug
                        } else if ("reverse" === N) {
                            if (c = a(t), !c) return;
                            if (!c.tweensContainer) return void h.dequeue(t, l.queue);
                            "none" === c.opts.display && (c.opts.display = "auto"), "hidden" === c.opts.visibility && (c.opts.visibility = "visible"), c.opts.loop = !1, c.opts.begin = null, c.opts.complete = null, x.easing || delete l.easing, x.duration || delete l.duration, l = h.extend({}, c.opts, l), p = h.extend(!0, {}, c ? c.tweensContainer : null);
                            for (var k in p)
                                if (p.hasOwnProperty(k) && "element" !== k) {
                                    var D = p[k].startValue;
                                    p[k].startValue = p[k].currentValue = p[k].endValue, p[k].endValue = D, _.isEmptyObject(x) || (p[k].easing = l.easing), E.debug
                                } u = p
                        } else if ("start" === N) {
                            c = a(t), c && c.tweensContainer && c.isAnimating === !0 && (p = c.tweensContainer);
                            var P = function (e, n) {
                                    var i, o, a;
                                    return _.isFunction(e) && (e = e.call(t, r, I)), _.isArray(e) ? (i = e[0], !_.isArray(e[1]) && /^[\d-]/.test(e[1]) || _.isFunction(e[1]) || T.RegEx.isHex.test(e[1]) ? a = e[1] : _.isString(e[1]) && !T.RegEx.isHex.test(e[1]) && E.Easings[e[1]] || _.isArray(e[1]) ? (o = n ? e[1] : f(e[1], l.duration), a = e[2]) : a = e[1] || e[2]) : i = e, n || (o = o || l.easing), _.isFunction(i) && (i = i.call(t, r, I)), _.isFunction(a) && (a = a.call(t, r, I)), [i || 0, o, a]
                                },
                                L = function (r, o) {
                                    var a, f = T.Hooks.getRoot(r),
                                        d = !1,
                                        m = o[0],
                                        g = o[1],
                                        y = o[2];
                                    if (!(c && c.isSVG || "tween" === f || T.Names.prefixCheck(f)[1] !== !1 || T.Normalizations.registered[f] !== i)) return void E.debug;
                                    (l.display !== i && null !== l.display && "none" !== l.display || l.visibility !== i && "hidden" !== l.visibility) && /opacity|filter/.test(r) && !y && 0 !== m && (y = 0), l._cacheValues && p && p[r] ? (y === i && (y = p[r].endValue + p[r].unitType), d = c.rootPropertyValueCache[f]) : T.Hooks.registered[r] ? y === i ? (d = T.getPropertyValue(t, f), y = T.getPropertyValue(t, r, d)) : d = T.Hooks.templates[f][1] : y === i && (y = T.getPropertyValue(t, r));
                                    var v, b, x, S = !1,
                                        w = function (t, e) {
                                            var n, i;
                                            return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                                                return n = t, ""
                                            }), n || (n = T.Values.getUnitType(t)), [i, n]
                                        };
                                    if (y !== m && _.isString(y) && _.isString(m)) {
                                        a = "";
                                        var C = 0,
                                            A = 0,
                                            I = [],
                                            O = [],
                                            k = 0,
                                            D = 0,
                                            N = 0;
                                        for (y = T.Hooks.fixColors(y), m = T.Hooks.fixColors(m); C < y.length && A < m.length;) {
                                            var P = y[C],
                                                L = m[A];
                                            if (/[\d\.-]/.test(P) && /[\d\.-]/.test(L)) {
                                                for (var j = P, B = L, V = ".", R = "."; ++C < y.length;) {
                                                    if (P = y[C], P === V) V = "..";
                                                    else if (!/\d/.test(P)) break;
                                                    j += P
                                                }
                                                for (; ++A < m.length;) {
                                                    if (L = m[A], L === R) R = "..";
                                                    else if (!/\d/.test(L)) break;
                                                    B += L
                                                }
                                                var M = T.Hooks.getUnit(y, C),
                                                    H = T.Hooks.getUnit(m, A);
                                                if (C += M.length, A += H.length, M === H) j === B ? a += j + M : (a += "{" + I.length + (D ? "!" : "") + "}" + M, I.push(parseFloat(j)), O.push(parseFloat(B)));
                                                else {
                                                    var W = parseFloat(j),
                                                        U = parseFloat(B);
                                                    a += (k < 5 ? "calc" : "") + "(" + (W ? "{" + I.length + (D ? "!" : "") + "}" : "0") + M + " + " + (U ? "{" + (I.length + (W ? 1 : 0)) + (D ? "!" : "") + "}" : "0") + H + ")", W && (I.push(W), O.push(0)), U && (I.push(0), O.push(U))
                                                }
                                            } else {
                                                if (P !== L) {
                                                    k = 0;
                                                    break
                                                }
                                                a += P, C++, A++, 0 === k && "c" === P || 1 === k && "a" === P || 2 === k && "l" === P || 3 === k && "c" === P || k >= 4 && "(" === P ? k++ : (k && k < 5 || k >= 4 && ")" === P && --k < 5) && (k = 0), 0 === D && "r" === P || 1 === D && "g" === P || 2 === D && "b" === P || 3 === D && "a" === P || D >= 3 && "(" === P ? (3 === D && "a" === P && (N = 1), D++) : N && "," === P ? ++N > 3 && (D = N = 0) : (N && D < (N ? 5 : 4) || D >= (N ? 4 : 3) && ")" === P && --D < (N ? 5 : 4)) && (D = N = 0)
                                            }
                                        }
                                        C === y.length && A === m.length || (E.debug, a = i), a && (I.length ? (E.debug, y = I, m = O, b = x = "") : a = i)
                                    }
                                    a || (v = w(r, y), y = v[0], x = v[1], v = w(r, m), m = v[0].replace(/^([+-\/*])=/, function (t, e) {
                                        return S = e, ""
                                    }), b = v[1], y = parseFloat(y) || 0, m = parseFloat(m) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(r) ? (m /= 100, b = "em") : /^scale/.test(r) ? (m /= 100, b = "") : /(Red|Green|Blue)$/i.test(r) && (m = m / 100 * 255, b = "")));
                                    var z = function () {
                                        var i = {
                                                myParent: t.parentNode || n.body,
                                                position: T.getPropertyValue(t, "position"),
                                                fontSize: T.getPropertyValue(t, "fontSize")
                                            },
                                            r = i.position === F.lastPosition && i.myParent === F.lastParent,
                                            o = i.fontSize === F.lastFontSize;
                                        F.lastParent = i.myParent, F.lastPosition = i.position, F.lastFontSize = i.fontSize;
                                        var a = 100,
                                            s = {};
                                        if (o && r) s.emToPx = F.lastEmToPx, s.percentToPxWidth = F.lastPercentToPxWidth, s.percentToPxHeight = F.lastPercentToPxHeight;
                                        else {
                                            var l = c && c.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                            E.init(l), i.myParent.appendChild(l), h.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                                E.CSS.setPropertyValue(l, e, "hidden")
                                            }), E.CSS.setPropertyValue(l, "position", i.position), E.CSS.setPropertyValue(l, "fontSize", i.fontSize), E.CSS.setPropertyValue(l, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                                E.CSS.setPropertyValue(l, e, a + "%")
                                            }), E.CSS.setPropertyValue(l, "paddingLeft", a + "em"), s.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(T.getPropertyValue(l, "width", null, !0)) || 1) / a, s.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(T.getPropertyValue(l, "height", null, !0)) || 1) / a, s.emToPx = F.lastEmToPx = (parseFloat(T.getPropertyValue(l, "paddingLeft")) || 1) / a, i.myParent.removeChild(l)
                                        }
                                        return null === F.remToPx && (F.remToPx = parseFloat(T.getPropertyValue(n.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(e.innerWidth) / 100, F.vhToPx = parseFloat(e.innerHeight) / 100), s.remToPx = F.remToPx, s.vwToPx = F.vwToPx, s.vhToPx = F.vhToPx, E.debug >= 1, s
                                    };
                                    if (/[\/*]/.test(S)) b = x;
                                    else if (x !== b && 0 !== y)
                                        if (0 === m) b = x;
                                        else {
                                            s = s || z();
                                            var $ = /margin|padding|left|right|width|text|word|letter/i.test(r) || /X$/.test(r) || "x" === r ? "x" : "y";
                                            switch (x) {
                                                case "%":
                                                    y *= "x" === $ ? s.percentToPxWidth : s.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    y *= s[x + "ToPx"]
                                            }
                                            switch (b) {
                                                case "%":
                                                    y *= 1 / ("x" === $ ? s.percentToPxWidth : s.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    y *= 1 / s[b + "ToPx"]
                                            }
                                        } switch (S) {
                                        case "+":
                                            m = y + m;
                                            break;
                                        case "-":
                                            m = y - m;
                                            break;
                                        case "*":
                                            m *= y;
                                            break;
                                        case "/":
                                            m = y / m
                                    }
                                    u[r] = {
                                        rootPropertyValue: d,
                                        startValue: y,
                                        currentValue: y,
                                        endValue: m,
                                        unitType: b,
                                        easing: g
                                    }, a && (u[r].pattern = a), E.debug
                                };
                            for (var j in v)
                                if (v.hasOwnProperty(j)) {
                                    var B = T.Names.camelCase(j),
                                        V = P(v[j]);
                                    if (b(T.Lists.colors, B)) {
                                        var M = V[0],
                                            H = V[1],
                                            W = V[2];
                                        if (T.RegEx.isHex.test(M)) {
                                            for (var U = ["Red", "Green", "Blue"], z = T.Values.hexToRgb(M), $ = W ? T.Values.hexToRgb(W) : i, q = 0; q < U.length; q++) {
                                                var Q = [z[q]];
                                                H && Q.push(H), $ !== i && Q.push($[q]), L(B + U[q], Q)
                                            }
                                            continue
                                        }
                                    }
                                    L(B, V)
                                } u.element = t
                        }
                        u.element && (T.Values.addClass(t, "velocity-animating"), R.push(u), c = a(t), c && ("" === l.queue && (c.tweensContainer = u, c.opts = l), c.isAnimating = !0), O === I - 1 ? (E.State.calls.push([R, y, l, null, C.resolver, null, 0]), E.State.isTicking === !1 && (E.State.isTicking = !0, d())) : O++)
                    }
                    var s, l = h.extend({}, E.defaults, x),
                        u = {};
                    switch (a(t) === i && E.init(t), parseFloat(l.delay) && l.queue !== !1 && h.queue(t, l.queue, function (e) {
                        E.velocityQueueEntryFlag = !0;
                        var n = E.State.delayedElements.count++;
                        E.State.delayedElements[n] = t;
                        var i = function (t) {
                            return function () {
                                E.State.delayedElements[t] = !1, e()
                            }
                        }(n);
                        a(t).delayBegin = (new Date).getTime(), a(t).delay = parseFloat(l.delay), a(t).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(l.delay)),
                            next: i
                        }
                    }), l.duration.toString().toLowerCase()) {
                        case "fast":
                            l.duration = 200;
                            break;
                        case "normal":
                            l.duration = S;
                            break;
                        case "slow":
                            l.duration = 600;
                            break;
                        default:
                            l.duration = parseFloat(l.duration) || 1
                    }
                    if (E.mock !== !1 && (E.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(E.mock) || 1, l.delay *= parseFloat(E.mock) || 1)), l.easing = f(l.easing, l.duration), l.begin && !_.isFunction(l.begin) && (l.begin = null), l.progress && !_.isFunction(l.progress) && (l.progress = null), l.complete && !_.isFunction(l.complete) && (l.complete = null), l.display !== i && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = E.CSS.Values.getDisplayType(t))), l.visibility !== i && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && E.State.isMobile && !E.State.isGingerbread, l.queue === !1)
                        if (l.delay) {
                            var c = E.State.delayedElements.count++;
                            E.State.delayedElements[c] = t;
                            var p = function (t) {
                                return function () {
                                    E.State.delayedElements[t] = !1, o()
                                }
                            }(c);
                            a(t).delayBegin = (new Date).getTime(), a(t).delay = parseFloat(l.delay), a(t).delayTimer = {
                                setTimeout: setTimeout(o, parseFloat(l.delay)),
                                next: p
                            }
                        } else o();
                    else h.queue(t, l.queue, function (t, e) {
                        return e === !0 ? (C.promise && C.resolver(y), !0) : (E.velocityQueueEntryFlag = !0, void o(t))
                    });
                    "" !== l.queue && "fx" !== l.queue || "inprogress" === h.queue(t)[0] || h.dequeue(t)
                }
                var u, c, m, g, y, v, x, w = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || _.isString(arguments[0].properties));
                _.isWrapped(this) ? (c = !1, g = 0, y = this, m = this) : (c = !0, g = 1, y = w ? arguments[0].elements || arguments[0].e : arguments[0]);
                var C = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (c && E.Promise && (C.promise = new E.Promise(function (t, e) {
                        C.resolver = t, C.rejecter = e
                    })), w ? (v = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (v = arguments[g], x = arguments[g + 1]), y = o(y), !y) return void(C.promise && (v && x && x.promiseRejectEmpty === !1 ? C.resolver() : C.rejecter()));
                var I = y.length,
                    O = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(v) && !h.isPlainObject(x)) {
                    var k = g + 1;
                    x = {};
                    for (var D = k; D < arguments.length; D++) _.isArray(arguments[D]) || !/^(fast|normal|slow)$/i.test(arguments[D]) && !/^\d/.test(arguments[D]) ? _.isString(arguments[D]) || _.isArray(arguments[D]) ? x.easing = arguments[D] : _.isFunction(arguments[D]) && (x.complete = arguments[D]) : x.duration = arguments[D]
                }
                var N;
                switch (v) {
                    case "scroll":
                        N = "scroll";
                        break;
                    case "reverse":
                        N = "reverse";
                        break;
                    case "pause":
                        var P = (new Date).getTime();
                        return h.each(y, function (t, e) {
                            s(e, P)
                        }), h.each(E.State.calls, function (t, e) {
                            var n = !1;
                            e && h.each(e[1], function (t, r) {
                                var o = x === i ? "" : x;
                                return o !== !0 && e[2].queue !== o && (x !== i || e[2].queue !== !1) || (h.each(y, function (t, i) {
                                    if (i === r) return e[5] = {
                                        resume: !1
                                    }, n = !0, !1
                                }), !n && void 0)
                            })
                        }), t();
                    case "resume":
                        return h.each(y, function (t, e) {
                            l(e, P)
                        }), h.each(E.State.calls, function (t, e) {
                            var n = !1;
                            e && h.each(e[1], function (t, r) {
                                var o = x === i ? "" : x;
                                return o !== !0 && e[2].queue !== o && (x !== i || e[2].queue !== !1) || (!e[5] || (h.each(y, function (t, i) {
                                    if (i === r) return e[5].resume = !0, n = !0, !1
                                }), !n && void 0))
                            })
                        }), t();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        h.each(y, function (t, e) {
                            a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer), "finishAll" !== v || x !== !0 && !_.isString(x) || (h.each(h.queue(e, _.isString(x) ? x : ""), function (t, e) {
                                _.isFunction(e) && e()
                            }), h.queue(e, _.isString(x) ? x : "", []))
                        });
                        var L = [];
                        return h.each(E.State.calls, function (t, e) {
                            e && h.each(e[1], function (n, r) {
                                var o = x === i ? "" : x;
                                return o !== !0 && e[2].queue !== o && (x !== i || e[2].queue !== !1) || void h.each(y, function (n, i) {
                                    if (i === r)
                                        if ((x === !0 || _.isString(x)) && (h.each(h.queue(i, _.isString(x) ? x : ""), function (t, e) {
                                                _.isFunction(e) && e(null, !0)
                                            }), h.queue(i, _.isString(x) ? x : "", [])), "stop" === v) {
                                            var s = a(i);
                                            s && s.tweensContainer && o !== !1 && h.each(s.tweensContainer, function (t, e) {
                                                e.endValue = e.currentValue
                                            }), L.push(t)
                                        } else "finish" !== v && "finishAll" !== v || (e[2].duration = 1)
                                })
                            })
                        }), "stop" === v && (h.each(L, function (t, e) {
                            p(e, !0)
                        }), C.promise && C.resolver(y)), t();
                    default:
                        if (!h.isPlainObject(v) || _.isEmptyObject(v)) {
                            if (_.isString(v) && E.Redirects[v]) {
                                u = h.extend({}, x);
                                var j = u.duration,
                                    B = u.delay || 0;
                                return u.backwards === !0 && (y = h.extend(!0, [], y).reverse()), h.each(y, function (t, e) {
                                    parseFloat(u.stagger) ? u.delay = B + parseFloat(u.stagger) * t : _.isFunction(u.stagger) && (u.delay = B + u.stagger.call(e, t, I)), u.drag && (u.duration = parseFloat(j) || (/^(callout|transition)/.test(v) ? 1e3 : S), u.duration = Math.max(u.duration * (u.backwards ? 1 - t / I : (t + 1) / I), .75 * u.duration, 200)), E.Redirects[v].call(e, e, u || {}, t, I, y, C.promise ? C : i)
                                }), t()
                            }
                            var V = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return C.promise ? C.rejecter(new Error(V)) : e.console, t()
                        }
                        N = "start"
                }
                var F = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    R = [];
                h.each(y, function (t, e) {
                    _.isNode(e) && r(e, t)
                }), u = h.extend({}, E.defaults, x), u.loop = parseInt(u.loop, 10);
                var M = 2 * u.loop - 1;
                if (u.loop)
                    for (var H = 0; H < M; H++) {
                        var W = {
                            delay: u.delay,
                            progress: u.progress
                        };
                        H === M - 1 && (W.display = u.display, W.visibility = u.visibility, W.complete = u.complete), A(y, "reverse", W)
                    }
                return t()
            };
            E = h.extend(A, E), E.animate = A;
            var I = e.requestAnimationFrame || g;
            if (!E.State.isMobile && n.hidden !== i) {
                var O = function () {
                    n.hidden ? (I = function (t) {
                        return setTimeout(function () {
                            t(!0)
                        }, 16)
                    }, d()) : I = e.requestAnimationFrame || g
                };
                O(), n.addEventListener("visibilitychange", O)
            }
            return t.Velocity = E, t !== e && (t.fn.velocity = A, t.fn.velocity.defaults = E.defaults), h.each(["Down", "Up"], function (t, e) {
                E.Redirects["slide" + e] = function (t, n, r, o, a, s) {
                    var l = h.extend({}, n),
                        u = l.begin,
                        c = l.complete,
                        f = {},
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    l.display === i && (l.display = "Down" === e ? "inline" === E.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                        0 === r && u && u.call(a, a);
                        for (var n in d)
                            if (d.hasOwnProperty(n)) {
                                f[n] = t.style[n];
                                var i = T.getPropertyValue(t, n);
                                d[n] = "Down" === e ? [i, 0] : [0, i]
                            } f.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var e in f) f.hasOwnProperty(e) && (t.style[e] = f[e]);
                        r === o - 1 && (c && c.call(a, a), s && s.resolver(a))
                    }, E(t, d, l)
                }
            }), h.each(["In", "Out"], function (t, e) {
                E.Redirects["fade" + e] = function (t, n, r, o, a, s) {
                    var l = h.extend({}, n),
                        u = l.complete,
                        c = {
                            opacity: "In" === e ? 1 : 0
                        };
                    0 !== r && (l.begin = null), r !== o - 1 ? l.complete = null : l.complete = function () {
                        u && u.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === e ? "auto" : "none"), E(this, c, l)
                }
            }), E
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        s = i(a),
        l = function () {
            function t() {
                r(this, t)
            }
            return o(t, [{
                key: "init",
                value: function () {
                    (0, s.default)(".js-product-miniature").each(function (t, e) {
                        (0, s.default)(e).find(".color").length > 5 && ! function () {
                            var t = 0;
                            (0, s.default)(e).find(".color").each(function (e, n) {
                                e > 4 && ((0, s.default)(n).hide(), t++)
                            }), (0, s.default)(e).find(".js-count").append("+" + t)
                        }()
                    })
                }
            }]), t
        }();
    e.default = l, t.exports = e.default
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var r = n(8),
        o = i(r),
        a = n(9),
        s = i(a);
    (0, o.default)(document).ready(function () {
        function t() {
            (0, o.default)(".js-thumb").on("click", function (t) {
                (0, o.default)(".js-modal-product-cover").attr("src", (0, o.default)(t.target).data("image-large-src")), (0, o.default)(".selected").removeClass("selected"), (0, o.default)(t.target).addClass("selected"), (0, o.default)(".js-qv-product-cover").prop("src", (0, o.default)(t.currentTarget).data("image-large-src"))
            })
        }

        function e() {
            (0, o.default)(".js-file-input").on("change", function (t) {
                var e = void 0,
                    n = void 0;
                (e = (0, o.default)(t.currentTarget)[0]) && (n = e.files[0]) && (0, o.default)(e).prev().text(n.name)
            })
        }

        function n() {
            var t = (0, o.default)("#quantity_wanted");
            t.TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: parseInt(t.attr("min"), 10),
                max: 1e6
            }), (0, o.default)("body").on("change keyup", "#quantity_wanted", function (t) {
                (0, o.default)(t.currentTarget).trigger("touchspin.stopspin"), s.default.emit("updateProduct", {
                    eventType: "updatedProductQuantity",
                    event: t
                })
            })
        }
        n(), e(), t(), s.default.on("updatedProduct", function (n) {
            if (e(), t(), n && n.product_minimal_quantity) {
                var i = parseInt(n.product_minimal_quantity, 10),
                    r = "#quantity_wanted",
                    a = (0, o.default)(r);
                a.trigger("touchspin.updatesettings", {
                    min: i
                })
            }
            additionalCarousel("#main .additional-carousel"), additionalCarousel(".modal.quickview .additional-carousel"), (0, o.default)((0, o.default)(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade"), (0, o.default)(".js-product-images-modal").replaceWith(n.product_images_modal)
        })
    })
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r() {
        a.default.each((0, a.default)(u), function (t, e) {
            (0, a.default)(e).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin js-increase-product-quantity",
                buttonup_class: "btn btn-touchspin js-touchspin js-decrease-product-quantity",
                min: parseInt((0, a.default)(e).attr("min"), 10),
                max: 1e6
            })
        }), p.switchErrorStat()
    }
    var o = n(8),
        a = i(o),
        s = n(9),
        l = i(s);
    l.default.cart = l.default.cart || {}, l.default.cart.active_inputs = null;
    var u = 'input[name="product-quantity-spin"]',
        c = !1,
        f = !1,
        d = "";
    (0, a.default)(document).ready(function () {
        function t(t) {
            return "on.startupspin" === t || "on.startdownspin" === t
        }

        function e(t) {
            return "on.startupspin" === t
        }

        function n(t) {
            var e = t.parents(".bootstrap-touchspin").find(h);
            return e.is(":focus") ? null : e
        }

        function i(t) {
            var e = t.split("-"),
                n = void 0,
                i = void 0,
                r = "";
            for (n = 0; n < e.length; n++) i = e[n], 0 !== n && (i = i.substring(0, 1).toUpperCase() + i.substring(1)), r += i;
            return r
        }

        function o(r, o) {
            if (!t(o)) return {
                url: r.attr("href"),
                type: i(r.data("link-action"))
            };
            var a = n(r);
            if (a) {
                var s = {};
                return s = e(o) ? {
                    url: a.data("up-url"),
                    type: "increaseProductQuantity"
                } : {
                    url: a.data("down-url"),
                    type: "decreaseProductQuantity"
                }
            }
        }

        function s(t, e, n) {
            return y(), a.default.ajax({
                url: t,
                method: "POST",
                data: e,
                dataType: "json",
                beforeSend: function (t) {
                    m.push(t)
                }
            }).then(function (t) {
                p.checkUpdateOpertation(t), n.val(t.quantity);
                var e;
                e = n && n.dataset ? n.dataset : t, l.default.emit("updateCart", {
                    reason: e
                })
            }).fail(function (t) {
                l.default.emit("handleError", {
                    eventType: "updateProductQuantityInCart",
                    resp: t
                })
            })
        }

        function c(t) {
            return {
                ajax: "1",
                qty: Math.abs(t),
                action: "update",
                op: f(t)
            }
        }

        function f(t) {
            return t > 0 ? "up" : "down"
        }

        function d(t) {
            var e = (0, a.default)(t.currentTarget),
                n = e.data("update-url"),
                i = e.attr("value"),
                r = e.val();
            if (r != parseInt(r) || r < 0 || isNaN(r)) return void e.val(i);
            var o = r - i;
            0 !== o && (e.attr("value", r), s(n, c(o), e))
        }
        var h = ".js-cart-line-product-quantity",
            m = [];
        l.default.on("updateCart", function () {
            (0, a.default)(".quickview").modal("hide")
        }), l.default.on("updatedCart", function () {
            r()
        }), r();
        var g = (0, a.default)("body"),
            y = function () {
                for (var t; m.length > 0;) t = m.pop(), t.abort()
            },
            v = function (t) {
                return (0, a.default)(t.parents(".bootstrap-touchspin").find("input"))
            },
            b = function (t) {
                t.preventDefault();
                var e = (0, a.default)(t.currentTarget),
                    n = t.currentTarget.dataset,
                    i = o(e, t.namespace),
                    r = {
                        ajax: "1",
                        action: "update"
                    };
                "undefined" != typeof i && (y(), a.default.ajax({
                    url: i.url,
                    method: "POST",
                    data: r,
                    dataType: "json",
                    beforeSend: function (t) {
                        m.push(t)
                    }
                }).then(function (t) {
                    p.checkUpdateOpertation(t);
                    var i = v(e);
                    i.val(t.quantity), l.default.emit("updateCart", {
                        reason: n
                    })
                }).fail(function (t) {
                    l.default.emit("handleError", {
                        eventType: "updateProductInCart",
                        resp: t,
                        cartAction: i.type
                    })
                }))
            };
        g.on("click", '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', b), g.on("touchspin.on.startdownspin", u, b), g.on("touchspin.on.startupspin", u, b), g.on("focusout keyup", h, function (t) {
            return "keyup" === t.type ? (13 === t.keyCode && d(t), !1) : void d(t)
        }), g.on("click", ".js-discount .code", function (t) {
            t.stopPropagation();
            var e = (0, a.default)(t.currentTarget),
                n = (0, a.default)("[name=discount_name]");
            return n.val(e.text()), !1
        })
    });
    var p = {
        switchErrorStat: function () {
            var t = (0, a.default)(".checkout a");
            if (((0, a.default)("#notifications article.alert-danger").length || "" !== d && !c) && t.addClass("disabled"), "" !== d) {
                var e = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + d + "</li></ul></article>";
                (0, a.default)("#notifications .container").html(e), d = "", f = !1, c && t.removeClass("disabled")
            } else !c && f && (c = !1, f = !1, (0, a.default)("#notifications .container").html(""), t.removeClass("disabled"))
        },
        checkUpdateOpertation: function (t) {
            c = t.hasOwnProperty("hasError");
            var e = t.errors || "";
            d = e instanceof Array ? e.join(" ") : e, f = !0
        }
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        s = i(a),
        l = function () {
            function t(e) {
                r(this, t), this.el = e
            }
            return o(t, [{
                key: "init",
                value: function () {
                    this.el.on("show.bs.dropdown", function (t, e) {
                        e ? (0, s.default)("#" + e).find(".dropdown-menu").first().stop(!0, !0).slideDown() : (0, s.default)(t.target).find(".dropdown-menu").first().stop(!0, !0).slideDown()
                    }), this.el.on("hide.bs.dropdown", function (t, e) {
                        e ? (0, s.default)("#" + e).find(".dropdown-menu").first().stop(!0, !0).slideUp() : (0, s.default)(t.target).find(".dropdown-menu").first().stop(!0, !0).slideUp()
                    }), this.el.find("select.link").each(function (t, e) {
                        (0, s.default)(e).on("change", function (t) {
                            window.location = (0, s.default)(this).val()
                        })
                    })
                }
            }]), t
        }();
    e.default = l, t.exports = e.default
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        s = i(a),
        l = function () {
            function t() {
                r(this, t)
            }
            return o(t, [{
                key: "init",
                value: function () {
                    this.parentFocus(), this.togglePasswordVisibility()
                }
            }, {
                key: "parentFocus",
                value: function () {
                    (0, s.default)(".js-child-focus").focus(function () {
                        (0, s.default)(this).closest(".js-parent-focus").addClass("focus")
                    }), (0, s.default)(".js-child-focus").focusout(function () {
                        (0, s.default)(this).closest(".js-parent-focus").removeClass("focus")
                    })
                }
            }, {
                key: "togglePasswordVisibility",
                value: function () {
                    (0, s.default)('button[data-action="show-password"]').on("click", function () {
                        var t = (0, s.default)(this).closest(".input-group").children("input.js-visible-password");
                        "password" === t.attr("type") ? (t.attr("type", "text"), (0, s.default)(this).text((0, s.default)(this).data("textHide"))) : (t.attr("type", "password"), (0, s.default)(this).text((0, s.default)(this).data("textShow")))
                    })
                }
            }]), t
        }();
    e.default = l, t.exports = e.default
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        s = i(a);
    n(13);
    var l = function () {
        function t() {
            r(this, t)
        }
        return o(t, [{
            key: "init",
            value: function () {
                var t = this,
                    e = 5,
                    n = (0, s.default)(".js-modal-arrows"),
                    i = (0, s.default)(".js-modal-product-images");
                (0, s.default)("body").on("click", ".js-modal-thumb", function (t) {
                    (0, s.default)(".js-modal-thumb").hasClass("selected") && (0, s.default)(".js-modal-thumb").removeClass("selected"), (0, s.default)(t.currentTarget).addClass("selected"), (0, s.default)(".js-modal-product-cover").attr("src", (0, s.default)(t.target).data("image-large-src")), (0, s.default)(".js-modal-product-cover").attr("title", (0, s.default)(t.target).attr("title")), (0, s.default)(".js-modal-product-cover").attr("alt", (0, s.default)(t.target).attr("alt"))
                }).on("click", "aside#thumbnails", function (t) {
                    "thumbnails" == t.target.id && (0, s.default)("#product-modal").modal("hide")
                }), (0, s.default)(".js-modal-product-images li").length <= e ? n.css("opacity", ".2") : n.on("click", function (e) {
                    (0, s.default)(e.target).hasClass("arrow-up") && i.position().top < 0 ? (t.move("up"), (0, s.default)(".js-modal-arrow-down").css("opacity", "1")) : (0, s.default)(e.target).hasClass("arrow-down") && i.position().top + i.height() > (0, s.default)(".js-modal-mask").height() && (t.move("down"), (0, s.default)(".js-modal-arrow-up").css("opacity", "1"))
                })
            }
        }, {
            key: "move",
            value: function (t) {
                var e = 10,
                    n = (0, s.default)(".js-modal-product-images"),
                    i = (0, s.default)(".js-modal-product-images li img").height() + e,
                    r = n.position().top;
                n.velocity({
                    translateY: "up" === t ? r + i : r - i
                }, function () {
                    n.position().top >= 0 ? (0, s.default)(".js-modal-arrow-up").css("opacity", ".2") : n.position().top + n.height() <= (0, s.default)(".js-modal-mask").height() && (0, s.default)(".js-modal-arrow-down").css("opacity", ".2")
                })
            }
        }]), t
    }();
    e.default = l, t.exports = e.default
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = function (t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    a = n;
                i = !1, null === r && (r = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(r);
                if (null === u) return;
                t = u, e = o, n = a, i = !0, s = u = void 0
            }
        },
        l = n(8),
        u = i(l),
        c = n(17),
        f = i(c),
        d = function (t) {
            function e() {
                r(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
            }
            return o(e, t), a(e, [{
                key: "init",
                value: function () {
                    var t = this,
                        n = void 0,
                        i = this;
                    this.el.find("li").hover(function (e) {
                        t.el.parent().hasClass("mobile") || (n !== (0, u.default)(e.currentTarget).attr("id") && (0 === (0, u.default)(e.target).data("depth") && (0, u.default)("#" + n + " .js-sub-menu").hide(), n = (0, u.default)(e.currentTarget).attr("id")), n && 0 === (0, u.default)(e.target).data("depth") && (0, u.default)("#" + n + " .js-sub-menu").show().css({
                            top: (0, u.default)("#" + n).height() + (0, u.default)("#" + n).position().top
                        }))
                    }), (0, u.default)(".menu-icon").on("click", function () {
                        (0, u.default)("#mobile_top_menu_wrapper").toggleClass("slide"), (0, u.default)(".menu-icon").toggleClass("active"), (0, u.default)("body").toggleClass("active"), (0, u.default)("#page").toggleClass("active"), i.toggleMobileMenu()
                    }), (0, u.default)(".js-top-menu").mouseleave(function () {
                        t.el.parent().hasClass("mobile") || (0, u.default)("#" + n + " .js-sub-menu").hide()
                    }), this.el.on("click", function (e) {
                        t.el.parent().hasClass("mobile") || e.stopPropagation()
                    }), prestashop.on("responsive update", function (t) {
                        (0, u.default)(".js-sub-menu").removeAttr("style"), i.toggleMobileMenu()
                    }), s(Object.getPrototypeOf(e.prototype), "init", this).call(this)
                }
            }, {
                key: "toggleMobileMenu",
                value: function () {
                    (0, u.default)("#mobile_top_menu_wrapper").is(":visible")
                }
            }]), e
        }(f.default);
    e.default = d, t.exports = e.default
}, function (t, e) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function i(t) {
        return "function" == typeof t
    }

    function r(t) {
        return "number" == typeof t
    }

    function o(t) {
        return "object" == typeof t && null !== t
    }

    function a(t) {
        return void 0 === t
    }
    t.exports = n, n.EventEmitter = n,
        n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
            if (!r(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, n.prototype.emit = function (t) {
            var e, n, r, s, l, u;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                if (e = arguments[1], e instanceof Error) throw e;
                var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw c.context = e, c
            }
            if (n = this._events[t], a(n)) return !1;
            if (i(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
            } else if (o(n))
                for (s = Array.prototype.slice.call(arguments, 1), u = n.slice(), r = u.length, l = 0; l < r; l++) u[l].apply(this, s);
            return !0
        }, n.prototype.addListener = function (t, e) {
            var r;
            if (!i(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[t].length > r && (this._events[t].warned = !0, "function" == typeof console.trace)), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
            function n() {
                this.removeListener(t, n), r || (r = !0, e.apply(this, arguments))
            }
            if (!i(e)) throw TypeError("listener must be a function");
            var r = !1;
            return n.listener = e, this.on(t, n), this
        }, n.prototype.removeListener = function (t, e) {
            var n, r, a, s;
            if (!i(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (n = this._events[t], a = n.length, r = -1, n === e || i(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
            else if (o(n)) {
                for (s = a; s-- > 0;)
                    if (n[s] === e || n[s].listener && n[s].listener === e) {
                        r = s;
                        break
                    } if (r < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, n.prototype.removeAllListeners = function (t) {
            var e, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[t], i(n)) this.removeListener(t, n);
            else if (n)
                for (; n.length;) this.removeListener(t, n[n.length - 1]);
            return delete this._events[t], this
        }, n.prototype.listeners = function (t) {
            var e;
            return e = this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, n.prototype.listenerCount = function (t) {
            if (this._events) {
                var e = this._events[t];
                if (i(e)) return 1;
                if (e) return e.length
            }
            return 0
        }, n.listenerCount = function (t, e) {
            return t.listenerCount(e)
        }
}, function (t, e) {
    "use strict";
    ! function (t) {
        var e = 0,
            n = function (e, n) {
                this.options = n, this.$elementFilestyle = [], this.$element = t(e)
            };
        n.prototype = {
            clear: function () {
                this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function () {
                this.$element.removeAttr("style").removeData("filestyle"), this.$elementFilestyle.remove()
            },
            disabled: function (t) {
                if (t === !0) this.options.disabled || (this.$element.attr("disabled", "true"), this.$elementFilestyle.find("label").attr("disabled", "true"), this.options.disabled = !0);
                else {
                    if (t !== !1) return this.options.disabled;
                    this.options.disabled && (this.$element.removeAttr("disabled"), this.$elementFilestyle.find("label").removeAttr("disabled"), this.options.disabled = !1)
                }
            },
            buttonBefore: function (t) {
                if (t === !0) this.options.buttonBefore || (this.options.buttonBefore = !0, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
                else {
                    if (t !== !1) return this.options.buttonBefore;
                    this.options.buttonBefore && (this.options.buttonBefore = !1, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
                }
            },
            icon: function (t) {
                if (t === !0) this.options.icon || (this.options.icon = !0, this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
                else {
                    if (t !== !1) return this.options.icon;
                    this.options.icon && (this.options.icon = !1, this.$elementFilestyle.find(".icon-span-filestyle").remove())
                }
            },
            input: function (t) {
                if (t === !0) this.options.input || (this.options.input = !0, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.$elementFilestyle.find(".badge").remove(), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
                else {
                    if (t !== !1) return this.options.input;
                    if (this.options.input) {
                        this.options.input = !1, this.$elementFilestyle.find(":text").remove();
                        var e = this.pushNameFiles();
                        e.length > 0 && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>"), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                    }
                }
            },
            size: function (t) {
                if (void 0 === t) return this.options.size;
                var e = this.$elementFilestyle.find("label"),
                    n = this.$elementFilestyle.find("input");
                e.removeClass("btn-lg btn-sm"), n.removeClass("input-lg input-sm"), "nr" != t && (e.addClass("btn-" + t), n.addClass("input-" + t))
            },
            placeholder: function (t) {
                return void 0 === t ? this.options.placeholder : (this.options.placeholder = t, void this.$elementFilestyle.find("input").attr("placeholder", t))
            },
            buttonText: function (t) {
                return void 0 === t ? this.options.buttonText : (this.options.buttonText = t, void this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText))
            },
            buttonName: function (t) {
                return void 0 === t ? this.options.buttonName : (this.options.buttonName = t, void this.$elementFilestyle.find("label").attr({
                    class: "btn " + this.options.buttonName
                }))
            },
            iconName: function (t) {
                return void 0 === t ? this.options.iconName : void this.$elementFilestyle.find(".icon-span-filestyle").attr({
                    class: "icon-span-filestyle " + this.options.iconName
                })
            },
            htmlIcon: function () {
                return this.options.icon ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' : ""
            },
            htmlInput: function () {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' : ""
            },
            pushNameFiles: function () {
                var t = "",
                    e = [];
                void 0 === this.$element[0].files ? e[0] = {
                    name: this.$element[0] && this.$element[0].value
                } : e = this.$element[0].files;
                for (var n = 0; n < e.length; n++) t += e[n].name.split("\\").pop() + ", ";
                return "" !== t ? this.$elementFilestyle.find(":text").val(t.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""), e
            },
            constructor: function () {
                var n = this,
                    i = "",
                    r = n.$element.attr("id"),
                    o = "";
                "" !== r && r || (r = "filestyle-" + e, n.$element.attr({
                    id: r
                }), e++), o = '<span class="group-span-filestyle ' + (n.options.input ? "input-group-btn" : "") + '"><label for="' + r + '" class="btn ' + n.options.buttonName + " " + ("nr" == n.options.size ? "" : "btn-" + n.options.size) + '" ' + (n.options.disabled ? 'disabled="true"' : "") + ">" + n.htmlIcon() + '<span class="buttonText">' + n.options.buttonText + "</span></label></span>", i = n.options.buttonBefore ? o + n.htmlInput() : n.htmlInput() + o, n.$elementFilestyle = t('<div class="bootstrap-filestyle input-group">' + i + "</div>"), n.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (t) {
                    if (13 === t.keyCode || 32 === t.charCode) return n.$elementFilestyle.find("label").click(), !1
                }), n.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(n.$elementFilestyle), n.options.disabled && n.$element.attr("disabled", "true"), n.$element.change(function () {
                    var t = n.pushNameFiles();
                    0 == n.options.input && n.options.badge ? 0 == n.$elementFilestyle.find(".badge").length ? n.$elementFilestyle.find("label").append(' <span class="badge">' + t.length + "</span>") : 0 == t.length ? n.$elementFilestyle.find(".badge").remove() : n.$elementFilestyle.find(".badge").html(t.length) : n.$elementFilestyle.find(".badge").remove()
                }), window.navigator.userAgent.search(/firefox/i) > -1 && n.$elementFilestyle.find("label").click(function () {
                    return n.$element.click(), !1
                })
            }
        };
        var i = t.fn.filestyle;
        t.fn.filestyle = function (e, i) {
            var r = "",
                o = this.each(function () {
                    if ("file" === t(this).attr("type")) {
                        var o = t(this),
                            a = o.data("filestyle"),
                            s = t.extend({}, t.fn.filestyle.defaults, e, "object" == typeof e && e);
                        a || (o.data("filestyle", a = new n(this, s)), a.constructor()), "string" == typeof e && (r = a[e](i))
                    }
                });
            return void 0 !== typeof r ? r : o
        }, t.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
        }, t.fn.filestyle.noConflict = function () {
            return t.fn.filestyle = i, this
        }, t(function () {
            t(".filestyle").each(function () {
                var e = t(this),
                    n = {
                        input: "false" !== e.attr("data-input"),
                        icon: "false" !== e.attr("data-icon"),
                        buttonBefore: "true" === e.attr("data-buttonBefore"),
                        disabled: "true" === e.attr("data-disabled"),
                        size: e.attr("data-size"),
                        buttonText: e.attr("data-buttonText"),
                        buttonName: e.attr("data-buttonName"),
                        iconName: e.attr("data-iconName"),
                        badge: "false" !== e.attr("data-badge"),
                        placeholder: e.attr("data-placeholder")
                    };
                e.filestyle(n)
            })
        })
    }(window.jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        t.fn.scrollbox = function (e) {
            var n = {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1
            };
            return e = t.extend(n, e), e.scrollOffset = "vertical" === e.direction ? "scrollTop" : "scrollLeft", e.queue && (e.queue = t("#" + e.queue)), this.each(function () {
                var n, i, r, o, a, s, l, u, c, f = t(this),
                    d = null,
                    p = null,
                    h = !1,
                    m = 0,
                    g = 0;
                e.onMouseOverPause && (f.bind("mouseover", function () {
                    h = !0
                }), f.bind("mouseout", function () {
                    h = !1
                })), n = f.children(e.listElement + ":first-child"), e.infiniteLoop === !1 && 0 === e.switchAmount && (e.switchAmount = n.children().length), s = function () {
                    if (!h) {
                        var r, a, s, l, u;
                        if (r = n.children(e.listItemElement + ":first-child"), l = "auto" !== e.distance ? e.distance : "vertical" === e.direction ? r.outerHeight(!0) : r.outerWidth(!0), e.linear ? s = Math.min(f[0][e.scrollOffset] + e.step, l) : (u = Math.max(3, parseInt(.3 * (l - f[0][e.scrollOffset]), 10)), s = Math.min(f[0][e.scrollOffset] + u, l)), f[0][e.scrollOffset] = s, s >= l) {
                            for (a = 0; a < e.switchItems; a++) e.queue && e.queue.find(e.listItemElement).length > 0 ? (n.append(e.queue.find(e.listItemElement)[0]), n.children(e.listItemElement + ":first-child").remove()) : n.append(n.children(e.listItemElement + ":first-child")), ++m;
                            if (f[0][e.scrollOffset] = 0, clearInterval(d), d = null, t.isFunction(e.afterForward) && e.afterForward.call(f, {
                                    switchCount: m,
                                    currentFirstChild: n.children(e.listItemElement + ":first-child")
                                }), e.triggerStackable && 0 !== g) return void i();
                            if (e.infiniteLoop === !1 && m >= e.switchAmount) return;
                            e.autoPlay && (p = setTimeout(o, 1e3 * e.delay))
                        }
                    }
                }, l = function () {
                    if (!h) {
                        var r, a, s, l, u;
                        if (0 === f[0][e.scrollOffset]) {
                            for (a = 0; a < e.switchItems; a++) n.children(e.listItemElement + ":last-child").insertBefore(n.children(e.listItemElement + ":first-child"));
                            r = n.children(e.listItemElement + ":first-child"), l = "auto" !== e.distance ? e.distance : "vertical" === e.direction ? r.height() : r.width(), f[0][e.scrollOffset] = l
                        }
                        if (e.linear ? s = Math.max(f[0][e.scrollOffset] - e.step, 0) : (u = Math.max(3, parseInt(.3 * f[0][e.scrollOffset], 10)), s = Math.max(f[0][e.scrollOffset] - u, 0)), f[0][e.scrollOffset] = s, 0 === s) {
                            if (--m, clearInterval(d), d = null, t.isFunction(e.afterBackward) && e.afterBackward.call(f, {
                                    switchCount: m,
                                    currentFirstChild: n.children(e.listItemElement + ":first-child")
                                }), e.triggerStackable && 0 !== g) return void i();
                            e.autoPlay && (p = setTimeout(o, 1e3 * e.delay))
                        }
                    }
                }, i = function () {
                    0 !== g && (g > 0 ? (g--, p = setTimeout(o, 0)) : (g++, p = setTimeout(r, 0)))
                }, o = function () {
                    clearInterval(d), d = setInterval(s, e.speed)
                }, r = function () {
                    clearInterval(d), d = setInterval(l, e.speed)
                }, u = function () {
                    e.autoPlay = !0, h = !1, clearInterval(d), d = setInterval(s, e.speed)
                }, c = function () {
                    h = !0
                }, a = function (t) {
                    e.delay = t || e.delay, clearTimeout(p), e.autoPlay && (p = setTimeout(o, 1e3 * e.delay))
                }, e.autoPlay && (p = setTimeout(o, 1e3 * e.startDelay)), f.bind("resetClock", function (t) {
                    a(t)
                }), f.bind("forward", function () {
                    e.triggerStackable ? null !== d ? g++ : o() : (clearTimeout(p), o())
                }), f.bind("backward", function () {
                    e.triggerStackable ? null !== d ? g-- : r() : (clearTimeout(p), r())
                }), f.bind("pauseHover", function () {
                    c()
                }), f.bind("forwardHover", function () {
                    u()
                }), f.bind("speedUp", function (t, n) {
                    "undefined" === n && (n = Math.max(1, parseInt(e.speed / 2, 10))), e.speed = n
                }), f.bind("speedDown", function (t, n) {
                    "undefined" === n && (n = 2 * e.speed), e.speed = n
                }), f.bind("updateConfig", function (n, i) {
                    e = t.extend(e, i)
                })
            })
        }
    }(jQuery)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var r = n(9),
        o = i(r),
        a = n(8),
        s = i(a);
    o.default.blockcart = o.default.blockcart || {}, o.default.blockcart.showModal = function (t) {
        function e() {
            return (0, s.default)("#blockcart-modal")
        }
        var n = e();
        n.length && n.remove(), (0, s.default)("body").append(t), n = e(), n.modal("show").on("hidden.bs.modal", function (t) {
            o.default.emit("updateProduct", {
                reason: t.currentTarget.dataset,
                event: t
            })
        })
    }
}]);


function additionalCarousel(sliderId) {
    /*======  curosol For Additional ==== */
    var ctadditional = $(sliderId);
    ctadditional.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [480, 2],
        itemsMobile: [320, 1]
    });
    // Custom Navigation Events
    $(".additional_next").click(function () {
        ctadditional.trigger('owl.next');
    })
    $(".additional_prev").click(function () {
        ctadditional.trigger('owl.prev');
    });
}

$(document).ready(function () {

    bindGrid();
    additionalCarousel('#main .additional-carousel');
    $('.cart_block.dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });


    // Add/Remove acttive class on menu active in responsive  
    $('#menu-icon').on('click', function () {
        $(this).toggleClass('active');
    });

    $('input[name="email"], #search_widget input[type="text"]').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });


    $('#header .search_button').click(function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
        $('#header .search_toggle').toggle('medium');
        $("#header .search-widget form input[type=text]").focus();

    });

    $("#header .search_toggle").on("click", function (event) {
        event.stopPropagation();
    });

    /*======  Parallax  ==== 
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if(!isMobile) {
        if($(".parallax").length){  
            $(".parallax").sitManParallex({  invert: false });
        };
    }else{
        $(".parallax").sitManParallex({  invert: true });
    }*/

    /* ---------------- start more menu setting ---------------------- */
    var max_elem = 4;
    var items = $('.menu ul#top-menu > li');
    var surplus = items.slice(max_elem, items.length);

    surplus.wrapAll('<li class="category more_menu" id="more_menu"><div id="top_moremenu" class="popover sub-menu js-sub-menu collapse"><ul class="top-menu more_sub_menu">');

    $('.menu ul#top-menu .more_menu').prepend('<a href="#" class="dropdown-item" data-depth="0"><span class="pull-xs-right hidden-md-up"><span data-target="#top_moremenu" data-toggle="collapse" class="navbar-toggler collapse-icons"><i class="material-icons add">&#xE313;</i><i class="material-icons remove">&#xE316;</i></span></span></span>More</a>');

    $('.menu ul#top-menu .more_menu').mouseover(function () {
            $(this).children('div').css('display', 'block');
        })
        .mouseout(function () {
            $(this).children('div').css('display', 'none');
        });
    /* ---------------- end more menu setting ----------------------	*/

    var catid_array = [];
    $('#ctcategorytabs .product_slider_grid').each(function () {
        var catid = $(this).data('catid');
        var owlcarouselid = $('#ctcategory' + catid + '-carousel');

        owlcarouselid.owlCarousel({
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1459, 4],
            itemsDesktopSmall: [1199, 4],
            itemsTablet: [991, 3],
            itemsTabletSmall: [767, 2],
            itemsMobile: [479, 1]
        });
        $('#tab_' + catid + ' .ctcategory_next').click(function () {
            owlcarouselid.trigger('owl.next');
        })
        $('#tab_' + catid + ' .ctcategory_prev').click(function () {
            owlcarouselid.trigger('owl.prev');
        });
    });
});




// Loading image before flex slider load
$(window).load(function () {
    $(".loadingdiv").removeClass("spinner");
});

// Nivo slider load
$(window).load(function () {
    if ($('#nivoslider').length > 0) {
        $('#nivoslider').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 3000,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false,
            prevText: '',
            nextText: ''
        });
    }
});

// Scroll page bottom to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.top_button').fadeIn(500);
    } else {
        $('.top_button').fadeOut(500);
    }
});
$('.top_button').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});

/*======  Carousel Slider For Feature Product ==== */

var ctblog = $("#blog-carousel");
ctblog.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [680, 1]
});
// Custom Navigation Events
$(".blog_next").click(function () {
    ctblog.trigger('owl.next');
})
$(".blog_prev").click(function () {
    ctblog.trigger('owl.prev');
});

/*======  Carousel Slider For Feature Product ==== */

var ctfeature = $("#feature-carousel");
ctfeature.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".feature_next").click(function () {
    ctfeature.trigger('owl.next');
})
$(".feature_prev").click(function () {
    ctfeature.trigger('owl.prev');
});



/*======  Carousel Slider For New Product ==== */

var ctnewproduct = $("#newproduct-carousel");
ctnewproduct.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".newproduct_next").click(function () {
    ctnewproduct.trigger('owl.next');
})
$(".newproduct_prev").click(function () {
    ctnewproduct.trigger('owl.prev');
});



/*======  Carousel Slider For Bestseller Product ==== */

var ctbestseller = $("#bestseller-carousel");
ctbestseller.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".bestseller_next").click(function () {
    ctbestseller.trigger('owl.next');
})
$(".bestseller_prev").click(function () {
    ctbestseller.trigger('owl.prev');
});



/*======  Carousel Slider For Special Product ==== */
var ctspecial = $("#special-carousel");
ctspecial.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".special_next").click(function () {
    ctspecial.trigger('owl.next');
})
$(".special_prev").click(function () {
    ctspecial.trigger('owl.prev');
});


/*======  Carousel Slider For Accessories Product ==== */

var ctaccessories = $("#accessories-carousel");
ctaccessories.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".accessories_next").click(function () {
    ctaccessories.trigger('owl.next');
})
$(".accessories_prev").click(function () {
    ctaccessories.trigger('owl.prev');
});


/*======  Carousel Slider For Category Product ==== */

var ctproductscategory = $("#productscategory-carousel");
ctproductscategory.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".productscategory_next").click(function () {
    ctproductscategory.trigger('owl.next');
})
$(".productscategory_prev").click(function () {
    ctproductscategory.trigger('owl.prev');
});


/*======  Carousel Slider For Viewed Product ==== */

var ctviewed = $("#viewed-carousel");
ctviewed.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".viewed_next").click(function () {
    ctviewed.trigger('owl.next');
})
$(".viewed_prev").click(function () {
    ctviewed.trigger('owl.prev');
});

/*======  Carousel Slider For Crosssell Product ==== */

var ctcrosssell = $("#crosssell-carousel");
ctcrosssell.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [767, 2],
    itemsTablet: [479, 3],
    itemsMobile: [379, 1]
});
// Custom Navigation Events
$(".crosssell_next").click(function () {
    ctcrosssell.trigger('owl.next');
})
$(".crosssell_prev").click(function () {
    ctcrosssell.trigger('owl.prev');
});

/*======  curosol For Manufacture ==== */
var ctbrand = $("#brand-carousel");
ctbrand.owlCarousel({
    items: 5, //10 items above 1000px browser width
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [991, 3],
    itemsTablet: [480, 2],
    itemsMobile: [320, 1],
    autoPlay: true
});
// Custom Navigation Events
$(".brand_next").click(function () {
    ctbrand.trigger('owl.next');
})
$(".brand_prev").click(function () {
    ctbrand.trigger('owl.prev');
});


/*======  Carousel Slider For For Tesimonial ==== */

var cttestimonial = $("#testimonial-carousel");
cttestimonial.owlCarousel({
    autoPlay: false,
    singleItem: true
});

/* Custom Navigation Events*/
$(".cttestimonial_next").click(function () {
    cttestimonial.trigger('owl.next');
});

$(".cttestimonial_prev").click(function () {
    cttestimonial.trigger('owl.prev');
});


function bindGrid() {
    var view = $.totalStorage("display");

    if (view && view != 'grid')
        display(view);
    else
        $('.display').find('li#grid').addClass('selected');

    $(document).on('click', '#grid', function (e) {
        e.preventDefault();
        display('grid');
    });

    $(document).on('click', '#list', function (e) {
        e.preventDefault();
        display('list');
    });
}

function display(view) {
    if (view == 'list') {
        $('#products ul.product_list').removeClass('grid').addClass('list row');
        $('#products .product_list > li').removeClass('col-xs-12 col-sm-6 col-md-6 col-lg-4').addClass('col-xs-12');


        $('#products .product_list > li').each(function (index, element) {
            var html = '';
            html = '<div class="product-miniature js-product-miniature" data-id-product="' + $(element).find('.product-miniature').data('id-product') + '" data-id-product-attribute="' + $(element).find('.product-miniature').data('id-product-attribute') + '" itemscope itemtype="http://schema.org/Product">';
            html += '<div class="thumbnail-container col-xs-4 col-xs-5 col-md-4">' + $(element).find('.thumbnail-container').html() + '</div>';

            html += '<div class="product-description center-block col-xs-4 col-xs-7 col-md-8">';
            html += '<h3 class="h3 product-title" itemprop="name">' + $(element).find('h3').html() + '</h3>';

            var comment = $(element).find('.comments_note').html(); // check : Comment module is enabled
            if (comment != null) {
                html += '<div class="comments_note">' + $(element).find('.comments_note').html() + '</div>';
            }

            var price = $(element).find('.product-price-and-shipping').html(); // check : catalog mode is enabled
            if (price != null) {
                html += '<div class="product-price-and-shipping">' + price + '</div>';
            }

            html += '<div class="product-detail">' + $(element).find('.product-detail').html() + '</div>';

            var colorList = $(element).find('.highlighted-informations').html();
            if (colorList != null) {
                html += '<div class="highlighted-informations">' + colorList + '</div>';
            }

            html += '<div class="product-actions">' + $(element).find('.product-actions').html() + '</div>';

            html += '</div>';
            html += '</div>';
            $(element).html(html);
        });
        $('.display').find('li#list').addClass('selected');
        $('.display').find('li#grid').removeAttr('class');
        $.totalStorage('display', 'list');
    } else {
        $('#products ul.product_list').removeClass('list').addClass('grid row');
        $('#products .product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-6 col-lg-4');
        $('#products .product_list > li').each(function (index, element) {
            var html = '';
            html += '<div class="product-miniature js-product-miniature" data-id-product="' + $(element).find('.product-miniature').data('id-product') + '" data-id-product-attribute="' + $(element).find('.product-miniature').data('id-product-attribute') + '" itemscope itemtype="http://schema.org/Product">';
            html += '<div class="thumbnail-container">' + $(element).find('.thumbnail-container').html() + '</div>';

            html += '<div class="product-description">';

            var comment = $(element).find('.comments_note').html(); // check : Comment module is enabled
            if (comment != null) {
                html += '<div class="comments_note">' + $(element).find('.comments_note').html() + '</div>';
            }

            html += '<h3 class="h3 product-title" itemprop="name">' + $(element).find('h3').html() + '</h3>';

            var price = $(element).find('.product-price-and-shipping').html(); // check : catalog mode is enabled
            if (price != null) {
                html += '<div class="product-price-and-shipping">' + price + '</div>';
            }


            html += '<div class="product-detail">' + $(element).find('.product-detail').html() + '</div>';

            //html += '<div class="product-actions">'+ $(element).find('.product-actions').html() +'</div>';

            var colorList = $(element).find('.highlighted-informations').html();
            if (colorList != null) {
                html += '<div class="highlighted-informations">' + colorList + '</div>';
            }

            html += '</div>';
            html += '</div>';
            $(element).html(html);
        });
        $('.display').find('li#grid').addClass('selected');
        $('.display').find('li#list').removeAttr('class');
        $.totalStorage('display', 'grid');
    }
}


function responsivecolumn() {

    if ($(document).width() <= 991) {
        $('.container #columns_inner #left-column').appendTo('.container #columns_inner');
        // ---------------- Fixed header responsive ----------------------
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 170) {
                $('.mobile-menu').addClass('fixed');
            } else {
                $('.mobile-menu').removeClass('fixed');
            }
        });
    } else if ($(document).width() >= 992) {
        $('.container #columns_inner #left-column').prependTo('.container #columns_inner');
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 270) {
                $('.header-top').addClass('fixed');
            } else {
                $('.header-top').removeClass('fixed');
            }
        });
    }
    $('#language-selector').appendTo('.user-info > ul.dropdown-menu');
    $('#currency-selector').appendTo('.user-info > ul.dropdown-menu');
}
$(document).ready(function () {
    responsivecolumn();
});
$(window).resize(function () {
    responsivecolumn();
});


