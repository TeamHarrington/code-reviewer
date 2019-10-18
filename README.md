# code-reviewer

Code Reviewer Application

## Commands

### Starting Application

```
yarn start
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

### Build storybook for client

```
yarn storybook:build
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

### Linting Code

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
