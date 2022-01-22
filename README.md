Hudl application assignment
====================

## Features
- WebdriverIO v7
- NodeJs
- Mocha
- Chai
- ESLint
- async
- chrome browser (97)

## Prerequisite

1. `credentials.js` contains dummy credentials, please enter valid username & password in the file.

2. In order to run tests locally, chromedriver version mentioned in `package.json` must match with chrome version locally. Please update it if it's otherwise.

## How to Start

**1. Download or clone the project**

```git clone <repo-name-by-clicking-copy-button-from-git> ```

**2. Install**


```npm install```

**3. Run Tests**

```npm test```


#### Debug Using Command 

`DEBUG=true npm test`

NOTE:
1. WebdriverIO is an open-source testing automation framework written in JavaScript and runs on NodeJS.
2. credentials are being read from `credentials.js file`
3. In webdriverio, browser session gets automatically initialized and closed so these steps are not mentioned in the code.
4. Mocha framework is used to run test spec files.
5. Test results will be available on terminal once executions is finished. It includes information like test specs ran along with description and tests failed and passed.