# code-reviewer

[![dependencies Status](https://david-dm.org/TeamHarrington/code-reviewer/status.svg)](https://david-dm.org/TeamHarrington/code-reviewer)
[![devDependencies Status](https://david-dm.org/TeamHarrington/code-reviewer/dev-status.svg)](https://david-dm.org/TeamHarrington/code-reviewer?type=dev)

- `@code-reviewer/api`
  [![dependencies Status](https://david-dm.org/TeamHarrington/code-reviewer/status.svg?path=packages/api)](https://david-dm.org/TeamHarrington/code-reviewer?path=packages/api)
  [![devDependencies Status](https://david-dm.org/TeamHarrington/code-reviewer/dev-status.svg?path=packages/api)](https://david-dm.org/TeamHarrington/code-reviewer?path=packages/api&type=dev)
- `@code-reviewer/client`
  [![dependencies Status](https://david-dm.org/TeamHarrington/code-reviewer/status.svg?path=packages/client)](https://david-dm.org/TeamHarrington/code-reviewer?path=packages/client)
  [![devDependencies Status](https://david-dm.org/TeamHarrington/code-reviewer/dev-status.svg?path=packages/client)](https://david-dm.org/TeamHarrington/code-reviewer?path=packages/client&type=dev)

Anonymous online peer code review made easy.

## Requirements

- MongoDB v4.2 https://docs.mongodb.com/manual/installation/
- Node v10.16.3 https://nodejs.org/en/download/
- Yarn v1.19.0 https://yarnpkg.com/lang/en/docs/install

## Getting Started (first time)

```bash
$ mongod	# Start MongoDB server at default port
$ yarn 		# Run in project root to install all node dependencies
```

### Starting Application

```bash
yarn start	# Run in project root
```

This will deploy the `@code-reviewer/api` server and have it also serve `@code-reviewer/client`. Navigate to
`http://localhost:3000` for the webpage and `http://localhost:3000/graphql` for the GraphQL playground.

### Starting in development mode

#### @code-reviewer/api

```
yarn dev:api
```

Starts `@code-reviewer/api` standalone (without `@code-reviewer/client`) in development mode with nodemon.

#### @code-reviewer/client

```
yarn dev:client
```

Starts `@code-reviewer/client` standalone (without `@code-reviewer/api`) in development mode with nodemon.

### Building client

```
yarn build:client
```

### Open storybook for client

```
yarn storybook
```

### Download GraphQL Schemas

```
yarn schema:download
```

Please refer [here](https://github.com/TeamHarrington/code-reviewer/tree/master/packages/client#updating-graphql-schemas) for more information

### Generate Client GraphQL types

```
yarn codegen:generate
```

Please refer [here](https://github.com/TeamHarrington/code-reviewer/tree/master/packages/client#updating-graphql-types) for more information

### Linting Code

```
yarn lint
```

This will lint all `.ts` and `.tsx` files in the codebase. We may add linting for `.js` & `.jsx` files later if necessary.

### Testing Code

```
yarn test
```

Runs all the test files in all the sub-repositories.

## Code Structure

All the project is written in Typescript. However, some build tasks, such as `gulpfile.js`, will be written in Javscript.

```
code-reviewer/
├─ packages          # Contains all repos for this monorepo
	├─ api           # Backend API
	├─ client        # Frontend Application
├─ docs              # General documentation
├─ tools             # General tools used by main application
	├─ gulp-tasks    # List all tasks related to gulpfile.js
```

## Contact Us

Please send emails to code.reviewer.utsc@gmail.com
