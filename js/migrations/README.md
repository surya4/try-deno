init: Generates a nessie.config.ts file

deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts init

make [name]: Create migration

deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts make create_users

migrate: Run migration - will migrate all migrations in your migration folder (sorted by timestamp) newer than the latest migration in your db

deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate

deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate -c ./nessie.config.ts

rollback: Rollback - will rollback the latest migration

deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts rollback