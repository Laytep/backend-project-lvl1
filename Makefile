install:
	npm ci

brain-games:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint
