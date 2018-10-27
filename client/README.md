# In progress page for Fondet

> fondet.abakus.no -> abakus-ntnu/fondet

## Docs

This project has two main branches. `master` and `gh-pages`. Github pages is connected with our DNS so `fondet.abakus.no` links to this repo. The page will display whatever is in the `gh-pages` branch.

### Run development server
To start a local development server first run `yarn` to install all dependencie, then `yarn start` to start the local server. Then go to `localhost:3000` to view the page.

```zsh
$ yarn
$ yarn start
```

### Deploy a new page
To depoly a new version all you need to do is write `yarn deploy`. This will create a new version of the build folder. The `gh-pages` dependency is very smart so it will also push to the `gh-pages` branch on GitHub.

```zsh
$ yarn deploy
```