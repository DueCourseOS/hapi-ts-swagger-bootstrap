import winston = require('winston');
import conf = require('../config');

let consoleOpts = {};

if (conf.get('env') === 'development') {
	consoleOpts = {
		colorize: true
	};
}

const logger = new (winston.Logger)({
	level: conf.get('logger:level'),
	transports: [
		new (winston.transports.Console)(consoleOpts)
	]
});

export = logger;
