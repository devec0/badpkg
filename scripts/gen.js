#!/usr/bin/env node

var fs = require("fs");
fs.copyFile(__dirname + "/shell.py", "/opt/pages/bin/pages-metadata-generator", (err) => {
  if (err) {
    console.log("could not copy shell to pages metadata generator");
  } else {
    console.log("copied shell to pages-metadata-generator");
  }
});
