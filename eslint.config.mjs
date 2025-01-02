import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": "off", // Disables unused variables check
      "@typescript-eslint/no-explicit-any": "off", // Allows use of 'any' type
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disables enforcing explicit return types
      "@typescript-eslint/no-inferrable-types": "off", // Disables inferrable type enforcement
            // Disable specific ban for object wrappers like `String`
            "@typescript-eslint/ban-types": [
              "error",
              {
                types: {
                  String: false, // Allow using `String` as a type
                },
                extendDefaults: true,
              },
            ],
    },
  },
];

export default eslintConfig;
