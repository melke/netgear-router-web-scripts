var casper = require('casper').create();
var utils = require('utils');
var acl_enabled = false;

casper.start();

casper.setHttpAuth(casper.cli.get(0), casper.cli.get(1));

casper.thenOpen('http://' + casper.cli.get(2) + '/DEV_control.htm', function() {
  this.echo(this.getTitle());
  this.echo('Trying to disable access control');
});

casper.then(function() {
  acl_enabled = this.evaluate(function() {
    return __utils__.findOne('input#enable_acl').checked;
  });
});

casper.then(function() {
  this.echo("checkbox boolean = " + acl_enabled);
});

casper.then(function() {
  if (acl_enabled) {
    this.echo('Will disable access control');
    this.click('input#enable_acl');
    this.click('button.button-apply');
  } else {
    this.echo('Access control is already disabled');
  }
});

casper.run();