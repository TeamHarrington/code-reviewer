# @code-reviewer/client

The main front-end application made using React.

## Commands

### Starting application standalone

```
yarn start
```

This will start the application on port 3000. You can change the port with `-p` argument (e.g. `yarn start -p 3001`). For more information refer to [Nextjs](https://nextjs.org/docs).

## Code Structure

We are utilizing [Nextjs](https://nextjs.org) as our React framework as it provides SSR options as well as going server-less if we decide to later on. We will be using Functional components instead of Class components unless there is a special need for a Class component

The folder structure is as follows, however, it's not set in stone and can be open to changes.

```
client/
├─ pages       # NextJS pages. These components should only be responsible for handling routing.
├─ components  # React components (folder structore to be worked on)
```
