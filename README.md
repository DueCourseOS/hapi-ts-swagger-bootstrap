# hapi-ts-swagger-bootstrap

A handy bootstrap for building APIs with Hapi, TypeScript and Swagger.

## Usage

### Setup

1. Clone the repo
2. Install dependencies: `yarn`
3. Run in dev mode: `yarn run dev`
3. Start building your API

### Docker support

We have provide a sample `Dockerfile` if you wish to develop within a
container, and a related `Makefile` with commands to make this easier:

* `make build` builds the docker image
* `make rebuild` rebuilds the docker image (ignoring cache)
* `make rmi` deletes the docker image
* `make lint|test|dev|start` runs the related npm script inside the container

Note: these commands will mount your local `src` and `test` folders into the
container so your local file changes will be reflected inside the running
container.

### Configuration

There are a number of config modules to be found in `src/config`:

* `src/config/common.ts` will be loaded for all environments
* `src/config/<env>.ts` contain environment-specific config (selectively loaded
if `<env>` matches the value of `NODE_ENV`)
* `src/config/index.ts` does the `nconf` setup and config bundling

### Adding routes

Since this is an API bootstrap, you'll typically be adding routes. Simply add
your new route modules in the `src/routes` directory and they will be
auto-loaded by `src/server.ts`.

### Route helpers

We have provided a library of route helpers in `src/lib/routes.ts` that can be
used to format standardised responses and remove a lot of boilerplate from your
route definitions. For a usage example, see `src/routes/example/get.ts`.

### Swagger

Provided that you tag your route definitions with an `['api']` tag, the route
will be automatically included in the `swagger.json` output. For further
reference on configuring your routes, please see
https://github.com/glennjones/hapi-swagger.

## License

MIT License

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
