#!/usr/bin/env node
var program = require('commander');
program
  .version('0.0.1')
  .option('-a, --add', "Add new List Item")
  .option('-d, --del', "Delete last List Item")
  .option('-l, --list', "Show Todo List")
  .parse(process.argv);


  if(program.add) console.log("add")
  if(program.del) console.log("del")
  if(program.list) console.log("list")

