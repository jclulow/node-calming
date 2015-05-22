/* vim: set ts=8 sts=8 sw=8 noet: */

var mod_picturetube = require('picture-tube');
var mod_fs = require('fs');
var mod_path = require('path');

function
calming(stream, leave_rows, cb)
{
	/*
	 * Most excellent mathematics:
	 */
	var cols = process.stdout.columns - 1;
	var height = Math.floor(cols / 2.8172);
	if (height >= process.stdout.rows - leave_rows) {
		cols = Math.floor((process.stdout.rows -
		    leave_rows) * 2.8172);
	}

	var tube = mod_picturetube({
		cols: cols
	});
	tube.pipe(stream);
	tube.on('end', function () {
		return cb();
	});

	var fn = mod_path.join(__dirname, 'img', 'manatee.png');
	mod_fs.createReadStream(fn).pipe(tube);
}

module.exports = {
	calming: calming
};
