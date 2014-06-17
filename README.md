netgear-router-web-scripts
==========================

Web scripts for the Netgear Nighthawk R7000 Web Admin Interface.

##Intro

Since scripting support is very limited on the Netgear Nighthawk, and I guess, other Netgear routers,
I wrote a few simple casperjs scripts that logs in to the web admin interface and simulates clicks.
These scripts are obviously very specific for Netgear, because the scripts will presume a very specific DOM
structure in the web pages. Feel free to fork and support other router models.

The scripts that exist now turns access control on and off on a global level. (The individual blocked mac-addresses are
settings that the scripts do not need to turn on and off.

The scripts can be run by themselves or through the simple enclosed nodejs webapp that calls the casperjs scripts.

##Prerequisites

Make sure that you have PhantomJS, CasperJS and NodeJS installed.

##Installation

Copy modules/config.template.js to modules/config.js and update the settings in there to match your passwords etc.

##Usage of CasperJS-scripts directly

```
cd casperjs
#
# enable access control
casperjs block.js username password routerip
#
# disable access control
casperjs unblock.js username password routerip
```

##Usage through the node webapp

Start the node webapp
```
node app.js
```

Enable access control
```
http://localhost:3022/block
```

Disable access control
```
http://localhost:3022/unblock
```


