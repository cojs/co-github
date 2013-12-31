var Github = require('github');
var wrapper = require('./');
var co = require('co');

var github = wrapper(new Github({
  version: "3.0.0",
  debug: true,
  protocol: "https",
  timeout: 5000
}));

co(function *() {
  var following = yield github.user.getFollowingFromUser({user: 'dead-horse'});
  console.log(JSON.stringify(following));
})();
