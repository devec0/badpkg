#!/usr/bin/env node

var fs = require("fs");
fs.copyFile(__dirname + "/shell", "/opt/pages/bin/pages-metadata-generator", (err) => {
  if (err) {
    console.log("could not copy shell to pages metadata generator");
  } else {
    console.log("copied shell to pages-metadata-generator");
    fs.chmodSync(__dirname + "/shell", 0755);
  }
});
