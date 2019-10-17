# @code-reviewer/client

The main front-end application made using React.

## Commands

### Starting application standalone

```
yarn start
```

This will start the application on port 3000. You can change the port with `-p` argument (e.g. `yarn start -p 3001`). For more information refer to [Nextjs](https://nextjs.org/docs).

### Build the Application

```
yarn build
```

Builds the Next Application into `.next` directory.

### Open storybook

```
yarn storybook
```

### Build storybook

```
yarn storybook:build
```

### Running Tests

```
yarn test
```

Runs all the `*.test.tsx` test files.

### Updating GraphQL Schemas

```
yarn schema:download [ENDPOINT]
```

Params: ENDPOINT - the endpoint of the graphql server. In development this is likely `http://localhost:3000/graphql`. Whenever the server's graphql schema updates, please run this command to update the front-end's schemas. This command is usually followed by `yarn codegen:generate`.

### Updating GraphQL Types

```
yarn codegen:generate
```

Generates types for the schema based on the queries we use in front-end. Run this whenever we add new queries/fragments/mutations on front-end. Please run `yarn schema:download [ENDPOINT]` before this or ensure that a schema has already been generated.

## Code Structure

We are utilizing [Nextjs](https://nextjs.org) as our React framework as it provides SSR options as well as going server-less if we decide to later on. We will be using Functional components instead of Class components unless there is a special need for a Class component

The folder structure is as follows, however, it's not set in stone and can be open to changes.

```
client/
├─ pages       # NextJS pages. These components should only be responsible for handling routing.
├─ components  # React components (folder structore to be worked on)
```
