/*!
  * Bootstrap alert.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Alert = factory(global.jQuery, global.Util));
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

  function cov_1y9c3kxmal() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\alert.js";
    var hash = "1e2614d9a20e904fe135c26bc47014fa52395452";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\alert.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 35
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
            column: 38
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
            column: 39
          }
        },
        "5": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 38
          }
        },
        "6": {
          start: {
            line: 24,
            column: 25
          },
          end: {
            line: 24,
            column: 49
          }
        },
        "7": {
          start: {
            line: 26,
            column: 29
          },
          end: {
            line: 26,
            column: 48
          }
        },
        "8": {
          start: {
            line: 27,
            column: 29
          },
          end: {
            line: 27,
            column: 49
          }
        },
        "9": {
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 28,
            column: 63
          }
        },
        "10": {
          start: {
            line: 30,
            column: 25
          },
          end: {
            line: 30,
            column: 32
          }
        },
        "11": {
          start: {
            line: 31,
            column: 25
          },
          end: {
            line: 31,
            column: 31
          }
        },
        "12": {
          start: {
            line: 32,
            column: 25
          },
          end: {
            line: 32,
            column: 31
          }
        },
        "13": {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 27
          }
        },
        "14": {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 18
          }
        },
        "15": {
          start: {
            line: 54,
            column: 22
          },
          end: {
            line: 54,
            column: 35
          }
        },
        "16": {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        "17": {
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 56,
            column: 49
          }
        },
        "18": {
          start: {
            line: 59,
            column: 24
          },
          end: {
            line: 59,
            column: 60
          }
        },
        "19": {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        "20": {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 62,
            column: 12
          }
        },
        "21": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 36
          }
        },
        "22": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 41
          }
        },
        "23": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 24
          }
        },
        "24": {
          start: {
            line: 76,
            column: 21
          },
          end: {
            line: 76,
            column: 57
          }
        },
        "25": {
          start: {
            line: 77,
            column: 21
          },
          end: {
            line: 77,
            column: 26
          }
        },
        "26": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        "27": {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 47
          }
        },
        "28": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        "29": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 60
          }
        },
        "30": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 17
          }
        },
        "31": {
          start: {
            line: 91,
            column: 23
          },
          end: {
            line: 91,
            column: 43
          }
        },
        "32": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 34
          }
        },
        "33": {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 94,
            column: 21
          }
        },
        "34": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 43
          }
        },
        "35": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        "36": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 35
          }
        },
        "37": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 12
          }
        },
        "38": {
          start: {
            line: 105,
            column: 31
          },
          end: {
            line: 105,
            column: 77
          }
        },
        "39": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 47
          }
        },
        "40": {
          start: {
            line: 108,
            column: 43
          },
          end: {
            line: 108,
            column: 79
          }
        },
        "41": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 116,
            column: 15
          }
        },
        "42": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 134,
            column: 6
          }
        },
        "43": {
          start: {
            line: 123,
            column: 23
          },
          end: {
            line: 123,
            column: 30
          }
        },
        "44": {
          start: {
            line: 124,
            column: 23
          },
          end: {
            line: 124,
            column: 46
          }
        },
        "45": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 129,
            column: 7
          }
        },
        "46": {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 127,
            column: 30
          }
        },
        "47": {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 37
          }
        },
        "48": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 133,
            column: 7
          }
        },
        "49": {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 132,
            column: 26
          }
        },
        "50": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "51": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 141,
            column: 7
          }
        },
        "52": {
          start: {
            line: 140,
            column: 8
          },
          end: {
            line: 140,
            column: 30
          }
        },
        "53": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 31
          }
        },
        "54": {
          start: {
            line: 154,
            column: 0
          },
          end: {
            line: 158,
            column: 1
          }
        },
        "55": {
          start: {
            line: 166,
            column: 0
          },
          end: {
            line: 166,
            column: 47
          }
        },
        "56": {
          start: {
            line: 167,
            column: 0
          },
          end: {
            line: 167,
            column: 30
          }
        },
        "57": {
          start: {
            line: 168,
            column: 0
          },
          end: {
            line: 171,
            column: 1
          }
        },
        "58": {
          start: {
            line: 169,
            column: 2
          },
          end: {
            line: 169,
            column: 33
          }
        },
        "59": {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 170,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          },
          loc: {
            start: {
              line: 41,
              column: 23
            },
            end: {
              line: 43,
              column: 3
            }
          },
          line: 41
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 47,
              column: 2
            },
            end: {
              line: 47,
              column: 3
            }
          },
          loc: {
            start: {
              line: 47,
              column: 23
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 47
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 53,
              column: 2
            },
            end: {
              line: 53,
              column: 3
            }
          },
          loc: {
            start: {
              line: 53,
              column: 17
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 53
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 12
            },
            end: {
              line: 71,
              column: 3
            }
          },
          line: 68
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 75,
              column: 2
            },
            end: {
              line: 75,
              column: 3
            }
          },
          loc: {
            start: {
              line: 75,
              column: 27
            },
            end: {
              line: 88,
              column: 3
            }
          },
          line: 75
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 90,
              column: 2
            },
            end: {
              line: 90,
              column: 3
            }
          },
          loc: {
            start: {
              line: 90,
              column: 30
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 90
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 97,
              column: 3
            }
          },
          loc: {
            start: {
              line: 97,
              column: 26
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 97
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 108,
              column: 32
            },
            end: {
              line: 108,
              column: 33
            }
          },
          loc: {
            start: {
              line: 108,
              column: 43
            },
            end: {
              line: 108,
              column: 79
            }
          },
          line: 108
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 27
            },
            end: {
              line: 117,
              column: 3
            }
          },
          line: 112
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 121,
              column: 2
            },
            end: {
              line: 121,
              column: 3
            }
          },
          loc: {
            start: {
              line: 121,
              column: 34
            },
            end: {
              line: 135,
              column: 3
            }
          },
          line: 121
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 122,
              column: 21
            },
            end: {
              line: 122,
              column: 22
            }
          },
          loc: {
            start: {
              line: 122,
              column: 33
            },
            end: {
              line: 134,
              column: 5
            }
          },
          line: 122
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 137,
              column: 2
            },
            end: {
              line: 137,
              column: 3
            }
          },
          loc: {
            start: {
              line: 137,
              column: 39
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 137
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 138,
              column: 11
            },
            end: {
              line: 138,
              column: 12
            }
          },
          loc: {
            start: {
              line: 138,
              column: 28
            },
            end: {
              line: 144,
              column: 5
            }
          },
          line: 138
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 168,
              column: 25
            },
            end: {
              line: 168,
              column: 26
            }
          },
          loc: {
            start: {
              line: 168,
              column: 31
            },
            end: {
              line: 171,
              column: 1
            }
          },
          line: 168
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 55,
              column: 4
            },
            end: {
              line: 57,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 55,
              column: 4
            },
            end: {
              line: 57,
              column: 5
            }
          }, {
            start: {
              line: 55,
              column: 4
            },
            end: {
              line: 57,
              column: 5
            }
          }],
          line: 55
        },
        "1": {
          loc: {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 63,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 63,
              column: 5
            }
          }, {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 63,
              column: 5
            }
          }],
          line: 61
        },
        "2": {
          loc: {
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 81,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 81,
              column: 5
            }
          }, {
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 81,
              column: 5
            }
          }],
          line: 79
        },
        "3": {
          loc: {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 85,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 85,
              column: 5
            }
          }, {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 85,
              column: 5
            }
          }],
          line: 83
        },
        "4": {
          loc: {
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          }, {
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          }],
          line: 100
        },
        "5": {
          loc: {
            start: {
              line: 126,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 126,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          }, {
            start: {
              line: 126,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          }],
          line: 126
        },
        "6": {
          loc: {
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 133,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 133,
              column: 7
            }
          }, {
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 133,
              column: 7
            }
          }],
          line: 131
        },
        "7": {
          loc: {
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 141,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 141,
              column: 7
            }
          }, {
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 141,
              column: 7
            }
          }],
          line: 139
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
        "59": 0
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
        "13": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "1e2614d9a20e904fe135c26bc47014fa52395452"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_1y9c3kxmal = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_1y9c3kxmal();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1y9c3kxmal().s[0]++, 'alert');
  var VERSION = (cov_1y9c3kxmal().s[1]++, '4.5.0');
  var DATA_KEY = (cov_1y9c3kxmal().s[2]++, 'bs.alert');
  var EVENT_KEY = (cov_1y9c3kxmal().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1y9c3kxmal().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1y9c3kxmal().s[5]++, $.fn[NAME]);
  var SELECTOR_DISMISS = (cov_1y9c3kxmal().s[6]++, '[data-dismiss="alert"]');
  var EVENT_CLOSE = (cov_1y9c3kxmal().s[7]++, "close" + EVENT_KEY);
  var EVENT_CLOSED = (cov_1y9c3kxmal().s[8]++, "closed" + EVENT_KEY);
  var EVENT_CLICK_DATA_API = (cov_1y9c3kxmal().s[9]++, "click" + EVENT_KEY + DATA_API_KEY);
  var CLASS_NAME_ALERT = (cov_1y9c3kxmal().s[10]++, 'alert');
  var CLASS_NAME_FADE = (cov_1y9c3kxmal().s[11]++, 'fade');
  var CLASS_NAME_SHOW = (cov_1y9c3kxmal().s[12]++, 'show');
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      cov_1y9c3kxmal().f[0]++;
      cov_1y9c3kxmal().s[13]++;
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      cov_1y9c3kxmal().f[2]++;
      var rootElement = (cov_1y9c3kxmal().s[15]++, this._element);
      cov_1y9c3kxmal().s[16]++;

      if (element) {
        cov_1y9c3kxmal().b[0][0]++;
        cov_1y9c3kxmal().s[17]++;
        rootElement = this._getRootElement(element);
      } else {
        cov_1y9c3kxmal().b[0][1]++;
      }

      var customEvent = (cov_1y9c3kxmal().s[18]++, this._triggerCloseEvent(rootElement));
      cov_1y9c3kxmal().s[19]++;

      if (customEvent.isDefaultPrevented()) {
        cov_1y9c3kxmal().b[1][0]++;
        cov_1y9c3kxmal().s[20]++;
        return;
      } else {
        cov_1y9c3kxmal().b[1][1]++;
      }

      cov_1y9c3kxmal().s[21]++;

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      cov_1y9c3kxmal().f[3]++;
      cov_1y9c3kxmal().s[22]++;
      $.removeData(this._element, DATA_KEY);
      cov_1y9c3kxmal().s[23]++;
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      cov_1y9c3kxmal().f[4]++;
      var selector = (cov_1y9c3kxmal().s[24]++, Util.getSelectorFromElement(element));
      var parent = (cov_1y9c3kxmal().s[25]++, false);
      cov_1y9c3kxmal().s[26]++;

      if (selector) {
        cov_1y9c3kxmal().b[2][0]++;
        cov_1y9c3kxmal().s[27]++;
        parent = document.querySelector(selector);
      } else {
        cov_1y9c3kxmal().b[2][1]++;
      }

      cov_1y9c3kxmal().s[28]++;

      if (!parent) {
        cov_1y9c3kxmal().b[3][0]++;
        cov_1y9c3kxmal().s[29]++;
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      } else {
        cov_1y9c3kxmal().b[3][1]++;
      }

      cov_1y9c3kxmal().s[30]++;
      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      cov_1y9c3kxmal().f[5]++;
      var closeEvent = (cov_1y9c3kxmal().s[31]++, $.Event(EVENT_CLOSE));
      cov_1y9c3kxmal().s[32]++;
      $(element).trigger(closeEvent);
      cov_1y9c3kxmal().s[33]++;
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      cov_1y9c3kxmal().f[6]++;
      cov_1y9c3kxmal().s[34]++;
      $(element).removeClass(CLASS_NAME_SHOW);
      cov_1y9c3kxmal().s[35]++;

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        cov_1y9c3kxmal().b[4][0]++;
        cov_1y9c3kxmal().s[36]++;

        this._destroyElement(element);

        cov_1y9c3kxmal().s[37]++;
        return;
      } else {
        cov_1y9c3kxmal().b[4][1]++;
      }

      var transitionDuration = (cov_1y9c3kxmal().s[38]++, Util.getTransitionDurationFromElement(element));
      cov_1y9c3kxmal().s[39]++;
      $(element).one(Util.TRANSITION_END, function (event) {
        cov_1y9c3kxmal().f[7]++;
        cov_1y9c3kxmal().s[40]++;
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      cov_1y9c3kxmal().f[8]++;
      cov_1y9c3kxmal().s[41]++;
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      cov_1y9c3kxmal().f[9]++;
      cov_1y9c3kxmal().s[42]++;
      return this.each(function () {
        cov_1y9c3kxmal().f[10]++;
        var $element = (cov_1y9c3kxmal().s[43]++, $(this));
        var data = (cov_1y9c3kxmal().s[44]++, $element.data(DATA_KEY));
        cov_1y9c3kxmal().s[45]++;

        if (!data) {
          cov_1y9c3kxmal().b[5][0]++;
          cov_1y9c3kxmal().s[46]++;
          data = new Alert(this);
          cov_1y9c3kxmal().s[47]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_1y9c3kxmal().b[5][1]++;
        }

        cov_1y9c3kxmal().s[48]++;

        if (config === 'close') {
          cov_1y9c3kxmal().b[6][0]++;
          cov_1y9c3kxmal().s[49]++;
          data[config](this);
        } else {
          cov_1y9c3kxmal().b[6][1]++;
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      cov_1y9c3kxmal().f[11]++;
      cov_1y9c3kxmal().s[50]++;
      return function (event) {
        cov_1y9c3kxmal().f[12]++;
        cov_1y9c3kxmal().s[51]++;

        if (event) {
          cov_1y9c3kxmal().b[7][0]++;
          cov_1y9c3kxmal().s[52]++;
          event.preventDefault();
        } else {
          cov_1y9c3kxmal().b[7][1]++;
        }

        cov_1y9c3kxmal().s[53]++;
        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        cov_1y9c3kxmal().f[1]++;
        cov_1y9c3kxmal().s[14]++;
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_1y9c3kxmal().s[54]++;
  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1y9c3kxmal().s[55]++;
  $.fn[NAME] = Alert._jQueryInterface;
  cov_1y9c3kxmal().s[56]++;
  $.fn[NAME].Constructor = Alert;
  cov_1y9c3kxmal().s[57]++;

  $.fn[NAME].noConflict = function () {
    cov_1y9c3kxmal().f[13]++;
    cov_1y9c3kxmal().s[58]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1y9c3kxmal().s[59]++;
    return Alert._jQueryInterface;
  };

  return Alert;

})));
//# sourceMappingURL=alert.js.map
