1. Install and run
   ```
   $ yarn
   $ yarn start
   ```
1. Update `./apps/api/tsconfig.app.json`
   ```
   {
       "compilerOptions": {
           "module": "Preserve",
           "moduleResolution": "Bundler",
       }
   }
   ```
1. Run again with error
   ```
   $ yarn start
   ```

### To view the tsc output before being bundled by Webpack

1. Run `yarn tsc`
1. Look in `./dist/out-tsc
