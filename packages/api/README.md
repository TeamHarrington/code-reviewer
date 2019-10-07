# @code-reviewer/api

The API Back-end for the Code-Reviewer application done with Express + GraphQL.

## Commands

### Starting the server

```
yarn start
```

This will start the server on port `${process.env.PORT} || 3000`.
Note: This will start the server standalone (without `@code-reviewer/client`). For information on how start the server with `@code-reviewer/client`, refer to the root README.

## Code Structure

Most of the back-end will be using GraphQL. There will be some logic that may make more sense as a RESTful API (eg. Authentication), but these should be kept limited. The folder structure is as follows, however, it's not set in stone and can be open to changes.

```
api/
├─ apollo-server   # Manages the Apollo GraphQL server
	├─ mutations   # Mutation resolvers
	├─ queries     # Query resolvers
	├─ types       # typeDefs
├─ routes          # handles any RESTful routes
├─ models          # handles communication with Database
├─ migrations      # handles database changes
```
