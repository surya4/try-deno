# [Deno](https://deno.land/) boilerplate with Javascript using express styled framework [attain](https://deno.land/x/attain)

## Configuration

- **Platform:** deno
- **Framework**: attain
- **Databases**: mongo and mysql
- **Cache**: redis
- **ORM**: For mysql - dex based upon knex for query generation, dexcuter for running dex and basic deno_mysql for migrations. For mongo - deno_mongo

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

MySQL Response -

```json
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "abcd",
            "email": "abcd",
            "password": "$2a$10$9k2jtPXkYx1rs3/12Hp6qOPH7itZg4IUFcOfBZ5Pe.MwaWCFESvzy",
            "age": 3,
            "created_at": "2020-05-19T16:08:18.000Z",
            "updated_at": "2020-05-19T16:08:18.000Z"
        }
    ]
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
