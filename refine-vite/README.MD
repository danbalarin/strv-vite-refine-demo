# Refine Vite

Refine example using Vite as a bundler.

## Steps to reproduce

1. Create new project: `npx superplate-cli -p refine-react .`
2. Select your preferred options during interactive project setup
3. Rip off craco
4. Plug in Vite:
   1. Replace package.json commands
   2. Replace craco config with vite config
   3. Repalce tsconfig with vite tsconfig
   4. Fix imports to relative ones
5. App is ready to use!
