install:
	npm install

brain-even:
	node scr/games/brain-even.js

brain-calc:
	node scr/games/brain-calc.js

brain-gcd:
	node scr/games/brain-gcd.js

brain-prime:
	node scr/games/brain-prime.js

brain-progression:
	node scr/games/brain-progression.js

brain-games:
	bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
