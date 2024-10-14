# Workflow

## 1. Setup

After cloning the repo run:
`npm install`
`npx playwright install`

Add VSCode extentions:

-   Prettier - Code formatter - extension id: esbenp.prettier-vscode
-   ESLint - extension id: dbaeumer.vscode-eslint

## 2. Writing tests

All test scenarios related data should be placed in `./tests/` folder, in particular:

-   by default test scenarios files should be placed in `./tests/specs` folder.
-   by default fixture files should be placed in `./tests/specs` folder.
-   by default page object files should be placed in `./tests/page-objects` folder.
-   default folders location may be changed according to project needs.

All general-purpose testing freamework reletad files should be placed in `./testing-framework/` folder.

## 3. Running tests

`npm run test`

## 4. Serve allure

### 4.1. Serve report after running tests

`npm run allure:serve`

### 4.2. Run tests first and serve report

`npm run test:allure`

## 5. Wokring with BDD

The framework allows using BDD by integrating [playwright-bdd](https://github.com/vitalets/playwright-bdd) library.
By default BDD is disabled. To enable BDD:

-   in `playwright.config.ts` set `isBDD = true`
-   in `playwright.config.ts` adjust `defineBddConfig()` parameter to your needs

While writing tests:

-   use `test` from `@testing-framework/bdd/bdd-fixture` as your `base`;
-   by default feature files should be placed in `./tests/bdd-features` folder.
-   by default steps files should be placed in `./tests/bdd-steps` folder.
-   by default fixture files should be placed in `./tests/bdd-steps` folder.
-   by default page object files should be placed in `./tests/page-objects` folder.
-   default folders location may be changed according to project needs.

While running tests:

-   run tests calling `npm run test:bdd`

NOTE: In VSC you can set glue directory to CTRL+RMB to step definition. Install Cucumber extenstion. VSC->Settintgs search for `cucumber: Glue`.
Click `edit in settints.json` and edit the file.

## 6. Working with Azure Pipelines

This framework has a basic azure pipeline configuration file - azure-pipelines.yml
The pipeline can be parametrized with:

-   Test tag
-   Projects that we want to run our tests on
-   how many parallel tests should be executed at the same time

Additionally, the pipeline generates and hosts an Allure Report.
NOTE: A plugin for allure needs to be installed on the azure instance - https://marketplace.visualstudio.com/items?itemName=qameta.allure-azure-pipelines
For more info, please visit - https://allurereport.org/docs/integrations-azure/

## 7. Building a docker image and docker-compose

NOTE: DOCKER instance is needed to run this!!!!

This framework allows us to build our own docker image.
To do it, simply run:

-   $ docker build -t <image-name>

To run tests in docker:

-   Start the instance:

    $ docker run -v "./allure-results/:/app/allure-results" -v "./logs/:/app/logs" <image-name>

    the command npm run test will be executed as default
    you can also run
    $ docker run -v "./allure-results/:/app/allure-results" -v "./logs/:/app/logs" <image-name> <command> -- to run your specific combination

# Maintenance

## Directories structure changes

Various projects may require different file organisation. For fast folder structure refactor use `tsconfig.json` file. `compilerOptions.paths` includes aliases for paths which should be updated if corresponding folders will be moved.
