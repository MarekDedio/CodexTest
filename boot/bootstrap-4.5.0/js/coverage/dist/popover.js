/*!
  * Bootstrap popover.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./tooltip.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './tooltip.js'], factory) :
  (global = global || self, global.Popover = factory(global.jQuery, global.Tooltip));
}(this, (function ($, Tooltip) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Tooltip = Tooltip && Object.prototype.hasOwnProperty.call(Tooltip, 'default') ? Tooltip['default'] : Tooltip;

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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function cov_2mj7i6o36a() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\popover.js";
    var hash = "fe78711697e8ae22ad32cea96c41d5728f3e740c";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\popover.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 37
          }
        },
        "1": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 35
          }
        },
        "2": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 40
          }
        },
        "3": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 42
          }
        },
        "4": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "5": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 40
          }
        },
        "6": {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 73
          }
        },
        "7": {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 34,
            column: 1
          }
        },
        "8": {
          start: {
            line: 36,
            column: 20
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "9": {
          start: {
            line: 41,
            column: 24
          },
          end: {
            line: 41,
            column: 30
          }
        },
        "10": {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 30
          }
        },
        "11": {
          start: {
            line: 44,
            column: 25
          },
          end: {
            line: 44,
            column: 42
          }
        },
        "12": {
          start: {
            line: 45,
            column: 25
          },
          end: {
            line: 45,
            column: 40
          }
        },
        "13": {
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 58,
            column: 1
          }
        },
        "14": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 18
          }
        },
        "15": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 18
          }
        },
        "16": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 15
          }
        },
        "17": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 19
          }
        },
        "18": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 16
          }
        },
        "19": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 20
          }
        },
        "20": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 22
          }
        },
        "21": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 48
          }
        },
        "22": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 69
          }
        },
        "23": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 53
          }
        },
        "24": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 19
          }
        },
        "25": {
          start: {
            line: 113,
            column: 17
          },
          end: {
            line: 113,
            column: 40
          }
        },
        "26": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 70
          }
        },
        "27": {
          start: {
            line: 117,
            column: 18
          },
          end: {
            line: 117,
            column: 36
          }
        },
        "28": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        "29": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 42
          }
        },
        "30": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 64
          }
        },
        "31": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 61
          }
        },
        "32": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 130,
            column: 25
          }
        },
        "33": {
          start: {
            line: 134,
            column: 17
          },
          end: {
            line: 134,
            column: 40
          }
        },
        "34": {
          start: {
            line: 135,
            column: 21
          },
          end: {
            line: 135,
            column: 65
          }
        },
        "35": {
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 138,
            column: 5
          }
        },
        "36": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 137,
            column: 41
          }
        },
        "37": {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 163,
            column: 6
          }
        },
        "38": {
          start: {
            line: 145,
            column: 17
          },
          end: {
            line: 145,
            column: 39
          }
        },
        "39": {
          start: {
            line: 146,
            column: 22
          },
          end: {
            line: 146,
            column: 64
          }
        },
        "40": {
          start: {
            line: 148,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        },
        "41": {
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 149,
            column: 14
          }
        },
        "42": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 155,
            column: 7
          }
        },
        "43": {
          start: {
            line: 153,
            column: 8
          },
          end: {
            line: 153,
            column: 41
          }
        },
        "44": {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 36
          }
        },
        "45": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 162,
            column: 7
          }
        },
        "46": {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 160,
            column: 9
          }
        },
        "47": {
          start: {
            line: 159,
            column: 10
          },
          end: {
            line: 159,
            column: 60
          }
        },
        "48": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 22
          }
        },
        "49": {
          start: {
            line: 173,
            column: 0
          },
          end: {
            line: 173,
            column: 37
          }
        },
        "50": {
          start: {
            line: 174,
            column: 0
          },
          end: {
            line: 174,
            column: 32
          }
        },
        "51": {
          start: {
            line: 175,
            column: 0
          },
          end: {
            line: 178,
            column: 1
          }
        },
        "52": {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 176,
            column: 33
          }
        },
        "53": {
          start: {
            line: 177,
            column: 2
          },
          end: {
            line: 177,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 69,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          },
          loc: {
            start: {
              line: 69,
              column: 23
            },
            end: {
              line: 71,
              column: 3
            }
          },
          line: 69
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 73,
              column: 2
            },
            end: {
              line: 73,
              column: 3
            }
          },
          loc: {
            start: {
              line: 73,
              column: 23
            },
            end: {
              line: 75,
              column: 3
            }
          },
          line: 73
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 77,
              column: 2
            },
            end: {
              line: 77,
              column: 3
            }
          },
          loc: {
            start: {
              line: 77,
              column: 20
            },
            end: {
              line: 79,
              column: 3
            }
          },
          line: 77
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 81,
              column: 2
            },
            end: {
              line: 81,
              column: 3
            }
          },
          loc: {
            start: {
              line: 81,
              column: 24
            },
            end: {
              line: 83,
              column: 3
            }
          },
          line: 81
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 85,
              column: 2
            },
            end: {
              line: 85,
              column: 3
            }
          },
          loc: {
            start: {
              line: 85,
              column: 21
            },
            end: {
              line: 87,
              column: 3
            }
          },
          line: 85
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 89,
              column: 2
            },
            end: {
              line: 89,
              column: 3
            }
          },
          loc: {
            start: {
              line: 89,
              column: 25
            },
            end: {
              line: 91,
              column: 3
            }
          },
          line: 89
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 93,
              column: 2
            },
            end: {
              line: 93,
              column: 3
            }
          },
          loc: {
            start: {
              line: 93,
              column: 27
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 93
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 18
            },
            end: {
              line: 101,
              column: 3
            }
          },
          line: 99
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 33
            },
            end: {
              line: 105,
              column: 3
            }
          },
          line: 103
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 18
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 107
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 112,
              column: 2
            },
            end: {
              line: 112,
              column: 3
            }
          },
          loc: {
            start: {
              line: 112,
              column: 15
            },
            end: {
              line: 124,
              column: 3
            }
          },
          line: 112
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 128,
              column: 2
            },
            end: {
              line: 128,
              column: 3
            }
          },
          loc: {
            start: {
              line: 128,
              column: 16
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 128
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 133,
              column: 2
            },
            end: {
              line: 133,
              column: 3
            }
          },
          loc: {
            start: {
              line: 133,
              column: 19
            },
            end: {
              line: 139,
              column: 3
            }
          },
          line: 133
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 143,
              column: 2
            },
            end: {
              line: 143,
              column: 3
            }
          },
          loc: {
            start: {
              line: 143,
              column: 34
            },
            end: {
              line: 164,
              column: 3
            }
          },
          line: 143
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 144,
              column: 21
            },
            end: {
              line: 144,
              column: 22
            }
          },
          loc: {
            start: {
              line: 144,
              column: 33
            },
            end: {
              line: 163,
              column: 5
            }
          },
          line: 144
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 175,
              column: 24
            },
            end: {
              line: 175,
              column: 25
            }
          },
          loc: {
            start: {
              line: 175,
              column: 30
            },
            end: {
              line: 178,
              column: 1
            }
          },
          line: 175
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 100,
              column: 11
            },
            end: {
              line: 100,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 100,
              column: 11
            },
            end: {
              line: 100,
              column: 26
            }
          }, {
            start: {
              line: 100,
              column: 30
            },
            end: {
              line: 100,
              column: 48
            }
          }],
          line: 100
        },
        "1": {
          loc: {
            start: {
              line: 108,
              column: 15
            },
            end: {
              line: 108,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 108,
              column: 15
            },
            end: {
              line: 108,
              column: 23
            }
          }, {
            start: {
              line: 108,
              column: 27
            },
            end: {
              line: 108,
              column: 53
            }
          }],
          line: 108
        },
        "2": {
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
        "3": {
          loc: {
            start: {
              line: 129,
              column: 11
            },
            end: {
              line: 130,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 129,
              column: 11
            },
            end: {
              line: 129,
              column: 52
            }
          }, {
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 130,
              column: 25
            }
          }],
          line: 129
        },
        "4": {
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
        "5": {
          loc: {
            start: {
              line: 136,
              column: 8
            },
            end: {
              line: 136,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 136,
              column: 8
            },
            end: {
              line: 136,
              column: 25
            }
          }, {
            start: {
              line: 136,
              column: 29
            },
            end: {
              line: 136,
              column: 48
            }
          }],
          line: 136
        },
        "6": {
          loc: {
            start: {
              line: 146,
              column: 22
            },
            end: {
              line: 146,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 146,
              column: 51
            },
            end: {
              line: 146,
              column: 57
            }
          }, {
            start: {
              line: 146,
              column: 60
            },
            end: {
              line: 146,
              column: 64
            }
          }],
          line: 146
        },
        "7": {
          loc: {
            start: {
              line: 148,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 148,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          }, {
            start: {
              line: 148,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          }],
          line: 148
        },
        "8": {
          loc: {
            start: {
              line: 148,
              column: 10
            },
            end: {
              line: 148,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 148,
              column: 10
            },
            end: {
              line: 148,
              column: 15
            }
          }, {
            start: {
              line: 148,
              column: 19
            },
            end: {
              line: 148,
              column: 46
            }
          }],
          line: 148
        },
        "9": {
          loc: {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 155,
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
              line: 155,
              column: 7
            }
          }, {
            start: {
              line: 152,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }],
          line: 152
        },
        "10": {
          loc: {
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 162,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 162,
              column: 7
            }
          }, {
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 162,
              column: 7
            }
          }],
          line: 157
        },
        "11": {
          loc: {
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 160,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 160,
              column: 9
            }
          }, {
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 160,
              column: 9
            }
          }],
          line: 158
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
        "53": 0
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
        "15": 0
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
        "11": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "fe78711697e8ae22ad32cea96c41d5728f3e740c"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_2mj7i6o36a = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_2mj7i6o36a();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2mj7i6o36a().s[0]++, 'popover');
  var VERSION = (cov_2mj7i6o36a().s[1]++, '4.5.0');
  var DATA_KEY = (cov_2mj7i6o36a().s[2]++, 'bs.popover');
  var EVENT_KEY = (cov_2mj7i6o36a().s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_2mj7i6o36a().s[4]++, $.fn[NAME]);
  var CLASS_PREFIX = (cov_2mj7i6o36a().s[5]++, 'bs-popover');
  var BSCLS_PREFIX_REGEX = (cov_2mj7i6o36a().s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var Default = (cov_2mj7i6o36a().s[7]++, _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  }));
  var DefaultType = (cov_2mj7i6o36a().s[8]++, _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  }));
  var CLASS_NAME_FADE = (cov_2mj7i6o36a().s[9]++, 'fade');
  var CLASS_NAME_SHOW = (cov_2mj7i6o36a().s[10]++, 'show');
  var SELECTOR_TITLE = (cov_2mj7i6o36a().s[11]++, '.popover-header');
  var SELECTOR_CONTENT = (cov_2mj7i6o36a().s[12]++, '.popover-body');
  var Event = (cov_2mj7i6o36a().s[13]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  });
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      cov_2mj7i6o36a().f[7]++;
      cov_2mj7i6o36a().s[21]++;
      return (cov_2mj7i6o36a().b[0][0]++, this.getTitle()) || (cov_2mj7i6o36a().b[0][1]++, this._getContent());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_2mj7i6o36a().f[8]++;
      cov_2mj7i6o36a().s[22]++;
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      cov_2mj7i6o36a().f[9]++;
      cov_2mj7i6o36a().s[23]++;
      this.tip = (cov_2mj7i6o36a().b[1][0]++, this.tip) || (cov_2mj7i6o36a().b[1][1]++, $(this.config.template)[0]);
      cov_2mj7i6o36a().s[24]++;
      return this.tip;
    };

    _proto.setContent = function setContent() {
      cov_2mj7i6o36a().f[10]++;
      var $tip = (cov_2mj7i6o36a().s[25]++, $(this.getTipElement())); // We use append for html objects to maintain js events

      cov_2mj7i6o36a().s[26]++;
      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());
      var content = (cov_2mj7i6o36a().s[27]++, this._getContent());
      cov_2mj7i6o36a().s[28]++;

      if (typeof content === 'function') {
        cov_2mj7i6o36a().b[2][0]++;
        cov_2mj7i6o36a().s[29]++;
        content = content.call(this.element);
      } else {
        cov_2mj7i6o36a().b[2][1]++;
      }

      cov_2mj7i6o36a().s[30]++;
      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      cov_2mj7i6o36a().s[31]++;
      $tip.removeClass(CLASS_NAME_FADE + " " + CLASS_NAME_SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      cov_2mj7i6o36a().f[11]++;
      cov_2mj7i6o36a().s[32]++;
      return (cov_2mj7i6o36a().b[3][0]++, this.element.getAttribute('data-content')) || (cov_2mj7i6o36a().b[3][1]++, this.config.content);
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_2mj7i6o36a().f[12]++;
      var $tip = (cov_2mj7i6o36a().s[33]++, $(this.getTipElement()));
      var tabClass = (cov_2mj7i6o36a().s[34]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_2mj7i6o36a().s[35]++;

      if ((cov_2mj7i6o36a().b[5][0]++, tabClass !== null) && (cov_2mj7i6o36a().b[5][1]++, tabClass.length > 0)) {
        cov_2mj7i6o36a().b[4][0]++;
        cov_2mj7i6o36a().s[36]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_2mj7i6o36a().b[4][1]++;
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      cov_2mj7i6o36a().f[13]++;
      cov_2mj7i6o36a().s[37]++;
      return this.each(function () {
        cov_2mj7i6o36a().f[14]++;
        var data = (cov_2mj7i6o36a().s[38]++, $(this).data(DATA_KEY));

        var _config = (cov_2mj7i6o36a().s[39]++, typeof config === 'object' ? (cov_2mj7i6o36a().b[6][0]++, config) : (cov_2mj7i6o36a().b[6][1]++, null));

        cov_2mj7i6o36a().s[40]++;

        if ((cov_2mj7i6o36a().b[8][0]++, !data) && (cov_2mj7i6o36a().b[8][1]++, /dispose|hide/.test(config))) {
          cov_2mj7i6o36a().b[7][0]++;
          cov_2mj7i6o36a().s[41]++;
          return;
        } else {
          cov_2mj7i6o36a().b[7][1]++;
        }

        cov_2mj7i6o36a().s[42]++;

        if (!data) {
          cov_2mj7i6o36a().b[9][0]++;
          cov_2mj7i6o36a().s[43]++;
          data = new Popover(this, _config);
          cov_2mj7i6o36a().s[44]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_2mj7i6o36a().b[9][1]++;
        }

        cov_2mj7i6o36a().s[45]++;

        if (typeof config === 'string') {
          cov_2mj7i6o36a().b[10][0]++;
          cov_2mj7i6o36a().s[46]++;

          if (typeof data[config] === 'undefined') {
            cov_2mj7i6o36a().b[11][0]++;
            cov_2mj7i6o36a().s[47]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_2mj7i6o36a().b[11][1]++;
          }

          cov_2mj7i6o36a().s[48]++;
          data[config]();
        } else {
          cov_2mj7i6o36a().b[10][1]++;
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        cov_2mj7i6o36a().f[0]++;
        cov_2mj7i6o36a().s[14]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_2mj7i6o36a().f[1]++;
        cov_2mj7i6o36a().s[15]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_2mj7i6o36a().f[2]++;
        cov_2mj7i6o36a().s[16]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_2mj7i6o36a().f[3]++;
        cov_2mj7i6o36a().s[17]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_2mj7i6o36a().f[4]++;
        cov_2mj7i6o36a().s[18]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_2mj7i6o36a().f[5]++;
        cov_2mj7i6o36a().s[19]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_2mj7i6o36a().f[6]++;
        cov_2mj7i6o36a().s[20]++;
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_2mj7i6o36a().s[49]++;
  $.fn[NAME] = Popover._jQueryInterface;
  cov_2mj7i6o36a().s[50]++;
  $.fn[NAME].Constructor = Popover;
  cov_2mj7i6o36a().s[51]++;

  $.fn[NAME].noConflict = function () {
    cov_2mj7i6o36a().f[15]++;
    cov_2mj7i6o36a().s[52]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2mj7i6o36a().s[53]++;
    return Popover._jQueryInterface;
  };

  return Popover;

})));
//# sourceMappingURL=popover.js.map
