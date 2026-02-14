/*!
  * Bootstrap carousel.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Carousel = factory(global.jQuery, global.Util));
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

  function cov_1mg5cwsdnl() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\carousel.js";
    var hash = "5404d02c875760d85f06f96403c72349ffbe64a0";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 31
          },
          end: {
            line: 17,
            column: 41
          }
        },
        "1": {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 18,
            column: 38
          }
        },
        "2": {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 44
          }
        },
        "3": {
          start: {
            line: 20,
            column: 31
          },
          end: {
            line: 20,
            column: 45
          }
        },
        "4": {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 21,
            column: 42
          }
        },
        "5": {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "6": {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 23,
            column: 33
          }
        },
        "7": {
          start: {
            line: 24,
            column: 31
          },
          end: {
            line: 24,
            column: 33
          }
        },
        "8": {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 34
          }
        },
        "9": {
          start: {
            line: 26,
            column: 31
          },
          end: {
            line: 26,
            column: 33
          }
        },
        "10": {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 35,
            column: 1
          }
        },
        "11": {
          start: {
            line: 37,
            column: 20
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "12": {
          start: {
            line: 46,
            column: 27
          },
          end: {
            line: 46,
            column: 33
          }
        },
        "13": {
          start: {
            line: 47,
            column: 27
          },
          end: {
            line: 47,
            column: 33
          }
        },
        "14": {
          start: {
            line: 48,
            column: 27
          },
          end: {
            line: 48,
            column: 33
          }
        },
        "15": {
          start: {
            line: 49,
            column: 27
          },
          end: {
            line: 49,
            column: 34
          }
        },
        "16": {
          start: {
            line: 51,
            column: 29
          },
          end: {
            line: 51,
            column: 48
          }
        },
        "17": {
          start: {
            line: 52,
            column: 29
          },
          end: {
            line: 52,
            column: 47
          }
        },
        "18": {
          start: {
            line: 53,
            column: 29
          },
          end: {
            line: 53,
            column: 50
          }
        },
        "19": {
          start: {
            line: 54,
            column: 29
          },
          end: {
            line: 54,
            column: 53
          }
        },
        "20": {
          start: {
            line: 55,
            column: 29
          },
          end: {
            line: 55,
            column: 53
          }
        },
        "21": {
          start: {
            line: 56,
            column: 29
          },
          end: {
            line: 56,
            column: 53
          }
        },
        "22": {
          start: {
            line: 57,
            column: 29
          },
          end: {
            line: 57,
            column: 52
          }
        },
        "23": {
          start: {
            line: 58,
            column: 29
          },
          end: {
            line: 58,
            column: 51
          }
        },
        "24": {
          start: {
            line: 59,
            column: 29
          },
          end: {
            line: 59,
            column: 54
          }
        },
        "25": {
          start: {
            line: 60,
            column: 29
          },
          end: {
            line: 60,
            column: 52
          }
        },
        "26": {
          start: {
            line: 61,
            column: 29
          },
          end: {
            line: 61,
            column: 52
          }
        },
        "27": {
          start: {
            line: 62,
            column: 29
          },
          end: {
            line: 62,
            column: 62
          }
        },
        "28": {
          start: {
            line: 63,
            column: 29
          },
          end: {
            line: 63,
            column: 63
          }
        },
        "29": {
          start: {
            line: 65,
            column: 33
          },
          end: {
            line: 65,
            column: 43
          }
        },
        "30": {
          start: {
            line: 66,
            column: 33
          },
          end: {
            line: 66,
            column: 41
          }
        },
        "31": {
          start: {
            line: 67,
            column: 33
          },
          end: {
            line: 67,
            column: 40
          }
        },
        "32": {
          start: {
            line: 68,
            column: 33
          },
          end: {
            line: 68,
            column: 54
          }
        },
        "33": {
          start: {
            line: 69,
            column: 33
          },
          end: {
            line: 69,
            column: 53
          }
        },
        "34": {
          start: {
            line: 70,
            column: 33
          },
          end: {
            line: 70,
            column: 53
          }
        },
        "35": {
          start: {
            line: 71,
            column: 33
          },
          end: {
            line: 71,
            column: 53
          }
        },
        "36": {
          start: {
            line: 72,
            column: 33
          },
          end: {
            line: 72,
            column: 48
          }
        },
        "37": {
          start: {
            line: 74,
            column: 29
          },
          end: {
            line: 74,
            column: 38
          }
        },
        "38": {
          start: {
            line: 75,
            column: 29
          },
          end: {
            line: 75,
            column: 52
          }
        },
        "39": {
          start: {
            line: 76,
            column: 29
          },
          end: {
            line: 76,
            column: 45
          }
        },
        "40": {
          start: {
            line: 77,
            column: 29
          },
          end: {
            line: 77,
            column: 49
          }
        },
        "41": {
          start: {
            line: 78,
            column: 29
          },
          end: {
            line: 78,
            column: 71
          }
        },
        "42": {
          start: {
            line: 79,
            column: 29
          },
          end: {
            line: 79,
            column: 51
          }
        },
        "43": {
          start: {
            line: 80,
            column: 29
          },
          end: {
            line: 80,
            column: 60
          }
        },
        "44": {
          start: {
            line: 81,
            column: 29
          },
          end: {
            line: 81,
            column: 53
          }
        },
        "45": {
          start: {
            line: 83,
            column: 20
          },
          end: {
            line: 86,
            column: 1
          }
        },
        "46": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 30
          }
        },
        "47": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 30
          }
        },
        "48": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 30
          }
        },
        "49": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 31
          }
        },
        "50": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 31
          }
        },
        "51": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 30
          }
        },
        "52": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 27
          }
        },
        "53": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 27
          }
        },
        "54": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 53
          }
        },
        "55": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 37
          }
        },
        "56": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 78
          }
        },
        "57": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 104
          }
        },
        "58": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 83
          }
        },
        "59": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 29
          }
        },
        "60": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 18
          }
        },
        "61": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 18
          }
        },
        "62": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        "63": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 33
          }
        },
        "64": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        },
        "65": {
          start: {
            line: 136,
            column: 6
          },
          end: {
            line: 136,
            column: 17
          }
        },
        "66": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 143,
            column: 5
          }
        },
        "67": {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 142,
            column: 33
          }
        },
        "68": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        "69": {
          start: {
            line: 148,
            column: 6
          },
          end: {
            line: 148,
            column: 27
          }
        },
        "70": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "71": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 46
          }
        },
        "72": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 22
          }
        },
        "73": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 156,
            column: 33
          }
        },
        "74": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 25
          }
        },
        "75": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "76": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 28
          }
        },
        "77": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        },
        "78": {
          start: {
            line: 166,
            column: 6
          },
          end: {
            line: 166,
            column: 35
          }
        },
        "79": {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 167,
            column: 27
          }
        },
        "80": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        },
        "81": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 174,
            column: 7
          }
        },
        "82": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 75
          }
        },
        "83": {
          start: {
            line: 181,
            column: 24
          },
          end: {
            line: 181,
            column: 63
          }
        },
        "84": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        "85": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 12
          }
        },
        "86": {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "87": {
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 188,
            column: 60
          }
        },
        "88": {
          start: {
            line: 188,
            column: 45
          },
          end: {
            line: 188,
            column: 59
          }
        },
        "89": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 12
          }
        },
        "90": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        "91": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 18
          }
        },
        "92": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 194,
            column: 18
          }
        },
        "93": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 12
          }
        },
        "94": {
          start: {
            line: 198,
            column: 22
          },
          end: {
            line: 200,
            column: 22
          }
        },
        "95": {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 202,
            column: 46
          }
        },
        "96": {
          start: {
            line: 206,
            column: 4
          },
          end: {
            line: 206,
            column: 35
          }
        },
        "97": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 41
          }
        },
        "98": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 34
          }
        },
        "99": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 34
          }
        },
        "100": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 34
          }
        },
        "101": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 34
          }
        },
        "102": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 34
          }
        },
        "103": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 34
          }
        },
        "104": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 34
          }
        },
        "105": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 34
          }
        },
        "106": {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 225,
            column: 5
          }
        },
        "107": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 51
          }
        },
        "108": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 17
          }
        },
        "109": {
          start: {
            line: 231,
            column: 22
          },
          end: {
            line: 231,
            column: 48
          }
        },
        "110": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        },
        "111": {
          start: {
            line: 234,
            column: 6
          },
          end: {
            line: 234,
            column: 12
          }
        },
        "112": {
          start: {
            line: 237,
            column: 22
          },
          end: {
            line: 237,
            column: 50
          }
        },
        "113": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 239,
            column: 24
          }
        },
        "114": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        "115": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 243,
            column: 17
          }
        },
        "116": {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 249,
            column: 5
          }
        },
        "117": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 248,
            column: 17
          }
        },
        "118": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 255,
            column: 5
          }
        },
        "119": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 73
          }
        },
        "120": {
          start: {
            line: 254,
            column: 52
          },
          end: {
            line: 254,
            column: 72
          }
        },
        "121": {
          start: {
            line: 257,
            column: 4
          },
          end: {
            line: 261,
            column: 5
          }
        },
        "122": {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 260,
            column: 59
          }
        },
        "123": {
          start: {
            line: 259,
            column: 41
          },
          end: {
            line: 259,
            column: 58
          }
        },
        "124": {
          start: {
            line: 260,
            column: 41
          },
          end: {
            line: 260,
            column: 58
          }
        },
        "125": {
          start: {
            line: 263,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        "126": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 36
          }
        },
        "127": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        "128": {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 270,
            column: 12
          }
        },
        "129": {
          start: {
            line: 273,
            column: 18
          },
          end: {
            line: 279,
            column: 5
          }
        },
        "130": {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 278,
            column: 7
          }
        },
        "131": {
          start: {
            line: 275,
            column: 8
          },
          end: {
            line: 275,
            column: 54
          }
        },
        "132": {
          start: {
            line: 276,
            column: 13
          },
          end: {
            line: 278,
            column: 7
          }
        },
        "133": {
          start: {
            line: 277,
            column: 8
          },
          end: {
            line: 277,
            column: 65
          }
        },
        "134": {
          start: {
            line: 281,
            column: 17
          },
          end: {
            line: 288,
            column: 5
          }
        },
        "135": {
          start: {
            line: 283,
            column: 6
          },
          end: {
            line: 287,
            column: 7
          }
        },
        "136": {
          start: {
            line: 284,
            column: 8
          },
          end: {
            line: 284,
            column: 28
          }
        },
        "137": {
          start: {
            line: 286,
            column: 8
          },
          end: {
            line: 286,
            column: 84
          }
        },
        "138": {
          start: {
            line: 290,
            column: 16
          },
          end: {
            line: 311,
            column: 5
          }
        },
        "139": {
          start: {
            line: 291,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        },
        "140": {
          start: {
            line: 292,
            column: 8
          },
          end: {
            line: 292,
            column: 73
          }
        },
        "141": {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 295,
            column: 25
          }
        },
        "142": {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 310,
            column: 7
          }
        },
        "143": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 20
          }
        },
        "144": {
          start: {
            line: 306,
            column: 8
          },
          end: {
            line: 308,
            column: 9
          }
        },
        "145": {
          start: {
            line: 307,
            column: 10
          },
          end: {
            line: 307,
            column: 41
          }
        },
        "146": {
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 309,
            column: 116
          }
        },
        "147": {
          start: {
            line: 309,
            column: 50
          },
          end: {
            line: 309,
            column: 67
          }
        },
        "148": {
          start: {
            line: 313,
            column: 4
          },
          end: {
            line: 314,
            column: 54
          }
        },
        "149": {
          start: {
            line: 314,
            column: 35
          },
          end: {
            line: 314,
            column: 53
          }
        },
        "150": {
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 325,
            column: 5
          }
        },
        "151": {
          start: {
            line: 317,
            column: 6
          },
          end: {
            line: 317,
            column: 69
          }
        },
        "152": {
          start: {
            line: 317,
            column: 56
          },
          end: {
            line: 317,
            column: 68
          }
        },
        "153": {
          start: {
            line: 318,
            column: 6
          },
          end: {
            line: 318,
            column: 65
          }
        },
        "154": {
          start: {
            line: 318,
            column: 54
          },
          end: {
            line: 318,
            column: 64
          }
        },
        "155": {
          start: {
            line: 320,
            column: 6
          },
          end: {
            line: 320,
            column: 59
          }
        },
        "156": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 68
          }
        },
        "157": {
          start: {
            line: 322,
            column: 55
          },
          end: {
            line: 322,
            column: 67
          }
        },
        "158": {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 323,
            column: 66
          }
        },
        "159": {
          start: {
            line: 323,
            column: 54
          },
          end: {
            line: 323,
            column: 65
          }
        },
        "160": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 64
          }
        },
        "161": {
          start: {
            line: 324,
            column: 53
          },
          end: {
            line: 324,
            column: 63
          }
        },
        "162": {
          start: {
            line: 329,
            column: 4
          },
          end: {
            line: 331,
            column: 5
          }
        },
        "163": {
          start: {
            line: 330,
            column: 6
          },
          end: {
            line: 330,
            column: 12
          }
        },
        "164": {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 343,
            column: 5
          }
        },
        "165": {
          start: {
            line: 335,
            column: 8
          },
          end: {
            line: 335,
            column: 30
          }
        },
        "166": {
          start: {
            line: 336,
            column: 8
          },
          end: {
            line: 336,
            column: 19
          }
        },
        "167": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 337,
            column: 13
          }
        },
        "168": {
          start: {
            line: 339,
            column: 8
          },
          end: {
            line: 339,
            column: 30
          }
        },
        "169": {
          start: {
            line: 340,
            column: 8
          },
          end: {
            line: 340,
            column: 19
          }
        },
        "170": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 13
          }
        },
        "171": {
          start: {
            line: 347,
            column: 4
          },
          end: {
            line: 349,
            column: 10
          }
        },
        "172": {
          start: {
            line: 350,
            column: 4
          },
          end: {
            line: 350,
            column: 39
          }
        },
        "173": {
          start: {
            line: 354,
            column: 28
          },
          end: {
            line: 354,
            column: 56
          }
        },
        "174": {
          start: {
            line: 355,
            column: 28
          },
          end: {
            line: 355,
            column: 56
          }
        },
        "175": {
          start: {
            line: 356,
            column: 28
          },
          end: {
            line: 356,
            column: 61
          }
        },
        "176": {
          start: {
            line: 357,
            column: 28
          },
          end: {
            line: 357,
            column: 50
          }
        },
        "177": {
          start: {
            line: 358,
            column: 28
          },
          end: {
            line: 359,
            column: 76
          }
        },
        "178": {
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 363,
            column: 5
          }
        },
        "179": {
          start: {
            line: 362,
            column: 6
          },
          end: {
            line: 362,
            column: 26
          }
        },
        "180": {
          start: {
            line: 365,
            column: 22
          },
          end: {
            line: 365,
            column: 59
          }
        },
        "181": {
          start: {
            line: 366,
            column: 22
          },
          end: {
            line: 366,
            column: 64
          }
        },
        "182": {
          start: {
            line: 368,
            column: 4
          },
          end: {
            line: 369,
            column: 68
          }
        },
        "183": {
          start: {
            line: 373,
            column: 24
          },
          end: {
            line: 373,
            column: 57
          }
        },
        "184": {
          start: {
            line: 374,
            column: 22
          },
          end: {
            line: 374,
            column: 91
          }
        },
        "185": {
          start: {
            line: 375,
            column: 23
          },
          end: {
            line: 380,
            column: 6
          }
        },
        "186": {
          start: {
            line: 382,
            column: 4
          },
          end: {
            line: 382,
            column: 40
          }
        },
        "187": {
          start: {
            line: 384,
            column: 4
          },
          end: {
            line: 384,
            column: 21
          }
        },
        "188": {
          start: {
            line: 388,
            column: 4
          },
          end: {
            line: 399,
            column: 5
          }
        },
        "189": {
          start: {
            line: 389,
            column: 25
          },
          end: {
            line: 389,
            column: 97
          }
        },
        "190": {
          start: {
            line: 390,
            column: 6
          },
          end: {
            line: 390,
            column: 50
          }
        },
        "191": {
          start: {
            line: 392,
            column: 28
          },
          end: {
            line: 394,
            column: 7
          }
        },
        "192": {
          start: {
            line: 396,
            column: 6
          },
          end: {
            line: 398,
            column: 7
          }
        },
        "193": {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 397,
            column: 52
          }
        },
        "194": {
          start: {
            line: 403,
            column: 26
          },
          end: {
            line: 403,
            column: 75
          }
        },
        "195": {
          start: {
            line: 404,
            column: 31
          },
          end: {
            line: 404,
            column: 64
          }
        },
        "196": {
          start: {
            line: 405,
            column: 26
          },
          end: {
            line: 406,
            column: 56
          }
        },
        "197": {
          start: {
            line: 407,
            column: 29
          },
          end: {
            line: 407,
            column: 60
          }
        },
        "198": {
          start: {
            line: 408,
            column: 22
          },
          end: {
            line: 408,
            column: 45
          }
        },
        "199": {
          start: {
            line: 414,
            column: 4
          },
          end: {
            line: 422,
            column: 5
          }
        },
        "200": {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 415,
            column: 44
          }
        },
        "201": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 416,
            column: 38
          }
        },
        "202": {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 417,
            column: 41
          }
        },
        "203": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 419,
            column: 45
          }
        },
        "204": {
          start: {
            line: 420,
            column: 6
          },
          end: {
            line: 420,
            column: 38
          }
        },
        "205": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 42
          }
        },
        "206": {
          start: {
            line: 424,
            column: 4
          },
          end: {
            line: 427,
            column: 5
          }
        },
        "207": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 425,
            column: 29
          }
        },
        "208": {
          start: {
            line: 426,
            column: 6
          },
          end: {
            line: 426,
            column: 12
          }
        },
        "209": {
          start: {
            line: 429,
            column: 23
          },
          end: {
            line: 429,
            column: 79
          }
        },
        "210": {
          start: {
            line: 430,
            column: 4
          },
          end: {
            line: 432,
            column: 5
          }
        },
        "211": {
          start: {
            line: 431,
            column: 6
          },
          end: {
            line: 431,
            column: 12
          }
        },
        "212": {
          start: {
            line: 434,
            column: 4
          },
          end: {
            line: 437,
            column: 5
          }
        },
        "213": {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 436,
            column: 12
          }
        },
        "214": {
          start: {
            line: 439,
            column: 4
          },
          end: {
            line: 439,
            column: 26
          }
        },
        "215": {
          start: {
            line: 441,
            column: 4
          },
          end: {
            line: 443,
            column: 5
          }
        },
        "216": {
          start: {
            line: 442,
            column: 6
          },
          end: {
            line: 442,
            column: 18
          }
        },
        "217": {
          start: {
            line: 445,
            column: 4
          },
          end: {
            line: 445,
            column: 48
          }
        },
        "218": {
          start: {
            line: 447,
            column: 22
          },
          end: {
            line: 452,
            column: 6
          }
        },
        "219": {
          start: {
            line: 454,
            column: 4
          },
          end: {
            line: 491,
            column: 5
          }
        },
        "220": {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 455,
            column: 45
          }
        },
        "221": {
          start: {
            line: 457,
            column: 6
          },
          end: {
            line: 457,
            column: 30
          }
        },
        "222": {
          start: {
            line: 459,
            column: 6
          },
          end: {
            line: 459,
            column: 53
          }
        },
        "223": {
          start: {
            line: 460,
            column: 6
          },
          end: {
            line: 460,
            column: 51
          }
        },
        "224": {
          start: {
            line: 462,
            column: 34
          },
          end: {
            line: 462,
            column: 89
          }
        },
        "225": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 468,
            column: 7
          }
        },
        "226": {
          start: {
            line: 464,
            column: 8
          },
          end: {
            line: 464,
            column: 92
          }
        },
        "227": {
          start: {
            line: 465,
            column: 8
          },
          end: {
            line: 465,
            column: 51
          }
        },
        "228": {
          start: {
            line: 467,
            column: 8
          },
          end: {
            line: 467,
            column: 85
          }
        },
        "229": {
          start: {
            line: 470,
            column: 33
          },
          end: {
            line: 470,
            column: 85
          }
        },
        "230": {
          start: {
            line: 472,
            column: 6
          },
          end: {
            line: 484,
            column: 49
          }
        },
        "231": {
          start: {
            line: 474,
            column: 10
          },
          end: {
            line: 476,
            column: 40
          }
        },
        "232": {
          start: {
            line: 478,
            column: 10
          },
          end: {
            line: 478,
            column: 104
          }
        },
        "233": {
          start: {
            line: 480,
            column: 10
          },
          end: {
            line: 480,
            column: 33
          }
        },
        "234": {
          start: {
            line: 482,
            column: 10
          },
          end: {
            line: 482,
            column: 66
          }
        },
        "235": {
          start: {
            line: 482,
            column: 27
          },
          end: {
            line: 482,
            column: 62
          }
        },
        "236": {
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 486,
            column: 53
          }
        },
        "237": {
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 487,
            column: 48
          }
        },
        "238": {
          start: {
            line: 489,
            column: 6
          },
          end: {
            line: 489,
            column: 29
          }
        },
        "239": {
          start: {
            line: 490,
            column: 6
          },
          end: {
            line: 490,
            column: 41
          }
        },
        "240": {
          start: {
            line: 493,
            column: 4
          },
          end: {
            line: 495,
            column: 5
          }
        },
        "241": {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 494,
            column: 18
          }
        },
        "242": {
          start: {
            line: 501,
            column: 4
          },
          end: {
            line: 533,
            column: 6
          }
        },
        "243": {
          start: {
            line: 502,
            column: 17
          },
          end: {
            line: 502,
            column: 39
          }
        },
        "244": {
          start: {
            line: 503,
            column: 20
          },
          end: {
            line: 506,
            column: 7
          }
        },
        "245": {
          start: {
            line: 508,
            column: 6
          },
          end: {
            line: 513,
            column: 7
          }
        },
        "246": {
          start: {
            line: 509,
            column: 8
          },
          end: {
            line: 512,
            column: 9
          }
        },
        "247": {
          start: {
            line: 515,
            column: 21
          },
          end: {
            line: 515,
            column: 72
          }
        },
        "248": {
          start: {
            line: 517,
            column: 6
          },
          end: {
            line: 520,
            column: 7
          }
        },
        "249": {
          start: {
            line: 518,
            column: 8
          },
          end: {
            line: 518,
            column: 42
          }
        },
        "250": {
          start: {
            line: 519,
            column: 8
          },
          end: {
            line: 519,
            column: 36
          }
        },
        "251": {
          start: {
            line: 522,
            column: 6
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "252": {
          start: {
            line: 523,
            column: 8
          },
          end: {
            line: 523,
            column: 23
          }
        },
        "253": {
          start: {
            line: 524,
            column: 13
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "254": {
          start: {
            line: 525,
            column: 8
          },
          end: {
            line: 527,
            column: 9
          }
        },
        "255": {
          start: {
            line: 526,
            column: 10
          },
          end: {
            line: 526,
            column: 60
          }
        },
        "256": {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 528,
            column: 22
          }
        },
        "257": {
          start: {
            line: 529,
            column: 13
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "258": {
          start: {
            line: 530,
            column: 8
          },
          end: {
            line: 530,
            column: 20
          }
        },
        "259": {
          start: {
            line: 531,
            column: 8
          },
          end: {
            line: 531,
            column: 20
          }
        },
        "260": {
          start: {
            line: 537,
            column: 21
          },
          end: {
            line: 537,
            column: 54
          }
        },
        "261": {
          start: {
            line: 539,
            column: 4
          },
          end: {
            line: 541,
            column: 5
          }
        },
        "262": {
          start: {
            line: 540,
            column: 6
          },
          end: {
            line: 540,
            column: 12
          }
        },
        "263": {
          start: {
            line: 543,
            column: 19
          },
          end: {
            line: 543,
            column: 33
          }
        },
        "264": {
          start: {
            line: 545,
            column: 4
          },
          end: {
            line: 547,
            column: 5
          }
        },
        "265": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 546,
            column: 12
          }
        },
        "266": {
          start: {
            line: 549,
            column: 19
          },
          end: {
            line: 552,
            column: 5
          }
        },
        "267": {
          start: {
            line: 553,
            column: 23
          },
          end: {
            line: 553,
            column: 57
          }
        },
        "268": {
          start: {
            line: 555,
            column: 4
          },
          end: {
            line: 557,
            column: 5
          }
        },
        "269": {
          start: {
            line: 556,
            column: 6
          },
          end: {
            line: 556,
            column: 29
          }
        },
        "270": {
          start: {
            line: 559,
            column: 4
          },
          end: {
            line: 559,
            column: 53
          }
        },
        "271": {
          start: {
            line: 561,
            column: 4
          },
          end: {
            line: 563,
            column: 5
          }
        },
        "272": {
          start: {
            line: 562,
            column: 6
          },
          end: {
            line: 562,
            column: 45
          }
        },
        "273": {
          start: {
            line: 565,
            column: 4
          },
          end: {
            line: 565,
            column: 26
          }
        },
        "274": {
          start: {
            line: 575,
            column: 0
          },
          end: {
            line: 575,
            column: 88
          }
        },
        "275": {
          start: {
            line: 577,
            column: 0
          },
          end: {
            line: 583,
            column: 2
          }
        },
        "276": {
          start: {
            line: 578,
            column: 20
          },
          end: {
            line: 578,
            column: 80
          }
        },
        "277": {
          start: {
            line: 579,
            column: 2
          },
          end: {
            line: 582,
            column: 3
          }
        },
        "278": {
          start: {
            line: 579,
            column: 15
          },
          end: {
            line: 579,
            column: 16
          }
        },
        "279": {
          start: {
            line: 579,
            column: 24
          },
          end: {
            line: 579,
            column: 40
          }
        },
        "280": {
          start: {
            line: 580,
            column: 22
          },
          end: {
            line: 580,
            column: 37
          }
        },
        "281": {
          start: {
            line: 581,
            column: 4
          },
          end: {
            line: 581,
            column: 63
          }
        },
        "282": {
          start: {
            line: 591,
            column: 0
          },
          end: {
            line: 591,
            column: 38
          }
        },
        "283": {
          start: {
            line: 592,
            column: 0
          },
          end: {
            line: 592,
            column: 33
          }
        },
        "284": {
          start: {
            line: 593,
            column: 0
          },
          end: {
            line: 596,
            column: 1
          }
        },
        "285": {
          start: {
            line: 594,
            column: 2
          },
          end: {
            line: 594,
            column: 33
          }
        },
        "286": {
          start: {
            line: 595,
            column: 2
          },
          end: {
            line: 595,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          },
          loc: {
            start: {
              line: 94,
              column: 31
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 94
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 115,
              column: 2
            },
            end: {
              line: 115,
              column: 3
            }
          },
          loc: {
            start: {
              line: 115,
              column: 23
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 115
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 119,
              column: 2
            },
            end: {
              line: 119,
              column: 3
            }
          },
          loc: {
            start: {
              line: 119,
              column: 23
            },
            end: {
              line: 121,
              column: 3
            }
          },
          line: 119
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 125,
              column: 2
            },
            end: {
              line: 125,
              column: 3
            }
          },
          loc: {
            start: {
              line: 125,
              column: 9
            },
            end: {
              line: 129,
              column: 3
            }
          },
          line: 125
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 131,
              column: 2
            },
            end: {
              line: 131,
              column: 3
            }
          },
          loc: {
            start: {
              line: 131,
              column: 20
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 131
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 140,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          },
          loc: {
            start: {
              line: 140,
              column: 9
            },
            end: {
              line: 144,
              column: 3
            }
          },
          line: 140
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 146,
              column: 2
            },
            end: {
              line: 146,
              column: 3
            }
          },
          loc: {
            start: {
              line: 146,
              column: 15
            },
            end: {
              line: 158,
              column: 3
            }
          },
          line: 146
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 160,
              column: 2
            },
            end: {
              line: 160,
              column: 3
            }
          },
          loc: {
            start: {
              line: 160,
              column: 15
            },
            end: {
              line: 176,
              column: 3
            }
          },
          line: 160
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 178,
              column: 2
            },
            end: {
              line: 178,
              column: 3
            }
          },
          loc: {
            start: {
              line: 178,
              column: 12
            },
            end: {
              line: 203,
              column: 3
            }
          },
          line: 178
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 188,
              column: 39
            },
            end: {
              line: 188,
              column: 40
            }
          },
          loc: {
            start: {
              line: 188,
              column: 45
            },
            end: {
              line: 188,
              column: 59
            }
          },
          line: 188
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 205,
              column: 2
            },
            end: {
              line: 205,
              column: 3
            }
          },
          loc: {
            start: {
              line: 205,
              column: 12
            },
            end: {
              line: 217,
              column: 3
            }
          },
          line: 205
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 221,
              column: 2
            },
            end: {
              line: 221,
              column: 3
            }
          },
          loc: {
            start: {
              line: 221,
              column: 21
            },
            end: {
              line: 228,
              column: 3
            }
          },
          line: 221
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 230,
              column: 2
            },
            end: {
              line: 230,
              column: 3
            }
          },
          loc: {
            start: {
              line: 230,
              column: 17
            },
            end: {
              line: 250,
              column: 3
            }
          },
          line: 230
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 252,
              column: 2
            },
            end: {
              line: 252,
              column: 3
            }
          },
          loc: {
            start: {
              line: 252,
              column: 23
            },
            end: {
              line: 266,
              column: 3
            }
          },
          line: 252
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 254,
              column: 41
            },
            end: {
              line: 254,
              column: 42
            }
          },
          loc: {
            start: {
              line: 254,
              column: 52
            },
            end: {
              line: 254,
              column: 72
            }
          },
          line: 254
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 259,
              column: 30
            },
            end: {
              line: 259,
              column: 31
            }
          },
          loc: {
            start: {
              line: 259,
              column: 41
            },
            end: {
              line: 259,
              column: 58
            }
          },
          line: 259
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 260,
              column: 30
            },
            end: {
              line: 260,
              column: 31
            }
          },
          loc: {
            start: {
              line: 260,
              column: 41
            },
            end: {
              line: 260,
              column: 58
            }
          },
          line: 260
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 268,
              column: 2
            },
            end: {
              line: 268,
              column: 3
            }
          },
          loc: {
            start: {
              line: 268,
              column: 28
            },
            end: {
              line: 326,
              column: 3
            }
          },
          line: 268
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 273,
              column: 18
            },
            end: {
              line: 273,
              column: 19
            }
          },
          loc: {
            start: {
              line: 273,
              column: 29
            },
            end: {
              line: 279,
              column: 5
            }
          },
          line: 273
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 281,
              column: 17
            },
            end: {
              line: 281,
              column: 18
            }
          },
          loc: {
            start: {
              line: 281,
              column: 28
            },
            end: {
              line: 288,
              column: 5
            }
          },
          line: 281
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 290,
              column: 16
            },
            end: {
              line: 290,
              column: 17
            }
          },
          loc: {
            start: {
              line: 290,
              column: 27
            },
            end: {
              line: 311,
              column: 5
            }
          },
          line: 290
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 309,
              column: 39
            },
            end: {
              line: 309,
              column: 40
            }
          },
          loc: {
            start: {
              line: 309,
              column: 50
            },
            end: {
              line: 309,
              column: 67
            }
          },
          line: 309
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 314,
              column: 28
            },
            end: {
              line: 314,
              column: 29
            }
          },
          loc: {
            start: {
              line: 314,
              column: 35
            },
            end: {
              line: 314,
              column: 53
            }
          },
          line: 314
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 317,
              column: 45
            },
            end: {
              line: 317,
              column: 46
            }
          },
          loc: {
            start: {
              line: 317,
              column: 56
            },
            end: {
              line: 317,
              column: 68
            }
          },
          line: 317
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 318,
              column: 43
            },
            end: {
              line: 318,
              column: 44
            }
          },
          loc: {
            start: {
              line: 318,
              column: 54
            },
            end: {
              line: 318,
              column: 64
            }
          },
          line: 318
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 322,
              column: 44
            },
            end: {
              line: 322,
              column: 45
            }
          },
          loc: {
            start: {
              line: 322,
              column: 55
            },
            end: {
              line: 322,
              column: 67
            }
          },
          line: 322
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 323,
              column: 43
            },
            end: {
              line: 323,
              column: 44
            }
          },
          loc: {
            start: {
              line: 323,
              column: 54
            },
            end: {
              line: 323,
              column: 65
            }
          },
          line: 323
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 324,
              column: 42
            },
            end: {
              line: 324,
              column: 43
            }
          },
          loc: {
            start: {
              line: 324,
              column: 53
            },
            end: {
              line: 324,
              column: 63
            }
          },
          line: 324
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 328,
              column: 2
            },
            end: {
              line: 328,
              column: 3
            }
          },
          loc: {
            start: {
              line: 328,
              column: 18
            },
            end: {
              line: 344,
              column: 3
            }
          },
          line: 328
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 346,
              column: 2
            },
            end: {
              line: 346,
              column: 3
            }
          },
          loc: {
            start: {
              line: 346,
              column: 25
            },
            end: {
              line: 351,
              column: 3
            }
          },
          line: 346
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 353,
              column: 2
            },
            end: {
              line: 353,
              column: 3
            }
          },
          loc: {
            start: {
              line: 353,
              column: 48
            },
            end: {
              line: 370,
              column: 3
            }
          },
          line: 353
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 372,
              column: 2
            },
            end: {
              line: 372,
              column: 3
            }
          },
          loc: {
            start: {
              line: 372,
              column: 56
            },
            end: {
              line: 385,
              column: 3
            }
          },
          line: 372
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 387,
              column: 2
            },
            end: {
              line: 387,
              column: 3
            }
          },
          loc: {
            start: {
              line: 387,
              column: 38
            },
            end: {
              line: 400,
              column: 3
            }
          },
          line: 387
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 402,
              column: 2
            },
            end: {
              line: 402,
              column: 3
            }
          },
          loc: {
            start: {
              line: 402,
              column: 29
            },
            end: {
              line: 496,
              column: 3
            }
          },
          line: 402
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 473,
              column: 34
            },
            end: {
              line: 473,
              column: 35
            }
          },
          loc: {
            start: {
              line: 473,
              column: 40
            },
            end: {
              line: 483,
              column: 9
            }
          },
          line: 473
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 482,
              column: 21
            },
            end: {
              line: 482,
              column: 22
            }
          },
          loc: {
            start: {
              line: 482,
              column: 27
            },
            end: {
              line: 482,
              column: 62
            }
          },
          line: 482
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 500,
              column: 2
            },
            end: {
              line: 500,
              column: 3
            }
          },
          loc: {
            start: {
              line: 500,
              column: 34
            },
            end: {
              line: 534,
              column: 3
            }
          },
          line: 500
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 501,
              column: 21
            },
            end: {
              line: 501,
              column: 22
            }
          },
          loc: {
            start: {
              line: 501,
              column: 33
            },
            end: {
              line: 533,
              column: 5
            }
          },
          line: 501
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 536,
              column: 2
            },
            end: {
              line: 536,
              column: 3
            }
          },
          loc: {
            start: {
              line: 536,
              column: 37
            },
            end: {
              line: 566,
              column: 3
            }
          },
          line: 536
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 577,
              column: 34
            },
            end: {
              line: 577,
              column: 35
            }
          },
          loc: {
            start: {
              line: 577,
              column: 40
            },
            end: {
              line: 583,
              column: 1
            }
          },
          line: 577
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 593,
              column: 24
            },
            end: {
              line: 593,
              column: 25
            }
          },
          loc: {
            start: {
              line: 593,
              column: 30
            },
            end: {
              line: 596,
              column: 1
            }
          },
          line: 593
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 107,
              column: 30
            },
            end: {
              line: 107,
              column: 104
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 107,
              column: 30
            },
            end: {
              line: 107,
              column: 72
            }
          }, {
            start: {
              line: 107,
              column: 76
            },
            end: {
              line: 107,
              column: 104
            }
          }],
          line: 107
        },
        "1": {
          loc: {
            start: {
              line: 108,
              column: 38
            },
            end: {
              line: 108,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 108,
              column: 38
            },
            end: {
              line: 108,
              column: 57
            }
          }, {
            start: {
              line: 108,
              column: 61
            },
            end: {
              line: 108,
              column: 82
            }
          }],
          line: 108
        },
        "2": {
          loc: {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          }, {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 128,
              column: 5
            }
          }],
          line: 126
        },
        "3": {
          loc: {
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          }, {
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          }],
          line: 134
        },
        "4": {
          loc: {
            start: {
              line: 134,
              column: 8
            },
            end: {
              line: 135,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 134,
              column: 8
            },
            end: {
              line: 134,
              column: 24
            }
          }, {
            start: {
              line: 135,
              column: 7
            },
            end: {
              line: 135,
              column: 38
            }
          }, {
            start: {
              line: 135,
              column: 42
            },
            end: {
              line: 135,
              column: 89
            }
          }],
          line: 134
        },
        "5": {
          loc: {
            start: {
              line: 141,
              column: 4
            },
            end: {
              line: 143,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 141,
              column: 4
            },
            end: {
              line: 143,
              column: 5
            }
          }, {
            start: {
              line: 141,
              column: 4
            },
            end: {
              line: 143,
              column: 5
            }
          }],
          line: 141
        },
        "6": {
          loc: {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
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
              line: 149,
              column: 5
            }
          }, {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          }],
          line: 147
        },
        "7": {
          loc: {
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          }, {
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          }],
          line: 151
        },
        "8": {
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
        "9": {
          loc: {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 168,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 168,
              column: 5
            }
          }, {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 168,
              column: 5
            }
          }],
          line: 165
        },
        "10": {
          loc: {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 175,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 175,
              column: 5
            }
          }, {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 175,
              column: 5
            }
          }],
          line: 170
        },
        "11": {
          loc: {
            start: {
              line: 170,
              column: 8
            },
            end: {
              line: 170,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 170,
              column: 8
            },
            end: {
              line: 170,
              column: 29
            }
          }, {
            start: {
              line: 170,
              column: 33
            },
            end: {
              line: 170,
              column: 48
            }
          }],
          line: 170
        },
        "12": {
          loc: {
            start: {
              line: 172,
              column: 9
            },
            end: {
              line: 172,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 172,
              column: 36
            },
            end: {
              line: 172,
              column: 56
            }
          }, {
            start: {
              line: 172,
              column: 59
            },
            end: {
              line: 172,
              column: 68
            }
          }],
          line: 172
        },
        "13": {
          loc: {
            start: {
              line: 183,
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
              line: 183,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          }, {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          }],
          line: 183
        },
        "14": {
          loc: {
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 183,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 183,
              column: 38
            }
          }, {
            start: {
              line: 183,
              column: 42
            },
            end: {
              line: 183,
              column: 51
            }
          }],
          line: 183
        },
        "15": {
          loc: {
            start: {
              line: 187,
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
              line: 187,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }, {
            start: {
              line: 187,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }],
          line: 187
        },
        "16": {
          loc: {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          }, {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          }],
          line: 192
        },
        "17": {
          loc: {
            start: {
              line: 198,
              column: 22
            },
            end: {
              line: 200,
              column: 22
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 199,
              column: 22
            }
          }, {
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 200,
              column: 22
            }
          }],
          line: 198
        },
        "18": {
          loc: {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 235,
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
              line: 235,
              column: 5
            }
          }, {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 235,
              column: 5
            }
          }],
          line: 233
        },
        "19": {
          loc: {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }, {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }],
          line: 242
        },
        "20": {
          loc: {
            start: {
              line: 247,
              column: 4
            },
            end: {
              line: 249,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 247,
              column: 4
            },
            end: {
              line: 249,
              column: 5
            }
          }, {
            start: {
              line: 247,
              column: 4
            },
            end: {
              line: 249,
              column: 5
            }
          }],
          line: 247
        },
        "21": {
          loc: {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 255,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 255,
              column: 5
            }
          }, {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 255,
              column: 5
            }
          }],
          line: 253
        },
        "22": {
          loc: {
            start: {
              line: 257,
              column: 4
            },
            end: {
              line: 261,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 257,
              column: 4
            },
            end: {
              line: 261,
              column: 5
            }
          }, {
            start: {
              line: 257,
              column: 4
            },
            end: {
              line: 261,
              column: 5
            }
          }],
          line: 257
        },
        "23": {
          loc: {
            start: {
              line: 263,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 263,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }, {
            start: {
              line: 263,
              column: 4
            },
            end: {
              line: 265,
              column: 5
            }
          }],
          line: 263
        },
        "24": {
          loc: {
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 271,
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
              line: 271,
              column: 5
            }
          }, {
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          }],
          line: 269
        },
        "25": {
          loc: {
            start: {
              line: 274,
              column: 6
            },
            end: {
              line: 278,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 274,
              column: 6
            },
            end: {
              line: 278,
              column: 7
            }
          }, {
            start: {
              line: 274,
              column: 6
            },
            end: {
              line: 278,
              column: 7
            }
          }],
          line: 274
        },
        "26": {
          loc: {
            start: {
              line: 274,
              column: 10
            },
            end: {
              line: 274,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 274,
              column: 10
            },
            end: {
              line: 274,
              column: 28
            }
          }, {
            start: {
              line: 274,
              column: 32
            },
            end: {
              line: 274,
              column: 90
            }
          }],
          line: 274
        },
        "27": {
          loc: {
            start: {
              line: 276,
              column: 13
            },
            end: {
              line: 278,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 276,
              column: 13
            },
            end: {
              line: 278,
              column: 7
            }
          }, {
            start: {
              line: 276,
              column: 13
            },
            end: {
              line: 278,
              column: 7
            }
          }],
          line: 276
        },
        "28": {
          loc: {
            start: {
              line: 283,
              column: 6
            },
            end: {
              line: 287,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 283,
              column: 6
            },
            end: {
              line: 287,
              column: 7
            }
          }, {
            start: {
              line: 283,
              column: 6
            },
            end: {
              line: 287,
              column: 7
            }
          }],
          line: 283
        },
        "29": {
          loc: {
            start: {
              line: 283,
              column: 10
            },
            end: {
              line: 283,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 283,
              column: 10
            },
            end: {
              line: 283,
              column: 37
            }
          }, {
            start: {
              line: 283,
              column: 41
            },
            end: {
              line: 283,
              column: 79
            }
          }],
          line: 283
        },
        "30": {
          loc: {
            start: {
              line: 291,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 291,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          }, {
            start: {
              line: 291,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          }],
          line: 291
        },
        "31": {
          loc: {
            start: {
              line: 291,
              column: 10
            },
            end: {
              line: 291,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 291,
              column: 10
            },
            end: {
              line: 291,
              column: 28
            }
          }, {
            start: {
              line: 291,
              column: 32
            },
            end: {
              line: 291,
              column: 90
            }
          }],
          line: 291
        },
        "32": {
          loc: {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 310,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 310,
              column: 7
            }
          }, {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 310,
              column: 7
            }
          }],
          line: 296
        },
        "33": {
          loc: {
            start: {
              line: 306,
              column: 8
            },
            end: {
              line: 308,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 306,
              column: 8
            },
            end: {
              line: 308,
              column: 9
            }
          }, {
            start: {
              line: 306,
              column: 8
            },
            end: {
              line: 308,
              column: 9
            }
          }],
          line: 306
        },
        "34": {
          loc: {
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 325,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 325,
              column: 5
            }
          }, {
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 325,
              column: 5
            }
          }],
          line: 316
        },
        "35": {
          loc: {
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 331,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 331,
              column: 5
            }
          }, {
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 331,
              column: 5
            }
          }],
          line: 329
        },
        "36": {
          loc: {
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 343,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 334,
              column: 6
            },
            end: {
              line: 337,
              column: 13
            }
          }, {
            start: {
              line: 338,
              column: 6
            },
            end: {
              line: 341,
              column: 13
            }
          }, {
            start: {
              line: 342,
              column: 6
            },
            end: {
              line: 342,
              column: 14
            }
          }],
          line: 333
        },
        "37": {
          loc: {
            start: {
              line: 347,
              column: 18
            },
            end: {
              line: 349,
              column: 10
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 348,
              column: 8
            },
            end: {
              line: 348,
              column: 73
            }
          }, {
            start: {
              line: 349,
              column: 8
            },
            end: {
              line: 349,
              column: 10
            }
          }],
          line: 347
        },
        "38": {
          loc: {
            start: {
              line: 347,
              column: 18
            },
            end: {
              line: 347,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 347,
              column: 18
            },
            end: {
              line: 347,
              column: 25
            }
          }, {
            start: {
              line: 347,
              column: 29
            },
            end: {
              line: 347,
              column: 47
            }
          }],
          line: 347
        },
        "39": {
          loc: {
            start: {
              line: 358,
              column: 28
            },
            end: {
              line: 359,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 358,
              column: 28
            },
            end: {
              line: 358,
              column: 43
            }
          }, {
            start: {
              line: 358,
              column: 47
            },
            end: {
              line: 358,
              column: 64
            }
          }, {
            start: {
              line: 359,
              column: 28
            },
            end: {
              line: 359,
              column: 43
            }
          }, {
            start: {
              line: 359,
              column: 47
            },
            end: {
              line: 359,
              column: 76
            }
          }],
          line: 358
        },
        "40": {
          loc: {
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 363,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 363,
              column: 5
            }
          }, {
            start: {
              line: 361,
              column: 4
            },
            end: {
              line: 363,
              column: 5
            }
          }],
          line: 361
        },
        "41": {
          loc: {
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 361,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 361,
              column: 21
            }
          }, {
            start: {
              line: 361,
              column: 25
            },
            end: {
              line: 361,
              column: 43
            }
          }],
          line: 361
        },
        "42": {
          loc: {
            start: {
              line: 365,
              column: 22
            },
            end: {
              line: 365,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 365,
              column: 53
            },
            end: {
              line: 365,
              column: 55
            }
          }, {
            start: {
              line: 365,
              column: 58
            },
            end: {
              line: 365,
              column: 59
            }
          }],
          line: 365
        },
        "43": {
          loc: {
            start: {
              line: 368,
              column: 11
            },
            end: {
              line: 369,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 369,
              column: 43
            }
          }, {
            start: {
              line: 369,
              column: 46
            },
            end: {
              line: 369,
              column: 68
            }
          }],
          line: 368
        },
        "44": {
          loc: {
            start: {
              line: 388,
              column: 4
            },
            end: {
              line: 399,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 388,
              column: 4
            },
            end: {
              line: 399,
              column: 5
            }
          }, {
            start: {
              line: 388,
              column: 4
            },
            end: {
              line: 399,
              column: 5
            }
          }],
          line: 388
        },
        "45": {
          loc: {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
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
              line: 398,
              column: 7
            }
          }, {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          }],
          line: 396
        },
        "46": {
          loc: {
            start: {
              line: 405,
              column: 26
            },
            end: {
              line: 406,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 405,
              column: 26
            },
            end: {
              line: 405,
              column: 33
            }
          }, {
            start: {
              line: 405,
              column: 37
            },
            end: {
              line: 405,
              column: 50
            }
          }, {
            start: {
              line: 406,
              column: 6
            },
            end: {
              line: 406,
              column: 56
            }
          }],
          line: 405
        },
        "47": {
          loc: {
            start: {
              line: 414,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 414,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }, {
            start: {
              line: 414,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          }],
          line: 414
        },
        "48": {
          loc: {
            start: {
              line: 424,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 424,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          }, {
            start: {
              line: 424,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          }],
          line: 424
        },
        "49": {
          loc: {
            start: {
              line: 424,
              column: 8
            },
            end: {
              line: 424,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 424,
              column: 8
            },
            end: {
              line: 424,
              column: 19
            }
          }, {
            start: {
              line: 424,
              column: 23
            },
            end: {
              line: 424,
              column: 65
            }
          }],
          line: 424
        },
        "50": {
          loc: {
            start: {
              line: 430,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 430,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          }, {
            start: {
              line: 430,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          }],
          line: 430
        },
        "51": {
          loc: {
            start: {
              line: 434,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 434,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          }, {
            start: {
              line: 434,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          }],
          line: 434
        },
        "52": {
          loc: {
            start: {
              line: 434,
              column: 8
            },
            end: {
              line: 434,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 434,
              column: 8
            },
            end: {
              line: 434,
              column: 22
            }
          }, {
            start: {
              line: 434,
              column: 26
            },
            end: {
              line: 434,
              column: 38
            }
          }],
          line: 434
        },
        "53": {
          loc: {
            start: {
              line: 441,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 441,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          }, {
            start: {
              line: 441,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          }],
          line: 441
        },
        "54": {
          loc: {
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 491,
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
              line: 491,
              column: 5
            }
          }, {
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 491,
              column: 5
            }
          }],
          line: 454
        },
        "55": {
          loc: {
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 468,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 468,
              column: 7
            }
          }, {
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 468,
              column: 7
            }
          }],
          line: 463
        },
        "56": {
          loc: {
            start: {
              line: 464,
              column: 39
            },
            end: {
              line: 464,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 464,
              column: 39
            },
            end: {
              line: 464,
              column: 67
            }
          }, {
            start: {
              line: 464,
              column: 71
            },
            end: {
              line: 464,
              column: 92
            }
          }],
          line: 464
        },
        "57": {
          loc: {
            start: {
              line: 467,
              column: 32
            },
            end: {
              line: 467,
              column: 85
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 467,
              column: 32
            },
            end: {
              line: 467,
              column: 60
            }
          }, {
            start: {
              line: 467,
              column: 64
            },
            end: {
              line: 467,
              column: 85
            }
          }],
          line: 467
        },
        "58": {
          loc: {
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 495,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 495,
              column: 5
            }
          }, {
            start: {
              line: 493,
              column: 4
            },
            end: {
              line: 495,
              column: 5
            }
          }],
          line: 493
        },
        "59": {
          loc: {
            start: {
              line: 508,
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
              line: 508,
              column: 6
            },
            end: {
              line: 513,
              column: 7
            }
          }, {
            start: {
              line: 508,
              column: 6
            },
            end: {
              line: 513,
              column: 7
            }
          }],
          line: 508
        },
        "60": {
          loc: {
            start: {
              line: 515,
              column: 21
            },
            end: {
              line: 515,
              column: 72
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 515,
              column: 50
            },
            end: {
              line: 515,
              column: 56
            }
          }, {
            start: {
              line: 515,
              column: 59
            },
            end: {
              line: 515,
              column: 72
            }
          }],
          line: 515
        },
        "61": {
          loc: {
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 520,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 520,
              column: 7
            }
          }, {
            start: {
              line: 517,
              column: 6
            },
            end: {
              line: 520,
              column: 7
            }
          }],
          line: 517
        },
        "62": {
          loc: {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          }, {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          }],
          line: 522
        },
        "63": {
          loc: {
            start: {
              line: 524,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 524,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          }, {
            start: {
              line: 524,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          }],
          line: 524
        },
        "64": {
          loc: {
            start: {
              line: 525,
              column: 8
            },
            end: {
              line: 527,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 525,
              column: 8
            },
            end: {
              line: 527,
              column: 9
            }
          }, {
            start: {
              line: 525,
              column: 8
            },
            end: {
              line: 527,
              column: 9
            }
          }],
          line: 525
        },
        "65": {
          loc: {
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          }, {
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 532,
              column: 7
            }
          }],
          line: 529
        },
        "66": {
          loc: {
            start: {
              line: 529,
              column: 17
            },
            end: {
              line: 529,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 529,
              column: 17
            },
            end: {
              line: 529,
              column: 33
            }
          }, {
            start: {
              line: 529,
              column: 37
            },
            end: {
              line: 529,
              column: 49
            }
          }],
          line: 529
        },
        "67": {
          loc: {
            start: {
              line: 539,
              column: 4
            },
            end: {
              line: 541,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 539,
              column: 4
            },
            end: {
              line: 541,
              column: 5
            }
          }, {
            start: {
              line: 539,
              column: 4
            },
            end: {
              line: 541,
              column: 5
            }
          }],
          line: 539
        },
        "68": {
          loc: {
            start: {
              line: 545,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 545,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          }, {
            start: {
              line: 545,
              column: 4
            },
            end: {
              line: 547,
              column: 5
            }
          }],
          line: 545
        },
        "69": {
          loc: {
            start: {
              line: 545,
              column: 8
            },
            end: {
              line: 545,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 545,
              column: 8
            },
            end: {
              line: 545,
              column: 15
            }
          }, {
            start: {
              line: 545,
              column: 19
            },
            end: {
              line: 545,
              column: 59
            }
          }],
          line: 545
        },
        "70": {
          loc: {
            start: {
              line: 555,
              column: 4
            },
            end: {
              line: 557,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 555,
              column: 4
            },
            end: {
              line: 557,
              column: 5
            }
          }, {
            start: {
              line: 555,
              column: 4
            },
            end: {
              line: 557,
              column: 5
            }
          }],
          line: 555
        },
        "71": {
          loc: {
            start: {
              line: 561,
              column: 4
            },
            end: {
              line: 563,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 561,
              column: 4
            },
            end: {
              line: 563,
              column: 5
            }
          }, {
            start: {
              line: 561,
              column: 4
            },
            end: {
              line: 563,
              column: 5
            }
          }],
          line: 561
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
        "282": 0,
        "283": 0,
        "284": 0,
        "285": 0,
        "286": 0
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
        "40": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0, 0],
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
        "36": [0, 0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0, 0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0, 0],
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
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0],
        "71": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "5404d02c875760d85f06f96403c72349ffbe64a0"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1mg5cwsdnl = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1mg5cwsdnl();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1mg5cwsdnl().s[0]++, 'carousel');
  var VERSION = (cov_1mg5cwsdnl().s[1]++, '4.5.0');
  var DATA_KEY = (cov_1mg5cwsdnl().s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_1mg5cwsdnl().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1mg5cwsdnl().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1mg5cwsdnl().s[5]++, $.fn[NAME]);
  var ARROW_LEFT_KEYCODE = (cov_1mg5cwsdnl().s[6]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_1mg5cwsdnl().s[7]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_1mg5cwsdnl().s[8]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_1mg5cwsdnl().s[9]++, 40);
  var Default = (cov_1mg5cwsdnl().s[10]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_1mg5cwsdnl().s[11]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var DIRECTION_NEXT = (cov_1mg5cwsdnl().s[12]++, 'next');
  var DIRECTION_PREV = (cov_1mg5cwsdnl().s[13]++, 'prev');
  var DIRECTION_LEFT = (cov_1mg5cwsdnl().s[14]++, 'left');
  var DIRECTION_RIGHT = (cov_1mg5cwsdnl().s[15]++, 'right');
  var EVENT_SLIDE = (cov_1mg5cwsdnl().s[16]++, "slide" + EVENT_KEY);
  var EVENT_SLID = (cov_1mg5cwsdnl().s[17]++, "slid" + EVENT_KEY);
  var EVENT_KEYDOWN = (cov_1mg5cwsdnl().s[18]++, "keydown" + EVENT_KEY);
  var EVENT_MOUSEENTER = (cov_1mg5cwsdnl().s[19]++, "mouseenter" + EVENT_KEY);
  var EVENT_MOUSELEAVE = (cov_1mg5cwsdnl().s[20]++, "mouseleave" + EVENT_KEY);
  var EVENT_TOUCHSTART = (cov_1mg5cwsdnl().s[21]++, "touchstart" + EVENT_KEY);
  var EVENT_TOUCHMOVE = (cov_1mg5cwsdnl().s[22]++, "touchmove" + EVENT_KEY);
  var EVENT_TOUCHEND = (cov_1mg5cwsdnl().s[23]++, "touchend" + EVENT_KEY);
  var EVENT_POINTERDOWN = (cov_1mg5cwsdnl().s[24]++, "pointerdown" + EVENT_KEY);
  var EVENT_POINTERUP = (cov_1mg5cwsdnl().s[25]++, "pointerup" + EVENT_KEY);
  var EVENT_DRAG_START = (cov_1mg5cwsdnl().s[26]++, "dragstart" + EVENT_KEY);
  var EVENT_LOAD_DATA_API = (cov_1mg5cwsdnl().s[27]++, "load" + EVENT_KEY + DATA_API_KEY);
  var EVENT_CLICK_DATA_API = (cov_1mg5cwsdnl().s[28]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_CAROUSEL = (cov_1mg5cwsdnl().s[29]++, 'carousel');
  var CLASS_NAME_ACTIVE = (cov_1mg5cwsdnl().s[30]++, 'active');
  var CLASS_NAME_SLIDE = (cov_1mg5cwsdnl().s[31]++, 'slide');
  var CLASS_NAME_RIGHT = (cov_1mg5cwsdnl().s[32]++, 'carousel-item-right');
  var CLASS_NAME_LEFT = (cov_1mg5cwsdnl().s[33]++, 'carousel-item-left');
  var CLASS_NAME_NEXT = (cov_1mg5cwsdnl().s[34]++, 'carousel-item-next');
  var CLASS_NAME_PREV = (cov_1mg5cwsdnl().s[35]++, 'carousel-item-prev');
  var CLASS_NAME_POINTER_EVENT = (cov_1mg5cwsdnl().s[36]++, 'pointer-event');
  var SELECTOR_ACTIVE = (cov_1mg5cwsdnl().s[37]++, '.active');
  var SELECTOR_ACTIVE_ITEM = (cov_1mg5cwsdnl().s[38]++, '.active.carousel-item');
  var SELECTOR_ITEM = (cov_1mg5cwsdnl().s[39]++, '.carousel-item');
  var SELECTOR_ITEM_IMG = (cov_1mg5cwsdnl().s[40]++, '.carousel-item img');
  var SELECTOR_NEXT_PREV = (cov_1mg5cwsdnl().s[41]++, '.carousel-item-next, .carousel-item-prev');
  var SELECTOR_INDICATORS = (cov_1mg5cwsdnl().s[42]++, '.carousel-indicators');
  var SELECTOR_DATA_SLIDE = (cov_1mg5cwsdnl().s[43]++, '[data-slide], [data-slide-to]');
  var SELECTOR_DATA_RIDE = (cov_1mg5cwsdnl().s[44]++, '[data-ride="carousel"]');
  var PointerType = (cov_1mg5cwsdnl().s[45]++, {
    TOUCH: 'touch',
    PEN: 'pen'
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      cov_1mg5cwsdnl().f[0]++;
      cov_1mg5cwsdnl().s[46]++;
      this._items = null;
      cov_1mg5cwsdnl().s[47]++;
      this._interval = null;
      cov_1mg5cwsdnl().s[48]++;
      this._activeElement = null;
      cov_1mg5cwsdnl().s[49]++;
      this._isPaused = false;
      cov_1mg5cwsdnl().s[50]++;
      this._isSliding = false;
      cov_1mg5cwsdnl().s[51]++;
      this.touchTimeout = null;
      cov_1mg5cwsdnl().s[52]++;
      this.touchStartX = 0;
      cov_1mg5cwsdnl().s[53]++;
      this.touchDeltaX = 0;
      cov_1mg5cwsdnl().s[54]++;
      this._config = this._getConfig(config);
      cov_1mg5cwsdnl().s[55]++;
      this._element = element;
      cov_1mg5cwsdnl().s[56]++;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      cov_1mg5cwsdnl().s[57]++;
      this._touchSupported = (cov_1mg5cwsdnl().b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_1mg5cwsdnl().b[0][1]++, navigator.maxTouchPoints > 0);
      cov_1mg5cwsdnl().s[58]++;
      this._pointerEvent = Boolean((cov_1mg5cwsdnl().b[1][0]++, window.PointerEvent) || (cov_1mg5cwsdnl().b[1][1]++, window.MSPointerEvent));
      cov_1mg5cwsdnl().s[59]++;

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      cov_1mg5cwsdnl().f[3]++;
      cov_1mg5cwsdnl().s[62]++;

      if (!this._isSliding) {
        cov_1mg5cwsdnl().b[2][0]++;
        cov_1mg5cwsdnl().s[63]++;

        this._slide(DIRECTION_NEXT);
      } else {
        cov_1mg5cwsdnl().b[2][1]++;
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      cov_1mg5cwsdnl().f[4]++;
      cov_1mg5cwsdnl().s[64]++;

      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if ((cov_1mg5cwsdnl().b[4][0]++, !document.hidden) && (cov_1mg5cwsdnl().b[4][1]++, $(this._element).is(':visible')) && (cov_1mg5cwsdnl().b[4][2]++, $(this._element).css('visibility') !== 'hidden')) {
        cov_1mg5cwsdnl().b[3][0]++;
        cov_1mg5cwsdnl().s[65]++;
        this.next();
      } else {
        cov_1mg5cwsdnl().b[3][1]++;
      }
    };

    _proto.prev = function prev() {
      cov_1mg5cwsdnl().f[5]++;
      cov_1mg5cwsdnl().s[66]++;

      if (!this._isSliding) {
        cov_1mg5cwsdnl().b[5][0]++;
        cov_1mg5cwsdnl().s[67]++;

        this._slide(DIRECTION_PREV);
      } else {
        cov_1mg5cwsdnl().b[5][1]++;
      }
    };

    _proto.pause = function pause(event) {
      cov_1mg5cwsdnl().f[6]++;
      cov_1mg5cwsdnl().s[68]++;

      if (!event) {
        cov_1mg5cwsdnl().b[6][0]++;
        cov_1mg5cwsdnl().s[69]++;
        this._isPaused = true;
      } else {
        cov_1mg5cwsdnl().b[6][1]++;
      }

      cov_1mg5cwsdnl().s[70]++;

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        cov_1mg5cwsdnl().b[7][0]++;
        cov_1mg5cwsdnl().s[71]++;
        Util.triggerTransitionEnd(this._element);
        cov_1mg5cwsdnl().s[72]++;
        this.cycle(true);
      } else {
        cov_1mg5cwsdnl().b[7][1]++;
      }

      cov_1mg5cwsdnl().s[73]++;
      clearInterval(this._interval);
      cov_1mg5cwsdnl().s[74]++;
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      cov_1mg5cwsdnl().f[7]++;
      cov_1mg5cwsdnl().s[75]++;

      if (!event) {
        cov_1mg5cwsdnl().b[8][0]++;
        cov_1mg5cwsdnl().s[76]++;
        this._isPaused = false;
      } else {
        cov_1mg5cwsdnl().b[8][1]++;
      }

      cov_1mg5cwsdnl().s[77]++;

      if (this._interval) {
        cov_1mg5cwsdnl().b[9][0]++;
        cov_1mg5cwsdnl().s[78]++;
        clearInterval(this._interval);
        cov_1mg5cwsdnl().s[79]++;
        this._interval = null;
      } else {
        cov_1mg5cwsdnl().b[9][1]++;
      }

      cov_1mg5cwsdnl().s[80]++;

      if ((cov_1mg5cwsdnl().b[11][0]++, this._config.interval) && (cov_1mg5cwsdnl().b[11][1]++, !this._isPaused)) {
        cov_1mg5cwsdnl().b[10][0]++;
        cov_1mg5cwsdnl().s[81]++;
        this._interval = setInterval((document.visibilityState ? (cov_1mg5cwsdnl().b[12][0]++, this.nextWhenVisible) : (cov_1mg5cwsdnl().b[12][1]++, this.next)).bind(this), this._config.interval);
      } else {
        cov_1mg5cwsdnl().b[10][1]++;
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      cov_1mg5cwsdnl().f[8]++;
      cov_1mg5cwsdnl().s[82]++;
      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
      var activeIndex = (cov_1mg5cwsdnl().s[83]++, this._getItemIndex(this._activeElement));
      cov_1mg5cwsdnl().s[84]++;

      if ((cov_1mg5cwsdnl().b[14][0]++, index > this._items.length - 1) || (cov_1mg5cwsdnl().b[14][1]++, index < 0)) {
        cov_1mg5cwsdnl().b[13][0]++;
        cov_1mg5cwsdnl().s[85]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[13][1]++;
      }

      cov_1mg5cwsdnl().s[86]++;

      if (this._isSliding) {
        cov_1mg5cwsdnl().b[15][0]++;
        cov_1mg5cwsdnl().s[87]++;
        $(this._element).one(EVENT_SLID, function () {
          cov_1mg5cwsdnl().f[9]++;
          cov_1mg5cwsdnl().s[88]++;
          return _this.to(index);
        });
        cov_1mg5cwsdnl().s[89]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[15][1]++;
      }

      cov_1mg5cwsdnl().s[90]++;

      if (activeIndex === index) {
        cov_1mg5cwsdnl().b[16][0]++;
        cov_1mg5cwsdnl().s[91]++;
        this.pause();
        cov_1mg5cwsdnl().s[92]++;
        this.cycle();
        cov_1mg5cwsdnl().s[93]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[16][1]++;
      }

      var direction = (cov_1mg5cwsdnl().s[94]++, index > activeIndex ? (cov_1mg5cwsdnl().b[17][0]++, DIRECTION_NEXT) : (cov_1mg5cwsdnl().b[17][1]++, DIRECTION_PREV));
      cov_1mg5cwsdnl().s[95]++;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      cov_1mg5cwsdnl().f[10]++;
      cov_1mg5cwsdnl().s[96]++;
      $(this._element).off(EVENT_KEY);
      cov_1mg5cwsdnl().s[97]++;
      $.removeData(this._element, DATA_KEY);
      cov_1mg5cwsdnl().s[98]++;
      this._items = null;
      cov_1mg5cwsdnl().s[99]++;
      this._config = null;
      cov_1mg5cwsdnl().s[100]++;
      this._element = null;
      cov_1mg5cwsdnl().s[101]++;
      this._interval = null;
      cov_1mg5cwsdnl().s[102]++;
      this._isPaused = null;
      cov_1mg5cwsdnl().s[103]++;
      this._isSliding = null;
      cov_1mg5cwsdnl().s[104]++;
      this._activeElement = null;
      cov_1mg5cwsdnl().s[105]++;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_1mg5cwsdnl().f[11]++;
      cov_1mg5cwsdnl().s[106]++;
      config = _objectSpread2(_objectSpread2({}, Default), config);
      cov_1mg5cwsdnl().s[107]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_1mg5cwsdnl().s[108]++;
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      cov_1mg5cwsdnl().f[12]++;
      var absDeltax = (cov_1mg5cwsdnl().s[109]++, Math.abs(this.touchDeltaX));
      cov_1mg5cwsdnl().s[110]++;

      if (absDeltax <= SWIPE_THRESHOLD) {
        cov_1mg5cwsdnl().b[18][0]++;
        cov_1mg5cwsdnl().s[111]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[18][1]++;
      }

      var direction = (cov_1mg5cwsdnl().s[112]++, absDeltax / this.touchDeltaX);
      cov_1mg5cwsdnl().s[113]++;
      this.touchDeltaX = 0; // swipe left

      cov_1mg5cwsdnl().s[114]++;

      if (direction > 0) {
        cov_1mg5cwsdnl().b[19][0]++;
        cov_1mg5cwsdnl().s[115]++;
        this.prev();
      } else {
        cov_1mg5cwsdnl().b[19][1]++;
      } // swipe right


      cov_1mg5cwsdnl().s[116]++;

      if (direction < 0) {
        cov_1mg5cwsdnl().b[20][0]++;
        cov_1mg5cwsdnl().s[117]++;
        this.next();
      } else {
        cov_1mg5cwsdnl().b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_1mg5cwsdnl().f[13]++;
      cov_1mg5cwsdnl().s[118]++;

      if (this._config.keyboard) {
        cov_1mg5cwsdnl().b[21][0]++;
        cov_1mg5cwsdnl().s[119]++;
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          cov_1mg5cwsdnl().f[14]++;
          cov_1mg5cwsdnl().s[120]++;
          return _this2._keydown(event);
        });
      } else {
        cov_1mg5cwsdnl().b[21][1]++;
      }

      cov_1mg5cwsdnl().s[121]++;

      if (this._config.pause === 'hover') {
        cov_1mg5cwsdnl().b[22][0]++;
        cov_1mg5cwsdnl().s[122]++;
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          cov_1mg5cwsdnl().f[15]++;
          cov_1mg5cwsdnl().s[123]++;
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          cov_1mg5cwsdnl().f[16]++;
          cov_1mg5cwsdnl().s[124]++;
          return _this2.cycle(event);
        });
      } else {
        cov_1mg5cwsdnl().b[22][1]++;
      }

      cov_1mg5cwsdnl().s[125]++;

      if (this._config.touch) {
        cov_1mg5cwsdnl().b[23][0]++;
        cov_1mg5cwsdnl().s[126]++;

        this._addTouchEventListeners();
      } else {
        cov_1mg5cwsdnl().b[23][1]++;
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      cov_1mg5cwsdnl().f[17]++;
      cov_1mg5cwsdnl().s[127]++;

      if (!this._touchSupported) {
        cov_1mg5cwsdnl().b[24][0]++;
        cov_1mg5cwsdnl().s[128]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[24][1]++;
      }

      cov_1mg5cwsdnl().s[129]++;

      var start = function start(event) {
        cov_1mg5cwsdnl().f[18]++;
        cov_1mg5cwsdnl().s[130]++;

        if ((cov_1mg5cwsdnl().b[26][0]++, _this3._pointerEvent) && (cov_1mg5cwsdnl().b[26][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1mg5cwsdnl().b[25][0]++;
          cov_1mg5cwsdnl().s[131]++;
          _this3.touchStartX = event.originalEvent.clientX;
        } else {
          cov_1mg5cwsdnl().b[25][1]++;
          cov_1mg5cwsdnl().s[132]++;

          if (!_this3._pointerEvent) {
            cov_1mg5cwsdnl().b[27][0]++;
            cov_1mg5cwsdnl().s[133]++;
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          } else {
            cov_1mg5cwsdnl().b[27][1]++;
          }
        }
      };

      cov_1mg5cwsdnl().s[134]++;

      var move = function move(event) {
        cov_1mg5cwsdnl().f[19]++;
        cov_1mg5cwsdnl().s[135]++;

        // ensure swiping with one touch and not pinching
        if ((cov_1mg5cwsdnl().b[29][0]++, event.originalEvent.touches) && (cov_1mg5cwsdnl().b[29][1]++, event.originalEvent.touches.length > 1)) {
          cov_1mg5cwsdnl().b[28][0]++;
          cov_1mg5cwsdnl().s[136]++;
          _this3.touchDeltaX = 0;
        } else {
          cov_1mg5cwsdnl().b[28][1]++;
          cov_1mg5cwsdnl().s[137]++;
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      cov_1mg5cwsdnl().s[138]++;

      var end = function end(event) {
        cov_1mg5cwsdnl().f[20]++;
        cov_1mg5cwsdnl().s[139]++;

        if ((cov_1mg5cwsdnl().b[31][0]++, _this3._pointerEvent) && (cov_1mg5cwsdnl().b[31][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1mg5cwsdnl().b[30][0]++;
          cov_1mg5cwsdnl().s[140]++;
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        } else {
          cov_1mg5cwsdnl().b[30][1]++;
        }

        cov_1mg5cwsdnl().s[141]++;

        _this3._handleSwipe();

        cov_1mg5cwsdnl().s[142]++;

        if (_this3._config.pause === 'hover') {
          cov_1mg5cwsdnl().b[32][0]++;
          cov_1mg5cwsdnl().s[143]++;

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          cov_1mg5cwsdnl().s[144]++;

          if (_this3.touchTimeout) {
            cov_1mg5cwsdnl().b[33][0]++;
            cov_1mg5cwsdnl().s[145]++;
            clearTimeout(_this3.touchTimeout);
          } else {
            cov_1mg5cwsdnl().b[33][1]++;
          }

          cov_1mg5cwsdnl().s[146]++;
          _this3.touchTimeout = setTimeout(function (event) {
            cov_1mg5cwsdnl().f[21]++;
            cov_1mg5cwsdnl().s[147]++;
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        } else {
          cov_1mg5cwsdnl().b[32][1]++;
        }
      };

      cov_1mg5cwsdnl().s[148]++;
      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        cov_1mg5cwsdnl().f[22]++;
        cov_1mg5cwsdnl().s[149]++;
        return e.preventDefault();
      });
      cov_1mg5cwsdnl().s[150]++;

      if (this._pointerEvent) {
        cov_1mg5cwsdnl().b[34][0]++;
        cov_1mg5cwsdnl().s[151]++;
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          cov_1mg5cwsdnl().f[23]++;
          cov_1mg5cwsdnl().s[152]++;
          return start(event);
        });
        cov_1mg5cwsdnl().s[153]++;
        $(this._element).on(EVENT_POINTERUP, function (event) {
          cov_1mg5cwsdnl().f[24]++;
          cov_1mg5cwsdnl().s[154]++;
          return end(event);
        });
        cov_1mg5cwsdnl().s[155]++;

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        cov_1mg5cwsdnl().b[34][1]++;
        cov_1mg5cwsdnl().s[156]++;
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          cov_1mg5cwsdnl().f[25]++;
          cov_1mg5cwsdnl().s[157]++;
          return start(event);
        });
        cov_1mg5cwsdnl().s[158]++;
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          cov_1mg5cwsdnl().f[26]++;
          cov_1mg5cwsdnl().s[159]++;
          return move(event);
        });
        cov_1mg5cwsdnl().s[160]++;
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          cov_1mg5cwsdnl().f[27]++;
          cov_1mg5cwsdnl().s[161]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_1mg5cwsdnl().f[28]++;
      cov_1mg5cwsdnl().s[162]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_1mg5cwsdnl().b[35][0]++;
        cov_1mg5cwsdnl().s[163]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[35][1]++;
      }

      cov_1mg5cwsdnl().s[164]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_1mg5cwsdnl().b[36][0]++;
          cov_1mg5cwsdnl().s[165]++;
          event.preventDefault();
          cov_1mg5cwsdnl().s[166]++;
          this.prev();
          cov_1mg5cwsdnl().s[167]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_1mg5cwsdnl().b[36][1]++;
          cov_1mg5cwsdnl().s[168]++;
          event.preventDefault();
          cov_1mg5cwsdnl().s[169]++;
          this.next();
          cov_1mg5cwsdnl().s[170]++;
          break;

        default:
          cov_1mg5cwsdnl().b[36][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_1mg5cwsdnl().f[29]++;
      cov_1mg5cwsdnl().s[171]++;
      this._items = (cov_1mg5cwsdnl().b[38][0]++, element) && (cov_1mg5cwsdnl().b[38][1]++, element.parentNode) ? (cov_1mg5cwsdnl().b[37][0]++, [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM))) : (cov_1mg5cwsdnl().b[37][1]++, []);
      cov_1mg5cwsdnl().s[172]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_1mg5cwsdnl().f[30]++;
      var isNextDirection = (cov_1mg5cwsdnl().s[173]++, direction === DIRECTION_NEXT);
      var isPrevDirection = (cov_1mg5cwsdnl().s[174]++, direction === DIRECTION_PREV);
      var activeIndex = (cov_1mg5cwsdnl().s[175]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_1mg5cwsdnl().s[176]++, this._items.length - 1);
      var isGoingToWrap = (cov_1mg5cwsdnl().s[177]++, (cov_1mg5cwsdnl().b[39][0]++, isPrevDirection) && (cov_1mg5cwsdnl().b[39][1]++, activeIndex === 0) || (cov_1mg5cwsdnl().b[39][2]++, isNextDirection) && (cov_1mg5cwsdnl().b[39][3]++, activeIndex === lastItemIndex));
      cov_1mg5cwsdnl().s[178]++;

      if ((cov_1mg5cwsdnl().b[41][0]++, isGoingToWrap) && (cov_1mg5cwsdnl().b[41][1]++, !this._config.wrap)) {
        cov_1mg5cwsdnl().b[40][0]++;
        cov_1mg5cwsdnl().s[179]++;
        return activeElement;
      } else {
        cov_1mg5cwsdnl().b[40][1]++;
      }

      var delta = (cov_1mg5cwsdnl().s[180]++, direction === DIRECTION_PREV ? (cov_1mg5cwsdnl().b[42][0]++, -1) : (cov_1mg5cwsdnl().b[42][1]++, 1));
      var itemIndex = (cov_1mg5cwsdnl().s[181]++, (activeIndex + delta) % this._items.length);
      cov_1mg5cwsdnl().s[182]++;
      return itemIndex === -1 ? (cov_1mg5cwsdnl().b[43][0]++, this._items[this._items.length - 1]) : (cov_1mg5cwsdnl().b[43][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_1mg5cwsdnl().f[31]++;
      var targetIndex = (cov_1mg5cwsdnl().s[183]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_1mg5cwsdnl().s[184]++, this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM)));
      var slideEvent = (cov_1mg5cwsdnl().s[185]++, $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      }));
      cov_1mg5cwsdnl().s[186]++;
      $(this._element).trigger(slideEvent);
      cov_1mg5cwsdnl().s[187]++;
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_1mg5cwsdnl().f[32]++;
      cov_1mg5cwsdnl().s[188]++;

      if (this._indicatorsElement) {
        cov_1mg5cwsdnl().b[44][0]++;
        var indicators = (cov_1mg5cwsdnl().s[189]++, [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE)));
        cov_1mg5cwsdnl().s[190]++;
        $(indicators).removeClass(CLASS_NAME_ACTIVE);
        var nextIndicator = (cov_1mg5cwsdnl().s[191]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_1mg5cwsdnl().s[192]++;

        if (nextIndicator) {
          cov_1mg5cwsdnl().b[45][0]++;
          cov_1mg5cwsdnl().s[193]++;
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE);
        } else {
          cov_1mg5cwsdnl().b[45][1]++;
        }
      } else {
        cov_1mg5cwsdnl().b[44][1]++;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_1mg5cwsdnl().f[33]++;
      var activeElement = (cov_1mg5cwsdnl().s[194]++, this._element.querySelector(SELECTOR_ACTIVE_ITEM));
      var activeElementIndex = (cov_1mg5cwsdnl().s[195]++, this._getItemIndex(activeElement));
      var nextElement = (cov_1mg5cwsdnl().s[196]++, (cov_1mg5cwsdnl().b[46][0]++, element) || (cov_1mg5cwsdnl().b[46][1]++, activeElement) && (cov_1mg5cwsdnl().b[46][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_1mg5cwsdnl().s[197]++, this._getItemIndex(nextElement));
      var isCycling = (cov_1mg5cwsdnl().s[198]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_1mg5cwsdnl().s[199]++;

      if (direction === DIRECTION_NEXT) {
        cov_1mg5cwsdnl().b[47][0]++;
        cov_1mg5cwsdnl().s[200]++;
        directionalClassName = CLASS_NAME_LEFT;
        cov_1mg5cwsdnl().s[201]++;
        orderClassName = CLASS_NAME_NEXT;
        cov_1mg5cwsdnl().s[202]++;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        cov_1mg5cwsdnl().b[47][1]++;
        cov_1mg5cwsdnl().s[203]++;
        directionalClassName = CLASS_NAME_RIGHT;
        cov_1mg5cwsdnl().s[204]++;
        orderClassName = CLASS_NAME_PREV;
        cov_1mg5cwsdnl().s[205]++;
        eventDirectionName = DIRECTION_RIGHT;
      }

      cov_1mg5cwsdnl().s[206]++;

      if ((cov_1mg5cwsdnl().b[49][0]++, nextElement) && (cov_1mg5cwsdnl().b[49][1]++, $(nextElement).hasClass(CLASS_NAME_ACTIVE))) {
        cov_1mg5cwsdnl().b[48][0]++;
        cov_1mg5cwsdnl().s[207]++;
        this._isSliding = false;
        cov_1mg5cwsdnl().s[208]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[48][1]++;
      }

      var slideEvent = (cov_1mg5cwsdnl().s[209]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_1mg5cwsdnl().s[210]++;

      if (slideEvent.isDefaultPrevented()) {
        cov_1mg5cwsdnl().b[50][0]++;
        cov_1mg5cwsdnl().s[211]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[50][1]++;
      }

      cov_1mg5cwsdnl().s[212]++;

      if ((cov_1mg5cwsdnl().b[52][0]++, !activeElement) || (cov_1mg5cwsdnl().b[52][1]++, !nextElement)) {
        cov_1mg5cwsdnl().b[51][0]++;
        cov_1mg5cwsdnl().s[213]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_1mg5cwsdnl().b[51][1]++;
      }

      cov_1mg5cwsdnl().s[214]++;
      this._isSliding = true;
      cov_1mg5cwsdnl().s[215]++;

      if (isCycling) {
        cov_1mg5cwsdnl().b[53][0]++;
        cov_1mg5cwsdnl().s[216]++;
        this.pause();
      } else {
        cov_1mg5cwsdnl().b[53][1]++;
      }

      cov_1mg5cwsdnl().s[217]++;

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = (cov_1mg5cwsdnl().s[218]++, $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }));
      cov_1mg5cwsdnl().s[219]++;

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        cov_1mg5cwsdnl().b[54][0]++;
        cov_1mg5cwsdnl().s[220]++;
        $(nextElement).addClass(orderClassName);
        cov_1mg5cwsdnl().s[221]++;
        Util.reflow(nextElement);
        cov_1mg5cwsdnl().s[222]++;
        $(activeElement).addClass(directionalClassName);
        cov_1mg5cwsdnl().s[223]++;
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = (cov_1mg5cwsdnl().s[224]++, parseInt(nextElement.getAttribute('data-interval'), 10));
        cov_1mg5cwsdnl().s[225]++;

        if (nextElementInterval) {
          cov_1mg5cwsdnl().b[55][0]++;
          cov_1mg5cwsdnl().s[226]++;
          this._config.defaultInterval = (cov_1mg5cwsdnl().b[56][0]++, this._config.defaultInterval) || (cov_1mg5cwsdnl().b[56][1]++, this._config.interval);
          cov_1mg5cwsdnl().s[227]++;
          this._config.interval = nextElementInterval;
        } else {
          cov_1mg5cwsdnl().b[55][1]++;
          cov_1mg5cwsdnl().s[228]++;
          this._config.interval = (cov_1mg5cwsdnl().b[57][0]++, this._config.defaultInterval) || (cov_1mg5cwsdnl().b[57][1]++, this._config.interval);
        }

        var transitionDuration = (cov_1mg5cwsdnl().s[229]++, Util.getTransitionDurationFromElement(activeElement));
        cov_1mg5cwsdnl().s[230]++;
        $(activeElement).one(Util.TRANSITION_END, function () {
          cov_1mg5cwsdnl().f[34]++;
          cov_1mg5cwsdnl().s[231]++;
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE);
          cov_1mg5cwsdnl().s[232]++;
          $(activeElement).removeClass(CLASS_NAME_ACTIVE + " " + orderClassName + " " + directionalClassName);
          cov_1mg5cwsdnl().s[233]++;
          _this4._isSliding = false;
          cov_1mg5cwsdnl().s[234]++;
          setTimeout(function () {
            cov_1mg5cwsdnl().f[35]++;
            cov_1mg5cwsdnl().s[235]++;
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1mg5cwsdnl().b[54][1]++;
        cov_1mg5cwsdnl().s[236]++;
        $(activeElement).removeClass(CLASS_NAME_ACTIVE);
        cov_1mg5cwsdnl().s[237]++;
        $(nextElement).addClass(CLASS_NAME_ACTIVE);
        cov_1mg5cwsdnl().s[238]++;
        this._isSliding = false;
        cov_1mg5cwsdnl().s[239]++;
        $(this._element).trigger(slidEvent);
      }

      cov_1mg5cwsdnl().s[240]++;

      if (isCycling) {
        cov_1mg5cwsdnl().b[58][0]++;
        cov_1mg5cwsdnl().s[241]++;
        this.cycle();
      } else {
        cov_1mg5cwsdnl().b[58][1]++;
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_1mg5cwsdnl().f[36]++;
      cov_1mg5cwsdnl().s[242]++;
      return this.each(function () {
        cov_1mg5cwsdnl().f[37]++;
        var data = (cov_1mg5cwsdnl().s[243]++, $(this).data(DATA_KEY));

        var _config = (cov_1mg5cwsdnl().s[244]++, _objectSpread2(_objectSpread2({}, Default), $(this).data()));

        cov_1mg5cwsdnl().s[245]++;

        if (typeof config === 'object') {
          cov_1mg5cwsdnl().b[59][0]++;
          cov_1mg5cwsdnl().s[246]++;
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        } else {
          cov_1mg5cwsdnl().b[59][1]++;
        }

        var action = (cov_1mg5cwsdnl().s[247]++, typeof config === 'string' ? (cov_1mg5cwsdnl().b[60][0]++, config) : (cov_1mg5cwsdnl().b[60][1]++, _config.slide));
        cov_1mg5cwsdnl().s[248]++;

        if (!data) {
          cov_1mg5cwsdnl().b[61][0]++;
          cov_1mg5cwsdnl().s[249]++;
          data = new Carousel(this, _config);
          cov_1mg5cwsdnl().s[250]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_1mg5cwsdnl().b[61][1]++;
        }

        cov_1mg5cwsdnl().s[251]++;

        if (typeof config === 'number') {
          cov_1mg5cwsdnl().b[62][0]++;
          cov_1mg5cwsdnl().s[252]++;
          data.to(config);
        } else {
          cov_1mg5cwsdnl().b[62][1]++;
          cov_1mg5cwsdnl().s[253]++;

          if (typeof action === 'string') {
            cov_1mg5cwsdnl().b[63][0]++;
            cov_1mg5cwsdnl().s[254]++;

            if (typeof data[action] === 'undefined') {
              cov_1mg5cwsdnl().b[64][0]++;
              cov_1mg5cwsdnl().s[255]++;
              throw new TypeError("No method named \"" + action + "\"");
            } else {
              cov_1mg5cwsdnl().b[64][1]++;
            }

            cov_1mg5cwsdnl().s[256]++;
            data[action]();
          } else {
            cov_1mg5cwsdnl().b[63][1]++;
            cov_1mg5cwsdnl().s[257]++;

            if ((cov_1mg5cwsdnl().b[66][0]++, _config.interval) && (cov_1mg5cwsdnl().b[66][1]++, _config.ride)) {
              cov_1mg5cwsdnl().b[65][0]++;
              cov_1mg5cwsdnl().s[258]++;
              data.pause();
              cov_1mg5cwsdnl().s[259]++;
              data.cycle();
            } else {
              cov_1mg5cwsdnl().b[65][1]++;
            }
          }
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_1mg5cwsdnl().f[38]++;
      var selector = (cov_1mg5cwsdnl().s[260]++, Util.getSelectorFromElement(this));
      cov_1mg5cwsdnl().s[261]++;

      if (!selector) {
        cov_1mg5cwsdnl().b[67][0]++;
        cov_1mg5cwsdnl().s[262]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[67][1]++;
      }

      var target = (cov_1mg5cwsdnl().s[263]++, $(selector)[0]);
      cov_1mg5cwsdnl().s[264]++;

      if ((cov_1mg5cwsdnl().b[69][0]++, !target) || (cov_1mg5cwsdnl().b[69][1]++, !$(target).hasClass(CLASS_NAME_CAROUSEL))) {
        cov_1mg5cwsdnl().b[68][0]++;
        cov_1mg5cwsdnl().s[265]++;
        return;
      } else {
        cov_1mg5cwsdnl().b[68][1]++;
      }

      var config = (cov_1mg5cwsdnl().s[266]++, _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data()));
      var slideIndex = (cov_1mg5cwsdnl().s[267]++, this.getAttribute('data-slide-to'));
      cov_1mg5cwsdnl().s[268]++;

      if (slideIndex) {
        cov_1mg5cwsdnl().b[70][0]++;
        cov_1mg5cwsdnl().s[269]++;
        config.interval = false;
      } else {
        cov_1mg5cwsdnl().b[70][1]++;
      }

      cov_1mg5cwsdnl().s[270]++;

      Carousel._jQueryInterface.call($(target), config);

      cov_1mg5cwsdnl().s[271]++;

      if (slideIndex) {
        cov_1mg5cwsdnl().b[71][0]++;
        cov_1mg5cwsdnl().s[272]++;
        $(target).data(DATA_KEY).to(slideIndex);
      } else {
        cov_1mg5cwsdnl().b[71][1]++;
      }

      cov_1mg5cwsdnl().s[273]++;
      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        cov_1mg5cwsdnl().f[1]++;
        cov_1mg5cwsdnl().s[60]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1mg5cwsdnl().f[2]++;
        cov_1mg5cwsdnl().s[61]++;
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_1mg5cwsdnl().s[274]++;
  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_1mg5cwsdnl().s[275]++;
  $(window).on(EVENT_LOAD_DATA_API, function () {
    cov_1mg5cwsdnl().f[39]++;
    var carousels = (cov_1mg5cwsdnl().s[276]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE)));
    cov_1mg5cwsdnl().s[277]++;

    for (var i = (cov_1mg5cwsdnl().s[278]++, 0), len = (cov_1mg5cwsdnl().s[279]++, carousels.length); i < len; i++) {
      var $carousel = (cov_1mg5cwsdnl().s[280]++, $(carousels[i]));
      cov_1mg5cwsdnl().s[281]++;

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1mg5cwsdnl().s[282]++;
  $.fn[NAME] = Carousel._jQueryInterface;
  cov_1mg5cwsdnl().s[283]++;
  $.fn[NAME].Constructor = Carousel;
  cov_1mg5cwsdnl().s[284]++;

  $.fn[NAME].noConflict = function () {
    cov_1mg5cwsdnl().f[40]++;
    cov_1mg5cwsdnl().s[285]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1mg5cwsdnl().s[286]++;
    return Carousel._jQueryInterface;
  };

  return Carousel;

})));
//# sourceMappingURL=carousel.js.map
