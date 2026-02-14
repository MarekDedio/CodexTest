/*!
  * Bootstrap dropdown.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global = global || self, global.Dropdown = factory(global.jQuery, global.Popper, global.Util));
}(this, (function ($, Popper, Util) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;
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

  function cov_24qwo4u96v() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\dropdown.js";
    var hash = "4a517741a8d02f7f9fd298a1eb5974876bee4f82";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 43
          }
        },
        "1": {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 19,
            column: 40
          }
        },
        "2": {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 46
          }
        },
        "3": {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 47
          }
        },
        "4": {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 22,
            column: 44
          }
        },
        "5": {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 43
          }
        },
        "6": {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 24,
            column: 35
          }
        },
        "7": {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 35
          }
        },
        "8": {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 34
          }
        },
        "9": {
          start: {
            line: 27,
            column: 33
          },
          end: {
            line: 27,
            column: 35
          }
        },
        "10": {
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 28,
            column: 35
          }
        },
        "11": {
          start: {
            line: 29,
            column: 33
          },
          end: {
            line: 29,
            column: 34
          }
        },
        "12": {
          start: {
            line: 30,
            column: 33
          },
          end: {
            line: 30,
            column: 106
          }
        },
        "13": {
          start: {
            line: 32,
            column: 31
          },
          end: {
            line: 32,
            column: 49
          }
        },
        "14": {
          start: {
            line: 33,
            column: 31
          },
          end: {
            line: 33,
            column: 51
          }
        },
        "15": {
          start: {
            line: 34,
            column: 31
          },
          end: {
            line: 34,
            column: 49
          }
        },
        "16": {
          start: {
            line: 35,
            column: 31
          },
          end: {
            line: 35,
            column: 50
          }
        },
        "17": {
          start: {
            line: 36,
            column: 31
          },
          end: {
            line: 36,
            column: 50
          }
        },
        "18": {
          start: {
            line: 37,
            column: 31
          },
          end: {
            line: 37,
            column: 65
          }
        },
        "19": {
          start: {
            line: 38,
            column: 31
          },
          end: {
            line: 38,
            column: 67
          }
        },
        "20": {
          start: {
            line: 39,
            column: 31
          },
          end: {
            line: 39,
            column: 65
          }
        },
        "21": {
          start: {
            line: 41,
            column: 35
          },
          end: {
            line: 41,
            column: 45
          }
        },
        "22": {
          start: {
            line: 42,
            column: 35
          },
          end: {
            line: 42,
            column: 41
          }
        },
        "23": {
          start: {
            line: 43,
            column: 35
          },
          end: {
            line: 43,
            column: 43
          }
        },
        "24": {
          start: {
            line: 44,
            column: 35
          },
          end: {
            line: 44,
            column: 46
          }
        },
        "25": {
          start: {
            line: 45,
            column: 35
          },
          end: {
            line: 45,
            column: 45
          }
        },
        "26": {
          start: {
            line: 46,
            column: 35
          },
          end: {
            line: 46,
            column: 56
          }
        },
        "27": {
          start: {
            line: 47,
            column: 35
          },
          end: {
            line: 47,
            column: 52
          }
        },
        "28": {
          start: {
            line: 49,
            column: 31
          },
          end: {
            line: 49,
            column: 57
          }
        },
        "29": {
          start: {
            line: 50,
            column: 31
          },
          end: {
            line: 50,
            column: 47
          }
        },
        "30": {
          start: {
            line: 51,
            column: 31
          },
          end: {
            line: 51,
            column: 47
          }
        },
        "31": {
          start: {
            line: 52,
            column: 31
          },
          end: {
            line: 52,
            column: 44
          }
        },
        "32": {
          start: {
            line: 53,
            column: 31
          },
          end: {
            line: 53,
            column: 92
          }
        },
        "33": {
          start: {
            line: 55,
            column: 28
          },
          end: {
            line: 55,
            column: 39
          }
        },
        "34": {
          start: {
            line: 56,
            column: 28
          },
          end: {
            line: 56,
            column: 37
          }
        },
        "35": {
          start: {
            line: 57,
            column: 28
          },
          end: {
            line: 57,
            column: 42
          }
        },
        "36": {
          start: {
            line: 58,
            column: 28
          },
          end: {
            line: 58,
            column: 40
          }
        },
        "37": {
          start: {
            line: 59,
            column: 28
          },
          end: {
            line: 59,
            column: 41
          }
        },
        "38": {
          start: {
            line: 60,
            column: 28
          },
          end: {
            line: 60,
            column: 40
          }
        },
        "39": {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 69,
            column: 1
          }
        },
        "40": {
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 78,
            column: 1
          }
        },
        "41": {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 28
          }
        },
        "42": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 25
          }
        },
        "43": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 44
          }
        },
        "44": {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 91,
            column: 43
          }
        },
        "45": {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 92,
            column: 41
          }
        },
        "46": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 29
          }
        },
        "47": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 18
          }
        },
        "48": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 18
          }
        },
        "49": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 22
          }
        },
        "50": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        "51": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 12
          }
        },
        "52": {
          start: {
            line: 118,
            column: 21
          },
          end: {
            line: 118,
            column: 60
          }
        },
        "53": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 26
          }
        },
        "54": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        "55": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 123,
            column: 12
          }
        },
        "56": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 19
          }
        },
        "57": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        "58": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 12
          }
        },
        "59": {
          start: {
            line: 134,
            column: 26
          },
          end: {
            line: 136,
            column: 5
          }
        },
        "60": {
          start: {
            line: 137,
            column: 22
          },
          end: {
            line: 137,
            column: 56
          }
        },
        "61": {
          start: {
            line: 138,
            column: 19
          },
          end: {
            line: 138,
            column: 64
          }
        },
        "62": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 32
          }
        },
        "63": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "64": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 12
          }
        },
        "65": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        "66": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 154,
            column: 7
          }
        },
        "67": {
          start: {
            line: 153,
            column: 8
          },
          end: {
            line: 153,
            column: 96
          }
        },
        "68": {
          start: {
            line: 156,
            column: 29
          },
          end: {
            line: 156,
            column: 42
          }
        },
        "69": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 167,
            column: 7
          }
        },
        "70": {
          start: {
            line: 159,
            column: 8
          },
          end: {
            line: 159,
            column: 33
          }
        },
        "71": {
          start: {
            line: 160,
            column: 13
          },
          end: {
            line: 167,
            column: 7
          }
        },
        "72": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 49
          }
        },
        "73": {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 166,
            column: 9
          }
        },
        "74": {
          start: {
            line: 165,
            column: 10
          },
          end: {
            line: 165,
            column: 54
          }
        },
        "75": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 174,
            column: 7
          }
        },
        "76": {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 54
          }
        },
        "77": {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 86
          }
        },
        "78": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        "79": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 63
          }
        },
        "80": {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 187,
            column: 25
          }
        },
        "81": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 188,
            column: 53
          }
        },
        "82": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 46
          }
        },
        "83": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 193,
            column: 51
          }
        },
        "84": {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        "85": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 12
          }
        },
        "86": {
          start: {
            line: 201,
            column: 26
          },
          end: {
            line: 203,
            column: 5
          }
        },
        "87": {
          start: {
            line: 204,
            column: 22
          },
          end: {
            line: 204,
            column: 56
          }
        },
        "88": {
          start: {
            line: 205,
            column: 19
          },
          end: {
            line: 205,
            column: 64
          }
        },
        "89": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 32
          }
        },
        "90": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        },
        "91": {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 210,
            column: 12
          }
        },
        "92": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        },
        "93": {
          start: {
            line: 214,
            column: 6
          },
          end: {
            line: 214,
            column: 28
          }
        },
        "94": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 46
          }
        },
        "95": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 220,
            column: 52
          }
        },
        "96": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 41
          }
        },
        "97": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 35
          }
        },
        "98": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 24
          }
        },
        "99": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 21
          }
        },
        "100": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        "101": {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 28
          }
        },
        "102": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 230,
            column: 25
          }
        },
        "103": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 41
          }
        },
        "104": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        "105": {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 237,
            column: 35
          }
        },
        "106": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 248,
            column: 6
          }
        },
        "107": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 28
          }
        },
        "108": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 246,
            column: 29
          }
        },
        "109": {
          start: {
            line: 247,
            column: 6
          },
          end: {
            line: 247,
            column: 19
          }
        },
        "110": {
          start: {
            line: 252,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        },
        "111": {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 262,
            column: 5
          }
        },
        "112": {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 264,
            column: 17
          }
        },
        "113": {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 274,
            column: 5
          }
        },
        "114": {
          start: {
            line: 269,
            column: 21
          },
          end: {
            line: 269,
            column: 66
          }
        },
        "115": {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 273,
            column: 7
          }
        },
        "116": {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 272,
            column: 56
          }
        },
        "117": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 275,
            column: 21
          }
        },
        "118": {
          start: {
            line: 279,
            column: 28
          },
          end: {
            line: 279,
            column: 55
          }
        },
        "119": {
          start: {
            line: 280,
            column: 20
          },
          end: {
            line: 280,
            column: 36
          }
        },
        "120": {
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        "121": {
          start: {
            line: 284,
            column: 6
          },
          end: {
            line: 286,
            column: 23
          }
        },
        "122": {
          start: {
            line: 287,
            column: 11
          },
          end: {
            line: 293,
            column: 5
          }
        },
        "123": {
          start: {
            line: 288,
            column: 6
          },
          end: {
            line: 288,
            column: 33
          }
        },
        "124": {
          start: {
            line: 289,
            column: 11
          },
          end: {
            line: 293,
            column: 5
          }
        },
        "125": {
          start: {
            line: 290,
            column: 6
          },
          end: {
            line: 290,
            column: 32
          }
        },
        "126": {
          start: {
            line: 291,
            column: 11
          },
          end: {
            line: 293,
            column: 5
          }
        },
        "127": {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 292,
            column: 37
          }
        },
        "128": {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 294,
            column: 20
          }
        },
        "129": {
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 298,
            column: 57
          }
        },
        "130": {
          start: {
            line: 302,
            column: 19
          },
          end: {
            line: 302,
            column: 21
          }
        },
        "131": {
          start: {
            line: 304,
            column: 4
          },
          end: {
            line: 315,
            column: 5
          }
        },
        "132": {
          start: {
            line: 305,
            column: 6
          },
          end: {
            line: 312,
            column: 7
          }
        },
        "133": {
          start: {
            line: 306,
            column: 8
          },
          end: {
            line: 309,
            column: 9
          }
        },
        "134": {
          start: {
            line: 311,
            column: 8
          },
          end: {
            line: 311,
            column: 19
          }
        },
        "135": {
          start: {
            line: 314,
            column: 6
          },
          end: {
            line: 314,
            column: 41
          }
        },
        "136": {
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 317,
            column: 17
          }
        },
        "137": {
          start: {
            line: 321,
            column: 25
          },
          end: {
            line: 332,
            column: 5
          }
        },
        "138": {
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 339,
            column: 5
          }
        },
        "139": {
          start: {
            line: 336,
            column: 6
          },
          end: {
            line: 338,
            column: 7
          }
        },
        "140": {
          start: {
            line: 341,
            column: 4
          },
          end: {
            line: 344,
            column: 5
          }
        },
        "141": {
          start: {
            line: 350,
            column: 4
          },
          end: {
            line: 365,
            column: 6
          }
        },
        "142": {
          start: {
            line: 351,
            column: 17
          },
          end: {
            line: 351,
            column: 39
          }
        },
        "143": {
          start: {
            line: 352,
            column: 22
          },
          end: {
            line: 352,
            column: 64
          }
        },
        "144": {
          start: {
            line: 354,
            column: 6
          },
          end: {
            line: 357,
            column: 7
          }
        },
        "145": {
          start: {
            line: 355,
            column: 8
          },
          end: {
            line: 355,
            column: 42
          }
        },
        "146": {
          start: {
            line: 356,
            column: 8
          },
          end: {
            line: 356,
            column: 36
          }
        },
        "147": {
          start: {
            line: 359,
            column: 6
          },
          end: {
            line: 364,
            column: 7
          }
        },
        "148": {
          start: {
            line: 360,
            column: 8
          },
          end: {
            line: 362,
            column: 9
          }
        },
        "149": {
          start: {
            line: 361,
            column: 10
          },
          end: {
            line: 361,
            column: 60
          }
        },
        "150": {
          start: {
            line: 363,
            column: 8
          },
          end: {
            line: 363,
            column: 22
          }
        },
        "151": {
          start: {
            line: 369,
            column: 4
          },
          end: {
            line: 372,
            column: 5
          }
        },
        "152": {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 371,
            column: 12
          }
        },
        "153": {
          start: {
            line: 374,
            column: 20
          },
          end: {
            line: 374,
            column: 82
          }
        },
        "154": {
          start: {
            line: 376,
            column: 4
          },
          end: {
            line: 424,
            column: 5
          }
        },
        "155": {
          start: {
            line: 376,
            column: 17
          },
          end: {
            line: 376,
            column: 18
          }
        },
        "156": {
          start: {
            line: 376,
            column: 26
          },
          end: {
            line: 376,
            column: 40
          }
        },
        "157": {
          start: {
            line: 377,
            column: 21
          },
          end: {
            line: 377,
            column: 63
          }
        },
        "158": {
          start: {
            line: 378,
            column: 22
          },
          end: {
            line: 378,
            column: 50
          }
        },
        "159": {
          start: {
            line: 379,
            column: 28
          },
          end: {
            line: 381,
            column: 7
          }
        },
        "160": {
          start: {
            line: 383,
            column: 6
          },
          end: {
            line: 385,
            column: 7
          }
        },
        "161": {
          start: {
            line: 384,
            column: 8
          },
          end: {
            line: 384,
            column: 40
          }
        },
        "162": {
          start: {
            line: 387,
            column: 6
          },
          end: {
            line: 389,
            column: 7
          }
        },
        "163": {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 388,
            column: 16
          }
        },
        "164": {
          start: {
            line: 391,
            column: 27
          },
          end: {
            line: 391,
            column: 40
          }
        },
        "165": {
          start: {
            line: 392,
            column: 6
          },
          end: {
            line: 394,
            column: 7
          }
        },
        "166": {
          start: {
            line: 393,
            column: 8
          },
          end: {
            line: 393,
            column: 16
          }
        },
        "167": {
          start: {
            line: 396,
            column: 6
          },
          end: {
            line: 400,
            column: 7
          }
        },
        "168": {
          start: {
            line: 399,
            column: 8
          },
          end: {
            line: 399,
            column: 16
          }
        },
        "169": {
          start: {
            line: 402,
            column: 24
          },
          end: {
            line: 402,
            column: 58
          }
        },
        "170": {
          start: {
            line: 403,
            column: 6
          },
          end: {
            line: 403,
            column: 34
          }
        },
        "171": {
          start: {
            line: 404,
            column: 6
          },
          end: {
            line: 406,
            column: 7
          }
        },
        "172": {
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 405,
            column: 16
          }
        },
        "173": {
          start: {
            line: 410,
            column: 6
          },
          end: {
            line: 412,
            column: 7
          }
        },
        "174": {
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 411,
            column: 66
          }
        },
        "175": {
          start: {
            line: 414,
            column: 6
          },
          end: {
            line: 414,
            column: 55
          }
        },
        "176": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 418,
            column: 7
          }
        },
        "177": {
          start: {
            line: 417,
            column: 8
          },
          end: {
            line: 417,
            column: 33
          }
        },
        "178": {
          start: {
            line: 420,
            column: 6
          },
          end: {
            line: 420,
            column: 50
          }
        },
        "179": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 423,
            column: 54
          }
        },
        "180": {
          start: {
            line: 429,
            column: 21
          },
          end: {
            line: 429,
            column: 57
          }
        },
        "181": {
          start: {
            line: 431,
            column: 4
          },
          end: {
            line: 433,
            column: 5
          }
        },
        "182": {
          start: {
            line: 432,
            column: 6
          },
          end: {
            line: 432,
            column: 47
          }
        },
        "183": {
          start: {
            line: 435,
            column: 4
          },
          end: {
            line: 435,
            column: 39
          }
        },
        "184": {
          start: {
            line: 447,
            column: 4
          },
          end: {
            line: 452,
            column: 5
          }
        },
        "185": {
          start: {
            line: 451,
            column: 6
          },
          end: {
            line: 451,
            column: 12
          }
        },
        "186": {
          start: {
            line: 454,
            column: 4
          },
          end: {
            line: 456,
            column: 5
          }
        },
        "187": {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 455,
            column: 12
          }
        },
        "188": {
          start: {
            line: 458,
            column: 21
          },
          end: {
            line: 458,
            column: 57
          }
        },
        "189": {
          start: {
            line: 459,
            column: 21
          },
          end: {
            line: 459,
            column: 56
          }
        },
        "190": {
          start: {
            line: 461,
            column: 4
          },
          end: {
            line: 463,
            column: 5
          }
        },
        "191": {
          start: {
            line: 462,
            column: 6
          },
          end: {
            line: 462,
            column: 12
          }
        },
        "192": {
          start: {
            line: 465,
            column: 4
          },
          end: {
            line: 465,
            column: 26
          }
        },
        "193": {
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 466,
            column: 27
          }
        },
        "194": {
          start: {
            line: 468,
            column: 4
          },
          end: {
            line: 475,
            column: 5
          }
        },
        "195": {
          start: {
            line: 469,
            column: 6
          },
          end: {
            line: 471,
            column: 7
          }
        },
        "196": {
          start: {
            line: 470,
            column: 8
          },
          end: {
            line: 470,
            column: 70
          }
        },
        "197": {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 473,
            column: 30
          }
        },
        "198": {
          start: {
            line: 474,
            column: 6
          },
          end: {
            line: 474,
            column: 12
          }
        },
        "199": {
          start: {
            line: 477,
            column: 18
          },
          end: {
            line: 478,
            column: 47
          }
        },
        "200": {
          start: {
            line: 478,
            column: 24
          },
          end: {
            line: 478,
            column: 46
          }
        },
        "201": {
          start: {
            line: 480,
            column: 4
          },
          end: {
            line: 482,
            column: 5
          }
        },
        "202": {
          start: {
            line: 481,
            column: 6
          },
          end: {
            line: 481,
            column: 12
          }
        },
        "203": {
          start: {
            line: 484,
            column: 16
          },
          end: {
            line: 484,
            column: 43
          }
        },
        "204": {
          start: {
            line: 486,
            column: 4
          },
          end: {
            line: 488,
            column: 5
          }
        },
        "205": {
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 487,
            column: 13
          }
        },
        "206": {
          start: {
            line: 490,
            column: 4
          },
          end: {
            line: 492,
            column: 5
          }
        },
        "207": {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 13
          }
        },
        "208": {
          start: {
            line: 494,
            column: 4
          },
          end: {
            line: 496,
            column: 5
          }
        },
        "209": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 15
          }
        },
        "210": {
          start: {
            line: 498,
            column: 4
          },
          end: {
            line: 498,
            column: 24
          }
        },
        "211": {
          start: {
            line: 508,
            column: 0
          },
          end: {
            line: 519,
            column: 4
          }
        },
        "212": {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 513,
            column: 26
          }
        },
        "213": {
          start: {
            line: 514,
            column: 4
          },
          end: {
            line: 514,
            column: 27
          }
        },
        "214": {
          start: {
            line: 515,
            column: 4
          },
          end: {
            line: 515,
            column: 53
          }
        },
        "215": {
          start: {
            line: 518,
            column: 4
          },
          end: {
            line: 518,
            column: 23
          }
        },
        "216": {
          start: {
            line: 527,
            column: 0
          },
          end: {
            line: 527,
            column: 38
          }
        },
        "217": {
          start: {
            line: 528,
            column: 0
          },
          end: {
            line: 528,
            column: 33
          }
        },
        "218": {
          start: {
            line: 529,
            column: 0
          },
          end: {
            line: 532,
            column: 1
          }
        },
        "219": {
          start: {
            line: 530,
            column: 2
          },
          end: {
            line: 530,
            column: 33
          }
        },
        "220": {
          start: {
            line: 531,
            column: 2
          },
          end: {
            line: 531,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 87,
              column: 2
            },
            end: {
              line: 87,
              column: 3
            }
          },
          loc: {
            start: {
              line: 87,
              column: 31
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 87
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 99,
              column: 2
            },
            end: {
              line: 99,
              column: 3
            }
          },
          loc: {
            start: {
              line: 99,
              column: 23
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 99
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 103,
              column: 2
            },
            end: {
              line: 103,
              column: 3
            }
          },
          loc: {
            start: {
              line: 103,
              column: 23
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 103
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 107,
              column: 2
            },
            end: {
              line: 107,
              column: 3
            }
          },
          loc: {
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 109,
              column: 3
            }
          },
          line: 107
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 113,
              column: 2
            },
            end: {
              line: 113,
              column: 3
            }
          },
          loc: {
            start: {
              line: 113,
              column: 11
            },
            end: {
              line: 127,
              column: 3
            }
          },
          line: 113
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 129,
              column: 2
            },
            end: {
              line: 129,
              column: 3
            }
          },
          loc: {
            start: {
              line: 129,
              column: 26
            },
            end: {
              line: 194,
              column: 3
            }
          },
          line: 129
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 196,
              column: 2
            },
            end: {
              line: 196,
              column: 3
            }
          },
          loc: {
            start: {
              line: 196,
              column: 9
            },
            end: {
              line: 221,
              column: 3
            }
          },
          line: 196
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 12
            },
            end: {
              line: 232,
              column: 3
            }
          },
          line: 223
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 234,
              column: 2
            },
            end: {
              line: 234,
              column: 3
            }
          },
          loc: {
            start: {
              line: 234,
              column: 11
            },
            end: {
              line: 239,
              column: 3
            }
          },
          line: 234
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 243,
              column: 2
            },
            end: {
              line: 243,
              column: 3
            }
          },
          loc: {
            start: {
              line: 243,
              column: 23
            },
            end: {
              line: 249,
              column: 3
            }
          },
          line: 243
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 244,
              column: 37
            },
            end: {
              line: 244,
              column: 38
            }
          },
          loc: {
            start: {
              line: 244,
              column: 48
            },
            end: {
              line: 248,
              column: 5
            }
          },
          line: 244
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 251,
              column: 2
            },
            end: {
              line: 251,
              column: 3
            }
          },
          loc: {
            start: {
              line: 251,
              column: 21
            },
            end: {
              line: 265,
              column: 3
            }
          },
          line: 251
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 267,
              column: 2
            },
            end: {
              line: 267,
              column: 3
            }
          },
          loc: {
            start: {
              line: 267,
              column: 20
            },
            end: {
              line: 276,
              column: 3
            }
          },
          line: 267
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 278,
              column: 2
            },
            end: {
              line: 278,
              column: 3
            }
          },
          loc: {
            start: {
              line: 278,
              column: 18
            },
            end: {
              line: 295,
              column: 3
            }
          },
          line: 278
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 297,
              column: 2
            },
            end: {
              line: 297,
              column: 3
            }
          },
          loc: {
            start: {
              line: 297,
              column: 18
            },
            end: {
              line: 299,
              column: 3
            }
          },
          line: 297
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 301,
              column: 2
            },
            end: {
              line: 301,
              column: 3
            }
          },
          loc: {
            start: {
              line: 301,
              column: 15
            },
            end: {
              line: 318,
              column: 3
            }
          },
          line: 301
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 305,
              column: 18
            },
            end: {
              line: 305,
              column: 19
            }
          },
          loc: {
            start: {
              line: 305,
              column: 28
            },
            end: {
              line: 312,
              column: 7
            }
          },
          line: 305
        },
        "17": {
          name: "(anonymous_17)",
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
              column: 21
            },
            end: {
              line: 345,
              column: 3
            }
          },
          line: 320
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 349,
              column: 2
            },
            end: {
              line: 349,
              column: 3
            }
          },
          loc: {
            start: {
              line: 349,
              column: 34
            },
            end: {
              line: 366,
              column: 3
            }
          },
          line: 349
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 350,
              column: 21
            },
            end: {
              line: 350,
              column: 22
            }
          },
          loc: {
            start: {
              line: 350,
              column: 33
            },
            end: {
              line: 365,
              column: 5
            }
          },
          line: 350
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 368,
              column: 2
            },
            end: {
              line: 368,
              column: 3
            }
          },
          loc: {
            start: {
              line: 368,
              column: 28
            },
            end: {
              line: 425,
              column: 3
            }
          },
          line: 368
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 427,
              column: 2
            },
            end: {
              line: 427,
              column: 3
            }
          },
          loc: {
            start: {
              line: 427,
              column: 40
            },
            end: {
              line: 436,
              column: 3
            }
          },
          line: 427
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 439,
              column: 2
            },
            end: {
              line: 439,
              column: 3
            }
          },
          loc: {
            start: {
              line: 439,
              column: 39
            },
            end: {
              line: 499,
              column: 3
            }
          },
          line: 439
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 478,
              column: 14
            },
            end: {
              line: 478,
              column: 15
            }
          },
          loc: {
            start: {
              line: 478,
              column: 24
            },
            end: {
              line: 478,
              column: 46
            }
          },
          line: 478
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 512,
              column: 50
            },
            end: {
              line: 512,
              column: 51
            }
          },
          loc: {
            start: {
              line: 512,
              column: 67
            },
            end: {
              line: 516,
              column: 3
            }
          },
          line: 512
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 517,
              column: 49
            },
            end: {
              line: 517,
              column: 50
            }
          },
          loc: {
            start: {
              line: 517,
              column: 56
            },
            end: {
              line: 519,
              column: 3
            }
          },
          line: 517
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 529,
              column: 24
            },
            end: {
              line: 529,
              column: 25
            }
          },
          loc: {
            start: {
              line: 529,
              column: 30
            },
            end: {
              line: 532,
              column: 1
            }
          },
          line: 529
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 114,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 114,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }, {
            start: {
              line: 114,
              column: 4
            },
            end: {
              line: 116,
              column: 5
            }
          }],
          line: 114
        },
        "1": {
          loc: {
            start: {
              line: 114,
              column: 8
            },
            end: {
              line: 114,
              column: 80
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 114,
              column: 8
            },
            end: {
              line: 114,
              column: 30
            }
          }, {
            start: {
              line: 114,
              column: 34
            },
            end: {
              line: 114,
              column: 80
            }
          }],
          line: 114
        },
        "2": {
          loc: {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }, {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }],
          line: 122
        },
        "3": {
          loc: {
            start: {
              line: 129,
              column: 7
            },
            end: {
              line: 129,
              column: 24
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 129,
              column: 19
            },
            end: {
              line: 129,
              column: 24
            }
          }],
          line: 129
        },
        "4": {
          loc: {
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          }, {
            start: {
              line: 130,
              column: 4
            },
            end: {
              line: 132,
              column: 5
            }
          }],
          line: 130
        },
        "5": {
          loc: {
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 130,
              column: 123
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 130,
              column: 30
            }
          }, {
            start: {
              line: 130,
              column: 34
            },
            end: {
              line: 130,
              column: 80
            }
          }, {
            start: {
              line: 130,
              column: 84
            },
            end: {
              line: 130,
              column: 123
            }
          }],
          line: 130
        },
        "6": {
          loc: {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          }, {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          }],
          line: 142
        },
        "7": {
          loc: {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          }, {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          }],
          line: 147
        },
        "8": {
          loc: {
            start: {
              line: 147,
              column: 8
            },
            end: {
              line: 147,
              column: 36
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 147,
              column: 8
            },
            end: {
              line: 147,
              column: 23
            }
          }, {
            start: {
              line: 147,
              column: 27
            },
            end: {
              line: 147,
              column: 36
            }
          }],
          line: 147
        },
        "9": {
          loc: {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }, {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }],
          line: 152
        },
        "10": {
          loc: {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          }, {
            start: {
              line: 158,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          }],
          line: 158
        },
        "11": {
          loc: {
            start: {
              line: 160,
              column: 13
            },
            end: {
              line: 167,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 13
            },
            end: {
              line: 167,
              column: 7
            }
          }, {
            start: {
              line: 160,
              column: 13
            },
            end: {
              line: 167,
              column: 7
            }
          }],
          line: 160
        },
        "12": {
          loc: {
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 166,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 166,
              column: 9
            }
          }, {
            start: {
              line: 164,
              column: 8
            },
            end: {
              line: 166,
              column: 9
            }
          }],
          line: 164
        },
        "13": {
          loc: {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }, {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }],
          line: 172
        },
        "14": {
          loc: {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 185,
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
              line: 185,
              column: 5
            }
          }, {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          }],
          line: 182
        },
        "15": {
          loc: {
            start: {
              line: 182,
              column: 8
            },
            end: {
              line: 183,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 182,
              column: 8
            },
            end: {
              line: 182,
              column: 50
            }
          }, {
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 183,
              column: 59
            }
          }],
          line: 182
        },
        "16": {
          loc: {
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }, {
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }],
          line: 197
        },
        "17": {
          loc: {
            start: {
              line: 197,
              column: 8
            },
            end: {
              line: 197,
              column: 124
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 197,
              column: 8
            },
            end: {
              line: 197,
              column: 30
            }
          }, {
            start: {
              line: 197,
              column: 34
            },
            end: {
              line: 197,
              column: 80
            }
          }, {
            start: {
              line: 197,
              column: 84
            },
            end: {
              line: 197,
              column: 124
            }
          }],
          line: 197
        },
        "18": {
          loc: {
            start: {
              line: 209,
              column: 4
            },
            end: {
              line: 211,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 209,
              column: 4
            },
            end: {
              line: 211,
              column: 5
            }
          }, {
            start: {
              line: 209,
              column: 4
            },
            end: {
              line: 211,
              column: 5
            }
          }],
          line: 209
        },
        "19": {
          loc: {
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 215,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 215,
              column: 5
            }
          }, {
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 215,
              column: 5
            }
          }],
          line: 213
        },
        "20": {
          loc: {
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          }, {
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 231,
              column: 5
            }
          }],
          line: 228
        },
        "21": {
          loc: {
            start: {
              line: 236,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 236,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          }, {
            start: {
              line: 236,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          }],
          line: 236
        },
        "22": {
          loc: {
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          }, {
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          }],
          line: 268
        },
        "23": {
          loc: {
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 273,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 273,
              column: 7
            }
          }, {
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 273,
              column: 7
            }
          }],
          line: 271
        },
        "24": {
          loc: {
            start: {
              line: 283,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 283,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          }, {
            start: {
              line: 283,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          }],
          line: 283
        },
        "25": {
          loc: {
            start: {
              line: 284,
              column: 18
            },
            end: {
              line: 286,
              column: 23
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 285,
              column: 10
            },
            end: {
              line: 285,
              column: 26
            }
          }, {
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 23
            }
          }],
          line: 284
        },
        "26": {
          loc: {
            start: {
              line: 287,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 287,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          }, {
            start: {
              line: 287,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          }],
          line: 287
        },
        "27": {
          loc: {
            start: {
              line: 289,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 289,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          }, {
            start: {
              line: 289,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          }],
          line: 289
        },
        "28": {
          loc: {
            start: {
              line: 291,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 291,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          }, {
            start: {
              line: 291,
              column: 11
            },
            end: {
              line: 293,
              column: 5
            }
          }],
          line: 291
        },
        "29": {
          loc: {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          }, {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          }],
          line: 304
        },
        "30": {
          loc: {
            start: {
              line: 308,
              column: 13
            },
            end: {
              line: 308,
              column: 67
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 308,
              column: 13
            },
            end: {
              line: 308,
              column: 61
            }
          }, {
            start: {
              line: 308,
              column: 65
            },
            end: {
              line: 308,
              column: 67
            }
          }],
          line: 308
        },
        "31": {
          loc: {
            start: {
              line: 335,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 335,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          }, {
            start: {
              line: 335,
              column: 4
            },
            end: {
              line: 339,
              column: 5
            }
          }],
          line: 335
        },
        "32": {
          loc: {
            start: {
              line: 352,
              column: 22
            },
            end: {
              line: 352,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 352,
              column: 51
            },
            end: {
              line: 352,
              column: 57
            }
          }, {
            start: {
              line: 352,
              column: 60
            },
            end: {
              line: 352,
              column: 64
            }
          }],
          line: 352
        },
        "33": {
          loc: {
            start: {
              line: 354,
              column: 6
            },
            end: {
              line: 357,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 354,
              column: 6
            },
            end: {
              line: 357,
              column: 7
            }
          }, {
            start: {
              line: 354,
              column: 6
            },
            end: {
              line: 357,
              column: 7
            }
          }],
          line: 354
        },
        "34": {
          loc: {
            start: {
              line: 359,
              column: 6
            },
            end: {
              line: 364,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 359,
              column: 6
            },
            end: {
              line: 364,
              column: 7
            }
          }, {
            start: {
              line: 359,
              column: 6
            },
            end: {
              line: 364,
              column: 7
            }
          }],
          line: 359
        },
        "35": {
          loc: {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 362,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 362,
              column: 9
            }
          }, {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 362,
              column: 9
            }
          }],
          line: 360
        },
        "36": {
          loc: {
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 372,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 372,
              column: 5
            }
          }, {
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 372,
              column: 5
            }
          }],
          line: 369
        },
        "37": {
          loc: {
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 370,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 369,
              column: 13
            }
          }, {
            start: {
              line: 369,
              column: 18
            },
            end: {
              line: 369,
              column: 58
            }
          }, {
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 370,
              column: 28
            }
          }, {
            start: {
              line: 370,
              column: 32
            },
            end: {
              line: 370,
              column: 59
            }
          }],
          line: 369
        },
        "38": {
          loc: {
            start: {
              line: 383,
              column: 6
            },
            end: {
              line: 385,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 383,
              column: 6
            },
            end: {
              line: 385,
              column: 7
            }
          }, {
            start: {
              line: 383,
              column: 6
            },
            end: {
              line: 385,
              column: 7
            }
          }],
          line: 383
        },
        "39": {
          loc: {
            start: {
              line: 383,
              column: 10
            },
            end: {
              line: 383,
              column: 41
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 383,
              column: 10
            },
            end: {
              line: 383,
              column: 15
            }
          }, {
            start: {
              line: 383,
              column: 19
            },
            end: {
              line: 383,
              column: 41
            }
          }],
          line: 383
        },
        "40": {
          loc: {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          }, {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 389,
              column: 7
            }
          }],
          line: 387
        },
        "41": {
          loc: {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          }, {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          }],
          line: 392
        },
        "42": {
          loc: {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 400,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 400,
              column: 7
            }
          }, {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 400,
              column: 7
            }
          }],
          line: 396
        },
        "43": {
          loc: {
            start: {
              line: 396,
              column: 10
            },
            end: {
              line: 398,
              column: 42
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 396,
              column: 10
            },
            end: {
              line: 396,
              column: 15
            }
          }, {
            start: {
              line: 396,
              column: 20
            },
            end: {
              line: 396,
              column: 42
            }
          }, {
            start: {
              line: 397,
              column: 10
            },
            end: {
              line: 397,
              column: 54
            }
          }, {
            start: {
              line: 397,
              column: 58
            },
            end: {
              line: 397,
              column: 80
            }
          }, {
            start: {
              line: 397,
              column: 84
            },
            end: {
              line: 397,
              column: 111
            }
          }, {
            start: {
              line: 398,
              column: 10
            },
            end: {
              line: 398,
              column: 42
            }
          }],
          line: 396
        },
        "44": {
          loc: {
            start: {
              line: 404,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 404,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          }, {
            start: {
              line: 404,
              column: 6
            },
            end: {
              line: 406,
              column: 7
            }
          }],
          line: 404
        },
        "45": {
          loc: {
            start: {
              line: 410,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 410,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }, {
            start: {
              line: 410,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }],
          line: 410
        },
        "46": {
          loc: {
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          }, {
            start: {
              line: 416,
              column: 6
            },
            end: {
              line: 418,
              column: 7
            }
          }],
          line: 416
        },
        "47": {
          loc: {
            start: {
              line: 431,
              column: 4
            },
            end: {
              line: 433,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 431,
              column: 4
            },
            end: {
              line: 433,
              column: 5
            }
          }, {
            start: {
              line: 431,
              column: 4
            },
            end: {
              line: 433,
              column: 5
            }
          }],
          line: 431
        },
        "48": {
          loc: {
            start: {
              line: 435,
              column: 11
            },
            end: {
              line: 435,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 435,
              column: 11
            },
            end: {
              line: 435,
              column: 17
            }
          }, {
            start: {
              line: 435,
              column: 21
            },
            end: {
              line: 435,
              column: 39
            }
          }],
          line: 435
        },
        "49": {
          loc: {
            start: {
              line: 447,
              column: 4
            },
            end: {
              line: 452,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 447,
              column: 4
            },
            end: {
              line: 452,
              column: 5
            }
          }, {
            start: {
              line: 447,
              column: 4
            },
            end: {
              line: 452,
              column: 5
            }
          }],
          line: 447
        },
        "50": {
          loc: {
            start: {
              line: 447,
              column: 8
            },
            end: {
              line: 450,
              column: 90
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 448,
              column: 8
            },
            end: {
              line: 450,
              column: 54
            }
          }, {
            start: {
              line: 450,
              column: 57
            },
            end: {
              line: 450,
              column: 90
            }
          }],
          line: 447
        },
        "51": {
          loc: {
            start: {
              line: 448,
              column: 8
            },
            end: {
              line: 450,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 448,
              column: 8
            },
            end: {
              line: 448,
              column: 37
            }
          }, {
            start: {
              line: 448,
              column: 41
            },
            end: {
              line: 448,
              column: 71
            }
          }, {
            start: {
              line: 449,
              column: 7
            },
            end: {
              line: 449,
              column: 41
            }
          }, {
            start: {
              line: 449,
              column: 45
            },
            end: {
              line: 449,
              column: 77
            }
          }, {
            start: {
              line: 450,
              column: 8
            },
            end: {
              line: 450,
              column: 53
            }
          }],
          line: 448
        },
        "52": {
          loc: {
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 456,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 456,
              column: 5
            }
          }, {
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 456,
              column: 5
            }
          }],
          line: 454
        },
        "53": {
          loc: {
            start: {
              line: 454,
              column: 8
            },
            end: {
              line: 454,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 454,
              column: 8
            },
            end: {
              line: 454,
              column: 21
            }
          }, {
            start: {
              line: 454,
              column: 25
            },
            end: {
              line: 454,
              column: 62
            }
          }],
          line: 454
        },
        "54": {
          loc: {
            start: {
              line: 461,
              column: 4
            },
            end: {
              line: 463,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 461,
              column: 4
            },
            end: {
              line: 463,
              column: 5
            }
          }, {
            start: {
              line: 461,
              column: 4
            },
            end: {
              line: 463,
              column: 5
            }
          }],
          line: 461
        },
        "55": {
          loc: {
            start: {
              line: 461,
              column: 8
            },
            end: {
              line: 461,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 461,
              column: 8
            },
            end: {
              line: 461,
              column: 17
            }
          }, {
            start: {
              line: 461,
              column: 21
            },
            end: {
              line: 461,
              column: 51
            }
          }],
          line: 461
        },
        "56": {
          loc: {
            start: {
              line: 468,
              column: 4
            },
            end: {
              line: 475,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 468,
              column: 4
            },
            end: {
              line: 475,
              column: 5
            }
          }, {
            start: {
              line: 468,
              column: 4
            },
            end: {
              line: 475,
              column: 5
            }
          }],
          line: 468
        },
        "57": {
          loc: {
            start: {
              line: 468,
              column: 8
            },
            end: {
              line: 468,
              column: 98
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 468,
              column: 8
            },
            end: {
              line: 468,
              column: 17
            }
          }, {
            start: {
              line: 468,
              column: 21
            },
            end: {
              line: 468,
              column: 29
            }
          }, {
            start: {
              line: 468,
              column: 34
            },
            end: {
              line: 468,
              column: 64
            }
          }, {
            start: {
              line: 468,
              column: 68
            },
            end: {
              line: 468,
              column: 97
            }
          }],
          line: 468
        },
        "58": {
          loc: {
            start: {
              line: 469,
              column: 6
            },
            end: {
              line: 471,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 469,
              column: 6
            },
            end: {
              line: 471,
              column: 7
            }
          }, {
            start: {
              line: 469,
              column: 6
            },
            end: {
              line: 471,
              column: 7
            }
          }],
          line: 469
        },
        "59": {
          loc: {
            start: {
              line: 480,
              column: 4
            },
            end: {
              line: 482,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 480,
              column: 4
            },
            end: {
              line: 482,
              column: 5
            }
          }, {
            start: {
              line: 480,
              column: 4
            },
            end: {
              line: 482,
              column: 5
            }
          }],
          line: 480
        },
        "60": {
          loc: {
            start: {
              line: 486,
              column: 4
            },
            end: {
              line: 488,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 486,
              column: 4
            },
            end: {
              line: 488,
              column: 5
            }
          }, {
            start: {
              line: 486,
              column: 4
            },
            end: {
              line: 488,
              column: 5
            }
          }],
          line: 486
        },
        "61": {
          loc: {
            start: {
              line: 486,
              column: 8
            },
            end: {
              line: 486,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 486,
              column: 8
            },
            end: {
              line: 486,
              column: 40
            }
          }, {
            start: {
              line: 486,
              column: 44
            },
            end: {
              line: 486,
              column: 53
            }
          }],
          line: 486
        },
        "62": {
          loc: {
            start: {
              line: 490,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 490,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          }, {
            start: {
              line: 490,
              column: 4
            },
            end: {
              line: 492,
              column: 5
            }
          }],
          line: 490
        },
        "63": {
          loc: {
            start: {
              line: 490,
              column: 8
            },
            end: {
              line: 490,
              column: 70
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 490,
              column: 8
            },
            end: {
              line: 490,
              column: 42
            }
          }, {
            start: {
              line: 490,
              column: 46
            },
            end: {
              line: 490,
              column: 70
            }
          }],
          line: 490
        },
        "64": {
          loc: {
            start: {
              line: 494,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 494,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          }, {
            start: {
              line: 494,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          }],
          line: 494
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
        "220": 0
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
        "26": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0],
        "4": [0, 0],
        "5": [0, 0, 0],
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
        "17": [0, 0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
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
        "37": [0, 0, 0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0, 0, 0, 0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0, 0, 0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0, 0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "4a517741a8d02f7f9fd298a1eb5974876bee4f82"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_24qwo4u96v = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_24qwo4u96v();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_24qwo4u96v().s[0]++, 'dropdown');
  var VERSION = (cov_24qwo4u96v().s[1]++, '4.5.0');
  var DATA_KEY = (cov_24qwo4u96v().s[2]++, 'bs.dropdown');
  var EVENT_KEY = (cov_24qwo4u96v().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_24qwo4u96v().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_24qwo4u96v().s[5]++, $.fn[NAME]);
  var ESCAPE_KEYCODE = (cov_24qwo4u96v().s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = (cov_24qwo4u96v().s[7]++, 32); // KeyboardEvent.which value for space key

  var TAB_KEYCODE = (cov_24qwo4u96v().s[8]++, 9); // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = (cov_24qwo4u96v().s[9]++, 38); // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = (cov_24qwo4u96v().s[10]++, 40); // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = (cov_24qwo4u96v().s[11]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = (cov_24qwo4u96v().s[12]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
  var EVENT_HIDE = (cov_24qwo4u96v().s[13]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_24qwo4u96v().s[14]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_24qwo4u96v().s[15]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_24qwo4u96v().s[16]++, "shown" + EVENT_KEY);
  var EVENT_CLICK = (cov_24qwo4u96v().s[17]++, "click" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_24qwo4u96v().s[18]++, "click" + EVENT_KEY + DATA_API_KEY);
  var EVENT_KEYDOWN_DATA_API = (cov_24qwo4u96v().s[19]++, "keydown" + EVENT_KEY + DATA_API_KEY);
  var EVENT_KEYUP_DATA_API = (cov_24qwo4u96v().s[20]++, "keyup" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_DISABLED = (cov_24qwo4u96v().s[21]++, 'disabled');
  var CLASS_NAME_SHOW = (cov_24qwo4u96v().s[22]++, 'show');
  var CLASS_NAME_DROPUP = (cov_24qwo4u96v().s[23]++, 'dropup');
  var CLASS_NAME_DROPRIGHT = (cov_24qwo4u96v().s[24]++, 'dropright');
  var CLASS_NAME_DROPLEFT = (cov_24qwo4u96v().s[25]++, 'dropleft');
  var CLASS_NAME_MENURIGHT = (cov_24qwo4u96v().s[26]++, 'dropdown-menu-right');
  var CLASS_NAME_POSITION_STATIC = (cov_24qwo4u96v().s[27]++, 'position-static');
  var SELECTOR_DATA_TOGGLE = (cov_24qwo4u96v().s[28]++, '[data-toggle="dropdown"]');
  var SELECTOR_FORM_CHILD = (cov_24qwo4u96v().s[29]++, '.dropdown form');
  var SELECTOR_MENU = (cov_24qwo4u96v().s[30]++, '.dropdown-menu');
  var SELECTOR_NAVBAR_NAV = (cov_24qwo4u96v().s[31]++, '.navbar-nav');
  var SELECTOR_VISIBLE_ITEMS = (cov_24qwo4u96v().s[32]++, '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)');
  var PLACEMENT_TOP = (cov_24qwo4u96v().s[33]++, 'top-start');
  var PLACEMENT_TOPEND = (cov_24qwo4u96v().s[34]++, 'top-end');
  var PLACEMENT_BOTTOM = (cov_24qwo4u96v().s[35]++, 'bottom-start');
  var PLACEMENT_BOTTOMEND = (cov_24qwo4u96v().s[36]++, 'bottom-end');
  var PLACEMENT_RIGHT = (cov_24qwo4u96v().s[37]++, 'right-start');
  var PLACEMENT_LEFT = (cov_24qwo4u96v().s[38]++, 'left-start');
  var Default = (cov_24qwo4u96v().s[39]++, {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  });
  var DefaultType = (cov_24qwo4u96v().s[40]++, {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      cov_24qwo4u96v().f[0]++;
      cov_24qwo4u96v().s[41]++;
      this._element = element;
      cov_24qwo4u96v().s[42]++;
      this._popper = null;
      cov_24qwo4u96v().s[43]++;
      this._config = this._getConfig(config);
      cov_24qwo4u96v().s[44]++;
      this._menu = this._getMenuElement();
      cov_24qwo4u96v().s[45]++;
      this._inNavbar = this._detectNavbar();
      cov_24qwo4u96v().s[46]++;

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_24qwo4u96v().f[4]++;
      cov_24qwo4u96v().s[50]++;

      if ((cov_24qwo4u96v().b[1][0]++, this._element.disabled) || (cov_24qwo4u96v().b[1][1]++, $(this._element).hasClass(CLASS_NAME_DISABLED))) {
        cov_24qwo4u96v().b[0][0]++;
        cov_24qwo4u96v().s[51]++;
        return;
      } else {
        cov_24qwo4u96v().b[0][1]++;
      }

      var isActive = (cov_24qwo4u96v().s[52]++, $(this._menu).hasClass(CLASS_NAME_SHOW));
      cov_24qwo4u96v().s[53]++;

      Dropdown._clearMenus();

      cov_24qwo4u96v().s[54]++;

      if (isActive) {
        cov_24qwo4u96v().b[2][0]++;
        cov_24qwo4u96v().s[55]++;
        return;
      } else {
        cov_24qwo4u96v().b[2][1]++;
      }

      cov_24qwo4u96v().s[56]++;
      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = (cov_24qwo4u96v().b[3][0]++, false);
      }

      cov_24qwo4u96v().f[5]++;
      cov_24qwo4u96v().s[57]++;

      if ((cov_24qwo4u96v().b[5][0]++, this._element.disabled) || (cov_24qwo4u96v().b[5][1]++, $(this._element).hasClass(CLASS_NAME_DISABLED)) || (cov_24qwo4u96v().b[5][2]++, $(this._menu).hasClass(CLASS_NAME_SHOW))) {
        cov_24qwo4u96v().b[4][0]++;
        cov_24qwo4u96v().s[58]++;
        return;
      } else {
        cov_24qwo4u96v().b[4][1]++;
      }

      var relatedTarget = (cov_24qwo4u96v().s[59]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_24qwo4u96v().s[60]++, $.Event(EVENT_SHOW, relatedTarget));
      var parent = (cov_24qwo4u96v().s[61]++, Dropdown._getParentFromElement(this._element));
      cov_24qwo4u96v().s[62]++;
      $(parent).trigger(showEvent);
      cov_24qwo4u96v().s[63]++;

      if (showEvent.isDefaultPrevented()) {
        cov_24qwo4u96v().b[6][0]++;
        cov_24qwo4u96v().s[64]++;
        return;
      } else {
        cov_24qwo4u96v().b[6][1]++;
      } // Disable totally Popper.js for Dropdown in Navbar


      cov_24qwo4u96v().s[65]++;

      if ((cov_24qwo4u96v().b[8][0]++, !this._inNavbar) && (cov_24qwo4u96v().b[8][1]++, usePopper)) {
        cov_24qwo4u96v().b[7][0]++;
        cov_24qwo4u96v().s[66]++;

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          cov_24qwo4u96v().b[9][0]++;
          cov_24qwo4u96v().s[67]++;
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        } else {
          cov_24qwo4u96v().b[9][1]++;
        }

        var referenceElement = (cov_24qwo4u96v().s[68]++, this._element);
        cov_24qwo4u96v().s[69]++;

        if (this._config.reference === 'parent') {
          cov_24qwo4u96v().b[10][0]++;
          cov_24qwo4u96v().s[70]++;
          referenceElement = parent;
        } else {
          cov_24qwo4u96v().b[10][1]++;
          cov_24qwo4u96v().s[71]++;

          if (Util.isElement(this._config.reference)) {
            cov_24qwo4u96v().b[11][0]++;
            cov_24qwo4u96v().s[72]++;
            referenceElement = this._config.reference; // Check if it's jQuery element

            cov_24qwo4u96v().s[73]++;

            if (typeof this._config.reference.jquery !== 'undefined') {
              cov_24qwo4u96v().b[12][0]++;
              cov_24qwo4u96v().s[74]++;
              referenceElement = this._config.reference[0];
            } else {
              cov_24qwo4u96v().b[12][1]++;
            }
          } else {
            cov_24qwo4u96v().b[11][1]++;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        cov_24qwo4u96v().s[75]++;

        if (this._config.boundary !== 'scrollParent') {
          cov_24qwo4u96v().b[13][0]++;
          cov_24qwo4u96v().s[76]++;
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        } else {
          cov_24qwo4u96v().b[13][1]++;
        }

        cov_24qwo4u96v().s[77]++;
        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } else {
        cov_24qwo4u96v().b[7][1]++;
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      cov_24qwo4u96v().s[78]++;

      if ((cov_24qwo4u96v().b[15][0]++, 'ontouchstart' in document.documentElement) && (cov_24qwo4u96v().b[15][1]++, $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0)) {
        cov_24qwo4u96v().b[14][0]++;
        cov_24qwo4u96v().s[79]++;
        $(document.body).children().on('mouseover', null, $.noop);
      } else {
        cov_24qwo4u96v().b[14][1]++;
      }

      cov_24qwo4u96v().s[80]++;

      this._element.focus();

      cov_24qwo4u96v().s[81]++;

      this._element.setAttribute('aria-expanded', true);

      cov_24qwo4u96v().s[82]++;
      $(this._menu).toggleClass(CLASS_NAME_SHOW);
      cov_24qwo4u96v().s[83]++;
      $(parent).toggleClass(CLASS_NAME_SHOW).trigger($.Event(EVENT_SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      cov_24qwo4u96v().f[6]++;
      cov_24qwo4u96v().s[84]++;

      if ((cov_24qwo4u96v().b[17][0]++, this._element.disabled) || (cov_24qwo4u96v().b[17][1]++, $(this._element).hasClass(CLASS_NAME_DISABLED)) || (cov_24qwo4u96v().b[17][2]++, !$(this._menu).hasClass(CLASS_NAME_SHOW))) {
        cov_24qwo4u96v().b[16][0]++;
        cov_24qwo4u96v().s[85]++;
        return;
      } else {
        cov_24qwo4u96v().b[16][1]++;
      }

      var relatedTarget = (cov_24qwo4u96v().s[86]++, {
        relatedTarget: this._element
      });
      var hideEvent = (cov_24qwo4u96v().s[87]++, $.Event(EVENT_HIDE, relatedTarget));
      var parent = (cov_24qwo4u96v().s[88]++, Dropdown._getParentFromElement(this._element));
      cov_24qwo4u96v().s[89]++;
      $(parent).trigger(hideEvent);
      cov_24qwo4u96v().s[90]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_24qwo4u96v().b[18][0]++;
        cov_24qwo4u96v().s[91]++;
        return;
      } else {
        cov_24qwo4u96v().b[18][1]++;
      }

      cov_24qwo4u96v().s[92]++;

      if (this._popper) {
        cov_24qwo4u96v().b[19][0]++;
        cov_24qwo4u96v().s[93]++;

        this._popper.destroy();
      } else {
        cov_24qwo4u96v().b[19][1]++;
      }

      cov_24qwo4u96v().s[94]++;
      $(this._menu).toggleClass(CLASS_NAME_SHOW);
      cov_24qwo4u96v().s[95]++;
      $(parent).toggleClass(CLASS_NAME_SHOW).trigger($.Event(EVENT_HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      cov_24qwo4u96v().f[7]++;
      cov_24qwo4u96v().s[96]++;
      $.removeData(this._element, DATA_KEY);
      cov_24qwo4u96v().s[97]++;
      $(this._element).off(EVENT_KEY);
      cov_24qwo4u96v().s[98]++;
      this._element = null;
      cov_24qwo4u96v().s[99]++;
      this._menu = null;
      cov_24qwo4u96v().s[100]++;

      if (this._popper !== null) {
        cov_24qwo4u96v().b[20][0]++;
        cov_24qwo4u96v().s[101]++;

        this._popper.destroy();

        cov_24qwo4u96v().s[102]++;
        this._popper = null;
      } else {
        cov_24qwo4u96v().b[20][1]++;
      }
    };

    _proto.update = function update() {
      cov_24qwo4u96v().f[8]++;
      cov_24qwo4u96v().s[103]++;
      this._inNavbar = this._detectNavbar();
      cov_24qwo4u96v().s[104]++;

      if (this._popper !== null) {
        cov_24qwo4u96v().b[21][0]++;
        cov_24qwo4u96v().s[105]++;

        this._popper.scheduleUpdate();
      } else {
        cov_24qwo4u96v().b[21][1]++;
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      cov_24qwo4u96v().f[9]++;
      cov_24qwo4u96v().s[106]++;
      $(this._element).on(EVENT_CLICK, function (event) {
        cov_24qwo4u96v().f[10]++;
        cov_24qwo4u96v().s[107]++;
        event.preventDefault();
        cov_24qwo4u96v().s[108]++;
        event.stopPropagation();
        cov_24qwo4u96v().s[109]++;

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      cov_24qwo4u96v().f[11]++;
      cov_24qwo4u96v().s[110]++;
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      cov_24qwo4u96v().s[111]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_24qwo4u96v().s[112]++;
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      cov_24qwo4u96v().f[12]++;
      cov_24qwo4u96v().s[113]++;

      if (!this._menu) {
        cov_24qwo4u96v().b[22][0]++;
        var parent = (cov_24qwo4u96v().s[114]++, Dropdown._getParentFromElement(this._element));
        cov_24qwo4u96v().s[115]++;

        if (parent) {
          cov_24qwo4u96v().b[23][0]++;
          cov_24qwo4u96v().s[116]++;
          this._menu = parent.querySelector(SELECTOR_MENU);
        } else {
          cov_24qwo4u96v().b[23][1]++;
        }
      } else {
        cov_24qwo4u96v().b[22][1]++;
      }

      cov_24qwo4u96v().s[117]++;
      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      cov_24qwo4u96v().f[13]++;
      var $parentDropdown = (cov_24qwo4u96v().s[118]++, $(this._element.parentNode));
      var placement = (cov_24qwo4u96v().s[119]++, PLACEMENT_BOTTOM); // Handle dropup

      cov_24qwo4u96v().s[120]++;

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        cov_24qwo4u96v().b[24][0]++;
        cov_24qwo4u96v().s[121]++;
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? (cov_24qwo4u96v().b[25][0]++, PLACEMENT_TOPEND) : (cov_24qwo4u96v().b[25][1]++, PLACEMENT_TOP);
      } else {
        cov_24qwo4u96v().b[24][1]++;
        cov_24qwo4u96v().s[122]++;

        if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
          cov_24qwo4u96v().b[26][0]++;
          cov_24qwo4u96v().s[123]++;
          placement = PLACEMENT_RIGHT;
        } else {
          cov_24qwo4u96v().b[26][1]++;
          cov_24qwo4u96v().s[124]++;

          if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
            cov_24qwo4u96v().b[27][0]++;
            cov_24qwo4u96v().s[125]++;
            placement = PLACEMENT_LEFT;
          } else {
            cov_24qwo4u96v().b[27][1]++;
            cov_24qwo4u96v().s[126]++;

            if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
              cov_24qwo4u96v().b[28][0]++;
              cov_24qwo4u96v().s[127]++;
              placement = PLACEMENT_BOTTOMEND;
            } else {
              cov_24qwo4u96v().b[28][1]++;
            }
          }
        }
      }

      cov_24qwo4u96v().s[128]++;
      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      cov_24qwo4u96v().f[14]++;
      cov_24qwo4u96v().s[129]++;
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      cov_24qwo4u96v().f[15]++;
      var offset = (cov_24qwo4u96v().s[130]++, {});
      cov_24qwo4u96v().s[131]++;

      if (typeof this._config.offset === 'function') {
        cov_24qwo4u96v().b[29][0]++;
        cov_24qwo4u96v().s[132]++;

        offset.fn = function (data) {
          cov_24qwo4u96v().f[16]++;
          cov_24qwo4u96v().s[133]++;
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), (cov_24qwo4u96v().b[30][0]++, _this2._config.offset(data.offsets, _this2._element)) || (cov_24qwo4u96v().b[30][1]++, {}));
          cov_24qwo4u96v().s[134]++;
          return data;
        };
      } else {
        cov_24qwo4u96v().b[29][1]++;
        cov_24qwo4u96v().s[135]++;
        offset.offset = this._config.offset;
      }

      cov_24qwo4u96v().s[136]++;
      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      cov_24qwo4u96v().f[17]++;
      var popperConfig = (cov_24qwo4u96v().s[137]++, {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }); // Disable Popper.js if we have a static display

      cov_24qwo4u96v().s[138]++;

      if (this._config.display === 'static') {
        cov_24qwo4u96v().b[31][0]++;
        cov_24qwo4u96v().s[139]++;
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      } else {
        cov_24qwo4u96v().b[31][1]++;
      }

      cov_24qwo4u96v().s[140]++;
      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      cov_24qwo4u96v().f[18]++;
      cov_24qwo4u96v().s[141]++;
      return this.each(function () {
        cov_24qwo4u96v().f[19]++;
        var data = (cov_24qwo4u96v().s[142]++, $(this).data(DATA_KEY));

        var _config = (cov_24qwo4u96v().s[143]++, typeof config === 'object' ? (cov_24qwo4u96v().b[32][0]++, config) : (cov_24qwo4u96v().b[32][1]++, null));

        cov_24qwo4u96v().s[144]++;

        if (!data) {
          cov_24qwo4u96v().b[33][0]++;
          cov_24qwo4u96v().s[145]++;
          data = new Dropdown(this, _config);
          cov_24qwo4u96v().s[146]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_24qwo4u96v().b[33][1]++;
        }

        cov_24qwo4u96v().s[147]++;

        if (typeof config === 'string') {
          cov_24qwo4u96v().b[34][0]++;
          cov_24qwo4u96v().s[148]++;

          if (typeof data[config] === 'undefined') {
            cov_24qwo4u96v().b[35][0]++;
            cov_24qwo4u96v().s[149]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_24qwo4u96v().b[35][1]++;
          }

          cov_24qwo4u96v().s[150]++;
          data[config]();
        } else {
          cov_24qwo4u96v().b[34][1]++;
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      cov_24qwo4u96v().f[20]++;
      cov_24qwo4u96v().s[151]++;

      if ((cov_24qwo4u96v().b[37][0]++, event) && ((cov_24qwo4u96v().b[37][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_24qwo4u96v().b[37][2]++, event.type === 'keyup') && (cov_24qwo4u96v().b[37][3]++, event.which !== TAB_KEYCODE))) {
        cov_24qwo4u96v().b[36][0]++;
        cov_24qwo4u96v().s[152]++;
        return;
      } else {
        cov_24qwo4u96v().b[36][1]++;
      }

      var toggles = (cov_24qwo4u96v().s[153]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE)));
      cov_24qwo4u96v().s[154]++;

      for (var i = (cov_24qwo4u96v().s[155]++, 0), len = (cov_24qwo4u96v().s[156]++, toggles.length); i < len; i++) {
        var parent = (cov_24qwo4u96v().s[157]++, Dropdown._getParentFromElement(toggles[i]));
        var context = (cov_24qwo4u96v().s[158]++, $(toggles[i]).data(DATA_KEY));
        var relatedTarget = (cov_24qwo4u96v().s[159]++, {
          relatedTarget: toggles[i]
        });
        cov_24qwo4u96v().s[160]++;

        if ((cov_24qwo4u96v().b[39][0]++, event) && (cov_24qwo4u96v().b[39][1]++, event.type === 'click')) {
          cov_24qwo4u96v().b[38][0]++;
          cov_24qwo4u96v().s[161]++;
          relatedTarget.clickEvent = event;
        } else {
          cov_24qwo4u96v().b[38][1]++;
        }

        cov_24qwo4u96v().s[162]++;

        if (!context) {
          cov_24qwo4u96v().b[40][0]++;
          cov_24qwo4u96v().s[163]++;
          continue;
        } else {
          cov_24qwo4u96v().b[40][1]++;
        }

        var dropdownMenu = (cov_24qwo4u96v().s[164]++, context._menu);
        cov_24qwo4u96v().s[165]++;

        if (!$(parent).hasClass(CLASS_NAME_SHOW)) {
          cov_24qwo4u96v().b[41][0]++;
          cov_24qwo4u96v().s[166]++;
          continue;
        } else {
          cov_24qwo4u96v().b[41][1]++;
        }

        cov_24qwo4u96v().s[167]++;

        if ((cov_24qwo4u96v().b[43][0]++, event) && ((cov_24qwo4u96v().b[43][1]++, event.type === 'click') && (cov_24qwo4u96v().b[43][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_24qwo4u96v().b[43][3]++, event.type === 'keyup') && (cov_24qwo4u96v().b[43][4]++, event.which === TAB_KEYCODE)) && (cov_24qwo4u96v().b[43][5]++, $.contains(parent, event.target))) {
          cov_24qwo4u96v().b[42][0]++;
          cov_24qwo4u96v().s[168]++;
          continue;
        } else {
          cov_24qwo4u96v().b[42][1]++;
        }

        var hideEvent = (cov_24qwo4u96v().s[169]++, $.Event(EVENT_HIDE, relatedTarget));
        cov_24qwo4u96v().s[170]++;
        $(parent).trigger(hideEvent);
        cov_24qwo4u96v().s[171]++;

        if (hideEvent.isDefaultPrevented()) {
          cov_24qwo4u96v().b[44][0]++;
          cov_24qwo4u96v().s[172]++;
          continue;
        } else {
          cov_24qwo4u96v().b[44][1]++;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        cov_24qwo4u96v().s[173]++;

        if ('ontouchstart' in document.documentElement) {
          cov_24qwo4u96v().b[45][0]++;
          cov_24qwo4u96v().s[174]++;
          $(document.body).children().off('mouseover', null, $.noop);
        } else {
          cov_24qwo4u96v().b[45][1]++;
        }

        cov_24qwo4u96v().s[175]++;
        toggles[i].setAttribute('aria-expanded', 'false');
        cov_24qwo4u96v().s[176]++;

        if (context._popper) {
          cov_24qwo4u96v().b[46][0]++;
          cov_24qwo4u96v().s[177]++;

          context._popper.destroy();
        } else {
          cov_24qwo4u96v().b[46][1]++;
        }

        cov_24qwo4u96v().s[178]++;
        $(dropdownMenu).removeClass(CLASS_NAME_SHOW);
        cov_24qwo4u96v().s[179]++;
        $(parent).removeClass(CLASS_NAME_SHOW).trigger($.Event(EVENT_HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      cov_24qwo4u96v().f[21]++;
      var parent;
      var selector = (cov_24qwo4u96v().s[180]++, Util.getSelectorFromElement(element));
      cov_24qwo4u96v().s[181]++;

      if (selector) {
        cov_24qwo4u96v().b[47][0]++;
        cov_24qwo4u96v().s[182]++;
        parent = document.querySelector(selector);
      } else {
        cov_24qwo4u96v().b[47][1]++;
      }

      cov_24qwo4u96v().s[183]++;
      return (cov_24qwo4u96v().b[48][0]++, parent) || (cov_24qwo4u96v().b[48][1]++, element.parentNode);
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      cov_24qwo4u96v().f[22]++;
      cov_24qwo4u96v().s[184]++;

      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? (cov_24qwo4u96v().b[50][0]++, (cov_24qwo4u96v().b[51][0]++, event.which === SPACE_KEYCODE) || (cov_24qwo4u96v().b[51][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_24qwo4u96v().b[51][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_24qwo4u96v().b[51][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_24qwo4u96v().b[51][4]++, $(event.target).closest(SELECTOR_MENU).length))) : (cov_24qwo4u96v().b[50][1]++, !REGEXP_KEYDOWN.test(event.which))) {
        cov_24qwo4u96v().b[49][0]++;
        cov_24qwo4u96v().s[185]++;
        return;
      } else {
        cov_24qwo4u96v().b[49][1]++;
      }

      cov_24qwo4u96v().s[186]++;

      if ((cov_24qwo4u96v().b[53][0]++, this.disabled) || (cov_24qwo4u96v().b[53][1]++, $(this).hasClass(CLASS_NAME_DISABLED))) {
        cov_24qwo4u96v().b[52][0]++;
        cov_24qwo4u96v().s[187]++;
        return;
      } else {
        cov_24qwo4u96v().b[52][1]++;
      }

      var parent = (cov_24qwo4u96v().s[188]++, Dropdown._getParentFromElement(this));
      var isActive = (cov_24qwo4u96v().s[189]++, $(parent).hasClass(CLASS_NAME_SHOW));
      cov_24qwo4u96v().s[190]++;

      if ((cov_24qwo4u96v().b[55][0]++, !isActive) && (cov_24qwo4u96v().b[55][1]++, event.which === ESCAPE_KEYCODE)) {
        cov_24qwo4u96v().b[54][0]++;
        cov_24qwo4u96v().s[191]++;
        return;
      } else {
        cov_24qwo4u96v().b[54][1]++;
      }

      cov_24qwo4u96v().s[192]++;
      event.preventDefault();
      cov_24qwo4u96v().s[193]++;
      event.stopPropagation();
      cov_24qwo4u96v().s[194]++;

      if ((cov_24qwo4u96v().b[57][0]++, !isActive) || (cov_24qwo4u96v().b[57][1]++, isActive) && ((cov_24qwo4u96v().b[57][2]++, event.which === ESCAPE_KEYCODE) || (cov_24qwo4u96v().b[57][3]++, event.which === SPACE_KEYCODE))) {
        cov_24qwo4u96v().b[56][0]++;
        cov_24qwo4u96v().s[195]++;

        if (event.which === ESCAPE_KEYCODE) {
          cov_24qwo4u96v().b[58][0]++;
          cov_24qwo4u96v().s[196]++;
          $(parent.querySelector(SELECTOR_DATA_TOGGLE)).trigger('focus');
        } else {
          cov_24qwo4u96v().b[58][1]++;
        }

        cov_24qwo4u96v().s[197]++;
        $(this).trigger('click');
        cov_24qwo4u96v().s[198]++;
        return;
      } else {
        cov_24qwo4u96v().b[56][1]++;
      }

      var items = (cov_24qwo4u96v().s[199]++, [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        cov_24qwo4u96v().f[23]++;
        cov_24qwo4u96v().s[200]++;
        return $(item).is(':visible');
      }));
      cov_24qwo4u96v().s[201]++;

      if (items.length === 0) {
        cov_24qwo4u96v().b[59][0]++;
        cov_24qwo4u96v().s[202]++;
        return;
      } else {
        cov_24qwo4u96v().b[59][1]++;
      }

      var index = (cov_24qwo4u96v().s[203]++, items.indexOf(event.target));
      cov_24qwo4u96v().s[204]++;

      if ((cov_24qwo4u96v().b[61][0]++, event.which === ARROW_UP_KEYCODE) && (cov_24qwo4u96v().b[61][1]++, index > 0)) {
        cov_24qwo4u96v().b[60][0]++;
        cov_24qwo4u96v().s[205]++;
        // Up
        index--;
      } else {
        cov_24qwo4u96v().b[60][1]++;
      }

      cov_24qwo4u96v().s[206]++;

      if ((cov_24qwo4u96v().b[63][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_24qwo4u96v().b[63][1]++, index < items.length - 1)) {
        cov_24qwo4u96v().b[62][0]++;
        cov_24qwo4u96v().s[207]++;
        // Down
        index++;
      } else {
        cov_24qwo4u96v().b[62][1]++;
      }

      cov_24qwo4u96v().s[208]++;

      if (index < 0) {
        cov_24qwo4u96v().b[64][0]++;
        cov_24qwo4u96v().s[209]++;
        index = 0;
      } else {
        cov_24qwo4u96v().b[64][1]++;
      }

      cov_24qwo4u96v().s[210]++;
      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        cov_24qwo4u96v().f[1]++;
        cov_24qwo4u96v().s[47]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_24qwo4u96v().f[2]++;
        cov_24qwo4u96v().s[48]++;
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_24qwo4u96v().f[3]++;
        cov_24qwo4u96v().s[49]++;
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_24qwo4u96v().s[211]++;
  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    cov_24qwo4u96v().f[24]++;
    cov_24qwo4u96v().s[212]++;
    event.preventDefault();
    cov_24qwo4u96v().s[213]++;
    event.stopPropagation();
    cov_24qwo4u96v().s[214]++;

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API, SELECTOR_FORM_CHILD, function (e) {
    cov_24qwo4u96v().f[25]++;
    cov_24qwo4u96v().s[215]++;
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_24qwo4u96v().s[216]++;
  $.fn[NAME] = Dropdown._jQueryInterface;
  cov_24qwo4u96v().s[217]++;
  $.fn[NAME].Constructor = Dropdown;
  cov_24qwo4u96v().s[218]++;

  $.fn[NAME].noConflict = function () {
    cov_24qwo4u96v().f[26]++;
    cov_24qwo4u96v().s[219]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_24qwo4u96v().s[220]++;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map
