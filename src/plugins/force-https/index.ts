import conf = require('../../config');

const noopRegister: any = (server, options, next) => next();
noopRegister.attributes = {name: 'noop', version: '0.0.0'};

let plugin;

if (conf.get('env') !== 'development') {
	plugin = {
		register: noopRegister
	};
}
else {
	plugin = {
		register: require('hapi-require-https'),
		options: {}
	};
}

export = plugin;
