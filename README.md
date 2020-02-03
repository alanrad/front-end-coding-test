# Front End Coding Test

Front End Coding Test: Build a web front end that displays the data supplied by the available API.

URL: [front-end-coding-test.web.app](https://front-end-coding-test.web.app)

This application includes:

- Home page lists all of the surveys and allows the user to choose one to view its results;
- Surveys page that displays an individual survey’s results, including:
  - the participation rate as a percentage
  - the average rating (from 1 to 5) for each question

Install

| `yarn`

##### \* Prettier is not included as part of the eslint setup. Please enable it via VS Code's plugins section and tick the "Format On Save" option.

### Available Scripts:

Run the app in the development mode ([http://localhost:3000](http://localhost:3000)):

| `yarn start`

Launch the test runner in the interactive watch mode:

| `yarn test`

Run linter:

| `yarn lint`

Build the app for production to the `build` folder:

| `yarn build`

##### \* The package will include the app config.

Exclude the app config from the `build` if the config is added during deployment.

| `yarn build-exclude-config`

Deploy the `build` directory's content to Firebase:

| `yarn deploy`

##### \* Make sure you install the latest firebase-tools, sign in to Google and run `firebase use [project-id]`.

## Description

I focused on writing good front-end code and to demonstrate understaning of design patterns. The project structure is suitable for a small to medium application.

By adding TypeScript and restricted linting (including no-explicit-any), I wanted to demonstrate my experience to produce clean, reliable and well-structured code in a reasonably short amount of time.

If I still had time, I'd love to add some unit testing to my functions and components. When I write a function, I focus on simplicity with clearly defined parameters and output which makes writing unit tests easier and managable. Ideally handling side effects is placed outside functions.

Main patterns followed in my project:

- Functional programming (even though React is not strictly functional)
- Atomic design
- Smart containers and simple components
- A basic state management flow with React hooks which is inspired by Redux. It's a work in progress but there is enough there to demonstrate that I understand the patterns and flow and I'm capable to designing and modifying a solution to meet the requirements.
- Use of custom-hooks and HOCs to make reusable/sharable code and keep the containers lean and clean.

Here is the list of [all activities on Git branches](https://github.com/alanrad/front-end-coding-test/branches/yours).

> I didn't squash-merge or rebase-merge PRs to make it easy to read and understand my work progress.

---

### A few things to note

1. Added and configured linter tools and pre-commit hooks to produce reliable code and well-structured git commits (I follow AngulaJS commit message convention).
2. Added Firebase deployment for quick hosting and release solution.
3. I made the configuration app swappable to be able to deploy the same package to different dev environments.
4. Data caching in store to avoid unnecessary network requests
5. I decided to use axios for making http requests instead of native fetch to save time. Fetch is my preference but there is more work to make it a complete solution like error handling, timeout functionality and legacy browser support.

---

### Outstanding work

I'm proud of what I have produced so far and I'd love to spend more time to make it even better. But I believe I've contributed enough to show my capabilities, even though I have not delivered the followings:

- Handling `loading`, `timeout`, `error`, `retry` and `reload` state
- Improving the store by adding data selectors to avoid unnecessary state changes and renders
- And most importantly, unit testing!
