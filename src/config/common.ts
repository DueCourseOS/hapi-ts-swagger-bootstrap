const config: any = {};

config.logger = {
	level: 'info'
};

config.server = {
	host: '0.0.0.0',
	port: 3000,
	routes: {
		cors: {
			credentials: true,
			origin: ['*']
		}
	}
};

export = config;
