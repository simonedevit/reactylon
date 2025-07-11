# Contributing to Reactylon
Thank you for your interest in contributing to <b>Reactylon</b>! Your help is greatly appreciated. Follow the guidelines below to ensure a smooth and productive collaboration.

## How to Contribute

### 1. Reporting Bugs
If you find a bug, please:

1. Check existing issues to ensure it hasn’t been reported already.
2. Create a new issue including as much detail as possible:
    - Steps to reproduce the issue.
    - Logs, or error messages, if applicable.
    - Expected and actual behavior.
    - A minimal reproduction example. Whenever possible, provide:
        - A sandbox (e.g., Stackblitz or CodeSanbox) project that reproduces the issue.
        - If you cannot create a sandbox, include relevant code snippets directly in the issue, ensuring they are self-contained and minimal.
    - Versions: Reactylon, Babylon.js, React, React Native (if applicable).

### 2. Requesting Features
Do you have a great idea or a request for a new feature? Please use [Discussions Template](https://github.com/simonedevit/reactylon/discussions/13).

### 3. Submitting Code Changes
1. Please be sure you have the following installed:
    - Visual Studio Code
    - Android Studio, Xcode (Reactylon Native only) 
    - Node and Npm versions declared in "Engines" section of [package.json](./package.json) file.
    - Bash, a Unix-based shell, required for running scripts and commands:
        - On macOS and Linux, Bash is pre-installed. Switch from zsh to Bash if your are using macOS.
        - On Windows, you can use Git Bash or enable Windows Subsystem for Linux (WSL).

2. Fork the repository and clone it to your local machine.
3. Create a new branch by using `feature/` or `fix/` prefix, e.g.:
    ```bash
    git checkout -b fix/add-properties-on-camera
    ```
4. Install the dependencies executing the command `npm run init`.
5. Build all monorepo's packages executing the command `npm run build`.
4. Make your changes (*).
5. Build the project from the *packages/library* directory executing the command `npm run build:local`.
6. Symlink Reactylon package and create a playground project to test it:
    1. Open a new Terminal and create a symbolic link in the global _node_modules_ directory by executing the command:

        ```bash
        cd packages/library/build && npm link
        ```
    2. Open a new Visual Studio Code window and create a new Reactylon project by executing the command:

        ```bash
        npx create-reactylon-app playground
        ```
    3. Go into _webpack.config.ts_ and add to **resolve** attribute:

         ```ts
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
         ```
    4. Move on _playground_ folder and symlink the Reactylon package by executing the command:

        ```bash
        cd playground && npm link reactylon
        ```
    <a id='linking'></a>
    5. Start the live server by executing the command:

        ```bash
        npm start
        ```

7. Test on plaground project.
8. Go back on Reactylon project, write the integration tests and run them from the _packages/library_ directory using the command `npm run test`.
9. Commit your work with a meaningful commit message (see [Commits](#commits)), e.g.:
    ```
    git commit -m "fix(reconciler): add radius and position props on camera #0"
    ```
10. Push the branch to your forked repository:
    ```
    git push fix/add-properties-on-camera
    ```
11. Open a Pull Request to the main repository:
    - Clearly explain what your changes do.
    - Link any related issues.

<br/>

(*) If you make changes to _packages/common_ or _packages/generator_, run `npm run build` in the respective directory.

## Troubleshooting
After [linking](#linking), if you are experiencing TypeScript errors on Reactylon JSX elements (e.g., ```Property 'box' does not exist on type 'JSX.IntrinsicElements'.ts(2339)```), it means that your `@types/react` version is mismatched with Reactylon's `@types/react` version. For module augmentation to work properly, both must use the same version of the library.  To fix this, make sure you have the same `@types/react` version installed in both your playground project and Reactylon. 

## Development Guidelines

### Git Hooks
Before each commit it is executed a typecheck (see [tsconfig.json](tsconfig.json) for the checking rules). If it is ok, the commit syntax will be validated (see [commitlint.config.js](commitlint.config.js) for conventional commits specification) and at the end the commit will be stylized (see [.prettierrc](.prettierrc) for styling rules) before to be committed on the branch.

### Conventions

#### Location
- Every shared utility should be located in _packages/common_.
- The React components/hooks belonging to the web and mobile should be located in _packages/library/src/core_.
- The React components/hooks belonging solely to web should be located in _packages/library/src/web_.
- The React components/hooks belonging solely to mobile should be located in _packages/library/src/mobile_.
- The contents of _packages/library/src/_generated_ should not be modified manually, as they are automatically generated by the generator package.

#### Naming
- All folders should be written in _lowercase_.
- All React components should be written in _PascalCase_. 

#### Commits
Each commit should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification, take a look at [commitlint.config.js](commitlint.config.js) for Reactylon's prefixes and scopes. At the end of your commit message, if you are working on a issue, add the issue number preceded by '#'. <u>This is really important to generate the proper _CHANGELOG.md_ file</u>.

## Code of Conduct
Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a welcoming and inclusive environment.

## Need Help?
If you have questions or need further assistance, feel free to:

- Comment on an issue or pull request.
- Send an email at contact@reactylon.com.

<hr/>
By contributing, you agree that your contributions will be licensed under the same license as the project. Thank you for helping make <b>Reactylon</b> better! 🚀