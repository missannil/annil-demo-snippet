module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    "miniprogram/miniprogram_npm/*",
    ".eslintrc.cjs",
    "rollup.config.mjs",
    "commitlint.config.cjs",
    "tailwind.config.ts",
    "/**/*.js",
  ], // 忽略检查的文件 优先级低于外部定义
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint" //  "eslint-plugin-tsdoc"
  ],
  rules: {
    // "tsdoc/syntax": "warn",
    "@typescript-eslint/no-floating-promises": "error", // 禁止没有返回值的promise
    "@typescript-eslint/no-non-null-assertion": "error", // 禁止使用 TypeScript 中的非空断言操作符 !
    "@typescript-eslint/strict-boolean-expressions": "error",
    // 0 1 2 对应 off warn error
    "@typescript-eslint/explicit-member-accessibility": 2, // 类要显示声明访问权限修饰符 public private  protected
    "@typescript-eslint/no-var-requires": 0, // 不运行使用require的方式引入模块
    "no-prototype-builtins": 0, // 不接受 Object.prototype的方法调用，需要用 call的方法调用
    "@typescript-eslint/no-explicit-any": 0, // 不可以显示的写any
    "@typescript-eslint/explicit-module-boundary-types": 0, // 函数返回和参数都应该明确写类型
    "@typescript-eslint/ban-types": 0, // 不可以使用特殊的类型 比如 {}
    "@typescript-eslint/no-namespace": 0, // 不可以使用namespace
    "prefer-const": 1, // 应该写const 而不是let或var
    "@typescript-eslint/no-empty-interface": 2, // 不可以写空接口
    "no-mixed-spaces-and-tabs": "error", // 用于禁止混合使用空格和制表符进行缩进
    "@typescript-eslint/no-unused-vars":'off',
    "@typescript-eslint/ban-ts-comment":"off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "const", next: "expression" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "*", next: "class" },
      { blankLine: "always", prev: "class", next: "*" },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "expression", next: "*" },
      { blankLine: "always", prev: "*", next: ["interface", "type"] },
      { blankLine: "always", prev: ["interface", "type"], next: "*" },
    ],
    "complexity": ["error", 10],
    "@typescript-eslint/member-ordering": ["error", {
      default: [
        "public-instance-field",
        "public-instance-method",
        "public-static-field",
        "public-static-method",
        "private-instance-field",
        "private-instance-method",
        "private-static-field",
        "private-static-method",
        "public-constructor",
        "private-constructor",
      ],
    }],
  },
};
