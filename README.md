<div align="center">
  <a href="https://www.reactylon.com/docs">
      <img height="250" width="250" alt="Reactylon" src="https://github.com/simonedevit/reactylon/blob/main/assets/logo.svg?raw=true">
  </a>
  <h1>Reactylon</h1>
</div>

<div align="center">
  <img alt="NPM Bundle Size" src="https://img.shields.io/bundlephobia/minzip/reactylon">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/simonedevit/reactylon/build.yml?label=test%2Fbuild">
  <img alt="Sonar Cloud Quality Gate" src="https://sonarcloud.io/api/project_badges/measure?project=simonedevit_reactylon&metric=alert_status">
  <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fwww.reactylon.com&up_message=online&label=reactylon.com">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/reactylon">
  <img alt="NPM License" src="https://img.shields.io/npm/l/reactylon">
</div>

<br />
<br />

Welcome to **Reactylon**, a powerful multiplatform framework built on top of Babylon.js and React. It lets you build interactive 3D and XR applications using a fully declarative, component-based model that integrates seamlessly with React's architecture.

## Getting Started

### Installation

The easiest way to get started is with the official `create-reactylon-app` CLI.

It bootstraps a full React 19 project with a preconfigured Babylon.js engine, physics support, and a starter scene. No setup required.

<p><img width="898" alt="Create Reactylon App" src="https://github.com/simonedevit/reactylon/blob/main/assets/create-reactylon-app.gif?raw=true"></p>

```bash
npx create-reactylon-app my-app
```
<br/>

For a complete walkthrough, see the [Getting Started guide](https://www.reactylon.com/docs/getting-started).

### Documentation
You can explore the interactive Reactylon documentation on [reactylon.com](https://www.reactylon.com/docs), featuring **125+ live sandbox examples** you can open and edit directly in your browser.

For deeper technical details (renderer internals, codegen pipeline, architecture notes), see the **technical documentation** on [Google Code Wiki](https://codewiki.google/github.com/simonedevit/reactylon).

## Key Features
- **Declarative Syntax for Babylon.js**: Write 3D scenes in JSX, leveraging the power of declarative UI that React developers love, with seamless integration into the Babylon.js rendering engine.

- **Full TypeScript support**: Leveraging Babylon.js classes, the appropriate props for each Babylon.js entity are generated and utilized within their corresponding React components.

- **Automatic Object Management**: No need to manually dispose of Babylon.js objects. Reactylon automatically handles the disposal of objects like meshes, cameras, and lights when their corresponding components are destroyed, ensuring efficient resource management and preventing memory leaks.

- **Cross-Platform Support**: Your applications can run not only on desktop and mobile browsers via PWAs, but also on VR/AR headsets. Thanks to Babylon Native and React Native integration, you can deploy your 3D applications natively to mobile devices and XR headsets with ease, expanding your audience reach across devices.

- **Scene Injection**: Scene management is simplified, with automatic injection of the Babylon.js scene object into every component. This reduces boilerplate and lets you focus on building rich 3D experiences.

- **Parent-Child Relationships**: Components are automatically added/removed to their correct parents, making it easier to build complex hierarchies of meshes, lights, and cameras without manually managing Babylon.js’s scene graph.

- **Enhanced React Integration**: Deep React integration allows for easy state management, component composition, and hooks, ensuring a seamless development experience that leverages React’s full power in 3D rendering.

## When should you use Reactylon?

Use Reactylon if:

- You want to build **3D or XR experiences** using React and JSX instead of imperative Babylon.js code.
- You need **cross-platform** support (web, mobile, VR/AR/MR headsets) from a single codebase.
- You care about **type safety, tree-shaking and performance** out of the box.
- You prefer an **opinionated** layer that manages scene graph, resource disposal, and hierarchy for you.

## Ecosystem
- `create-reactylon-app`: Zero-config CLI to scaffold a new Reactylon project with a simple scene.
- `babel-plugin-reactylon`: Babel plugin that powers Reactylon's JSX-to-Babylon compilation, enabling ergonomic, declarative 3D/XR components while keeping the output fast and tree-shakeable.

## Contributing
We welcome contributions to improve and expand this project! To get started, please read [Contributing](CONTRIBUTING.md). This document provides all the necessary steps and best practices for submitting contributions.

## Code of Conduct
We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). It outlines our standards for respectful and inclusive interactions within the project community.

## Support
For any help or support, please reach us to contact@reactylon.com.

## License
Reactylon is licensed under the MIT License, with the inclusion of other dependencies licensed under separate terms:

- Babylon.js: Licensed under the Apache License, Version 2.0. For more details, visit the Babylon.js License.
- React & React Native: Licensed under the MIT License. For more details, visit the React License.

## Acknowledgements
This project is tested with BrowserStack.
