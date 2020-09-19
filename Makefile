install:
	npm install

brain-even:
	bin/brain-even.js

brain-games:
  	bin/brain-games.js

brain-calc:
  	bin/brain-calc.js
  
publish:
	npm publish --dry-run

make lint:
	npx eslint .
