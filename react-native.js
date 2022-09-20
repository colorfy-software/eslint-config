const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const NO_UNUSED_VARS_OPTIONS = {
  argsIgnorePattern: "^_",
  caughtErrorsIgnorePattern: "^_",
};

module.exports = {
  root: true,
  extends: [
    "prettier",
    "standard",
    "eslint:recommended",
    "@react-native-community",
    "eslint-config-prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "detox"],
  overrides: [
    {
      files: ["*.e2e.js"],
      env: {
        jest: true,
        "detox/detox": true,
        "jest/globals": true,
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": OFF,
      },
    },
  ],
  rules: {
    "no-shadow": OFF,
    "@typescript-eslint/no-shadow": ERROR,
    "react/jsx-filename-extension": [ERROR, { extensions: [".js", ".tsx"] }],
    "react/jsx-max-depth": [ERROR, { max: 5 }],
    "react/display-name": OFF,
    "react/jsx-no-bind": [
      ERROR,
      {
        ignoreDOMComponents: false,
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: true,
      },
    ],
    "react/default-props-match-prop-types": OFF,
    "react/destructuring-assignment": [ERROR, "always"],
    "react/no-deprecated": OFF,
    "react/jsx-no-duplicate-props": [ERROR, { ignoreCase: true }],
    "react/jsx-one-expression-per-line": [ERROR, { allow: "single-child" }],
    "react/jsx-fragments": OFF,
    "react/jsx-pascal-case": [ERROR, { allowAllCaps: false }],
    "react/state-in-constructor": [ERROR, "never"],
    "react/jsx-boolean-value": ERROR,
    "react/jsx-handler-names": [
      ERROR,
      {
        eventHandlerPrefix: "on",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/sort-comp": [
      ERROR,
      {
        order: [
          "static-methods",
          "static-variables",
          "instance-variables",
          "lifecycle",
          "everything-else",
          "/^on.+$/",
          "instance-methods",
          "/^render.+$/",
          "render",
        ],
        groups: {
          lifecycle: [
            "defaultProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "getDerivedStateFromProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
        },
      },
    ],
    "react/jsx-props-no-spreading": OFF,
    "react/jsx-sort-props": [
      ERROR,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/jsx-wrap-multilines": [
      ERROR,
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/no-did-mount-set-state": ERROR,
    "react/no-direct-mutation-state": ERROR,
    "react/no-did-update-set-state": ERROR,
    "react/no-multi-comp": OFF,
    "react/no-redundant-should-component-update": ERROR,
    "react/no-unescaped-entities": WARNING,
    "react/no-unsafe": OFF,
    "react/no-unused-state": WARNING,
    "react/no-will-update-set-state": ERROR,
    "react/prop-types": OFF,
    "react/self-closing-comp": ERROR,
    "react-native/no-unused-styles": ERROR,
    "react-native/no-inline-styles": OFF,
    "react-native/no-raw-text": OFF,
    "no-use-before-define": OFF,
    "@typescript-eslint/no-use-before-define": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/ban-ts-ignore": OFF,
    "@typescript-eslint/no-var-requires": OFF,
    "@typescript-eslint/no-unused-vars": [ERROR, NO_UNUSED_VARS_OPTIONS],
    "no-extend-native": OFF,
    "no-tabs": OFF,
    "no-nested-ternary": OFF,
    "no-async-promise-executor": OFF,
    "object-shorthand": [ERROR, "always"],
    "react/jsx-uses-react": OFF,
    "react/react-in-jsx-scope": OFF,
    "arrow-parens": [ERROR, "as-needed"],
    "no-unused-vars": [ERROR, NO_UNUSED_VARS_OPTIONS],
    "react/no-unstable-nested-components": [ERROR, { allowAsProps: true }],
  },
};
