import Rollbar = require('rollbar');
import conf = require('../../config');
import logger = require('../../lib/logger');
const pkg = require('../../../package.json');

const register: any = (server, options, next) => {
	const environment: string = conf.get('env');
	const isDev: boolean = (environment === 'development');
	const accessToken: string = conf.get('deploy:rollbar_token');

	if (isDev) {
		return next();
	}

	if (!accessToken) {
		logger.warn('rollbar not enabled (access token not provided)');
		return next();
	}

	const opts = Object.assign({
		accessToken,
		environment,
		exitOnUncaughtException: true,
		handleUncaughtExceptions: true,
		handleUnhandledRejections: true
	}, options.rollbar);

	const rollbar = new Rollbar(opts);
	return next();
};

register.attributes = {
	name: `${pkg.name}-rollbar`,
	version: pkg.version
};

export = { register };
