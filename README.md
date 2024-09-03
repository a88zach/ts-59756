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
