<p align="center">
  <a href="https://www.reactylon.com/docs">
    <img src="./assets/logo.svg" alt="Reactylon" width="250"/>
  </a>
</p>

<h1 align="center">Reactylon</h1>

<p align="center"><b>The React framework for 3D and XR</b> — write Babylon.js scenes in JSX and ship them to web, mobile and VR/AR headsets from a single codebase.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/reactylon"><img src="https://img.shields.io/npm/v/reactylon" alt="NPM Version"/></a>
  <a href="https://www.npmjs.com/package/reactylon"><img src="https://img.shields.io/bundlephobia/minzip/reactylon" alt="NPM Bundle Size"/></a>
  <img src="https://img.shields.io/github/actions/workflow/status/simonedevit/reactylon/build.yml?label=test%2Fbuild" alt="GitHub Actions Workflow Status"/>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=simonedevit_reactylon&metric=alert_status" alt="Sonar Cloud Quality Gate"/>
  <a href="https://www.reactylon.com"><img src="https://img.shields.io/website?url=https%3A%2F%2Fwww.reactylon.com&up_message=online&label=reactylon.com" alt="Website"/></a>
  <img src="https://img.shields.io/npm/l/reactylon" alt="NPM License"/>
</p>

https://github.com/user-attachments/assets/6873d33c-1ad1-4f1c-b4c8-6cad52fd67d0

## Getting Started

### Installation

The easiest way to get started is with the official `create-reactylon-app` CLI.

It bootstraps a full React 19 project with a preconfigured Babylon.js engine, physics support, and a starter scene. No setup required.

```bash
npx create-reactylon-app my-app
```

### Your first scene

```jsx
import { Engine, Scene } from 'reactylon';

const App = () => (
    <Engine antialias>
        <Scene>
            <hemisphericLight name="light" intensity={0.8} />
            <box name="box" options={{ size: 2 }} positionY={1}>
                <standardMaterial name="material" diffuseColor="#6420ff" />
            </box>
        </Scene>
    </Engine>
);
```

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

- **Parent-Child Relationships**: Components are automatically added/removed to their correct parents, making it easier to build complex hierarchies of meshes, lights, and cameras without manually managing Babylon.js's scene graph.

- **Enhanced React Integration**: Deep React integration allows for easy state management, component composition, and hooks, ensuring a seamless development experience that leverages React's full power in 3D rendering.

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

We welcome contributions to improve and expand this project! To get started, please read [Contributing](./CONTRIBUTING.md). This document provides all the necessary steps and best practices for submitting contributions.

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). It outlines our standards for respectful and inclusive interactions within the project community.

## Support

For any help or support, please reach us at [contact@reactylon.com](mailto:contact@reactylon.com).

## License

Reactylon is licensed under the MIT License, with the inclusion of other dependencies licensed under separate terms:

- Babylon.js: Licensed under the Apache License, Version 2.0. For more details, visit the Babylon.js License.
- React & React Native: Licensed under the MIT License. For more details, visit the React License.

## Acknowledgements

This project is tested with BrowserStack.
