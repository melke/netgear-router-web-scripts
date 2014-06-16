var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
  this.echo(this.getTitle());
});

casper.then(function() {
  this.echo(casper.cli.get(0) + " " + casper.cli.get(1) + " " + casper.cli.get(2));
});

casper.run();