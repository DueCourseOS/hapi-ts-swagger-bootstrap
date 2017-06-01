import { random } from 'lodash';
import joi = require('joi');
import boom = require('boom');
import * as routes from '../../lib/routes';
import { IRouteConfig } from '../../types/hapi';

const randomHandler = () => {
	const val = random(0, 1);
	if (val === 1) {
		return '👌';
	}
	throw new Error('💩');
};

const schemas: any = {};
schemas.ExampleSuccessResponse = joi.string().label('ExampleSuccessResponse');
schemas.ExampleFailedResponse = routes.schemas.ErrorResponse;

const route: IRouteConfig = {
	method: 'GET',
	path: '/example',
	config: {
		description: 'An example endpoint',
		tags: ['api'],
		response: {
			status: {
				200: schemas.ExampleSuccessResponse,
				400: schemas.ExampleFailedResponse
			}
		}
	},
	handler: (req, reply) => {
		const responder = routes.createResponder(req, reply);
		return Promise.resolve()
		.then(randomHandler)
		.then(responder.success(200))
		.catch(responder.error(400));
	}
};

export = route;
