# code-reviewer

Code Reviewer Application

## Commands

### Starting Application

```
yarn start
```

This will deploy the `@code-reviewer/api` server and have it also serve `@code-reviewer/client`.

### Linting Code

```
yarn lint
```

This will lint all `.ts` and `.tsx` files in the codebase. We may add linting for `.js` & `.jsx` files later if necessary. It will also attempt to fix any fixable lints.

## Code Structure

All the project is written in Typescript. However, some build tasks, such as `gulpfile.js`, will be written in Javscript.

```
code-reviewer/
├─ packages        # Contains all repos for this monorepo
	├─ api           # Backend API
	├─ client        # Frontend Application
├─ docs            # General documentation
├─ tools           # General tools used by main application
	├─ gulp-tasks    # List all tasks related to gulpfile.js
```
