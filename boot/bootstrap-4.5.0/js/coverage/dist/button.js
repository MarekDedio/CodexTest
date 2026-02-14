/*!
  * Bootstrap button.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.Button = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;

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

  function cov_29rrk31kyq() {
    var path = "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\button.js";
    var hash = "90bf9ba7991aaafadf9678f49c07465a2c932b06";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "c:\\Users\\Suweren\\Desktop\\bootstrap\\boot\\bootstrap-4.5.0\\js\\src\\button.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 16,
            column: 36
          }
        },
        "1": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 35
          }
        },
        "2": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 39
          }
        },
        "3": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 42
          }
        },
        "4": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "5": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "6": {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 34
          }
        },
        "7": {
          start: {
            line: 24,
            column: 26
          },
          end: {
            line: 24,
            column: 31
          }
        },
        "8": {
          start: {
            line: 25,
            column: 26
          },
          end: {
            line: 25,
            column: 33
          }
        },
        "9": {
          start: {
            line: 27,
            column: 38
          },
          end: {
            line: 27,
            column: 63
          }
        },
        "10": {
          start: {
            line: 28,
            column: 38
          },
          end: {
            line: 28,
            column: 63
          }
        },
        "11": {
          start: {
            line: 29,
            column: 38
          },
          end: {
            line: 29,
            column: 62
          }
        },
        "12": {
          start: {
            line: 30,
            column: 38
          },
          end: {
            line: 30,
            column: 68
          }
        },
        "13": {
          start: {
            line: 31,
            column: 38
          },
          end: {
            line: 31,
            column: 66
          }
        },
        "14": {
          start: {
            line: 32,
            column: 38
          },
          end: {
            line: 32,
            column: 47
          }
        },
        "15": {
          start: {
            line: 33,
            column: 38
          },
          end: {
            line: 33,
            column: 44
          }
        },
        "16": {
          start: {
            line: 35,
            column: 34
          },
          end: {
            line: 35,
            column: 68
          }
        },
        "17": {
          start: {
            line: 36,
            column: 34
          },
          end: {
            line: 37,
            column: 59
          }
        },
        "18": {
          start: {
            line: 38,
            column: 34
          },
          end: {
            line: 38,
            column: 67
          }
        },
        "19": {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 27
          }
        },
        "20": {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 18
          }
        },
        "21": {
          start: {
            line: 60,
            column: 29
          },
          end: {
            line: 60,
            column: 33
          }
        },
        "22": {
          start: {
            line: 61,
            column: 25
          },
          end: {
            line: 61,
            column: 29
          }
        },
        "23": {
          start: {
            line: 62,
            column: 24
          },
          end: {
            line: 64,
            column: 8
          }
        },
        "24": {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        "25": {
          start: {
            line: 67,
            column: 20
          },
          end: {
            line: 67,
            column: 63
          }
        },
        "26": {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        },
        "27": {
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        },
        "28": {
          start: {
            line: 71,
            column: 10
          },
          end: {
            line: 80,
            column: 11
          }
        },
        "29": {
          start: {
            line: 73,
            column: 12
          },
          end: {
            line: 73,
            column: 38
          }
        },
        "30": {
          start: {
            line: 75,
            column: 34
          },
          end: {
            line: 75,
            column: 76
          }
        },
        "31": {
          start: {
            line: 77,
            column: 12
          },
          end: {
            line: 79,
            column: 13
          }
        },
        "32": {
          start: {
            line: 78,
            column: 14
          },
          end: {
            line: 78,
            column: 61
          }
        },
        "33": {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        },
        "34": {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 87,
            column: 11
          }
        },
        "35": {
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 86,
            column: 80
          }
        },
        "36": {
          start: {
            line: 88,
            column: 10
          },
          end: {
            line: 88,
            column: 36
          }
        },
        "37": {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 21
          }
        },
        "38": {
          start: {
            line: 92,
            column: 8
          },
          end: {
            line: 92,
            column: 30
          }
        },
        "39": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        "40": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 100,
            column: 7
          }
        },
        "41": {
          start: {
            line: 98,
            column: 8
          },
          end: {
            line: 99,
            column: 63
          }
        },
        "42": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 104,
            column: 7
          }
        },
        "43": {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 103,
            column: 55
          }
        },
        "44": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 41
          }
        },
        "45": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 24
          }
        },
        "46": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 127,
            column: 6
          }
        },
        "47": {
          start: {
            line: 117,
            column: 17
          },
          end: {
            line: 117,
            column: 39
          }
        },
        "48": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 122,
            column: 7
          }
        },
        "49": {
          start: {
            line: 120,
            column: 8
          },
          end: {
            line: 120,
            column: 31
          }
        },
        "50": {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 36
          }
        },
        "51": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 126,
            column: 7
          }
        },
        "52": {
          start: {
            line: 125,
            column: 8
          },
          end: {
            line: 125,
            column: 22
          }
        },
        "53": {
          start: {
            line: 137,
            column: 0
          },
          end: {
            line: 165,
            column: 4
          }
        },
        "54": {
          start: {
            line: 139,
            column: 17
          },
          end: {
            line: 139,
            column: 29
          }
        },
        "55": {
          start: {
            line: 140,
            column: 26
          },
          end: {
            line: 140,
            column: 32
          }
        },
        "56": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "57": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 52
          }
        },
        "58": {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "59": {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 147,
            column: 28
          }
        },
        "60": {
          start: {
            line: 149,
            column: 23
          },
          end: {
            line: 149,
            column: 59
          }
        },
        "61": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 154,
            column: 7
          }
        },
        "62": {
          start: {
            line: 152,
            column: 8
          },
          end: {
            line: 152,
            column: 30
          }
        },
        "63": {
          start: {
            line: 153,
            column: 8
          },
          end: {
            line: 153,
            column: 14
          }
        },
        "64": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 158,
            column: 7
          }
        },
        "65": {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 157,
            column: 30
          }
        },
        "66": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 55
          }
        },
        "67": {
          start: {
            line: 163,
            column: 19
          },
          end: {
            line: 163,
            column: 62
          }
        },
        "68": {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 164,
            column: 76
          }
        },
        "69": {
          start: {
            line: 167,
            column: 0
          },
          end: {
            line: 192,
            column: 2
          }
        },
        "70": {
          start: {
            line: 171,
            column: 16
          },
          end: {
            line: 171,
            column: 87
          }
        },
        "71": {
          start: {
            line: 172,
            column: 2
          },
          end: {
            line: 180,
            column: 3
          }
        },
        "72": {
          start: {
            line: 172,
            column: 15
          },
          end: {
            line: 172,
            column: 16
          }
        },
        "73": {
          start: {
            line: 172,
            column: 24
          },
          end: {
            line: 172,
            column: 38
          }
        },
        "74": {
          start: {
            line: 173,
            column: 19
          },
          end: {
            line: 173,
            column: 29
          }
        },
        "75": {
          start: {
            line: 174,
            column: 18
          },
          end: {
            line: 174,
            column: 54
          }
        },
        "76": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 179,
            column: 5
          }
        },
        "77": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 45
          }
        },
        "78": {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 48
          }
        },
        "79": {
          start: {
            line: 183,
            column: 2
          },
          end: {
            line: 183,
            column: 74
          }
        },
        "80": {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 191,
            column: 3
          }
        },
        "81": {
          start: {
            line: 184,
            column: 15
          },
          end: {
            line: 184,
            column: 16
          }
        },
        "82": {
          start: {
            line: 184,
            column: 24
          },
          end: {
            line: 184,
            column: 38
          }
        },
        "83": {
          start: {
            line: 185,
            column: 19
          },
          end: {
            line: 185,
            column: 29
          }
        },
        "84": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        "85": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 45
          }
        },
        "86": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 48
          }
        },
        "87": {
          start: {
            line: 200,
            column: 0
          },
          end: {
            line: 200,
            column: 36
          }
        },
        "88": {
          start: {
            line: 201,
            column: 0
          },
          end: {
            line: 201,
            column: 31
          }
        },
        "89": {
          start: {
            line: 202,
            column: 0
          },
          end: {
            line: 205,
            column: 1
          }
        },
        "90": {
          start: {
            line: 203,
            column: 2
          },
          end: {
            line: 203,
            column: 33
          }
        },
        "91": {
          start: {
            line: 204,
            column: 2
          },
          end: {
            line: 204,
            column: 32
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 55,
              column: 3
            }
          },
          line: 53
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 59,
              column: 2
            },
            end: {
              line: 59,
              column: 3
            }
          },
          loc: {
            start: {
              line: 59,
              column: 11
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 59
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 108,
              column: 2
            },
            end: {
              line: 108,
              column: 3
            }
          },
          loc: {
            start: {
              line: 108,
              column: 12
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 108
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 34
            },
            end: {
              line: 128,
              column: 3
            }
          },
          line: 115
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 116,
              column: 21
            },
            end: {
              line: 116,
              column: 22
            }
          },
          loc: {
            start: {
              line: 116,
              column: 33
            },
            end: {
              line: 127,
              column: 5
            }
          },
          line: 116
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 138,
              column: 57
            },
            end: {
              line: 138,
              column: 58
            }
          },
          loc: {
            start: {
              line: 138,
              column: 68
            },
            end: {
              line: 161,
              column: 3
            }
          },
          line: 138
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 162,
              column: 62
            },
            end: {
              line: 162,
              column: 63
            }
          },
          loc: {
            start: {
              line: 162,
              column: 73
            },
            end: {
              line: 165,
              column: 3
            }
          },
          line: 162
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 167,
              column: 34
            },
            end: {
              line: 167,
              column: 35
            }
          },
          loc: {
            start: {
              line: 167,
              column: 40
            },
            end: {
              line: 192,
              column: 1
            }
          },
          line: 167
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 202,
              column: 24
            },
            end: {
              line: 202,
              column: 25
            }
          },
          loc: {
            start: {
              line: 202,
              column: 30
            },
            end: {
              line: 205,
              column: 1
            }
          },
          line: 202
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 66,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 66,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          }, {
            start: {
              line: 66,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          }],
          line: 66
        },
        "1": {
          loc: {
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 93,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 93,
              column: 7
            }
          }, {
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 93,
              column: 7
            }
          }],
          line: 69
        },
        "2": {
          loc: {
            start: {
              line: 70,
              column: 8
            },
            end: {
              line: 81,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 70,
              column: 8
            },
            end: {
              line: 81,
              column: 9
            }
          }, {
            start: {
              line: 70,
              column: 8
            },
            end: {
              line: 81,
              column: 9
            }
          }],
          line: 70
        },
        "3": {
          loc: {
            start: {
              line: 71,
              column: 10
            },
            end: {
              line: 80,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 71,
              column: 10
            },
            end: {
              line: 80,
              column: 11
            }
          }, {
            start: {
              line: 71,
              column: 10
            },
            end: {
              line: 80,
              column: 11
            }
          }],
          line: 71
        },
        "4": {
          loc: {
            start: {
              line: 71,
              column: 14
            },
            end: {
              line: 72,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 71,
              column: 14
            },
            end: {
              line: 71,
              column: 27
            }
          }, {
            start: {
              line: 72,
              column: 12
            },
            end: {
              line: 72,
              column: 63
            }
          }],
          line: 71
        },
        "5": {
          loc: {
            start: {
              line: 77,
              column: 12
            },
            end: {
              line: 79,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 77,
              column: 12
            },
            end: {
              line: 79,
              column: 13
            }
          }, {
            start: {
              line: 77,
              column: 12
            },
            end: {
              line: 79,
              column: 13
            }
          }],
          line: 77
        },
        "6": {
          loc: {
            start: {
              line: 83,
              column: 8
            },
            end: {
              line: 89,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 8
            },
            end: {
              line: 89,
              column: 9
            }
          }, {
            start: {
              line: 83,
              column: 8
            },
            end: {
              line: 89,
              column: 9
            }
          }],
          line: 83
        },
        "7": {
          loc: {
            start: {
              line: 85,
              column: 10
            },
            end: {
              line: 87,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 85,
              column: 10
            },
            end: {
              line: 87,
              column: 11
            }
          }, {
            start: {
              line: 85,
              column: 10
            },
            end: {
              line: 87,
              column: 11
            }
          }],
          line: 85
        },
        "8": {
          loc: {
            start: {
              line: 85,
              column: 14
            },
            end: {
              line: 85,
              column: 65
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 85,
              column: 14
            },
            end: {
              line: 85,
              column: 39
            }
          }, {
            start: {
              line: 85,
              column: 43
            },
            end: {
              line: 85,
              column: 65
            }
          }],
          line: 85
        },
        "9": {
          loc: {
            start: {
              line: 96,
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
              line: 96,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }, {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }],
          line: 96
        },
        "10": {
          loc: {
            start: {
              line: 96,
              column: 10
            },
            end: {
              line: 96,
              column: 96
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 96,
              column: 10
            },
            end: {
              line: 96,
              column: 48
            }
          }, {
            start: {
              line: 96,
              column: 52
            },
            end: {
              line: 96,
              column: 96
            }
          }],
          line: 96
        },
        "11": {
          loc: {
            start: {
              line: 97,
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
              line: 97,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          }, {
            start: {
              line: 97,
              column: 6
            },
            end: {
              line: 100,
              column: 7
            }
          }],
          line: 97
        },
        "12": {
          loc: {
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          }, {
            start: {
              line: 102,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          }],
          line: 102
        },
        "13": {
          loc: {
            start: {
              line: 119,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 119,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          }, {
            start: {
              line: 119,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          }],
          line: 119
        },
        "14": {
          loc: {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }, {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }],
          line: 124
        },
        "15": {
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
        "16": {
          loc: {
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }],
          line: 146
        },
        "17": {
          loc: {
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 146,
              column: 91
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 146,
              column: 15
            }
          }, {
            start: {
              line: 146,
              column: 19
            },
            end: {
              line: 146,
              column: 50
            }
          }, {
            start: {
              line: 146,
              column: 54
            },
            end: {
              line: 146,
              column: 91
            }
          }],
          line: 146
        },
        "18": {
          loc: {
            start: {
              line: 151,
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
              line: 151,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }, {
            start: {
              line: 151,
              column: 6
            },
            end: {
              line: 154,
              column: 7
            }
          }],
          line: 151
        },
        "19": {
          loc: {
            start: {
              line: 151,
              column: 10
            },
            end: {
              line: 151,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 151,
              column: 10
            },
            end: {
              line: 151,
              column: 18
            }
          }, {
            start: {
              line: 151,
              column: 23
            },
            end: {
              line: 151,
              column: 56
            }
          }, {
            start: {
              line: 151,
              column: 60
            },
            end: {
              line: 151,
              column: 99
            }
          }],
          line: 151
        },
        "20": {
          loc: {
            start: {
              line: 156,
              column: 6
            },
            end: {
              line: 158,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 156,
              column: 6
            },
            end: {
              line: 158,
              column: 7
            }
          }, {
            start: {
              line: 156,
              column: 6
            },
            end: {
              line: 158,
              column: 7
            }
          }],
          line: 156
        },
        "21": {
          loc: {
            start: {
              line: 156,
              column: 10
            },
            end: {
              line: 156,
              column: 87
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 156,
              column: 10
            },
            end: {
              line: 156,
              column: 43
            }
          }, {
            start: {
              line: 156,
              column: 47
            },
            end: {
              line: 156,
              column: 55
            }
          }, {
            start: {
              line: 156,
              column: 59
            },
            end: {
              line: 156,
              column: 87
            }
          }],
          line: 156
        },
        "22": {
          loc: {
            start: {
              line: 175,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 175,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          }, {
            start: {
              line: 175,
              column: 4
            },
            end: {
              line: 179,
              column: 5
            }
          }],
          line: 175
        },
        "23": {
          loc: {
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 175,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 175,
              column: 21
            }
          }, {
            start: {
              line: 175,
              column: 25
            },
            end: {
              line: 175,
              column: 54
            }
          }],
          line: 175
        },
        "24": {
          loc: {
            start: {
              line: 186,
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
              line: 186,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }, {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          }],
          line: 186
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
        "91": 0
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
        "9": 0
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
        "17": [0, 0, 0],
        "18": [0, 0],
        "19": [0, 0, 0],
        "20": [0, 0],
        "21": [0, 0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "90bf9ba7991aaafadf9678f49c07465a2c932b06"
    };
    var coverage = global[gcv] || (global[gcv] = {});

    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }

    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_29rrk31kyq = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }

  cov_29rrk31kyq();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_29rrk31kyq().s[0]++, 'button');
  var VERSION = (cov_29rrk31kyq().s[1]++, '4.5.0');
  var DATA_KEY = (cov_29rrk31kyq().s[2]++, 'bs.button');
  var EVENT_KEY = (cov_29rrk31kyq().s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_29rrk31kyq().s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_29rrk31kyq().s[5]++, $.fn[NAME]);
  var CLASS_NAME_ACTIVE = (cov_29rrk31kyq().s[6]++, 'active');
  var CLASS_NAME_BUTTON = (cov_29rrk31kyq().s[7]++, 'btn');
  var CLASS_NAME_FOCUS = (cov_29rrk31kyq().s[8]++, 'focus');
  var SELECTOR_DATA_TOGGLE_CARROT = (cov_29rrk31kyq().s[9]++, '[data-toggle^="button"]');
  var SELECTOR_DATA_TOGGLES = (cov_29rrk31kyq().s[10]++, '[data-toggle="buttons"]');
  var SELECTOR_DATA_TOGGLE = (cov_29rrk31kyq().s[11]++, '[data-toggle="button"]');
  var SELECTOR_DATA_TOGGLES_BUTTONS = (cov_29rrk31kyq().s[12]++, '[data-toggle="buttons"] .btn');
  var SELECTOR_INPUT = (cov_29rrk31kyq().s[13]++, 'input:not([type="hidden"])');
  var SELECTOR_ACTIVE = (cov_29rrk31kyq().s[14]++, '.active');
  var SELECTOR_BUTTON = (cov_29rrk31kyq().s[15]++, '.btn');
  var EVENT_CLICK_DATA_API = (cov_29rrk31kyq().s[16]++, "click" + EVENT_KEY + DATA_API_KEY);
  var EVENT_FOCUS_BLUR_DATA_API = (cov_29rrk31kyq().s[17]++, "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY));
  var EVENT_LOAD_DATA_API = (cov_29rrk31kyq().s[18]++, "load" + EVENT_KEY + DATA_API_KEY);
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      cov_29rrk31kyq().f[0]++;
      cov_29rrk31kyq().s[19]++;
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_29rrk31kyq().f[2]++;
      var triggerChangeEvent = (cov_29rrk31kyq().s[21]++, true);
      var addAriaPressed = (cov_29rrk31kyq().s[22]++, true);
      var rootElement = (cov_29rrk31kyq().s[23]++, $(this._element).closest(SELECTOR_DATA_TOGGLES)[0]);
      cov_29rrk31kyq().s[24]++;

      if (rootElement) {
        cov_29rrk31kyq().b[0][0]++;
        var input = (cov_29rrk31kyq().s[25]++, this._element.querySelector(SELECTOR_INPUT));
        cov_29rrk31kyq().s[26]++;

        if (input) {
          cov_29rrk31kyq().b[1][0]++;
          cov_29rrk31kyq().s[27]++;

          if (input.type === 'radio') {
            cov_29rrk31kyq().b[2][0]++;
            cov_29rrk31kyq().s[28]++;

            if ((cov_29rrk31kyq().b[4][0]++, input.checked) && (cov_29rrk31kyq().b[4][1]++, this._element.classList.contains(CLASS_NAME_ACTIVE))) {
              cov_29rrk31kyq().b[3][0]++;
              cov_29rrk31kyq().s[29]++;
              triggerChangeEvent = false;
            } else {
              cov_29rrk31kyq().b[3][1]++;
              var activeElement = (cov_29rrk31kyq().s[30]++, rootElement.querySelector(SELECTOR_ACTIVE));
              cov_29rrk31kyq().s[31]++;

              if (activeElement) {
                cov_29rrk31kyq().b[5][0]++;
                cov_29rrk31kyq().s[32]++;
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              } else {
                cov_29rrk31kyq().b[5][1]++;
              }
            }
          } else {
            cov_29rrk31kyq().b[2][1]++;
          }

          cov_29rrk31kyq().s[33]++;

          if (triggerChangeEvent) {
            cov_29rrk31kyq().b[6][0]++;
            cov_29rrk31kyq().s[34]++;

            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if ((cov_29rrk31kyq().b[8][0]++, input.type === 'checkbox') || (cov_29rrk31kyq().b[8][1]++, input.type === 'radio')) {
              cov_29rrk31kyq().b[7][0]++;
              cov_29rrk31kyq().s[35]++;
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            } else {
              cov_29rrk31kyq().b[7][1]++;
            }

            cov_29rrk31kyq().s[36]++;
            $(input).trigger('change');
          } else {
            cov_29rrk31kyq().b[6][1]++;
          }

          cov_29rrk31kyq().s[37]++;
          input.focus();
          cov_29rrk31kyq().s[38]++;
          addAriaPressed = false;
        } else {
          cov_29rrk31kyq().b[1][1]++;
        }
      } else {
        cov_29rrk31kyq().b[0][1]++;
      }

      cov_29rrk31kyq().s[39]++;

      if (!((cov_29rrk31kyq().b[10][0]++, this._element.hasAttribute('disabled')) || (cov_29rrk31kyq().b[10][1]++, this._element.classList.contains('disabled')))) {
        cov_29rrk31kyq().b[9][0]++;
        cov_29rrk31kyq().s[40]++;

        if (addAriaPressed) {
          cov_29rrk31kyq().b[11][0]++;
          cov_29rrk31kyq().s[41]++;

          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        } else {
          cov_29rrk31kyq().b[11][1]++;
        }

        cov_29rrk31kyq().s[42]++;

        if (triggerChangeEvent) {
          cov_29rrk31kyq().b[12][0]++;
          cov_29rrk31kyq().s[43]++;
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        } else {
          cov_29rrk31kyq().b[12][1]++;
        }
      } else {
        cov_29rrk31kyq().b[9][1]++;
      }
    };

    _proto.dispose = function dispose() {
      cov_29rrk31kyq().f[3]++;
      cov_29rrk31kyq().s[44]++;
      $.removeData(this._element, DATA_KEY);
      cov_29rrk31kyq().s[45]++;
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      cov_29rrk31kyq().f[4]++;
      cov_29rrk31kyq().s[46]++;
      return this.each(function () {
        cov_29rrk31kyq().f[5]++;
        var data = (cov_29rrk31kyq().s[47]++, $(this).data(DATA_KEY));
        cov_29rrk31kyq().s[48]++;

        if (!data) {
          cov_29rrk31kyq().b[13][0]++;
          cov_29rrk31kyq().s[49]++;
          data = new Button(this);
          cov_29rrk31kyq().s[50]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_29rrk31kyq().b[13][1]++;
        }

        cov_29rrk31kyq().s[51]++;

        if (config === 'toggle') {
          cov_29rrk31kyq().b[14][0]++;
          cov_29rrk31kyq().s[52]++;
          data[config]();
        } else {
          cov_29rrk31kyq().b[14][1]++;
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        cov_29rrk31kyq().f[1]++;
        cov_29rrk31kyq().s[20]++;
        return VERSION;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_29rrk31kyq().s[53]++;
  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    cov_29rrk31kyq().f[6]++;
    var button = (cov_29rrk31kyq().s[54]++, event.target);
    var initialButton = (cov_29rrk31kyq().s[55]++, button);
    cov_29rrk31kyq().s[56]++;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      cov_29rrk31kyq().b[15][0]++;
      cov_29rrk31kyq().s[57]++;
      button = $(button).closest(SELECTOR_BUTTON)[0];
    } else {
      cov_29rrk31kyq().b[15][1]++;
    }

    cov_29rrk31kyq().s[58]++;

    if ((cov_29rrk31kyq().b[17][0]++, !button) || (cov_29rrk31kyq().b[17][1]++, button.hasAttribute('disabled')) || (cov_29rrk31kyq().b[17][2]++, button.classList.contains('disabled'))) {
      cov_29rrk31kyq().b[16][0]++;
      cov_29rrk31kyq().s[59]++;
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      cov_29rrk31kyq().b[16][1]++;
      var inputBtn = (cov_29rrk31kyq().s[60]++, button.querySelector(SELECTOR_INPUT));
      cov_29rrk31kyq().s[61]++;

      if ((cov_29rrk31kyq().b[19][0]++, inputBtn) && ((cov_29rrk31kyq().b[19][1]++, inputBtn.hasAttribute('disabled')) || (cov_29rrk31kyq().b[19][2]++, inputBtn.classList.contains('disabled')))) {
        cov_29rrk31kyq().b[18][0]++;
        cov_29rrk31kyq().s[62]++;
        event.preventDefault(); // work around Firefox bug #1540995

        cov_29rrk31kyq().s[63]++;
        return;
      } else {
        cov_29rrk31kyq().b[18][1]++;
      }

      cov_29rrk31kyq().s[64]++;

      if ((cov_29rrk31kyq().b[21][0]++, initialButton.tagName === 'LABEL') && (cov_29rrk31kyq().b[21][1]++, inputBtn) && (cov_29rrk31kyq().b[21][2]++, inputBtn.type === 'checkbox')) {
        cov_29rrk31kyq().b[20][0]++;
        cov_29rrk31kyq().s[65]++;
        event.preventDefault(); // work around event sent to label and input
      } else {
        cov_29rrk31kyq().b[20][1]++;
      }

      cov_29rrk31kyq().s[66]++;

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    cov_29rrk31kyq().f[7]++;
    var button = (cov_29rrk31kyq().s[67]++, $(event.target).closest(SELECTOR_BUTTON)[0]);
    cov_29rrk31kyq().s[68]++;
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  cov_29rrk31kyq().s[69]++;
  $(window).on(EVENT_LOAD_DATA_API, function () {
    cov_29rrk31kyq().f[8]++;
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = (cov_29rrk31kyq().s[70]++, [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS)));
    cov_29rrk31kyq().s[71]++;

    for (var i = (cov_29rrk31kyq().s[72]++, 0), len = (cov_29rrk31kyq().s[73]++, buttons.length); i < len; i++) {
      var button = (cov_29rrk31kyq().s[74]++, buttons[i]);
      var input = (cov_29rrk31kyq().s[75]++, button.querySelector(SELECTOR_INPUT));
      cov_29rrk31kyq().s[76]++;

      if ((cov_29rrk31kyq().b[23][0]++, input.checked) || (cov_29rrk31kyq().b[23][1]++, input.hasAttribute('checked'))) {
        cov_29rrk31kyq().b[22][0]++;
        cov_29rrk31kyq().s[77]++;
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        cov_29rrk31kyq().b[22][1]++;
        cov_29rrk31kyq().s[78]++;
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    cov_29rrk31kyq().s[79]++;
    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));
    cov_29rrk31kyq().s[80]++;

    for (var _i = (cov_29rrk31kyq().s[81]++, 0), _len = (cov_29rrk31kyq().s[82]++, buttons.length); _i < _len; _i++) {
      var _button = (cov_29rrk31kyq().s[83]++, buttons[_i]);

      cov_29rrk31kyq().s[84]++;

      if (_button.getAttribute('aria-pressed') === 'true') {
        cov_29rrk31kyq().b[24][0]++;
        cov_29rrk31kyq().s[85]++;

        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        cov_29rrk31kyq().b[24][1]++;
        cov_29rrk31kyq().s[86]++;

        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_29rrk31kyq().s[87]++;
  $.fn[NAME] = Button._jQueryInterface;
  cov_29rrk31kyq().s[88]++;
  $.fn[NAME].Constructor = Button;
  cov_29rrk31kyq().s[89]++;

  $.fn[NAME].noConflict = function () {
    cov_29rrk31kyq().f[9]++;
    cov_29rrk31kyq().s[90]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_29rrk31kyq().s[91]++;
    return Button._jQueryInterface;
  };

  return Button;

})));
//# sourceMappingURL=button.js.map
