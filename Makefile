install:
	npm ci

braingames:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
