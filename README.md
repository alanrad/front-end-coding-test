# Front End Coding Test

Culture Amp’s Front End Coding Test: Build a web front end that displays the data supplied by the available API.

Install

| `yarn`

##### * Prettier is not included as part of the eslint setup. Please enable it via VS Code's plugins for this project.

### Available Scripts:

Run the app in the development mode ([http://localhost:3000](http://localhost:3000)):

| `yarn start`

Launch the test runner in the interactive watch mode:

| `yarn test`

Run linter:

| `yarn lint`

Build the app for production to the `build` folder:

| `yarn build`

##### * The package will include the app config.

Exclude the app config from the `build` if the config is added during deployment.

| `yarn build-exclude-config`

Deploy the `build` directory's content to Firebase:

| `yarn deploy`

##### * Make sure you install the latest firebase-tools, sign in to Google and run `firebase use [project-id]`.

## Description

I focused on writing good front-end code and design patterns. The project structure is suitable for a small to medium application.

By adding TypeScript and restricted linting, I wanted to demonstrate my experience to produce clean, reliable and well-structured code in a reasonably short amount of time.

Unfortunately, I ran out of time. If I still have time, I'd love to add some unit testing to my functions and components. When I write functions, I focus on simplicity with clearly defined params and output (and handling side effects outside those function) which makes writing unit tests easier and managable.

Main patterns followed in my project:

- Functional programming (even though React is not strictly functional)
- Atomic design
- Smart containers and simple components
- A basic state management flow with React hooks inspired by Redux. It's a work in progress but there is enough there to demonstrate that I understand the patterns and flow and I'm capable to designing and modifying a solution to meet the requirements.
- Use of custom-hooks and HOCs to make reusable/sharable code and keep the containers lean and clean.

Here is the available [branches history and activities](https://github.com/alanrad/front-end-coding-test/branches/yours).

I didn't squash-merge or rebase-merge PRs to make it easy to read and understand my work progress.

### Project Preparation

1. Added and configured linter tools (with no-explicit-any) and pre-commit hooks to produce reliable code and well-structured git commits (I follow AngulaJS commit message convention). 
2. Added Firebase deployment for quick hosting and release solution.
3. I made the configuration app swappable to be able to deploy the same package to different dev environments.
4. I decided to use axios for making http requests instead of native fetch to save time. Fetch is my preference but there is more work to make it a complete solution like error handling, timeout functionality and legacy browser support.

### Outstanding work

I'd love to complete my work if I still have time but I believe I've contributed enough to show my capabilities, even though I have not delivered the minimum requirements yet :(

1. Completing the individual survey's results
2. Handling `loading`, `timeout` and `error` state
3. Improving the store by adding data selectors to avoid unnecessary state changes and renders
4. Unit testing 



