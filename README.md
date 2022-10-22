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
