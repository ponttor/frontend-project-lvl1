install:
	npm install

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .
