# Gulp Tasks

This folder contains the gulp tasks for this project. Each file is one task.

## File structure

Each file file exports a function that takes in `gulp` and `done` parameter. They do not necessarily need to make use of the parameters.

Example: Example

```
module.exports = gulp => done => {
  ...
}
```

## Loading Task

To load a task, use the `loadTask` function. Usually the task format goes as follows:

`gulp.task(taskName, loadTask(fileName))`.

Example:

```
gulp.task('tslint', loadTask('tslint'))
```
