<h1 align="center">
  Frontend App
</h1>

<a align="center" href="./CHANGELOG.md">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
</a>

## TOC

- [Workspace](#workspace)
- [Configuration](#configuration)
- [Tests](#tests)
- [CI Configuration](#ci-configuration)
- [Deploy](#deploy)
- [Links](#links)

## Workspace

- Visual Studio Code 1.45.1

  - VSCode extensions:

    - Prettier - Code formatter 4.7.0
    - Eslint 2.1.5
    - VSCode MDX 0.1.4

  - VSCode settings:

  ```sh
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    },
    "javascript.validate.enable": false,
    "eslint.validate": ["markdown", "md", "mdx"],
    "prettier.requireConfig": true,
  }
  ```

## Configuration

1. **Install these packages (prefer the listed versions):**

- yarn 1.22.10
- npm 6.14.12
- node 14.16.1

2. **Create a .env file with the required variables:**

```sh
EXAMPLE=
```

3. **Install all dependencies with yarn (not npm!!)**

```sh
yarn
```

4. **Start the webpack-dev-server**

```sh
yarn dev
```

5. **Commands**

```bash
# Installs all dependendies
$ yarn

# Runs for web production (needs yarn build first)
$ yarn start

# Runs for web development
$ yarn dev

# Builds for web (compiled to dist)
$ yarn build

# Runs unit tests with Jest
$ yarn test (picks automatically test:watch on local machine and test:coverage on CI)
$ yarn test:coverage (creates coverage folder)
$ yarn test:watch (with --watch flag)
$ yarn test:debug (to use chrome to debug jest tests)

# Checks Eslint errors
$ yarn lint

# Formats all files with prettier
$ yarn format

# Checks if all files are formatted with prettier
$ yarn check-format

# Checks typescript errors
$ yarn check-types

# CI validation command
$ yarn setup

# Analyzes the compiled files with source-map-explorer
$ yarn analyze

# Commits with karma interface
$ yarn commit
```

## Tests

- Unit tests are in spec/jest/unit.

## CI configuration

- Set the environment variables in the CI environment variable section.
- The only command needed to be put on CI is 'yarn setup' which tests formatting with prettier, eslint errors, typescript errors and all tests.
- In case 'yarn setup' is too heavy for your CI. You can separate each needed script like:

```bash
# Installs all dependencies
$ yarn

# Checks typescript errors
$ yarn check-types

# Checks prettier formatting error
$ yarn check-format

# Checks Eslint errors
$ yarn lint

# Checks jest unit tests errors (The flag '--maxWorkers 1' can help with heavy memory usage on CI)
$ yarn test:coverage
```

## Deploy

1. First, be sure you did everything from the configuration section (steps 1 to 4 are the most important ones).
2. 'yarn build' command will compile all files and put them into dist folder.
3. Install Apache. (I'm using XAMPP for this example. Link: [Apache](https://www.apachefriends.org/download.html))
4. Clean up htdocs folder of xampp/htdocs.
5. Put all files from dist folder into xampp/htdocs folder.
6. Open XAMPP and, on the line of module apache, click on the 'Start' button.
7. Access 'localhost' from your browser and see that the page loads correctly. It will still not work if you try to access a route manually (like 'localhost/login'). See below how to fix it.

- For react router works correctly, you need to create a file '.htaccess' in the root of htdocs directory. Put this info there:

```bash
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
