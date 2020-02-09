# Fondet Infopage

## Development

```shell
# Install plugins
$ yarn

# Running a serverless function call from the API folder, so one must build
$ yarn build

# Start dev server
$ yarn dev
```

## Check code

The project has `eslint` and `prettier` as dev dependencies

```shell
# Run all checks
$ yarn lint

# Run eslint
$ yarn lint:eslint

# Run prettier
$ yarn lint:prettier
```

## Deployment

This project is deployed and hosted using ZEIT, running on the **abakus-nutu** ZEIT user/github team.

Every time a new branch is pushed to this repo, `zeit` will build a working test page, and hand you a generated link
where you can preview and share a live verison of the page.

When you are ready to a new verison to **fondet.abakus.no**, you merge your branch with master, and `zeit` will run a
`--prod` version. This will result in a new version of `fondet.abakus.no`.
