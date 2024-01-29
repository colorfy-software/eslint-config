<h1 align="center">
  <a href="https://colorfy-software.gitbook.io/eslint-config/" target="_blank" rel="noopener noreferrer">
    🔬 ESLint Config
  </a>
</h1>

<h4 align="center">
  <strong>ESLint config used at Colorfy GmbH.</strong>
</h4>

<p align="center">
  <!-- <a href="https://github.com/colorfy-software/eslint-config/actions">
    <img src="https://github.com/colorfy-software/eslint-config/workflows/Test%20Suite/badge.svg?branch=main" alt="Current GitHub Actions build status." />
  </a> -->
  <a href="https://www.npmjs.org/package/@colorfy-software/eslint-config">
    <img src="https://badge.fury.io/js/%40colorfy-software%2Feslint-config.svg" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.org/package/@colorfy-software/eslint-config">
    <img src="https://img.shields.io/npm/dm/@colorfy-software/eslint-config.svg?maxAge=2592000" alt="Monthly npm downloads." />
  </a>
</p>

## 🎯 Purpose

Opinionated ESLint config us at Colorfy for React & React Native projects, based on TypeScript, Prettier, Jest and React
Native Community standards.

## 🏗️ Installation

With Yarn:

```bash
yarn add --dev eslint @colorfy-software/eslint-config
```

Or with npm:

```
npm install --save-dev eslint @colorfy-software/eslint-config
```

## 💻 Usage

You can choose one of the following environments to work with by extending your ESLint config (`.eslintrc`, or `eslintConfig` field in `package.json`) with `@colorfy-software` config tailored to your project.

```json
{
  "extends": "@colorfy-software"
}
```

## 💖 Code of Conduct

This library has adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](https://github.com/colorfy-software/eslint-config/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## 📰 License

ESLint Config is licensed under the [MIT License](https://github.com/colorfy-software/eslint-config/blob/main/LICENSE).
