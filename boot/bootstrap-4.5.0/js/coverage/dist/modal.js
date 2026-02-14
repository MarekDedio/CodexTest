/*!
  * Bootstrap modal.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Modal = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Util = Util && Object.prototype.hasOwnProperty.call(Util, 'default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function cov_1wgcczsu3a() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\modal.js";
    var hash = "3d3b9350c370e153169abce07f8575282f8abccb";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\modal.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 34
          }
        },
        "1": {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 34
          }
        },
        "2": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 37
          }
        },
        "3": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 41
          }
        },
        "4": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "5": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 37
          }
        },
        "6": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 29
          }
        },
        "7": {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 30,
            column: 1
          }
        },
        "8": {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "9": {
          start: {
            line: 39,
            column: 32
          },
          end: {
            line: 39,
            column: 50
          }
        },
        "10": {
          start: {
            line: 40,
            column: 32
          },
          end: {
            line: 40,
            column: 59
          }
        },
        "11": {
          start: {
            line: 41,
            column: 32
          },
          end: {
            line: 41,
            column: 52
          }
        },
        "12": {
          start: {
            line: 42,
            column: 32
          },
          end: {
            line: 42,
            column: 50
          }
        },
        "13": {
          start: {
            line: 43,
            column: 32
          },
          end: {
            line: 43,
            column: 51
          }
        },
        "14": {
          start: {
            line: 44,
            column: 32
          },
          end: {
            line: 44,
            column: 53
          }
        },
        "15": {
          start: {
            line: 45,
            column: 32
          },
          end: {
            line: 45,
            column: 52
          }
        },
        "16": {
          start: {
            line: 46,
            column: 32
          },
          end: {
            line: 46,
            column: 59
          }
        },
        "17": {
          start: {
            line: 47,
            column: 32
          },
          end: {
            line: 47,
            column: 61
          }
        },
        "18": {
          start: {
            line: 48,
            column: 32
          },
          end: {
            line: 48,
            column: 61
          }
        },
        "19": {
          start: {
            line: 49,
            column: 32
          },
          end: {
            line: 49,
            column: 63
          }
        },
        "20": {
          start: {
            line: 50,
            column: 32
          },
          end: {
            line: 50,
            column: 66
          }
        },
        "21": {
          start: {
            line: 52,
            column: 38
          },
          end: {
            line: 52,
            column: 63
          }
        },
        "22": {
          start: {
            line: 53,
            column: 38
          },
          end: {
            line: 53,
            column: 63
          }
        },
        "23": {
          start: {
            line: 54,
            column: 38
          },
          end: {
            line: 54,
            column: 54
          }
        },
        "24": {
          start: {
            line: 55,
            column: 38
          },
          end: {
            line: 55,
            column: 50
          }
        },
        "25": {
          start: {
            line: 56,
            column: 38
          },
          end: {
            line: 56,
            column: 44
          }
        },
        "26": {
          start: {
            line: 57,
            column: 38
          },
          end: {
            line: 57,
            column: 44
          }
        },
        "27": {
          start: {
            line: 58,
            column: 38
          },
          end: {
            line: 58,
            column: 52
          }
        },
        "28": {
          start: {
            line: 60,
            column: 32
          },
          end: {
            line: 60,
            column: 47
          }
        },
        "29": {
          start: {
            line: 61,
            column: 32
          },
          end: {
            line: 61,
            column: 45
          }
        },
        "30": {
          start: {
            line: 62,
            column: 32
          },
          end: {
            line: 62,
            column: 55
          }
        },
        "31": {
          start: {
            line: 63,
            column: 32
          },
          end: {
            line: 63,
            column: 56
          }
        },
        "32": {
          start: {
            line: 64,
            column: 32
          },
          end: {
            line: 64,
            column: 83
          }
        },
        "33": {
          start: {
            line: 65,
            column: 32
          },
          end: {
            line: 65,
            column: 45
          }
        },
        "34": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 55
          }
        },
        "35": {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 39
          }
        },
        "36": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 70
          }
        },
        "37": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 36
          }
        },
        "38": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 37
          }
        },
        "39": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 37
          }
        },
        "40": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 37
          }
        },
        "41": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 37
          }
        },
        "42": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 33
          }
        },
        "43": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 18
          }
        },
        "44": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 18
          }
        },
        "45": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 65
          }
        },
        "46": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        "47": {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 12
          }
        },
        "48": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "49": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 34
          }
        },
        "50": {
          start: {
            line: 111,
            column: 22
          },
          end: {
            line: 113,
            column: 6
          }
        },
        "51": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 39
          }
        },
        "52": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        "53": {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 118,
            column: 12
          }
        },
        "54": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 24
          }
        },
        "55": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 26
          }
        },
        "56": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 24
          }
        },
        "57": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 24
          }
        },
        "58": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 26
          }
        },
        "59": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 26
          }
        },
        "60": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        "61": {
          start: {
            line: 134,
            column: 17
          },
          end: {
            line: 134,
            column: 33
          }
        },
        "62": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 143,
            column: 6
          }
        },
        "63": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 142,
            column: 8
          }
        },
        "64": {
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 141,
            column: 9
          }
        },
        "65": {
          start: {
            line: 140,
            column: 10
          },
          end: {
            line: 140,
            column: 42
          }
        },
        "66": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 145,
            column: 62
          }
        },
        "67": {
          start: {
            line: 145,
            column: 29
          },
          end: {
            line: 145,
            column: 61
          }
        },
        "68": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        },
        "69": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 150,
            column: 28
          }
        },
        "70": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "71": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 12
          }
        },
        "72": {
          start: {
            line: 157,
            column: 22
          },
          end: {
            line: 157,
            column: 41
          }
        },
        "73": {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 39
          }
        },
        "74": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "75": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 12
          }
        },
        "76": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 165,
            column: 25
          }
        },
        "77": {
          start: {
            line: 166,
            column: 23
          },
          end: {
            line: 166,
            column: 65
          }
        },
        "78": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        },
        "79": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 169,
            column: 34
          }
        },
        "80": {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 172,
            column: 26
          }
        },
        "81": {
          start: {
            line: 173,
            column: 4
          },
          end: {
            line: 173,
            column: 26
          }
        },
        "82": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 34
          }
        },
        "83": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 49
          }
        },
        "84": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 45
          }
        },
        "85": {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 48
          }
        },
        "86": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "87": {
          start: {
            line: 183,
            column: 34
          },
          end: {
            line: 183,
            column: 86
          }
        },
        "88": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 187,
            column: 49
          }
        },
        "89": {
          start: {
            line: 186,
            column: 45
          },
          end: {
            line: 186,
            column: 67
          }
        },
        "90": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 23
          }
        },
        "91": {
          start: {
            line: 194,
            column: 4
          },
          end: {
            line: 195,
            column: 62
          }
        },
        "92": {
          start: {
            line: 195,
            column: 32
          },
          end: {
            line: 195,
            column: 61
          }
        },
        "93": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 202,
            column: 34
          }
        },
        "94": {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 204,
            column: 41
          }
        },
        "95": {
          start: {
            line: 206,
            column: 4
          },
          end: {
            line: 206,
            column: 36
          }
        },
        "96": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 36
          }
        },
        "97": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 36
          }
        },
        "98": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 36
          }
        },
        "99": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 36
          }
        },
        "100": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 36
          }
        },
        "101": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 36
          }
        },
        "102": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 36
          }
        },
        "103": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 36
          }
        },
        "104": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 24
          }
        },
        "105": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 227,
            column: 5
          }
        },
        "106": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 228,
            column: 51
          }
        },
        "107": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 17
          }
        },
        "108": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "109": {
          start: {
            line: 234,
            column: 33
          },
          end: {
            line: 234,
            column: 62
          }
        },
        "110": {
          start: {
            line: 236,
            column: 6
          },
          end: {
            line: 236,
            column: 50
          }
        },
        "111": {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 239,
            column: 7
          }
        },
        "112": {
          start: {
            line: 238,
            column: 8
          },
          end: {
            line: 238,
            column: 14
          }
        },
        "113": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 241,
            column: 52
          }
        },
        "114": {
          start: {
            line: 243,
            column: 38
          },
          end: {
            line: 243,
            column: 90
          }
        },
        "115": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 248,
            column: 54
          }
        },
        "116": {
          start: {
            line: 246,
            column: 8
          },
          end: {
            line: 246,
            column: 57
          }
        },
        "117": {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 249,
            column: 27
          }
        },
        "118": {
          start: {
            line: 251,
            column: 6
          },
          end: {
            line: 251,
            column: 17
          }
        },
        "119": {
          start: {
            line: 256,
            column: 23
          },
          end: {
            line: 256,
            column: 65
          }
        },
        "120": {
          start: {
            line: 257,
            column: 22
          },
          end: {
            line: 257,
            column: 91
          }
        },
        "121": {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        "122": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 46
          }
        },
        "123": {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 265,
            column: 41
          }
        },
        "124": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 266,
            column: 48
          }
        },
        "125": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 50
          }
        },
        "126": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 273,
            column: 5
          }
        },
        "127": {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 270,
            column: 29
          }
        },
        "128": {
          start: {
            line: 272,
            column: 6
          },
          end: {
            line: 272,
            column: 33
          }
        },
        "129": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 277,
            column: 5
          }
        },
        "130": {
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 276,
            column: 32
          }
        },
        "131": {
          start: {
            line: 279,
            column: 4
          },
          end: {
            line: 279,
            column: 46
          }
        },
        "132": {
          start: {
            line: 281,
            column: 4
          },
          end: {
            line: 283,
            column: 5
          }
        },
        "133": {
          start: {
            line: 282,
            column: 6
          },
          end: {
            line: 282,
            column: 26
          }
        },
        "134": {
          start: {
            line: 285,
            column: 23
          },
          end: {
            line: 287,
            column: 6
          }
        },
        "135": {
          start: {
            line: 289,
            column: 31
          },
          end: {
            line: 295,
            column: 5
          }
        },
        "136": {
          start: {
            line: 290,
            column: 6
          },
          end: {
            line: 292,
            column: 7
          }
        },
        "137": {
          start: {
            line: 291,
            column: 8
          },
          end: {
            line: 291,
            column: 29
          }
        },
        "138": {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 293,
            column: 35
          }
        },
        "139": {
          start: {
            line: 294,
            column: 6
          },
          end: {
            line: 294,
            column: 42
          }
        },
        "140": {
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "141": {
          start: {
            line: 298,
            column: 34
          },
          end: {
            line: 298,
            column: 85
          }
        },
        "142": {
          start: {
            line: 300,
            column: 6
          },
          end: {
            line: 302,
            column: 49
          }
        },
        "143": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 304,
            column: 26
          }
        },
        "144": {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 317,
            column: 8
          }
        },
        "145": {
          start: {
            line: 312,
            column: 8
          },
          end: {
            line: 316,
            column: 9
          }
        },
        "146": {
          start: {
            line: 315,
            column: 10
          },
          end: {
            line: 315,
            column: 31
          }
        },
        "147": {
          start: {
            line: 321,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        },
        "148": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 329,
            column: 8
          }
        },
        "149": {
          start: {
            line: 323,
            column: 8
          },
          end: {
            line: 328,
            column: 9
          }
        },
        "150": {
          start: {
            line: 324,
            column: 10
          },
          end: {
            line: 324,
            column: 32
          }
        },
        "151": {
          start: {
            line: 325,
            column: 10
          },
          end: {
            line: 325,
            column: 21
          }
        },
        "152": {
          start: {
            line: 326,
            column: 15
          },
          end: {
            line: 328,
            column: 9
          }
        },
        "153": {
          start: {
            line: 327,
            column: 10
          },
          end: {
            line: 327,
            column: 43
          }
        },
        "154": {
          start: {
            line: 330,
            column: 11
          },
          end: {
            line: 332,
            column: 5
          }
        },
        "155": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 331,
            column: 49
          }
        },
        "156": {
          start: {
            line: 336,
            column: 4
          },
          end: {
            line: 340,
            column: 5
          }
        },
        "157": {
          start: {
            line: 337,
            column: 6
          },
          end: {
            line: 337,
            column: 69
          }
        },
        "158": {
          start: {
            line: 337,
            column: 44
          },
          end: {
            line: 337,
            column: 68
          }
        },
        "159": {
          start: {
            line: 339,
            column: 6
          },
          end: {
            line: 339,
            column: 33
          }
        },
        "160": {
          start: {
            line: 344,
            column: 4
          },
          end: {
            line: 344,
            column: 40
          }
        },
        "161": {
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 345,
            column: 51
          }
        },
        "162": {
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 346,
            column: 47
          }
        },
        "163": {
          start: {
            line: 347,
            column: 4
          },
          end: {
            line: 347,
            column: 33
          }
        },
        "164": {
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 353,
            column: 6
          }
        },
        "165": {
          start: {
            line: 349,
            column: 6
          },
          end: {
            line: 349,
            column: 51
          }
        },
        "166": {
          start: {
            line: 350,
            column: 6
          },
          end: {
            line: 350,
            column: 30
          }
        },
        "167": {
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 351,
            column: 28
          }
        },
        "168": {
          start: {
            line: 352,
            column: 6
          },
          end: {
            line: 352,
            column: 44
          }
        },
        "169": {
          start: {
            line: 357,
            column: 4
          },
          end: {
            line: 360,
            column: 5
          }
        },
        "170": {
          start: {
            line: 358,
            column: 6
          },
          end: {
            line: 358,
            column: 32
          }
        },
        "171": {
          start: {
            line: 359,
            column: 6
          },
          end: {
            line: 359,
            column: 27
          }
        },
        "172": {
          start: {
            line: 364,
            column: 20
          },
          end: {
            line: 365,
            column: 28
          }
        },
        "173": {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 430,
            column: 5
          }
        },
        "174": {
          start: {
            line: 368,
            column: 6
          },
          end: {
            line: 368,
            column: 52
          }
        },
        "175": {
          start: {
            line: 369,
            column: 6
          },
          end: {
            line: 369,
            column: 52
          }
        },
        "176": {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 373,
            column: 7
          }
        },
        "177": {
          start: {
            line: 372,
            column: 8
          },
          end: {
            line: 372,
            column: 45
          }
        },
        "178": {
          start: {
            line: 375,
            column: 6
          },
          end: {
            line: 375,
            column: 47
          }
        },
        "179": {
          start: {
            line: 377,
            column: 6
          },
          end: {
            line: 387,
            column: 8
          }
        },
        "180": {
          start: {
            line: 378,
            column: 8
          },
          end: {
            line: 381,
            column: 9
          }
        },
        "181": {
          start: {
            line: 379,
            column: 10
          },
          end: {
            line: 379,
            column: 43
          }
        },
        "182": {
          start: {
            line: 380,
            column: 10
          },
          end: {
            line: 380,
            column: 16
          }
        },
        "183": {
          start: {
            line: 382,
            column: 8
          },
          end: {
            line: 384,
            column: 9
          }
        },
        "184": {
          start: {
            line: 383,
            column: 10
          },
          end: {
            line: 383,
            column: 16
          }
        },
        "185": {
          start: {
            line: 386,
            column: 8
          },
          end: {
            line: 386,
            column: 41
          }
        },
        "186": {
          start: {
            line: 389,
            column: 6
          },
          end: {
            line: 391,
            column: 7
          }
        },
        "187": {
          start: {
            line: 390,
            column: 8
          },
          end: {
            line: 390,
            column: 35
          }
        },
        "188": {
          start: {
            line: 393,
            column: 6
          },
          end: {
            line: 393,
            column: 49
          }
        },
        "189": {
          start: {
            line: 395,
            column: 6
          },
          end: {
            line: 397,
            column: 7
          }
        },
        "190": {
          start: {
            line: 396,
            column: 8
          },
          end: {
            line: 396,
            column: 14
          }
        },
        "191": {
          start: {
            line: 399,
            column: 6
          },
          end: {
            line: 402,
            column: 7
          }
        },
        "192": {
          start: {
            line: 400,
            column: 8
          },
          end: {
            line: 400,
            column: 18
          }
        },
        "193": {
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 401,
            column: 14
          }
        },
        "194": {
          start: {
            line: 404,
            column: 41
          },
          end: {
            line: 404,
            column: 94
          }
        },
        "195": {
          start: {
            line: 406,
            column: 6
          },
          end: {
            line: 408,
            column: 57
          }
        },
        "196": {
          start: {
            line: 409,
            column: 11
          },
          end: {
            line: 430,
            column: 5
          }
        },
        "197": {
          start: {
            line: 410,
            column: 6
          },
          end: {
            line: 410,
            column: 52
          }
        },
        "198": {
          start: {
            line: 412,
            column: 29
          },
          end: {
            line: 417,
            column: 7
          }
        },
        "199": {
          start: {
            line: 413,
            column: 8
          },
          end: {
            line: 413,
            column: 30
          }
        },
        "200": {
          start: {
            line: 414,
            column: 8
          },
          end: {
            line: 416,
            column: 9
          }
        },
        "201": {
          start: {
            line: 415,
            column: 10
          },
          end: {
            line: 415,
            column: 20
          }
        },
        "202": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 427,
            column: 7
          }
        },
        "203": {
          start: {
            line: 420,
            column: 43
          },
          end: {
            line: 420,
            column: 96
          }
        },
        "204": {
          start: {
            line: 422,
            column: 8
          },
          end: {
            line: 424,
            column: 59
          }
        },
        "205": {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 426,
            column: 24
          }
        },
        "206": {
          start: {
            line: 428,
            column: 11
          },
          end: {
            line: 430,
            column: 5
          }
        },
        "207": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 429,
            column: 16
          }
        },
        "208": {
          start: {
            line: 440,
            column: 6
          },
          end: {
            line: 440,
            column: 72
          }
        },
        "209": {
          start: {
            line: 442,
            column: 4
          },
          end: {
            line: 444,
            column: 5
          }
        },
        "210": {
          start: {
            line: 443,
            column: 6
          },
          end: {
            line: 443,
            column: 67
          }
        },
        "211": {
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        "212": {
          start: {
            line: 447,
            column: 6
          },
          end: {
            line: 447,
            column: 68
          }
        },
        "213": {
          start: {
            line: 452,
            column: 4
          },
          end: {
            line: 452,
            column: 40
          }
        },
        "214": {
          start: {
            line: 453,
            column: 4
          },
          end: {
            line: 453,
            column: 41
          }
        },
        "215": {
          start: {
            line: 457,
            column: 17
          },
          end: {
            line: 457,
            column: 54
          }
        },
        "216": {
          start: {
            line: 458,
            column: 4
          },
          end: {
            line: 458,
            column: 84
          }
        },
        "217": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 459,
            column: 52
          }
        },
        "218": {
          start: {
            line: 463,
            column: 4
          },
          end: {
            line: 493,
            column: 5
          }
        },
        "219": {
          start: {
            line: 466,
            column: 27
          },
          end: {
            line: 466,
            column: 91
          }
        },
        "220": {
          start: {
            line: 467,
            column: 28
          },
          end: {
            line: 467,
            column: 93
          }
        },
        "221": {
          start: {
            line: 470,
            column: 6
          },
          end: {
            line: 476,
            column: 8
          }
        },
        "222": {
          start: {
            line: 471,
            column: 30
          },
          end: {
            line: 471,
            column: 56
          }
        },
        "223": {
          start: {
            line: 472,
            column: 34
          },
          end: {
            line: 472,
            column: 65
          }
        },
        "224": {
          start: {
            line: 473,
            column: 8
          },
          end: {
            line: 475,
            column: 92
          }
        },
        "225": {
          start: {
            line: 479,
            column: 6
          },
          end: {
            line: 485,
            column: 8
          }
        },
        "226": {
          start: {
            line: 480,
            column: 29
          },
          end: {
            line: 480,
            column: 54
          }
        },
        "227": {
          start: {
            line: 481,
            column: 33
          },
          end: {
            line: 481,
            column: 63
          }
        },
        "228": {
          start: {
            line: 482,
            column: 8
          },
          end: {
            line: 484,
            column: 90
          }
        },
        "229": {
          start: {
            line: 488,
            column: 28
          },
          end: {
            line: 488,
            column: 60
          }
        },
        "230": {
          start: {
            line: 489,
            column: 32
          },
          end: {
            line: 489,
            column: 69
          }
        },
        "231": {
          start: {
            line: 490,
            column: 6
          },
          end: {
            line: 492,
            column: 90
          }
        },
        "232": {
          start: {
            line: 495,
            column: 4
          },
          end: {
            line: 495,
            column: 46
          }
        },
        "233": {
          start: {
            line: 500,
            column: 25
          },
          end: {
            line: 500,
            column: 89
          }
        },
        "234": {
          start: {
            line: 501,
            column: 4
          },
          end: {
            line: 505,
            column: 6
          }
        },
        "235": {
          start: {
            line: 502,
            column: 22
          },
          end: {
            line: 502,
            column: 54
          }
        },
        "236": {
          start: {
            line: 503,
            column: 6
          },
          end: {
            line: 503,
            column: 44
          }
        },
        "237": {
          start: {
            line: 504,
            column: 6
          },
          end: {
            line: 504,
            column: 57
          }
        },
        "238": {
          start: {
            line: 508,
            column: 21
          },
          end: {
            line: 508,
            column: 91
          }
        },
        "239": {
          start: {
            line: 509,
            column: 4
          },
          end: {
            line: 514,
            column: 6
          }
        },
        "240": {
          start: {
            line: 510,
            column: 21
          },
          end: {
            line: 510,
            column: 52
          }
        },
        "241": {
          start: {
            line: 511,
            column: 6
          },
          end: {
            line: 513,
            column: 7
          }
        },
        "242": {
          start: {
            line: 512,
            column: 8
          },
          end: {
            line: 512,
            column: 73
          }
        },
        "243": {
          start: {
            line: 517,
            column: 20
          },
          end: {
            line: 517,
            column: 58
          }
        },
        "244": {
          start: {
            line: 518,
            column: 4
          },
          end: {
            line: 518,
            column: 48
          }
        },
        "245": {
          start: {
            line: 519,
            column: 4
          },
          end: {
            line: 519,
            column: 61
          }
        },
        "246": {
          start: {
            line: 523,
            column: 22
          },
          end: {
            line: 523,
            column: 51
          }
        },
        "247": {
          start: {
            line: 524,
            column: 4
          },
          end: {
            line: 524,
            column: 55
          }
        },
        "248": {
          start: {
            line: 525,
            column: 4
          },
          end: {
            line: 525,
            column: 40
          }
        },
        "249": {
          start: {
            line: 526,
            column: 27
          },
          end: {
            line: 526,
            column: 90
          }
        },
        "250": {
          start: {
            line: 527,
            column: 4
          },
          end: {
            line: 527,
            column: 40
          }
        },
        "251": {
          start: {
            line: 528,
            column: 4
          },
          end: {
            line: 528,
            column: 25
          }
        },
        "252": {
          start: {
            line: 534,
            column: 4
          },
          end: {
            line: 555,
            column: 6
          }
        },
        "253": {
          start: {
            line: 535,
            column: 17
          },
          end: {
            line: 535,
            column: 39
          }
        },
        "254": {
          start: {
            line: 536,
            column: 22
          },
          end: {
            line: 540,
            column: 7
          }
        },
        "255": {
          start: {
            line: 542,
            column: 6
          },
          end: {
            line: 545,
            column: 7
          }
        },
        "256": {
          start: {
            line: 543,
            column: 8
          },
          end: {
            line: 543,
            column: 39
          }
        },
        "257": {
          start: {
            line: 544,
            column: 8
          },
          end: {
            line: 544,
            column: 36
          }
        },
        "258": {
          start: {
            line: 547,
            column: 6
          },
          end: {
            line: 554,
            column: 7
          }
        },
        "259": {
          start: {
            line: 548,
            column: 8
          },
          end: {
            line: 550,
            column: 9
          }
        },
        "260": {
          start: {
            line: 549,
            column: 10
          },
          end: {
            line: 549,
            column: 60
          }
        },
        "261": {
          start: {
            line: 551,
            column: 8
          },
          end: {
            line: 551,
            column: 35
          }
        },
        "262": {
          start: {
            line: 552,
            column: 13
          },
          end: {
            line: 554,
            column: 7
          }
        },
        "263": {
          start: {
            line: 553,
            column: 8
          },
          end: {
            line: 553,
            column: 32
          }
        },
        "264": {
          start: {
            line: 565,
            column: 0
          },
          end: {
            line: 597,
            column: 2
          }
        },
        "265": {
          start: {
            line: 567,
            column: 19
          },
          end: {
            line: 567,
            column: 52
          }
        },
        "266": {
          start: {
            line: 569,
            column: 2
          },
          end: {
            line: 571,
            column: 3
          }
        },
        "267": {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 570,
            column: 45
          }
        },
        "268": {
          start: {
            line: 573,
            column: 17
          },
          end: {
            line: 577,
            column: 5
          }
        },
        "269": {
          start: {
            line: 579,
            column: 2
          },
          end: {
            line: 581,
            column: 3
          }
        },
        "270": {
          start: {
            line: 580,
            column: 4
          },
          end: {
            line: 580,
            column: 26
          }
        },
        "271": {
          start: {
            line: 583,
            column: 18
          },
          end: {
            line: 594,
            column: 4
          }
        },
        "272": {
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 587,
            column: 5
          }
        },
        "273": {
          start: {
            line: 586,
            column: 6
          },
          end: {
            line: 586,
            column: 12
          }
        },
        "274": {
          start: {
            line: 589,
            column: 4
          },
          end: {
            line: 593,
            column: 6
          }
        },
        "275": {
          start: {
            line: 590,
            column: 6
          },
          end: {
            line: 592,
            column: 7
          }
        },
        "276": {
          start: {
            line: 591,
            column: 8
          },
          end: {
            line: 591,
            column: 20
          }
        },
        "277": {
          start: {
            line: 596,
            column: 2
          },
          end: {
            line: 596,
            column: 54
          }
        },
        "278": {
          start: {
            line: 605,
            column: 0
          },
          end: {
            line: 605,
            column: 35
          }
        },
        "279": {
          start: {
            line: 606,
            column: 0
          },
          end: {
            line: 606,
            column: 30
          }
        },
        "280": {
          start: {
            line: 607,
            column: 0
          },
          end: {
            line: 610,
            column: 1
          }
        },
        "281": {
          start: {
            line: 608,
            column: 2
          },
          end: {
            line: 608,
            column: 33
          }
        },
        "282": {
          start: {
            line: 609,
            column: 2
          },
          end: {
            line: 609,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 74,
              column: 2
            },
            end: {
              line: 74,
              column: 3
            }
          },
          loc: {
            start: {
              line: 74,
              column: 31
            },
            end: {
              line: 84,
              column: 3
            }
          },
          line: 74
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 88,
              column: 2
            },
            end: {
              line: 88,
              column: 3
            }
          },
          loc: {
            start: {
              line: 88,
              column: 23
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 88
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 92,
              column: 3
            }
          },
          loc: {
            start: {
              line: 92,
              column: 23
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 92
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 98,
              column: 2
            },
            end: {
              line: 98,
              column: 3
            }
          },
          loc: {
            start: {
              line: 98,
              column: 24
            },
            end: {
              line: 100,
              column: 3
            }
          },
          line: 98
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 102,
              column: 2
            },
            end: {
              line: 102,
              column: 3
            }
          },
          loc: {
            start: {
              line: 102,
              column: 22
            },
            end: {
              line: 146,
              column: 3
            }
          },
          line: 102
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          },
          loc: {
            start: {
              line: 134,
              column: 17
            },
            end: {
              line: 134,
              column: 33
            }
          },
          line: 134
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 137,
              column: 48
            },
            end: {
              line: 137,
              column: 49
            }
          },
          loc: {
            start: {
              line: 137,
              column: 54
            },
            end: {
              line: 143,
              column: 5
            }
          },
          line: 137
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 138,
              column: 50
            },
            end: {
              line: 138,
              column: 51
            }
          },
          loc: {
            start: {
              line: 138,
              column: 61
            },
            end: {
              line: 142,
              column: 7
            }
          },
          line: 138
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 145,
              column: 23
            },
            end: {
              line: 145,
              column: 24
            }
          },
          loc: {
            start: {
              line: 145,
              column: 29
            },
            end: {
              line: 145,
              column: 61
            }
          },
          line: 145
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 148,
              column: 2
            },
            end: {
              line: 148,
              column: 3
            }
          },
          loc: {
            start: {
              line: 148,
              column: 14
            },
            end: {
              line: 191,
              column: 3
            }
          },
          line: 148
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 186,
              column: 34
            },
            end: {
              line: 186,
              column: 35
            }
          },
          loc: {
            start: {
              line: 186,
              column: 45
            },
            end: {
              line: 186,
              column: 67
            }
          },
          line: 186
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 193,
              column: 2
            },
            end: {
              line: 193,
              column: 3
            }
          },
          loc: {
            start: {
              line: 193,
              column: 12
            },
            end: {
              line: 215,
              column: 3
            }
          },
          line: 193
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 195,
              column: 15
            },
            end: {
              line: 195,
              column: 16
            }
          },
          loc: {
            start: {
              line: 195,
              column: 32
            },
            end: {
              line: 195,
              column: 61
            }
          },
          line: 195
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 217,
              column: 2
            },
            end: {
              line: 217,
              column: 3
            }
          },
          loc: {
            start: {
              line: 217,
              column: 17
            },
            end: {
              line: 219,
              column: 3
            }
          },
          line: 217
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 223,
              column: 2
            },
            end: {
              line: 223,
              column: 3
            }
          },
          loc: {
            start: {
              line: 223,
              column: 21
            },
            end: {
              line: 230,
              column: 3
            }
          },
          line: 223
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 232,
              column: 2
            },
            end: {
              line: 232,
              column: 3
            }
          },
          loc: {
            start: {
              line: 232,
              column: 31
            },
            end: {
              line: 253,
              column: 3
            }
          },
          line: 232
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 245,
              column: 48
            },
            end: {
              line: 245,
              column: 49
            }
          },
          loc: {
            start: {
              line: 245,
              column: 54
            },
            end: {
              line: 247,
              column: 7
            }
          },
          line: 245
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 255,
              column: 2
            },
            end: {
              line: 255,
              column: 3
            }
          },
          loc: {
            start: {
              line: 255,
              column: 30
            },
            end: {
              line: 306,
              column: 3
            }
          },
          line: 255
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 289,
              column: 31
            },
            end: {
              line: 289,
              column: 32
            }
          },
          loc: {
            start: {
              line: 289,
              column: 37
            },
            end: {
              line: 295,
              column: 5
            }
          },
          line: 289
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 308,
              column: 2
            },
            end: {
              line: 308,
              column: 3
            }
          },
          loc: {
            start: {
              line: 308,
              column: 18
            },
            end: {
              line: 318,
              column: 3
            }
          },
          line: 308
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 311,
              column: 25
            },
            end: {
              line: 311,
              column: 26
            }
          },
          loc: {
            start: {
              line: 311,
              column: 36
            },
            end: {
              line: 317,
              column: 7
            }
          },
          line: 311
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 320,
              column: 2
            },
            end: {
              line: 320,
              column: 3
            }
          },
          loc: {
            start: {
              line: 320,
              column: 20
            },
            end: {
              line: 333,
              column: 3
            }
          },
          line: 320
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 322,
              column: 49
            },
            end: {
              line: 322,
              column: 50
            }
          },
          loc: {
            start: {
              line: 322,
              column: 60
            },
            end: {
              line: 329,
              column: 7
            }
          },
          line: 322
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 335,
              column: 2
            },
            end: {
              line: 335,
              column: 3
            }
          },
          loc: {
            start: {
              line: 335,
              column: 20
            },
            end: {
              line: 341,
              column: 3
            }
          },
          line: 335
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 337,
              column: 33
            },
            end: {
              line: 337,
              column: 34
            }
          },
          loc: {
            start: {
              line: 337,
              column: 44
            },
            end: {
              line: 337,
              column: 68
            }
          },
          line: 337
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 343,
              column: 2
            },
            end: {
              line: 343,
              column: 3
            }
          },
          loc: {
            start: {
              line: 343,
              column: 15
            },
            end: {
              line: 354,
              column: 3
            }
          },
          line: 343
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 348,
              column: 23
            },
            end: {
              line: 348,
              column: 24
            }
          },
          loc: {
            start: {
              line: 348,
              column: 29
            },
            end: {
              line: 353,
              column: 5
            }
          },
          line: 348
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 356,
              column: 2
            },
            end: {
              line: 356,
              column: 3
            }
          },
          loc: {
            start: {
              line: 356,
              column: 20
            },
            end: {
              line: 361,
              column: 3
            }
          },
          line: 356
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 363,
              column: 2
            },
            end: {
              line: 363,
              column: 3
            }
          },
          loc: {
            start: {
              line: 363,
              column: 26
            },
            end: {
              line: 431,
              column: 3
            }
          },
          line: 363
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 377,
              column: 47
            },
            end: {
              line: 377,
              column: 48
            }
          },
          loc: {
            start: {
              line: 377,
              column: 58
            },
            end: {
              line: 387,
              column: 7
            }
          },
          line: 377
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 412,
              column: 29
            },
            end: {
              line: 412,
              column: 30
            }
          },
          loc: {
            start: {
              line: 412,
              column: 35
            },
            end: {
              line: 417,
              column: 7
            }
          },
          line: 412
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 438,
              column: 2
            },
            end: {
              line: 438,
              column: 3
            }
          },
          loc: {
            start: {
              line: 438,
              column: 18
            },
            end: {
              line: 449,
              column: 3
            }
          },
          line: 438
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 451,
              column: 2
            },
            end: {
              line: 451,
              column: 3
            }
          },
          loc: {
            start: {
              line: 451,
              column: 22
            },
            end: {
              line: 454,
              column: 3
            }
          },
          line: 451
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 456,
              column: 2
            },
            end: {
              line: 456,
              column: 3
            }
          },
          loc: {
            start: {
              line: 456,
              column: 20
            },
            end: {
              line: 460,
              column: 3
            }
          },
          line: 456
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 462,
              column: 2
            },
            end: {
              line: 462,
              column: 3
            }
          },
          loc: {
            start: {
              line: 462,
              column: 18
            },
            end: {
              line: 496,
              column: 3
            }
          },
          line: 462
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 470,
              column: 27
            },
            end: {
              line: 470,
              column: 28
            }
          },
          loc: {
            start: {
              line: 470,
              column: 47
            },
            end: {
              line: 476,
              column: 7
            }
          },
          line: 470
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 479,
              column: 28
            },
            end: {
              line: 479,
              column: 29
            }
          },
          loc: {
            start: {
              line: 479,
              column: 48
            },
            end: {
              line: 485,
              column: 7
            }
          },
          line: 479
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 498,
              column: 2
            },
            end: {
              line: 498,
              column: 3
            }
          },
          loc: {
            start: {
              line: 498,
              column: 20
            },
            end: {
              line: 520,
              column: 3
            }
          },
          line: 498
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 501,
              column: 25
            },
            end: {
              line: 501,
              column: 26
            }
          },
          loc: {
            start: {
              line: 501,
              column: 45
            },
            end: {
              line: 505,
              column: 5
            }
          },
          line: 501
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 509,
              column: 21
            },
            end: {
              line: 509,
              column: 22
            }
          },
          loc: {
            start: {
              line: 509,
              column: 41
            },
            end: {
              line: 514,
              column: 5
            }
          },
          line: 509
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 522,
              column: 2
            },
            end: {
              line: 522,
              column: 3
            }
          },
          loc: {
            start: {
              line: 522,
              column: 23
            },
            end: {
              line: 529,
              column: 3
            }
          },
          line: 522
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 533,
              column: 2
            },
            end: {
              line: 533,
              column: 3
            }
          },
          loc: {
            start: {
              line: 533,
              column: 49
            },
            end: {
              line: 556,
              column: 3
            }
          },
          line: 533
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 534,
              column: 21
            },
            end: {
              line: 534,
              column: 22
            }
          },
          loc: {
            start: {
              line: 534,
              column: 33
            },
            end: {
              line: 555,
              column: 5
            }
          },
          line: 534
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 565,
              column: 59
            },
            end: {
              line: 565,
              column: 60
            }
          },
          loc: {
            start: {
              line: 565,
              column: 76
            },
            end: {
              line: 597,
              column: 1
            }
          },
          line: 565
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 583,
              column: 44
            },
            end: {
              line: 583,
              column: 45
            }
          },
          loc: {
            start: {
              line: 583,
              column: 59
            },
            end: {
              line: 594,
              column: 3
            }
          },
          line: 583
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 589,
              column: 30
            },
            end: {
              line: 589,
              column: 31
            }
          },
          loc: {
            start: {
              line: 589,
              column: 36
            },
            end: {
              line: 593,
              column: 5
            }
          },
          line: 589
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 607,
              column: 24
            },
            end: {
              line: 607,
              column: 25
            }
          },
          loc: {
            start: {
              line: 607,
              column: 30
            },
            end: {
              line: 610,
              column: 1
            }
          },
          line: 607
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 99,
              column: 11
            },
            end: {
              line: 99,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 99,
              column: 27
            },
            end: {
              line: 99,
              column: 38
            }
          }, {
            start: {
              line: 99,
              column: 41
            },
            end: {
              line: 99,
              column: 65
            }
          }],
          line: 99
        },
        "1": {
          loc: {
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }, {
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }],
          line: 103
        },
        "2": {
          loc: {
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 103,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 103,
              column: 21
            }
          }, {
            start: {
              line: 103,
              column: 25
            },
            end: {
              line: 103,
              column: 46
            }
          }],
          line: 103
        },
        "3": {
          loc: {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }, {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }],
          line: 107
        },
        "4": {
          loc: {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          }, {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          }],
          line: 117
        },
        "5": {
          loc: {
            start: {
              line: 117,
              column: 8
            },
            end: {
              line: 117,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 117,
              column: 8
            },
            end: {
              line: 117,
              column: 21
            }
          }, {
            start: {
              line: 117,
              column: 25
            },
            end: {
              line: 117,
              column: 55
            }
          }],
          line: 117
        },
        "6": {
          loc: {
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          }, {
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          }],
          line: 139
        },
        "7": {
          loc: {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 151,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 151,
              column: 5
            }
          }, {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 151,
              column: 5
            }
          }],
          line: 149
        },
        "8": {
          loc: {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 153
        },
        "9": {
          loc: {
            start: {
              line: 153,
              column: 8
            },
            end: {
              line: 153,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 153,
              column: 8
            },
            end: {
              line: 153,
              column: 22
            }
          }, {
            start: {
              line: 153,
              column: 26
            },
            end: {
              line: 153,
              column: 47
            }
          }],
          line: 153
        },
        "10": {
          loc: {
            start: {
              line: 161,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 161,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 161,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 161
        },
        "11": {
          loc: {
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 161,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 161,
              column: 22
            }
          }, {
            start: {
              line: 161,
              column: 26
            },
            end: {
              line: 161,
              column: 56
            }
          }],
          line: 161
        },
        "12": {
          loc: {
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 170,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 170,
              column: 5
            }
          }, {
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 170,
              column: 5
            }
          }],
          line: 168
        },
        "13": {
          loc: {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }, {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }],
          line: 182
        },
        "14": {
          loc: {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }, {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }],
          line: 233
        },
        "15": {
          loc: {
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 239,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 239,
              column: 7
            }
          }, {
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 239,
              column: 7
            }
          }],
          line: 237
        },
        "16": {
          loc: {
            start: {
              line: 257,
              column: 22
            },
            end: {
              line: 257,
              column: 91
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 257,
              column: 37
            },
            end: {
              line: 257,
              column: 84
            }
          }, {
            start: {
              line: 257,
              column: 87
            },
            end: {
              line: 257,
              column: 91
            }
          }],
          line: 257
        },
        "17": {
          loc: {
            start: {
              line: 259,
              column: 4
            },
            end: {
              line: 263,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 259,
              column: 4
            },
            end: {
              line: 263,
              column: 5
            }
          }, {
            start: {
              line: 259,
              column: 4
            },
            end: {
              line: 263,
              column: 5
            }
          }],
          line: 259
        },
        "18": {
          loc: {
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 260,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 259,
              column: 33
            }
          }, {
            start: {
              line: 260,
              column: 8
            },
            end: {
              line: 260,
              column: 63
            }
          }],
          line: 259
        },
        "19": {
          loc: {
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          }, {
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          }],
          line: 269
        },
        "20": {
          loc: {
            start: {
              line: 269,
              column: 8
            },
            end: {
              line: 269,
              column: 68
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 269,
              column: 8
            },
            end: {
              line: 269,
              column: 55
            }
          }, {
            start: {
              line: 269,
              column: 59
            },
            end: {
              line: 269,
              column: 68
            }
          }],
          line: 269
        },
        "21": {
          loc: {
            start: {
              line: 275,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 275,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          }, {
            start: {
              line: 275,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          }],
          line: 275
        },
        "22": {
          loc: {
            start: {
              line: 281,
              column: 4
            },
            end: {
              line: 283,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 281,
              column: 4
            },
            end: {
              line: 283,
              column: 5
            }
          }, {
            start: {
              line: 281,
              column: 4
            },
            end: {
              line: 283,
              column: 5
            }
          }],
          line: 281
        },
        "23": {
          loc: {
            start: {
              line: 290,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 290,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          }, {
            start: {
              line: 290,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          }],
          line: 290
        },
        "24": {
          loc: {
            start: {
              line: 297,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 297,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 297,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 297
        },
        "25": {
          loc: {
            start: {
              line: 312,
              column: 8
            },
            end: {
              line: 316,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 312,
              column: 8
            },
            end: {
              line: 316,
              column: 9
            }
          }, {
            start: {
              line: 312,
              column: 8
            },
            end: {
              line: 316,
              column: 9
            }
          }],
          line: 312
        },
        "26": {
          loc: {
            start: {
              line: 312,
              column: 12
            },
            end: {
              line: 314,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 312,
              column: 12
            },
            end: {
              line: 312,
              column: 37
            }
          }, {
            start: {
              line: 313,
              column: 12
            },
            end: {
              line: 313,
              column: 42
            }
          }, {
            start: {
              line: 314,
              column: 12
            },
            end: {
              line: 314,
              column: 59
            }
          }],
          line: 312
        },
        "27": {
          loc: {
            start: {
              line: 321,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 321,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          }, {
            start: {
              line: 321,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          }],
          line: 321
        },
        "28": {
          loc: {
            start: {
              line: 323,
              column: 8
            },
            end: {
              line: 328,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 323,
              column: 8
            },
            end: {
              line: 328,
              column: 9
            }
          }, {
            start: {
              line: 323,
              column: 8
            },
            end: {
              line: 328,
              column: 9
            }
          }],
          line: 323
        },
        "29": {
          loc: {
            start: {
              line: 323,
              column: 12
            },
            end: {
              line: 323,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 323,
              column: 12
            },
            end: {
              line: 323,
              column: 33
            }
          }, {
            start: {
              line: 323,
              column: 37
            },
            end: {
              line: 323,
              column: 67
            }
          }],
          line: 323
        },
        "30": {
          loc: {
            start: {
              line: 326,
              column: 15
            },
            end: {
              line: 328,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 326,
              column: 15
            },
            end: {
              line: 328,
              column: 9
            }
          }, {
            start: {
              line: 326,
              column: 15
            },
            end: {
              line: 328,
              column: 9
            }
          }],
          line: 326
        },
        "31": {
          loc: {
            start: {
              line: 326,
              column: 19
            },
            end: {
              line: 326,
              column: 75
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 326,
              column: 19
            },
            end: {
              line: 326,
              column: 41
            }
          }, {
            start: {
              line: 326,
              column: 45
            },
            end: {
              line: 326,
              column: 75
            }
          }],
          line: 326
        },
        "32": {
          loc: {
            start: {
              line: 330,
              column: 11
            },
            end: {
              line: 332,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 330,
              column: 11
            },
            end: {
              line: 332,
              column: 5
            }
          }, {
            start: {
              line: 330,
              column: 11
            },
            end: {
              line: 332,
              column: 5
            }
          }],
          line: 330
        },
        "33": {
          loc: {
            start: {
              line: 336,
              column: 4
            },
            end: {
              line: 340,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 336,
              column: 4
            },
            end: {
              line: 340,
              column: 5
            }
          }, {
            start: {
              line: 336,
              column: 4
            },
            end: {
              line: 340,
              column: 5
            }
          }],
          line: 336
        },
        "34": {
          loc: {
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 360,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 360,
              column: 5
            }
          }, {
            start: {
              line: 357,
              column: 4
            },
            end: {
              line: 360,
              column: 5
            }
          }],
          line: 357
        },
        "35": {
          loc: {
            start: {
              line: 364,
              column: 20
            },
            end: {
              line: 365,
              column: 28
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 365,
              column: 23
            }
          }, {
            start: {
              line: 365,
              column: 26
            },
            end: {
              line: 365,
              column: 28
            }
          }],
          line: 364
        },
        "36": {
          loc: {
            start: {
              line: 367,
              column: 4
            },
            end: {
              line: 430,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 367,
              column: 4
            },
            end: {
              line: 430,
              column: 5
            }
          }, {
            start: {
              line: 367,
              column: 4
            },
            end: {
              line: 430,
              column: 5
            }
          }],
          line: 367
        },
        "37": {
          loc: {
            start: {
              line: 367,
              column: 8
            },
            end: {
              line: 367,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 367,
              column: 8
            },
            end: {
              line: 367,
              column: 21
            }
          }, {
            start: {
              line: 367,
              column: 25
            },
            end: {
              line: 367,
              column: 46
            }
          }],
          line: 367
        },
        "38": {
          loc: {
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 373,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 373,
              column: 7
            }
          }, {
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 373,
              column: 7
            }
          }],
          line: 371
        },
        "39": {
          loc: {
            start: {
              line: 378,
              column: 8
            },
            end: {
              line: 381,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 378,
              column: 8
            },
            end: {
              line: 381,
              column: 9
            }
          }, {
            start: {
              line: 378,
              column: 8
            },
            end: {
              line: 381,
              column: 9
            }
          }],
          line: 378
        },
        "40": {
          loc: {
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 384,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 384,
              column: 9
            }
          }, {
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 384,
              column: 9
            }
          }],
          line: 382
        },
        "41": {
          loc: {
            start: {
              line: 389,
              column: 6
            },
            end: {
              line: 391,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 389,
              column: 6
            },
            end: {
              line: 391,
              column: 7
            }
          }, {
            start: {
              line: 389,
              column: 6
            },
            end: {
              line: 391,
              column: 7
            }
          }],
          line: 389
        },
        "42": {
          loc: {
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 397,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 397,
              column: 7
            }
          }, {
            start: {
              line: 395,
              column: 6
            },
            end: {
              line: 397,
              column: 7
            }
          }],
          line: 395
        },
        "43": {
          loc: {
            start: {
              line: 399,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 399,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          }, {
            start: {
              line: 399,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          }],
          line: 399
        },
        "44": {
          loc: {
            start: {
              line: 409,
              column: 11
            },
            end: {
              line: 430,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 409,
              column: 11
            },
            end: {
              line: 430,
              column: 5
            }
          }, {
            start: {
              line: 409,
              column: 11
            },
            end: {
              line: 430,
              column: 5
            }
          }],
          line: 409
        },
        "45": {
          loc: {
            start: {
              line: 409,
              column: 15
            },
            end: {
              line: 409,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 409,
              column: 15
            },
            end: {
              line: 409,
              column: 29
            }
          }, {
            start: {
              line: 409,
              column: 33
            },
            end: {
              line: 409,
              column: 47
            }
          }],
          line: 409
        },
        "46": {
          loc: {
            start: {
              line: 414,
              column: 8
            },
            end: {
              line: 416,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 414,
              column: 8
            },
            end: {
              line: 416,
              column: 9
            }
          }, {
            start: {
              line: 414,
              column: 8
            },
            end: {
              line: 416,
              column: 9
            }
          }],
          line: 414
        },
        "47": {
          loc: {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 427,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 427,
              column: 7
            }
          }, {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 427,
              column: 7
            }
          }],
          line: 419
        },
        "48": {
          loc: {
            start: {
              line: 428,
              column: 11
            },
            end: {
              line: 430,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 428,
              column: 11
            },
            end: {
              line: 430,
              column: 5
            }
          }, {
            start: {
              line: 428,
              column: 11
            },
            end: {
              line: 430,
              column: 5
            }
          }],
          line: 428
        },
        "49": {
          loc: {
            start: {
              line: 442,
              column: 4
            },
            end: {
              line: 444,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 442,
              column: 4
            },
            end: {
              line: 444,
              column: 5
            }
          }, {
            start: {
              line: 442,
              column: 4
            },
            end: {
              line: 444,
              column: 5
            }
          }],
          line: 442
        },
        "50": {
          loc: {
            start: {
              line: 442,
              column: 8
            },
            end: {
              line: 442,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 442,
              column: 8
            },
            end: {
              line: 442,
              column: 32
            }
          }, {
            start: {
              line: 442,
              column: 36
            },
            end: {
              line: 442,
              column: 54
            }
          }],
          line: 442
        },
        "51": {
          loc: {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }, {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }],
          line: 446
        },
        "52": {
          loc: {
            start: {
              line: 446,
              column: 8
            },
            end: {
              line: 446,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 446,
              column: 8
            },
            end: {
              line: 446,
              column: 31
            }
          }, {
            start: {
              line: 446,
              column: 35
            },
            end: {
              line: 446,
              column: 54
            }
          }],
          line: 446
        },
        "53": {
          loc: {
            start: {
              line: 463,
              column: 4
            },
            end: {
              line: 493,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 463,
              column: 4
            },
            end: {
              line: 493,
              column: 5
            }
          }, {
            start: {
              line: 463,
              column: 4
            },
            end: {
              line: 493,
              column: 5
            }
          }],
          line: 463
        },
        "54": {
          loc: {
            start: {
              line: 504,
              column: 35
            },
            end: {
              line: 504,
              column: 57
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 504,
              column: 45
            },
            end: {
              line: 504,
              column: 52
            }
          }, {
            start: {
              line: 504,
              column: 55
            },
            end: {
              line: 504,
              column: 57
            }
          }],
          line: 504
        },
        "55": {
          loc: {
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 513,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 513,
              column: 7
            }
          }, {
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 513,
              column: 7
            }
          }],
          line: 511
        },
        "56": {
          loc: {
            start: {
              line: 519,
              column: 39
            },
            end: {
              line: 519,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 519,
              column: 49
            },
            end: {
              line: 519,
              column: 56
            }
          }, {
            start: {
              line: 519,
              column: 59
            },
            end: {
              line: 519,
              column: 61
            }
          }],
          line: 519
        },
        "57": {
          loc: {
            start: {
              line: 539,
              column: 11
            },
            end: {
              line: 539,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 539,
              column: 50
            },
            end: {
              line: 539,
              column: 56
            }
          }, {
            start: {
              line: 539,
              column: 59
            },
            end: {
              line: 539,
              column: 61
            }
          }],
          line: 539
        },
        "58": {
          loc: {
            start: {
              line: 539,
              column: 11
            },
            end: {
              line: 539,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 539,
              column: 11
            },
            end: {
              line: 539,
              column: 37
            }
          }, {
            start: {
              line: 539,
              column: 41
            },
            end: {
              line: 539,
              column: 47
            }
          }],
          line: 539
        },
        "59": {
          loc: {
            start: {
              line: 542,
              column: 6
            },
            end: {
              line: 545,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 542,
              column: 6
            },
            end: {
              line: 545,
              column: 7
            }
          }, {
            start: {
              line: 542,
              column: 6
            },
            end: {
              line: 545,
              column: 7
            }
          }],
          line: 542
        },
        "60": {
          loc: {
            start: {
              line: 547,
              column: 6
            },
            end: {
              line: 554,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 547,
              column: 6
            },
            end: {
              line: 554,
              column: 7
            }
          }, {
            start: {
              line: 547,
              column: 6
            },
            end: {
              line: 554,
              column: 7
            }
          }],
          line: 547
        },
        "61": {
          loc: {
            start: {
              line: 548,
              column: 8
            },
            end: {
              line: 550,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 548,
              column: 8
            },
            end: {
              line: 550,
              column: 9
            }
          }, {
            start: {
              line: 548,
              column: 8
            },
            end: {
              line: 550,
              column: 9
            }
          }],
          line: 548
        },
        "62": {
          loc: {
            start: {
              line: 552,
              column: 13
            },
            end: {
              line: 554,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 552,
              column: 13
            },
            end: {
              line: 554,
              column: 7
            }
          }, {
            start: {
              line: 552,
              column: 13
            },
            end: {
              line: 554,
              column: 7
            }
          }],
          line: 552
        },
        "63": {
          loc: {
            start: {
              line: 569,
              column: 2
            },
            end: {
              line: 571,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 569,
              column: 2
            },
            end: {
              line: 571,
              column: 3
            }
          }, {
            start: {
              line: 569,
              column: 2
            },
            end: {
              line: 571,
              column: 3
            }
          }],
          line: 569
        },
        "64": {
          loc: {
            start: {
              line: 573,
              column: 17
            },
            end: {
              line: 577,
              column: 5
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 574,
              column: 6
            },
            end: {
              line: 574,
              column: 14
            }
          }, {
            start: {
              line: 574,
              column: 17
            },
            end: {
              line: 577,
              column: 5
            }
          }],
          line: 573
        },
        "65": {
          loc: {
            start: {
              line: 579,
              column: 2
            },
            end: {
              line: 581,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 579,
              column: 2
            },
            end: {
              line: 581,
              column: 3
            }
          }, {
            start: {
              line: 579,
              column: 2
            },
            end: {
              line: 581,
              column: 3
            }
          }],
          line: 579
        },
        "66": {
          loc: {
            start: {
              line: 579,
              column: 6
            },
            end: {
              line: 579,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 579,
              column: 6
            },
            end: {
              line: 579,
              column: 26
            }
          }, {
            start: {
              line: 579,
              column: 30
            },
            end: {
              line: 579,
              column: 53
            }
          }],
          line: 579
        },
        "67": {
          loc: {
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 587,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 587,
              column: 5
            }
          }, {
            start: {
              line: 584,
              column: 4
            },
            end: {
              line: 587,
              column: 5
            }
          }],
          line: 584
        },
        "68": {
          loc: {
            start: {
              line: 590,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 590,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          }, {
            start: {
              line: 590,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          }],
          line: 590
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0,
        "266": 0,
        "267": 0,
        "268": 0,
        "269": 0,
        "270": 0,
        "271": 0,
        "272": 0,
        "273": 0,
        "274": 0,
        "275": 0,
        "276": 0,
        "277": 0,
        "278": 0,
        "279": 0,
        "280": 0,
        "281": 0,
        "282": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "3d3b9350c370e153169abce07f8575282f8abccb"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1wgcczsu3a = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1wgcczsu3a();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1wgcczsu3a().s[0]++, 'modal');
  var VERSION = (cov_1wgcczsu3a().s[1]++, '4.5.0');
  var DATA_KEY = (cov_1wgcczsu3a().s[2]++, 'bs.modal');
  var EVENT_KEY = (cov_1wgcczsu3a().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1wgcczsu3a().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1wgcczsu3a().s[5]++, $.fn[NAME]);
  var ESCAPE_KEYCODE = (cov_1wgcczsu3a().s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var Default = (cov_1wgcczsu3a().s[7]++, {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
  var DefaultType = (cov_1wgcczsu3a().s[8]++, {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  });
  var EVENT_HIDE = (cov_1wgcczsu3a().s[9]++, "hide" + EVENT_KEY);
  var EVENT_HIDE_PREVENTED = (cov_1wgcczsu3a().s[10]++, "hidePrevented" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_1wgcczsu3a().s[11]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_1wgcczsu3a().s[12]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_1wgcczsu3a().s[13]++, "shown" + EVENT_KEY);
  var EVENT_FOCUSIN = (cov_1wgcczsu3a().s[14]++, "focusin" + EVENT_KEY);
  var EVENT_RESIZE = (cov_1wgcczsu3a().s[15]++, "resize" + EVENT_KEY);
  var EVENT_CLICK_DISMISS = (cov_1wgcczsu3a().s[16]++, "click.dismiss" + EVENT_KEY);
  var EVENT_KEYDOWN_DISMISS = (cov_1wgcczsu3a().s[17]++, "keydown.dismiss" + EVENT_KEY);
  var EVENT_MOUSEUP_DISMISS = (cov_1wgcczsu3a().s[18]++, "mouseup.dismiss" + EVENT_KEY);
  var EVENT_MOUSEDOWN_DISMISS = (cov_1wgcczsu3a().s[19]++, "mousedown.dismiss" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_1wgcczsu3a().s[20]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_SCROLLABLE = (cov_1wgcczsu3a().s[21]++, 'modal-dialog-scrollable');
  var CLASS_NAME_SCROLLBAR_MEASURER = (cov_1wgcczsu3a().s[22]++, 'modal-scrollbar-measure');
  var CLASS_NAME_BACKDROP = (cov_1wgcczsu3a().s[23]++, 'modal-backdrop');
  var CLASS_NAME_OPEN = (cov_1wgcczsu3a().s[24]++, 'modal-open');
  var CLASS_NAME_FADE = (cov_1wgcczsu3a().s[25]++, 'fade');
  var CLASS_NAME_SHOW = (cov_1wgcczsu3a().s[26]++, 'show');
  var CLASS_NAME_STATIC = (cov_1wgcczsu3a().s[27]++, 'modal-static');
  var SELECTOR_DIALOG = (cov_1wgcczsu3a().s[28]++, '.modal-dialog');
  var SELECTOR_MODAL_BODY = (cov_1wgcczsu3a().s[29]++, '.modal-body');
  var SELECTOR_DATA_TOGGLE = (cov_1wgcczsu3a().s[30]++, '[data-toggle="modal"]');
  var SELECTOR_DATA_DISMISS = (cov_1wgcczsu3a().s[31]++, '[data-dismiss="modal"]');
  var SELECTOR_FIXED_CONTENT = (cov_1wgcczsu3a().s[32]++, '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top');
  var SELECTOR_STICKY_CONTENT = (cov_1wgcczsu3a().s[33]++, '.sticky-top');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      cov_1wgcczsu3a().f[0]++;
      cov_1wgcczsu3a().s[34]++;
      this._config = this._getConfig(config);
      cov_1wgcczsu3a().s[35]++;
      this._element = element;
      cov_1wgcczsu3a().s[36]++;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      cov_1wgcczsu3a().s[37]++;
      this._backdrop = null;
      cov_1wgcczsu3a().s[38]++;
      this._isShown = false;
      cov_1wgcczsu3a().s[39]++;
      this._isBodyOverflowing = false;
      cov_1wgcczsu3a().s[40]++;
      this._ignoreBackdropClick = false;
      cov_1wgcczsu3a().s[41]++;
      this._isTransitioning = false;
      cov_1wgcczsu3a().s[42]++;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      cov_1wgcczsu3a().f[3]++;
      cov_1wgcczsu3a().s[45]++;
      return this._isShown ? (cov_1wgcczsu3a().b[0][0]++, this.hide()) : (cov_1wgcczsu3a().b[0][1]++, this.show(relatedTarget));
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      cov_1wgcczsu3a().f[4]++;
      cov_1wgcczsu3a().s[46]++;

      if ((cov_1wgcczsu3a().b[2][0]++, this._isShown) || (cov_1wgcczsu3a().b[2][1]++, this._isTransitioning)) {
        cov_1wgcczsu3a().b[1][0]++;
        cov_1wgcczsu3a().s[47]++;
        return;
      } else {
        cov_1wgcczsu3a().b[1][1]++;
      }

      cov_1wgcczsu3a().s[48]++;

      if ($(this._element).hasClass(CLASS_NAME_FADE)) {
        cov_1wgcczsu3a().b[3][0]++;
        cov_1wgcczsu3a().s[49]++;
        this._isTransitioning = true;
      } else {
        cov_1wgcczsu3a().b[3][1]++;
      }

      var showEvent = (cov_1wgcczsu3a().s[50]++, $.Event(EVENT_SHOW, {
        relatedTarget: relatedTarget
      }));
      cov_1wgcczsu3a().s[51]++;
      $(this._element).trigger(showEvent);
      cov_1wgcczsu3a().s[52]++;

      if ((cov_1wgcczsu3a().b[5][0]++, this._isShown) || (cov_1wgcczsu3a().b[5][1]++, showEvent.isDefaultPrevented())) {
        cov_1wgcczsu3a().b[4][0]++;
        cov_1wgcczsu3a().s[53]++;
        return;
      } else {
        cov_1wgcczsu3a().b[4][1]++;
      }

      cov_1wgcczsu3a().s[54]++;
      this._isShown = true;
      cov_1wgcczsu3a().s[55]++;

      this._checkScrollbar();

      cov_1wgcczsu3a().s[56]++;

      this._setScrollbar();

      cov_1wgcczsu3a().s[57]++;

      this._adjustDialog();

      cov_1wgcczsu3a().s[58]++;

      this._setEscapeEvent();

      cov_1wgcczsu3a().s[59]++;

      this._setResizeEvent();

      cov_1wgcczsu3a().s[60]++;
      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        cov_1wgcczsu3a().f[5]++;
        cov_1wgcczsu3a().s[61]++;
        return _this.hide(event);
      });
      cov_1wgcczsu3a().s[62]++;
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        cov_1wgcczsu3a().f[6]++;
        cov_1wgcczsu3a().s[63]++;
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          cov_1wgcczsu3a().f[7]++;
          cov_1wgcczsu3a().s[64]++;

          if ($(event.target).is(_this._element)) {
            cov_1wgcczsu3a().b[6][0]++;
            cov_1wgcczsu3a().s[65]++;
            _this._ignoreBackdropClick = true;
          } else {
            cov_1wgcczsu3a().b[6][1]++;
          }
        });
      });
      cov_1wgcczsu3a().s[66]++;

      this._showBackdrop(function () {
        cov_1wgcczsu3a().f[8]++;
        cov_1wgcczsu3a().s[67]++;
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      cov_1wgcczsu3a().f[9]++;
      cov_1wgcczsu3a().s[68]++;

      if (event) {
        cov_1wgcczsu3a().b[7][0]++;
        cov_1wgcczsu3a().s[69]++;
        event.preventDefault();
      } else {
        cov_1wgcczsu3a().b[7][1]++;
      }

      cov_1wgcczsu3a().s[70]++;

      if ((cov_1wgcczsu3a().b[9][0]++, !this._isShown) || (cov_1wgcczsu3a().b[9][1]++, this._isTransitioning)) {
        cov_1wgcczsu3a().b[8][0]++;
        cov_1wgcczsu3a().s[71]++;
        return;
      } else {
        cov_1wgcczsu3a().b[8][1]++;
      }

      var hideEvent = (cov_1wgcczsu3a().s[72]++, $.Event(EVENT_HIDE));
      cov_1wgcczsu3a().s[73]++;
      $(this._element).trigger(hideEvent);
      cov_1wgcczsu3a().s[74]++;

      if ((cov_1wgcczsu3a().b[11][0]++, !this._isShown) || (cov_1wgcczsu3a().b[11][1]++, hideEvent.isDefaultPrevented())) {
        cov_1wgcczsu3a().b[10][0]++;
        cov_1wgcczsu3a().s[75]++;
        return;
      } else {
        cov_1wgcczsu3a().b[10][1]++;
      }

      cov_1wgcczsu3a().s[76]++;
      this._isShown = false;
      var transition = (cov_1wgcczsu3a().s[77]++, $(this._element).hasClass(CLASS_NAME_FADE));
      cov_1wgcczsu3a().s[78]++;

      if (transition) {
        cov_1wgcczsu3a().b[12][0]++;
        cov_1wgcczsu3a().s[79]++;
        this._isTransitioning = true;
      } else {
        cov_1wgcczsu3a().b[12][1]++;
      }

      cov_1wgcczsu3a().s[80]++;

      this._setEscapeEvent();

      cov_1wgcczsu3a().s[81]++;

      this._setResizeEvent();

      cov_1wgcczsu3a().s[82]++;
      $(document).off(EVENT_FOCUSIN);
      cov_1wgcczsu3a().s[83]++;
      $(this._element).removeClass(CLASS_NAME_SHOW);
      cov_1wgcczsu3a().s[84]++;
      $(this._element).off(EVENT_CLICK_DISMISS);
      cov_1wgcczsu3a().s[85]++;
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);
      cov_1wgcczsu3a().s[86]++;

      if (transition) {
        cov_1wgcczsu3a().b[13][0]++;
        var transitionDuration = (cov_1wgcczsu3a().s[87]++, Util.getTransitionDurationFromElement(this._element));
        cov_1wgcczsu3a().s[88]++;
        $(this._element).one(Util.TRANSITION_END, function (event) {
          cov_1wgcczsu3a().f[10]++;
          cov_1wgcczsu3a().s[89]++;
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1wgcczsu3a().b[13][1]++;
        cov_1wgcczsu3a().s[90]++;

        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      cov_1wgcczsu3a().f[11]++;
      cov_1wgcczsu3a().s[91]++;
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        cov_1wgcczsu3a().f[12]++;
        cov_1wgcczsu3a().s[92]++;
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      cov_1wgcczsu3a().s[93]++;
      $(document).off(EVENT_FOCUSIN);
      cov_1wgcczsu3a().s[94]++;
      $.removeData(this._element, DATA_KEY);
      cov_1wgcczsu3a().s[95]++;
      this._config = null;
      cov_1wgcczsu3a().s[96]++;
      this._element = null;
      cov_1wgcczsu3a().s[97]++;
      this._dialog = null;
      cov_1wgcczsu3a().s[98]++;
      this._backdrop = null;
      cov_1wgcczsu3a().s[99]++;
      this._isShown = null;
      cov_1wgcczsu3a().s[100]++;
      this._isBodyOverflowing = null;
      cov_1wgcczsu3a().s[101]++;
      this._ignoreBackdropClick = null;
      cov_1wgcczsu3a().s[102]++;
      this._isTransitioning = null;
      cov_1wgcczsu3a().s[103]++;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      cov_1wgcczsu3a().f[13]++;
      cov_1wgcczsu3a().s[104]++;

      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_1wgcczsu3a().f[14]++;
      cov_1wgcczsu3a().s[105]++;
      config = _objectSpread2(_objectSpread2({}, Default), config);
      cov_1wgcczsu3a().s[106]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_1wgcczsu3a().s[107]++;
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      cov_1wgcczsu3a().f[15]++;
      cov_1wgcczsu3a().s[108]++;

      if (this._config.backdrop === 'static') {
        cov_1wgcczsu3a().b[14][0]++;
        var hideEventPrevented = (cov_1wgcczsu3a().s[109]++, $.Event(EVENT_HIDE_PREVENTED));
        cov_1wgcczsu3a().s[110]++;
        $(this._element).trigger(hideEventPrevented);
        cov_1wgcczsu3a().s[111]++;

        if (hideEventPrevented.defaultPrevented) {
          cov_1wgcczsu3a().b[15][0]++;
          cov_1wgcczsu3a().s[112]++;
          return;
        } else {
          cov_1wgcczsu3a().b[15][1]++;
        }

        cov_1wgcczsu3a().s[113]++;

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = (cov_1wgcczsu3a().s[114]++, Util.getTransitionDurationFromElement(this._element));
        cov_1wgcczsu3a().s[115]++;
        $(this._element).one(Util.TRANSITION_END, function () {
          cov_1wgcczsu3a().f[16]++;
          cov_1wgcczsu3a().s[116]++;

          _this3._element.classList.remove(CLASS_NAME_STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);
        cov_1wgcczsu3a().s[117]++;

        this._element.focus();
      } else {
        cov_1wgcczsu3a().b[14][1]++;
        cov_1wgcczsu3a().s[118]++;
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      cov_1wgcczsu3a().f[17]++;
      var transition = (cov_1wgcczsu3a().s[119]++, $(this._element).hasClass(CLASS_NAME_FADE));
      var modalBody = (cov_1wgcczsu3a().s[120]++, this._dialog ? (cov_1wgcczsu3a().b[16][0]++, this._dialog.querySelector(SELECTOR_MODAL_BODY)) : (cov_1wgcczsu3a().b[16][1]++, null));
      cov_1wgcczsu3a().s[121]++;

      if ((cov_1wgcczsu3a().b[18][0]++, !this._element.parentNode) || (cov_1wgcczsu3a().b[18][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        cov_1wgcczsu3a().b[17][0]++;
        cov_1wgcczsu3a().s[122]++;
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      } else {
        cov_1wgcczsu3a().b[17][1]++;
      }

      cov_1wgcczsu3a().s[123]++;
      this._element.style.display = 'block';
      cov_1wgcczsu3a().s[124]++;

      this._element.removeAttribute('aria-hidden');

      cov_1wgcczsu3a().s[125]++;

      this._element.setAttribute('aria-modal', true);

      cov_1wgcczsu3a().s[126]++;

      if ((cov_1wgcczsu3a().b[20][0]++, $(this._dialog).hasClass(CLASS_NAME_SCROLLABLE)) && (cov_1wgcczsu3a().b[20][1]++, modalBody)) {
        cov_1wgcczsu3a().b[19][0]++;
        cov_1wgcczsu3a().s[127]++;
        modalBody.scrollTop = 0;
      } else {
        cov_1wgcczsu3a().b[19][1]++;
        cov_1wgcczsu3a().s[128]++;
        this._element.scrollTop = 0;
      }

      cov_1wgcczsu3a().s[129]++;

      if (transition) {
        cov_1wgcczsu3a().b[21][0]++;
        cov_1wgcczsu3a().s[130]++;
        Util.reflow(this._element);
      } else {
        cov_1wgcczsu3a().b[21][1]++;
      }

      cov_1wgcczsu3a().s[131]++;
      $(this._element).addClass(CLASS_NAME_SHOW);
      cov_1wgcczsu3a().s[132]++;

      if (this._config.focus) {
        cov_1wgcczsu3a().b[22][0]++;
        cov_1wgcczsu3a().s[133]++;

        this._enforceFocus();
      } else {
        cov_1wgcczsu3a().b[22][1]++;
      }

      var shownEvent = (cov_1wgcczsu3a().s[134]++, $.Event(EVENT_SHOWN, {
        relatedTarget: relatedTarget
      }));
      cov_1wgcczsu3a().s[135]++;

      var transitionComplete = function transitionComplete() {
        cov_1wgcczsu3a().f[18]++;
        cov_1wgcczsu3a().s[136]++;

        if (_this4._config.focus) {
          cov_1wgcczsu3a().b[23][0]++;
          cov_1wgcczsu3a().s[137]++;

          _this4._element.focus();
        } else {
          cov_1wgcczsu3a().b[23][1]++;
        }

        cov_1wgcczsu3a().s[138]++;
        _this4._isTransitioning = false;
        cov_1wgcczsu3a().s[139]++;
        $(_this4._element).trigger(shownEvent);
      };

      cov_1wgcczsu3a().s[140]++;

      if (transition) {
        cov_1wgcczsu3a().b[24][0]++;
        var transitionDuration = (cov_1wgcczsu3a().s[141]++, Util.getTransitionDurationFromElement(this._dialog));
        cov_1wgcczsu3a().s[142]++;
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1wgcczsu3a().b[24][1]++;
        cov_1wgcczsu3a().s[143]++;
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      cov_1wgcczsu3a().f[19]++;
      cov_1wgcczsu3a().s[144]++;
      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        cov_1wgcczsu3a().f[20]++;
        cov_1wgcczsu3a().s[145]++;

        if ((cov_1wgcczsu3a().b[26][0]++, document !== event.target) && (cov_1wgcczsu3a().b[26][1]++, _this5._element !== event.target) && (cov_1wgcczsu3a().b[26][2]++, $(_this5._element).has(event.target).length === 0)) {
          cov_1wgcczsu3a().b[25][0]++;
          cov_1wgcczsu3a().s[146]++;

          _this5._element.focus();
        } else {
          cov_1wgcczsu3a().b[25][1]++;
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      cov_1wgcczsu3a().f[21]++;
      cov_1wgcczsu3a().s[147]++;

      if (this._isShown) {
        cov_1wgcczsu3a().b[27][0]++;
        cov_1wgcczsu3a().s[148]++;
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          cov_1wgcczsu3a().f[22]++;
          cov_1wgcczsu3a().s[149]++;

          if ((cov_1wgcczsu3a().b[29][0]++, _this6._config.keyboard) && (cov_1wgcczsu3a().b[29][1]++, event.which === ESCAPE_KEYCODE)) {
            cov_1wgcczsu3a().b[28][0]++;
            cov_1wgcczsu3a().s[150]++;
            event.preventDefault();
            cov_1wgcczsu3a().s[151]++;

            _this6.hide();
          } else {
            cov_1wgcczsu3a().b[28][1]++;
            cov_1wgcczsu3a().s[152]++;

            if ((cov_1wgcczsu3a().b[31][0]++, !_this6._config.keyboard) && (cov_1wgcczsu3a().b[31][1]++, event.which === ESCAPE_KEYCODE)) {
              cov_1wgcczsu3a().b[30][0]++;
              cov_1wgcczsu3a().s[153]++;

              _this6._triggerBackdropTransition();
            } else {
              cov_1wgcczsu3a().b[30][1]++;
            }
          }
        });
      } else {
        cov_1wgcczsu3a().b[27][1]++;
        cov_1wgcczsu3a().s[154]++;

        if (!this._isShown) {
          cov_1wgcczsu3a().b[32][0]++;
          cov_1wgcczsu3a().s[155]++;
          $(this._element).off(EVENT_KEYDOWN_DISMISS);
        } else {
          cov_1wgcczsu3a().b[32][1]++;
        }
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      cov_1wgcczsu3a().f[23]++;
      cov_1wgcczsu3a().s[156]++;

      if (this._isShown) {
        cov_1wgcczsu3a().b[33][0]++;
        cov_1wgcczsu3a().s[157]++;
        $(window).on(EVENT_RESIZE, function (event) {
          cov_1wgcczsu3a().f[24]++;
          cov_1wgcczsu3a().s[158]++;
          return _this7.handleUpdate(event);
        });
      } else {
        cov_1wgcczsu3a().b[33][1]++;
        cov_1wgcczsu3a().s[159]++;
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      cov_1wgcczsu3a().f[25]++;
      cov_1wgcczsu3a().s[160]++;
      this._element.style.display = 'none';
      cov_1wgcczsu3a().s[161]++;

      this._element.setAttribute('aria-hidden', true);

      cov_1wgcczsu3a().s[162]++;

      this._element.removeAttribute('aria-modal');

      cov_1wgcczsu3a().s[163]++;
      this._isTransitioning = false;
      cov_1wgcczsu3a().s[164]++;

      this._showBackdrop(function () {
        cov_1wgcczsu3a().f[26]++;
        cov_1wgcczsu3a().s[165]++;
        $(document.body).removeClass(CLASS_NAME_OPEN);
        cov_1wgcczsu3a().s[166]++;

        _this8._resetAdjustments();

        cov_1wgcczsu3a().s[167]++;

        _this8._resetScrollbar();

        cov_1wgcczsu3a().s[168]++;
        $(_this8._element).trigger(EVENT_HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      cov_1wgcczsu3a().f[27]++;
      cov_1wgcczsu3a().s[169]++;

      if (this._backdrop) {
        cov_1wgcczsu3a().b[34][0]++;
        cov_1wgcczsu3a().s[170]++;
        $(this._backdrop).remove();
        cov_1wgcczsu3a().s[171]++;
        this._backdrop = null;
      } else {
        cov_1wgcczsu3a().b[34][1]++;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      cov_1wgcczsu3a().f[28]++;
      var animate = (cov_1wgcczsu3a().s[172]++, $(this._element).hasClass(CLASS_NAME_FADE) ? (cov_1wgcczsu3a().b[35][0]++, CLASS_NAME_FADE) : (cov_1wgcczsu3a().b[35][1]++, ''));
      cov_1wgcczsu3a().s[173]++;

      if ((cov_1wgcczsu3a().b[37][0]++, this._isShown) && (cov_1wgcczsu3a().b[37][1]++, this._config.backdrop)) {
        cov_1wgcczsu3a().b[36][0]++;
        cov_1wgcczsu3a().s[174]++;
        this._backdrop = document.createElement('div');
        cov_1wgcczsu3a().s[175]++;
        this._backdrop.className = CLASS_NAME_BACKDROP;
        cov_1wgcczsu3a().s[176]++;

        if (animate) {
          cov_1wgcczsu3a().b[38][0]++;
          cov_1wgcczsu3a().s[177]++;

          this._backdrop.classList.add(animate);
        } else {
          cov_1wgcczsu3a().b[38][1]++;
        }

        cov_1wgcczsu3a().s[178]++;
        $(this._backdrop).appendTo(document.body);
        cov_1wgcczsu3a().s[179]++;
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          cov_1wgcczsu3a().f[29]++;
          cov_1wgcczsu3a().s[180]++;

          if (_this9._ignoreBackdropClick) {
            cov_1wgcczsu3a().b[39][0]++;
            cov_1wgcczsu3a().s[181]++;
            _this9._ignoreBackdropClick = false;
            cov_1wgcczsu3a().s[182]++;
            return;
          } else {
            cov_1wgcczsu3a().b[39][1]++;
          }

          cov_1wgcczsu3a().s[183]++;

          if (event.target !== event.currentTarget) {
            cov_1wgcczsu3a().b[40][0]++;
            cov_1wgcczsu3a().s[184]++;
            return;
          } else {
            cov_1wgcczsu3a().b[40][1]++;
          }

          cov_1wgcczsu3a().s[185]++;

          _this9._triggerBackdropTransition();
        });
        cov_1wgcczsu3a().s[186]++;

        if (animate) {
          cov_1wgcczsu3a().b[41][0]++;
          cov_1wgcczsu3a().s[187]++;
          Util.reflow(this._backdrop);
        } else {
          cov_1wgcczsu3a().b[41][1]++;
        }

        cov_1wgcczsu3a().s[188]++;
        $(this._backdrop).addClass(CLASS_NAME_SHOW);
        cov_1wgcczsu3a().s[189]++;

        if (!callback) {
          cov_1wgcczsu3a().b[42][0]++;
          cov_1wgcczsu3a().s[190]++;
          return;
        } else {
          cov_1wgcczsu3a().b[42][1]++;
        }

        cov_1wgcczsu3a().s[191]++;

        if (!animate) {
          cov_1wgcczsu3a().b[43][0]++;
          cov_1wgcczsu3a().s[192]++;
          callback();
          cov_1wgcczsu3a().s[193]++;
          return;
        } else {
          cov_1wgcczsu3a().b[43][1]++;
        }

        var backdropTransitionDuration = (cov_1wgcczsu3a().s[194]++, Util.getTransitionDurationFromElement(this._backdrop));
        cov_1wgcczsu3a().s[195]++;
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else {
        cov_1wgcczsu3a().b[36][1]++;
        cov_1wgcczsu3a().s[196]++;

        if ((cov_1wgcczsu3a().b[45][0]++, !this._isShown) && (cov_1wgcczsu3a().b[45][1]++, this._backdrop)) {
          cov_1wgcczsu3a().b[44][0]++;
          cov_1wgcczsu3a().s[197]++;
          $(this._backdrop).removeClass(CLASS_NAME_SHOW);
          cov_1wgcczsu3a().s[198]++;

          var callbackRemove = function callbackRemove() {
            cov_1wgcczsu3a().f[30]++;
            cov_1wgcczsu3a().s[199]++;

            _this9._removeBackdrop();

            cov_1wgcczsu3a().s[200]++;

            if (callback) {
              cov_1wgcczsu3a().b[46][0]++;
              cov_1wgcczsu3a().s[201]++;
              callback();
            } else {
              cov_1wgcczsu3a().b[46][1]++;
            }
          };

          cov_1wgcczsu3a().s[202]++;

          if ($(this._element).hasClass(CLASS_NAME_FADE)) {
            cov_1wgcczsu3a().b[47][0]++;

            var _backdropTransitionDuration = (cov_1wgcczsu3a().s[203]++, Util.getTransitionDurationFromElement(this._backdrop));

            cov_1wgcczsu3a().s[204]++;
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            cov_1wgcczsu3a().b[47][1]++;
            cov_1wgcczsu3a().s[205]++;
            callbackRemove();
          }
        } else {
          cov_1wgcczsu3a().b[44][1]++;
          cov_1wgcczsu3a().s[206]++;

          if (callback) {
            cov_1wgcczsu3a().b[48][0]++;
            cov_1wgcczsu3a().s[207]++;
            callback();
          } else {
            cov_1wgcczsu3a().b[48][1]++;
          }
        }
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      cov_1wgcczsu3a().f[31]++;
      var isModalOverflowing = (cov_1wgcczsu3a().s[208]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_1wgcczsu3a().s[209]++;

      if ((cov_1wgcczsu3a().b[50][0]++, !this._isBodyOverflowing) && (cov_1wgcczsu3a().b[50][1]++, isModalOverflowing)) {
        cov_1wgcczsu3a().b[49][0]++;
        cov_1wgcczsu3a().s[210]++;
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      } else {
        cov_1wgcczsu3a().b[49][1]++;
      }

      cov_1wgcczsu3a().s[211]++;

      if ((cov_1wgcczsu3a().b[52][0]++, this._isBodyOverflowing) && (cov_1wgcczsu3a().b[52][1]++, !isModalOverflowing)) {
        cov_1wgcczsu3a().b[51][0]++;
        cov_1wgcczsu3a().s[212]++;
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      } else {
        cov_1wgcczsu3a().b[51][1]++;
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      cov_1wgcczsu3a().f[32]++;
      cov_1wgcczsu3a().s[213]++;
      this._element.style.paddingLeft = '';
      cov_1wgcczsu3a().s[214]++;
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      cov_1wgcczsu3a().f[33]++;
      var rect = (cov_1wgcczsu3a().s[215]++, document.body.getBoundingClientRect());
      cov_1wgcczsu3a().s[216]++;
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      cov_1wgcczsu3a().s[217]++;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      cov_1wgcczsu3a().f[34]++;
      cov_1wgcczsu3a().s[218]++;

      if (this._isBodyOverflowing) {
        cov_1wgcczsu3a().b[53][0]++;
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = (cov_1wgcczsu3a().s[219]++, [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT)));
        var stickyContent = (cov_1wgcczsu3a().s[220]++, [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT))); // Adjust fixed content padding

        cov_1wgcczsu3a().s[221]++;
        $(fixedContent).each(function (index, element) {
          cov_1wgcczsu3a().f[35]++;
          var actualPadding = (cov_1wgcczsu3a().s[222]++, element.style.paddingRight);
          var calculatedPadding = (cov_1wgcczsu3a().s[223]++, $(element).css('padding-right'));
          cov_1wgcczsu3a().s[224]++;
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        cov_1wgcczsu3a().s[225]++;
        $(stickyContent).each(function (index, element) {
          cov_1wgcczsu3a().f[36]++;
          var actualMargin = (cov_1wgcczsu3a().s[226]++, element.style.marginRight);
          var calculatedMargin = (cov_1wgcczsu3a().s[227]++, $(element).css('margin-right'));
          cov_1wgcczsu3a().s[228]++;
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = (cov_1wgcczsu3a().s[229]++, document.body.style.paddingRight);
        var calculatedPadding = (cov_1wgcczsu3a().s[230]++, $(document.body).css('padding-right'));
        cov_1wgcczsu3a().s[231]++;
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      } else {
        cov_1wgcczsu3a().b[53][1]++;
      }

      cov_1wgcczsu3a().s[232]++;
      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      cov_1wgcczsu3a().f[37]++;
      // Restore fixed content padding
      var fixedContent = (cov_1wgcczsu3a().s[233]++, [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT)));
      cov_1wgcczsu3a().s[234]++;
      $(fixedContent).each(function (index, element) {
        cov_1wgcczsu3a().f[38]++;
        var padding = (cov_1wgcczsu3a().s[235]++, $(element).data('padding-right'));
        cov_1wgcczsu3a().s[236]++;
        $(element).removeData('padding-right');
        cov_1wgcczsu3a().s[237]++;
        element.style.paddingRight = padding ? (cov_1wgcczsu3a().b[54][0]++, padding) : (cov_1wgcczsu3a().b[54][1]++, '');
      }); // Restore sticky content

      var elements = (cov_1wgcczsu3a().s[238]++, [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT)));
      cov_1wgcczsu3a().s[239]++;
      $(elements).each(function (index, element) {
        cov_1wgcczsu3a().f[39]++;
        var margin = (cov_1wgcczsu3a().s[240]++, $(element).data('margin-right'));
        cov_1wgcczsu3a().s[241]++;

        if (typeof margin !== 'undefined') {
          cov_1wgcczsu3a().b[55][0]++;
          cov_1wgcczsu3a().s[242]++;
          $(element).css('margin-right', margin).removeData('margin-right');
        } else {
          cov_1wgcczsu3a().b[55][1]++;
        }
      }); // Restore body padding

      var padding = (cov_1wgcczsu3a().s[243]++, $(document.body).data('padding-right'));
      cov_1wgcczsu3a().s[244]++;
      $(document.body).removeData('padding-right');
      cov_1wgcczsu3a().s[245]++;
      document.body.style.paddingRight = padding ? (cov_1wgcczsu3a().b[56][0]++, padding) : (cov_1wgcczsu3a().b[56][1]++, '');
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      cov_1wgcczsu3a().f[40]++;
      // thx d.walsh
      var scrollDiv = (cov_1wgcczsu3a().s[246]++, document.createElement('div'));
      cov_1wgcczsu3a().s[247]++;
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      cov_1wgcczsu3a().s[248]++;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = (cov_1wgcczsu3a().s[249]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
      cov_1wgcczsu3a().s[250]++;
      document.body.removeChild(scrollDiv);
      cov_1wgcczsu3a().s[251]++;
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      cov_1wgcczsu3a().f[41]++;
      cov_1wgcczsu3a().s[252]++;
      return this.each(function () {
        cov_1wgcczsu3a().f[42]++;
        var data = (cov_1wgcczsu3a().s[253]++, $(this).data(DATA_KEY));

        var _config = (cov_1wgcczsu3a().s[254]++, _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $(this).data()), (cov_1wgcczsu3a().b[58][0]++, typeof config === 'object') && (cov_1wgcczsu3a().b[58][1]++, config) ? (cov_1wgcczsu3a().b[57][0]++, config) : (cov_1wgcczsu3a().b[57][1]++, {})));

        cov_1wgcczsu3a().s[255]++;

        if (!data) {
          cov_1wgcczsu3a().b[59][0]++;
          cov_1wgcczsu3a().s[256]++;
          data = new Modal(this, _config);
          cov_1wgcczsu3a().s[257]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_1wgcczsu3a().b[59][1]++;
        }

        cov_1wgcczsu3a().s[258]++;

        if (typeof config === 'string') {
          cov_1wgcczsu3a().b[60][0]++;
          cov_1wgcczsu3a().s[259]++;

          if (typeof data[config] === 'undefined') {
            cov_1wgcczsu3a().b[61][0]++;
            cov_1wgcczsu3a().s[260]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1wgcczsu3a().b[61][1]++;
          }

          cov_1wgcczsu3a().s[261]++;
          data[config](relatedTarget);
        } else {
          cov_1wgcczsu3a().b[60][1]++;
          cov_1wgcczsu3a().s[262]++;

          if (_config.show) {
            cov_1wgcczsu3a().b[62][0]++;
            cov_1wgcczsu3a().s[263]++;
            data.show(relatedTarget);
          } else {
            cov_1wgcczsu3a().b[62][1]++;
          }
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        cov_1wgcczsu3a().f[1]++;
        cov_1wgcczsu3a().s[43]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1wgcczsu3a().f[2]++;
        cov_1wgcczsu3a().s[44]++;
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_1wgcczsu3a().s[264]++;
  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this11 = this;

    cov_1wgcczsu3a().f[43]++;
    var target;
    var selector = (cov_1wgcczsu3a().s[265]++, Util.getSelectorFromElement(this));
    cov_1wgcczsu3a().s[266]++;

    if (selector) {
      cov_1wgcczsu3a().b[63][0]++;
      cov_1wgcczsu3a().s[267]++;
      target = document.querySelector(selector);
    } else {
      cov_1wgcczsu3a().b[63][1]++;
    }

    var config = (cov_1wgcczsu3a().s[268]++, $(target).data(DATA_KEY) ? (cov_1wgcczsu3a().b[64][0]++, 'toggle') : (cov_1wgcczsu3a().b[64][1]++, _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data())));
    cov_1wgcczsu3a().s[269]++;

    if ((cov_1wgcczsu3a().b[66][0]++, this.tagName === 'A') || (cov_1wgcczsu3a().b[66][1]++, this.tagName === 'AREA')) {
      cov_1wgcczsu3a().b[65][0]++;
      cov_1wgcczsu3a().s[270]++;
      event.preventDefault();
    } else {
      cov_1wgcczsu3a().b[65][1]++;
    }

    var $target = (cov_1wgcczsu3a().s[271]++, $(target).one(EVENT_SHOW, function (showEvent) {
      cov_1wgcczsu3a().f[44]++;
      cov_1wgcczsu3a().s[272]++;

      if (showEvent.isDefaultPrevented()) {
        cov_1wgcczsu3a().b[67][0]++;
        cov_1wgcczsu3a().s[273]++;
        // Only register focus restorer if modal will actually get shown
        return;
      } else {
        cov_1wgcczsu3a().b[67][1]++;
      }

      cov_1wgcczsu3a().s[274]++;
      $target.one(EVENT_HIDDEN, function () {
        cov_1wgcczsu3a().f[45]++;
        cov_1wgcczsu3a().s[275]++;

        if ($(_this11).is(':visible')) {
          cov_1wgcczsu3a().b[68][0]++;
          cov_1wgcczsu3a().s[276]++;

          _this11.focus();
        } else {
          cov_1wgcczsu3a().b[68][1]++;
        }
      });
    }));
    cov_1wgcczsu3a().s[277]++;

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1wgcczsu3a().s[278]++;
  $.fn[NAME] = Modal._jQueryInterface;
  cov_1wgcczsu3a().s[279]++;
  $.fn[NAME].Constructor = Modal;
  cov_1wgcczsu3a().s[280]++;

  $.fn[NAME].noConflict = function () {
    cov_1wgcczsu3a().f[46]++;
    cov_1wgcczsu3a().s[281]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1wgcczsu3a().s[282]++;
    return Modal._jQueryInterface;
  };

  return Modal;

})));
//# sourceMappingURL=modal.js.map
