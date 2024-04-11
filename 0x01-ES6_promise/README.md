# Setup
## Install NodeJS 12.11.x
(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

To test file(.js) with Eslint:
```
npx eslint filename.js
```
To fix:
```
npx eslint  --fix filename.js
```

# Tasks 
## 0. Keep every promise you make and only make promises you can keep
Return a Promise using this prototype `function getResponseFromAPI()`
```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```
