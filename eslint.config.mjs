import { nextCoreWebVitals } from "@next/eslint-plugin-next";

const eslintConfig = [
  ...nextCoreWebVitals.configs.recommended.rules,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
