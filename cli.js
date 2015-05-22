#!/usr/bin/env node
/* vim: set ts=8 sw=8 sw=8 noet: */

var lib_calming = require('./index');

lib_calming.calming(process.stdout, 5, function () {
	process.exit(0);
});
