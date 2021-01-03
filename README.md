any time you do npm run dev, you will run parcel and giving it the entry point of src/index.html

dist folder is what gets built out and what you need to put into production

don't commit .cache

do commit package-lock though

.cache and dist are generated...

don't commit those...have heroku or CI crank out dist by running npm run prod or something...

