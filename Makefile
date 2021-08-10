install:
	npm ci

brain-games:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint
