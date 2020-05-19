# [Deno](https://deno.land/) boilerplate with Javascript using express styled framework [attain](https://deno.land/x/attain)

## Configuration

- **Platform:** deno
- **Framework**: attain
- **ORM**: attain
- **Databases**: mongo and mysql
- **Cache**: redis

### Todo -

1. test cases
2. create row and table with mysql

## Sample output

Request -

```http
curl --location --request GET 'localhost:3000/user/5ec15de4000874eb00b93999'
```

Mongo Response -

```json
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": {
        "_id": {
            "$oid": "5ec15de4000874eb00b93999"
        },
        "name": "abcd",
        "email": "abcd",
        "password": "$2a$10$h4tkcNq/vfVZ0570axZ9mOtamWqNl6/un28Ocqg3UClnrx5WVVkXS",
        "age": 3
    }
}
```

## Commands

### Run server -

```deno
deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable  server.js
```

### Run test -

```deno
deno test --allow-read --allow-write --allow-env --allow-net tests/index.js
```

## Run SQL migration -

```deno
deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate -c ../js/config/sql-migration.js
```
