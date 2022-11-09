# FinTech Web CMS

CMS for website of RMIT FinTech Club

## Commands

### `develop`

```
yarn develop
```

### `start`

```
yarn start
```

### `build`

```
yarn build
```

## Backup guide

1. Install psql

2. Make sure the destination database is clean.

3. Run commands

```
pg_dump -O -x EXPORT_POSTGRES_URI > backup.sql
psql INPORT_POSTGRES_URI < backup.sql
```

## Setup guide digital ocean

### Setup SSH

https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/

### Install Docker

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

### Deploy Strapi

https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/docker.html#development-and-or-staging-environments

```
docker compose up -d --build
```
