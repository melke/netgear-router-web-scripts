var config = require('../modules/config.js');

exports.block = function(req, res){
  var sys = require('sys');
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) {
    sys.puts(stdout)
  }
  exec("casperjs casperjs/block.js " + config.conf.router_username + " "
    + config.conf.router_password + " " + config.conf.router_ip, puts);
  res.end('OK');
};

exports.unblock = function(req, res) {
  var sys = require('sys');
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) {
    sys.puts(stdout)
  }
  exec("casperjs casperjs/unblock.js " + config.conf.router_username + " "
    + config.conf.router_password + " " + config.conf.router_ip, puts);
  res.end('OK');
};