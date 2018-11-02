module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./source/data.ts
const CHAR_CODE_TO_BASE64_VALUE = {
    65: 0,
    66: 1,
    67: 2,
    68: 3,
    69: 4,
    70: 5,
    71: 6,
    72: 7,
    73: 8,
    74: 9,
    75: 10,
    76: 11,
    77: 12,
    78: 13,
    79: 14,
    80: 15,
    81: 16,
    82: 17,
    83: 18,
    84: 19,
    85: 20,
    86: 21,
    87: 22,
    88: 23,
    89: 24,
    90: 25,
    97: 26,
    98: 27,
    99: 28,
    100: 29,
    101: 30,
    102: 31,
    103: 32,
    104: 33,
    105: 34,
    106: 35,
    107: 36,
    108: 37,
    109: 38,
    110: 39,
    111: 40,
    112: 41,
    113: 42,
    114: 43,
    115: 44,
    116: 45,
    117: 46,
    118: 47,
    119: 48,
    120: 49,
    121: 50,
    122: 51,
    48: 52,
    49: 53,
    50: 54,
    51: 55,
    52: 56,
    53: 57,
    54: 58,
    55: 59,
    56: 60,
    57: 61,
    43: 62,
    47: 63,
    45: 62,
    95: 63
};
const BASE64_VALUE_TO_CHAR_CODE = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z',
    26: 'a',
    27: 'b',
    28: 'c',
    29: 'd',
    30: 'e',
    31: 'f',
    32: 'g',
    33: 'h',
    34: 'i',
    35: 'j',
    36: 'k',
    37: 'l',
    38: 'm',
    39: 'n',
    40: 'o',
    41: 'p',
    42: 'q',
    43: 'r',
    44: 's',
    45: 't',
    46: 'u',
    47: 'v',
    48: 'w',
    49: 'x',
    50: 'y',
    51: 'z',
    52: '0',
    53: '1',
    54: '2',
    55: '3',
    56: '4',
    57: '5',
    58: '6',
    59: '7',
    60: '8',
    61: '9',
    62: '+',
    63: '/'
};

// CONCATENATED MODULE: ./source/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });

const ENCODING_CHUNK_LENGTH = 16383;
function encodingLengthOf(base64) {
    const indexOfPadding = base64.indexOf('=');
    return (indexOfPadding === -1 ? base64.length : indexOfPadding);
}
function paddingLengthOf(base64, encodingLength) {
    if (!encodingLength)
        encodingLength = encodingLengthOf(base64);
    if (encodingLength < 0)
        throw new Error("Base64 encoding length cannot be negative.");
    if (!Number.isInteger(encodingLength))
        throw new Error("Base64 encoding length must be integral.");
    return ((encodingLength === base64.length) ? 0 : (4 - (encodingLength % 4)));
}
function lengthOfEncodedDataIn(base64) {
    const encodingLength = encodingLengthOf(base64);
    const paddingLength = paddingLengthOf(base64, encodingLength);
    return (((encodingLength + paddingLength) * 0.75) - paddingLength);
}
function decode(base64) {
    if (base64.length % 4 > 0)
        throw new Error("Base64 string with length not divisible by four.");
    const encodingLength = encodingLengthOf(base64);
    const paddingLength = paddingLengthOf(base64, encodingLength);
    const ret = new Uint8Array(lengthOfEncodedDataIn(base64));
    let currentByte = 0;
    const fullQuartetsLength = (paddingLength ? (encodingLength - 4) : encodingLength);
    let temp = 0;
    let i = 0;
    while (i < fullQuartetsLength) {
        temp =
            CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i)] << 18 |
                CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 1)] << 12 |
                CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 2)] << 6 |
                CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 3)];
        ret[currentByte++] = ((temp >> 16) & 0xFF);
        ret[currentByte++] = ((temp >> 8) & 0xFF);
        ret[currentByte++] = ((temp) & 0xFF);
        i += 4;
    }
    if (paddingLength > 2) {
        throw new Error("Invalid number of padding bytes returned for Base64 string.");
    }
    else if (paddingLength === 2) {
        temp =
            (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i)] << 2) |
                (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 1)] >> 4);
        ret[currentByte++] = (temp & 0xFF);
    }
    else if (paddingLength === 1) {
        temp =
            (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i)] << 10) |
                (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 1)] << 4) |
                (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 2)] >> 2);
        ret[currentByte++] = ((temp >> 8) & 0xFF);
        ret[currentByte++] = ((temp) & 0xFF);
    }
    return ret;
}
function tripletToBase64(num) {
    return (BASE64_VALUE_TO_CHAR_CODE[num >> 18 & 0x3F] +
        BASE64_VALUE_TO_CHAR_CODE[num >> 12 & 0x3F] +
        BASE64_VALUE_TO_CHAR_CODE[num >> 6 & 0x3F] +
        BASE64_VALUE_TO_CHAR_CODE[num & 0x3F]);
}
function encode(bytes) {
    if (bytes.length < ENCODING_CHUNK_LENGTH) {
        const numberOfModularBytes = (bytes.length % 3);
        var base64Quartets = [];
        for (var i = 0; i < bytes.length; i += 3) {
            base64Quartets.push(tripletToBase64(((bytes[i] << 16) & 0xFF0000) +
                ((bytes[i + 1] << 8) & 0xFF00) +
                ((bytes[i + 2]) & 0xFF)));
        }
        if (numberOfModularBytes === 1) {
            const temp = bytes[bytes.length - 1];
            base64Quartets.push(BASE64_VALUE_TO_CHAR_CODE[(temp >> 2)] +
                BASE64_VALUE_TO_CHAR_CODE[(temp << 4) & 0x3F] +
                '==');
        }
        else if (numberOfModularBytes === 2) {
            const temp = (bytes[bytes.length - 2] << 8) + bytes[bytes.length - 1];
            base64Quartets.push(BASE64_VALUE_TO_CHAR_CODE[(temp >> 10)] +
                BASE64_VALUE_TO_CHAR_CODE[(temp >> 4) & 0x3F] +
                BASE64_VALUE_TO_CHAR_CODE[(temp << 2) & 0x3F] +
                '=');
        }
        return base64Quartets.join('');
    }
    else {
        let parts = [];
        for (let i = 0; i < bytes.length; i += ENCODING_CHUNK_LENGTH) {
            parts.push(encode(bytes.slice(i, i + ENCODING_CHUNK_LENGTH)));
        }
        return parts.join('');
    }
}


/***/ })
/******/ ]);