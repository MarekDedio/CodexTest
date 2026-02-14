/*!
  * Bootstrap toast.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Toast = factory(global.jQuery, global.Util));
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

  function cov_idxzcldd0() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\toast.js";
    var hash = "0a05c352068bf0941886c02551fdcdcc9bc31387";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\toast.js",
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
            column: 37
          }
        },
        "5": {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 55
          }
        },
        "6": {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 46
          }
        },
        "7": {
          start: {
            line: 25,
            column: 28
          },
          end: {
            line: 25,
            column: 48
          }
        },
        "8": {
          start: {
            line: 26,
            column: 28
          },
          end: {
            line: 26,
            column: 46
          }
        },
        "9": {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 27,
            column: 47
          }
        },
        "10": {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 29,
            column: 33
          }
        },
        "11": {
          start: {
            line: 30,
            column: 27
          },
          end: {
            line: 30,
            column: 33
          }
        },
        "12": {
          start: {
            line: 31,
            column: 27
          },
          end: {
            line: 31,
            column: 33
          }
        },
        "13": {
          start: {
            line: 32,
            column: 27
          },
          end: {
            line: 32,
            column: 36
          }
        },
        "14": {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 38,
            column: 1
          }
        },
        "15": {
          start: {
            line: 40,
            column: 16
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "16": {
          start: {
            line: 46,
            column: 30
          },
          end: {
            line: 46,
            column: 54
          }
        },
        "17": {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 27
          }
        },
        "18": {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 43
          }
        },
        "19": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 24
          }
        },
        "20": {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 24
          }
        },
        "21": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 18
          }
        },
        "22": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 22
          }
        },
        "23": {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 18
          }
        },
        "24": {
          start: {
            line: 79,
            column: 22
          },
          end: {
            line: 79,
            column: 41
          }
        },
        "25": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 39
          }
        },
        "26": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "27": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 12
          }
        },
        "28": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        "29": {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 50
          }
        },
        "30": {
          start: {
            line: 90,
            column: 21
          },
          end: {
            line: 101,
            column: 5
          }
        },
        "31": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 56
          }
        },
        "32": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 50
          }
        },
        "33": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 43
          }
        },
        "34": {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 100,
            column: 7
          }
        },
        "35": {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 99,
            column: 30
          }
        },
        "36": {
          start: {
            line: 98,
            column: 10
          },
          end: {
            line: 98,
            column: 21
          }
        },
        "37": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 51
          }
        },
        "38": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 30
          }
        },
        "39": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 51
          }
        },
        "40": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        "41": {
          start: {
            line: 107,
            column: 33
          },
          end: {
            line: 107,
            column: 85
          }
        },
        "42": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 111,
            column: 49
          }
        },
        "43": {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 16
          }
        },
        "44": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        "45": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 12
          }
        },
        "46": {
          start: {
            line: 122,
            column: 22
          },
          end: {
            line: 122,
            column: 41
          }
        },
        "47": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 39
          }
        },
        "48": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        },
        "49": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 12
          }
        },
        "50": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 17
          }
        },
        "51": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 31
          }
        },
        "52": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 134,
            column: 24
          }
        },
        "53": {
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 138,
            column: 5
          }
        },
        "54": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 137,
            column: 53
          }
        },
        "55": {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 45
          }
        },
        "56": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 142,
            column: 41
          }
        },
        "57": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 24
          }
        },
        "58": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 24
          }
        },
        "59": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "60": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "61": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 17
          }
        },
        "62": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 86
          }
        },
        "63": {
          start: {
            line: 166,
            column: 74
          },
          end: {
            line: 166,
            column: 85
          }
        },
        "64": {
          start: {
            line: 170,
            column: 21
          },
          end: {
            line: 173,
            column: 5
          }
        },
        "65": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 50
          }
        },
        "66": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 172,
            column: 44
          }
        },
        "67": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 51
          }
        },
        "68": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        "69": {
          start: {
            line: 177,
            column: 33
          },
          end: {
            line: 177,
            column: 85
          }
        },
        "70": {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 181,
            column: 49
          }
        },
        "71": {
          start: {
            line: 183,
            column: 6
          },
          end: {
            line: 183,
            column: 16
          }
        },
        "72": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 207,
            column: 6
          }
        },
        "73": {
          start: {
            line: 191,
            column: 23
          },
          end: {
            line: 191,
            column: 30
          }
        },
        "74": {
          start: {
            line: 192,
            column: 23
          },
          end: {
            line: 192,
            column: 46
          }
        },
        "75": {
          start: {
            line: 193,
            column: 23
          },
          end: {
            line: 193,
            column: 59
          }
        },
        "76": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 198,
            column: 7
          }
        },
        "77": {
          start: {
            line: 196,
            column: 8
          },
          end: {
            line: 196,
            column: 39
          }
        },
        "78": {
          start: {
            line: 197,
            column: 8
          },
          end: {
            line: 197,
            column: 37
          }
        },
        "79": {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 206,
            column: 7
          }
        },
        "80": {
          start: {
            line: 201,
            column: 8
          },
          end: {
            line: 203,
            column: 9
          }
        },
        "81": {
          start: {
            line: 202,
            column: 10
          },
          end: {
            line: 202,
            column: 60
          }
        },
        "82": {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 26
          }
        },
        "83": {
          start: {
            line: 217,
            column: 0
          },
          end: {
            line: 217,
            column: 47
          }
        },
        "84": {
          start: {
            line: 218,
            column: 0
          },
          end: {
            line: 218,
            column: 30
          }
        },
        "85": {
          start: {
            line: 219,
            column: 0
          },
          end: {
            line: 222,
            column: 1
          }
        },
        "86": {
          start: {
            line: 220,
            column: 2
          },
          end: {
            line: 220,
            column: 33
          }
        },
        "87": {
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 221,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 55,
              column: 2
            },
            end: {
              line: 55,
              column: 3
            }
          },
          loc: {
            start: {
              line: 55,
              column: 31
            },
            end: {
              line: 60,
              column: 3
            }
          },
          line: 55
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 64,
              column: 2
            },
            end: {
              line: 64,
              column: 3
            }
          },
          loc: {
            start: {
              line: 64,
              column: 23
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 64
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 68,
              column: 2
            },
            end: {
              line: 68,
              column: 3
            }
          },
          loc: {
            start: {
              line: 68,
              column: 27
            },
            end: {
              line: 70,
              column: 3
            }
          },
          line: 68
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 72,
              column: 2
            },
            end: {
              line: 72,
              column: 3
            }
          },
          loc: {
            start: {
              line: 72,
              column: 23
            },
            end: {
              line: 74,
              column: 3
            }
          },
          line: 72
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 78,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          },
          loc: {
            start: {
              line: 78,
              column: 9
            },
            end: {
              line: 115,
              column: 3
            }
          },
          line: 78
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 90,
              column: 21
            },
            end: {
              line: 90,
              column: 22
            }
          },
          loc: {
            start: {
              line: 90,
              column: 27
            },
            end: {
              line: 101,
              column: 5
            }
          },
          line: 90
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 97,
              column: 35
            },
            end: {
              line: 97,
              column: 36
            }
          },
          loc: {
            start: {
              line: 97,
              column: 41
            },
            end: {
              line: 99,
              column: 9
            }
          },
          line: 97
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 117,
              column: 2
            },
            end: {
              line: 117,
              column: 3
            }
          },
          loc: {
            start: {
              line: 117,
              column: 9
            },
            end: {
              line: 130,
              column: 3
            }
          },
          line: 117
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 132,
              column: 2
            },
            end: {
              line: 132,
              column: 3
            }
          },
          loc: {
            start: {
              line: 132,
              column: 12
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 132
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 149,
              column: 2
            },
            end: {
              line: 149,
              column: 3
            }
          },
          loc: {
            start: {
              line: 149,
              column: 21
            },
            end: {
              line: 163,
              column: 3
            }
          },
          line: 149
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 165,
              column: 2
            },
            end: {
              line: 165,
              column: 3
            }
          },
          loc: {
            start: {
              line: 165,
              column: 18
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 165
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 166,
              column: 68
            },
            end: {
              line: 166,
              column: 69
            }
          },
          loc: {
            start: {
              line: 166,
              column: 74
            },
            end: {
              line: 166,
              column: 85
            }
          },
          line: 166
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 169,
              column: 2
            },
            end: {
              line: 169,
              column: 3
            }
          },
          loc: {
            start: {
              line: 169,
              column: 11
            },
            end: {
              line: 185,
              column: 3
            }
          },
          line: 169
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 170,
              column: 21
            },
            end: {
              line: 170,
              column: 22
            }
          },
          loc: {
            start: {
              line: 170,
              column: 27
            },
            end: {
              line: 173,
              column: 5
            }
          },
          line: 170
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 189,
              column: 2
            },
            end: {
              line: 189,
              column: 3
            }
          },
          loc: {
            start: {
              line: 189,
              column: 34
            },
            end: {
              line: 208,
              column: 3
            }
          },
          line: 189
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 190,
              column: 21
            },
            end: {
              line: 190,
              column: 22
            }
          },
          loc: {
            start: {
              line: 190,
              column: 33
            },
            end: {
              line: 207,
              column: 5
            }
          },
          line: 190
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 219,
              column: 25
            },
            end: {
              line: 219,
              column: 26
            }
          },
          loc: {
            start: {
              line: 219,
              column: 31
            },
            end: {
              line: 222,
              column: 1
            }
          },
          line: 219
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }, {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }],
          line: 82
        },
        "1": {
          loc: {
            start: {
              line: 86,
              column: 4
            },
            end: {
              line: 88,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 86,
              column: 4
            },
            end: {
              line: 88,
              column: 5
            }
          }, {
            start: {
              line: 86,
              column: 4
            },
            end: {
              line: 88,
              column: 5
            }
          }],
          line: 86
        },
        "2": {
          loc: {
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          }, {
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          }],
          line: 96
        },
        "3": {
          loc: {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          }, {
            start: {
              line: 106,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          }],
          line: 106
        },
        "4": {
          loc: {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }, {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 120,
              column: 5
            }
          }],
          line: 118
        },
        "5": {
          loc: {
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }, {
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 127,
              column: 5
            }
          }],
          line: 125
        },
        "6": {
          loc: {
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }, {
            start: {
              line: 136,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          }],
          line: 136
        },
        "7": {
          loc: {
            start: {
              line: 153,
              column: 9
            },
            end: {
              line: 153,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 153,
              column: 48
            },
            end: {
              line: 153,
              column: 54
            }
          }, {
            start: {
              line: 153,
              column: 57
            },
            end: {
              line: 153,
              column: 59
            }
          }],
          line: 153
        },
        "8": {
          loc: {
            start: {
              line: 153,
              column: 9
            },
            end: {
              line: 153,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 153,
              column: 9
            },
            end: {
              line: 153,
              column: 35
            }
          }, {
            start: {
              line: 153,
              column: 39
            },
            end: {
              line: 153,
              column: 45
            }
          }],
          line: 153
        },
        "9": {
          loc: {
            start: {
              line: 176,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 176,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }, {
            start: {
              line: 176,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }],
          line: 176
        },
        "10": {
          loc: {
            start: {
              line: 193,
              column: 23
            },
            end: {
              line: 193,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 193,
              column: 23
            },
            end: {
              line: 193,
              column: 49
            }
          }, {
            start: {
              line: 193,
              column: 53
            },
            end: {
              line: 193,
              column: 59
            }
          }],
          line: 193
        },
        "11": {
          loc: {
            start: {
              line: 195,
              column: 6
            },
            end: {
              line: 198,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 195,
              column: 6
            },
            end: {
              line: 198,
              column: 7
            }
          }, {
            start: {
              line: 195,
              column: 6
            },
            end: {
              line: 198,
              column: 7
            }
          }],
          line: 195
        },
        "12": {
          loc: {
            start: {
              line: 200,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 200,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }, {
            start: {
              line: 200,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }],
          line: 200
        },
        "13": {
          loc: {
            start: {
              line: 201,
              column: 8
            },
            end: {
              line: 203,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 201,
              column: 8
            },
            end: {
              line: 203,
              column: 9
            }
          }, {
            start: {
              line: 201,
              column: 8
            },
            end: {
              line: 203,
              column: 9
            }
          }],
          line: 201
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
        "87": 0
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
        "16": 0
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
        "13": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "0a05c352068bf0941886c02551fdcdcc9bc31387"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_idxzcldd0 = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_idxzcldd0();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_idxzcldd0().s[0]++, 'toast');
  var VERSION = (cov_idxzcldd0().s[1]++, '4.5.0');
  var DATA_KEY = (cov_idxzcldd0().s[2]++, 'bs.toast');
  var EVENT_KEY = (cov_idxzcldd0().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_idxzcldd0().s[4]++, $.fn[NAME]);
  var EVENT_CLICK_DISMISS = (cov_idxzcldd0().s[5]++, "click.dismiss" + EVENT_KEY);
  var EVENT_HIDE = (cov_idxzcldd0().s[6]++, "hide" + EVENT_KEY);
  var EVENT_HIDDEN = (cov_idxzcldd0().s[7]++, "hidden" + EVENT_KEY);
  var EVENT_SHOW = (cov_idxzcldd0().s[8]++, "show" + EVENT_KEY);
  var EVENT_SHOWN = (cov_idxzcldd0().s[9]++, "shown" + EVENT_KEY);
  var CLASS_NAME_FADE = (cov_idxzcldd0().s[10]++, 'fade');
  var CLASS_NAME_HIDE = (cov_idxzcldd0().s[11]++, 'hide');
  var CLASS_NAME_SHOW = (cov_idxzcldd0().s[12]++, 'show');
  var CLASS_NAME_SHOWING = (cov_idxzcldd0().s[13]++, 'showing');
  var DefaultType = (cov_idxzcldd0().s[14]++, {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  });
  var Default = (cov_idxzcldd0().s[15]++, {
    animation: true,
    autohide: true,
    delay: 500
  });
  var SELECTOR_DATA_DISMISS = (cov_idxzcldd0().s[16]++, '[data-dismiss="toast"]');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      cov_idxzcldd0().f[0]++;
      cov_idxzcldd0().s[17]++;
      this._element = element;
      cov_idxzcldd0().s[18]++;
      this._config = this._getConfig(config);
      cov_idxzcldd0().s[19]++;
      this._timeout = null;
      cov_idxzcldd0().s[20]++;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_idxzcldd0().f[4]++;
      var showEvent = (cov_idxzcldd0().s[24]++, $.Event(EVENT_SHOW));
      cov_idxzcldd0().s[25]++;
      $(this._element).trigger(showEvent);
      cov_idxzcldd0().s[26]++;

      if (showEvent.isDefaultPrevented()) {
        cov_idxzcldd0().b[0][0]++;
        cov_idxzcldd0().s[27]++;
        return;
      } else {
        cov_idxzcldd0().b[0][1]++;
      }

      cov_idxzcldd0().s[28]++;

      if (this._config.animation) {
        cov_idxzcldd0().b[1][0]++;
        cov_idxzcldd0().s[29]++;

        this._element.classList.add(CLASS_NAME_FADE);
      } else {
        cov_idxzcldd0().b[1][1]++;
      }

      cov_idxzcldd0().s[30]++;

      var complete = function complete() {
        cov_idxzcldd0().f[5]++;
        cov_idxzcldd0().s[31]++;

        _this._element.classList.remove(CLASS_NAME_SHOWING);

        cov_idxzcldd0().s[32]++;

        _this._element.classList.add(CLASS_NAME_SHOW);

        cov_idxzcldd0().s[33]++;
        $(_this._element).trigger(EVENT_SHOWN);
        cov_idxzcldd0().s[34]++;

        if (_this._config.autohide) {
          cov_idxzcldd0().b[2][0]++;
          cov_idxzcldd0().s[35]++;
          _this._timeout = setTimeout(function () {
            cov_idxzcldd0().f[6]++;
            cov_idxzcldd0().s[36]++;

            _this.hide();
          }, _this._config.delay);
        } else {
          cov_idxzcldd0().b[2][1]++;
        }
      };

      cov_idxzcldd0().s[37]++;

      this._element.classList.remove(CLASS_NAME_HIDE);

      cov_idxzcldd0().s[38]++;
      Util.reflow(this._element);
      cov_idxzcldd0().s[39]++;

      this._element.classList.add(CLASS_NAME_SHOWING);

      cov_idxzcldd0().s[40]++;

      if (this._config.animation) {
        cov_idxzcldd0().b[3][0]++;
        var transitionDuration = (cov_idxzcldd0().s[41]++, Util.getTransitionDurationFromElement(this._element));
        cov_idxzcldd0().s[42]++;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_idxzcldd0().b[3][1]++;
        cov_idxzcldd0().s[43]++;
        complete();
      }
    };

    _proto.hide = function hide() {
      cov_idxzcldd0().f[7]++;
      cov_idxzcldd0().s[44]++;

      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        cov_idxzcldd0().b[4][0]++;
        cov_idxzcldd0().s[45]++;
        return;
      } else {
        cov_idxzcldd0().b[4][1]++;
      }

      var hideEvent = (cov_idxzcldd0().s[46]++, $.Event(EVENT_HIDE));
      cov_idxzcldd0().s[47]++;
      $(this._element).trigger(hideEvent);
      cov_idxzcldd0().s[48]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_idxzcldd0().b[5][0]++;
        cov_idxzcldd0().s[49]++;
        return;
      } else {
        cov_idxzcldd0().b[5][1]++;
      }

      cov_idxzcldd0().s[50]++;

      this._close();
    };

    _proto.dispose = function dispose() {
      cov_idxzcldd0().f[8]++;
      cov_idxzcldd0().s[51]++;
      clearTimeout(this._timeout);
      cov_idxzcldd0().s[52]++;
      this._timeout = null;
      cov_idxzcldd0().s[53]++;

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        cov_idxzcldd0().b[6][0]++;
        cov_idxzcldd0().s[54]++;

        this._element.classList.remove(CLASS_NAME_SHOW);
      } else {
        cov_idxzcldd0().b[6][1]++;
      }

      cov_idxzcldd0().s[55]++;
      $(this._element).off(EVENT_CLICK_DISMISS);
      cov_idxzcldd0().s[56]++;
      $.removeData(this._element, DATA_KEY);
      cov_idxzcldd0().s[57]++;
      this._element = null;
      cov_idxzcldd0().s[58]++;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_idxzcldd0().f[9]++;
      cov_idxzcldd0().s[59]++;
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $(this._element).data()), (cov_idxzcldd0().b[8][0]++, typeof config === 'object') && (cov_idxzcldd0().b[8][1]++, config) ? (cov_idxzcldd0().b[7][0]++, config) : (cov_idxzcldd0().b[7][1]++, {}));
      cov_idxzcldd0().s[60]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_idxzcldd0().s[61]++;
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      cov_idxzcldd0().f[10]++;
      cov_idxzcldd0().s[62]++;
      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        cov_idxzcldd0().f[11]++;
        cov_idxzcldd0().s[63]++;
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      cov_idxzcldd0().f[12]++;
      cov_idxzcldd0().s[64]++;

      var complete = function complete() {
        cov_idxzcldd0().f[13]++;
        cov_idxzcldd0().s[65]++;

        _this3._element.classList.add(CLASS_NAME_HIDE);

        cov_idxzcldd0().s[66]++;
        $(_this3._element).trigger(EVENT_HIDDEN);
      };

      cov_idxzcldd0().s[67]++;

      this._element.classList.remove(CLASS_NAME_SHOW);

      cov_idxzcldd0().s[68]++;

      if (this._config.animation) {
        cov_idxzcldd0().b[9][0]++;
        var transitionDuration = (cov_idxzcldd0().s[69]++, Util.getTransitionDurationFromElement(this._element));
        cov_idxzcldd0().s[70]++;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_idxzcldd0().b[9][1]++;
        cov_idxzcldd0().s[71]++;
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      cov_idxzcldd0().f[14]++;
      cov_idxzcldd0().s[72]++;
      return this.each(function () {
        cov_idxzcldd0().f[15]++;
        var $element = (cov_idxzcldd0().s[73]++, $(this));
        var data = (cov_idxzcldd0().s[74]++, $element.data(DATA_KEY));

        var _config = (cov_idxzcldd0().s[75]++, (cov_idxzcldd0().b[10][0]++, typeof config === 'object') && (cov_idxzcldd0().b[10][1]++, config));

        cov_idxzcldd0().s[76]++;

        if (!data) {
          cov_idxzcldd0().b[11][0]++;
          cov_idxzcldd0().s[77]++;
          data = new Toast(this, _config);
          cov_idxzcldd0().s[78]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_idxzcldd0().b[11][1]++;
        }

        cov_idxzcldd0().s[79]++;

        if (typeof config === 'string') {
          cov_idxzcldd0().b[12][0]++;
          cov_idxzcldd0().s[80]++;

          if (typeof data[config] === 'undefined') {
            cov_idxzcldd0().b[13][0]++;
            cov_idxzcldd0().s[81]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_idxzcldd0().b[13][1]++;
          }

          cov_idxzcldd0().s[82]++;
          data[config](this);
        } else {
          cov_idxzcldd0().b[12][1]++;
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        cov_idxzcldd0().f[1]++;
        cov_idxzcldd0().s[21]++;
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_idxzcldd0().f[2]++;
        cov_idxzcldd0().s[22]++;
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_idxzcldd0().f[3]++;
        cov_idxzcldd0().s[23]++;
        return Default;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_idxzcldd0().s[83]++;
  $.fn[NAME] = Toast._jQueryInterface;
  cov_idxzcldd0().s[84]++;
  $.fn[NAME].Constructor = Toast;
  cov_idxzcldd0().s[85]++;

  $.fn[NAME].noConflict = function () {
    cov_idxzcldd0().f[16]++;
    cov_idxzcldd0().s[86]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_idxzcldd0().s[87]++;
    return Toast._jQueryInterface;
  };

  return Toast;

})));
//# sourceMappingURL=toast.js.map
