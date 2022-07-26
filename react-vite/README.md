# React Vite

The simplest React app built using Vite with Vitest as a test runner.

## Steps to reproduce

1. Create new project: `yarn create vite . --template react-ts`
2. Add Vitest, vitest ui (optional) and happy-dom (or jsdom): `yarn add -D vitest @vitest/ui happy-dom`
3. Add React testing library things: `yarn add -D @testing-library/react @testing-library/react-hooks @testing-library/user-event`
4. Setup test env:
   1. Replace `defineConfig` in *vite.config.ts* with vitest one:
    ```diff
    - import { defineConfig } from "vite";
    + import { defineConfig } from "vitest/config";
    ```
    2. Add test config to *vite.config.ts*:
    ```diff
    +test: {
    +    globals: true,
    +    environment: "happy-dom",
    +    setupFiles: "./src/setup-tests.ts",
    +},
    ```
    1. Create *src/setup-tests.ts*:
    ```ts
    import "@testing-library/jest-dom";
    ```
5. App is ready to use and test!