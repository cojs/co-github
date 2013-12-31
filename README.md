co-github
=========

co wraper for node-github

[![NPM](https://nodei.co/npm/co-github.png?downloads=true)](https://nodei.co/npm/co-github/)


## Usage

```
var Github = require('github');
var wrapper = require('co-github');
var co = require('co');

var github = wraper(new Github({
  version: "3.0.0",
  debug: true,
  protocol: "https",
  host: "github.my-GHE-enabled-company.com",
  timeout: 5000
}));

co(function *() {
  var following = yield github.user.getFollowingFromUser({user: 'dead-horse'});
  console.log(JSON.stringify(following));
});
```

## Licences
(The MIT License)

Copyright (c) 2013 dead-horse and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
