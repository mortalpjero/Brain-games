install:
	npm ci

braingames:
	node bin/brain-games.js

braineven:
	node bin/brain-even.js

braincalc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
