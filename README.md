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

This project is deployed and self-hosted with Coolify.

When you are ready to deploy a new version to **fondet.abakus.no**, you merge your branch with master, and `coolify` will run a `prod` version. This will result in a new version of `fondet.abakus.no`.
