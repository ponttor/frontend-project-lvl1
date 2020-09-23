install:
	npm install

brain-games:
  	bin/brain-games.js

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

publish:
	npm publish --dry-run

make lint:
	npx eslint .
