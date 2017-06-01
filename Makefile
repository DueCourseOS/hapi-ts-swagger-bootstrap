ARTEFACT=$(shell grep \"name\" package.json | cut -d\" -f4)
IMAGE="$(ARTEFACT)"
VOLUMES=\
	-v $(CURDIR)/src:/opt/app/src \
	-v $(CURDIR)/test:/opt/app/test
RUN=docker run -it --rm -p 3000:3000 $(VOLUMES) $(IMAGE)

.PHONY: test

build:
	@docker build -t $(IMAGE) .

rebuild:
	@docker build --no-cache -t $(IMAGE) .

rmi:
	@docker rmi $(IMAGE)

lint:
	@$(RUN) yarn run lint

test:
	@$(RUN) yarn run test

dev:
	@$(RUN) yarn run dev

start:
	@$(RUN) yarn run start
