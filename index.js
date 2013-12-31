/**!
 * co-github - index.js
 *
 * MIT Licensed
 *
 * Authors:
 *   dead_horse <dead_horse@qq.com> (http://deadhorse.me)
 */

'use strict';

/**
 * Module dependencies.
 */

var thunkify = require('thunkify');

var props = ['gists', 'gitdata', 'issues', 'authorization', 'orgs',
 'statuses', 'pullRequests', 'repos', 'user' , 'events', 'search', 'markdown'];


module.exports = function (github) {
  var coApis = {};
  props.forEach(function (prop) {
    var apis = github[prop] || [];
    coApis[prop] = {};
    for (var key in apis) {
      coApis[prop][key] = thunkify(apis[key]);
    }
  });
  return coApis;
};
