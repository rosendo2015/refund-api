# Introduction to Prisma Client (/docs/orm/prisma-client/setup-and-configuration/introduction)



Prisma Client is an auto-generated and type-safe query builder that's *tailored* to your data. The easiest way to get started with Prisma Client is by following the **[Quickstart](/prisma-orm/quickstart/sqlite)**.

[Quickstart (5 min)](/prisma-orm/quickstart/sqlite)

Prerequisites [#prerequisites]

In order to set up Prisma Client, you need a Prisma Config and a [Prisma schema file](/orm/prisma-schema/overview):

<CodeBlockTabs defaultValue="Prisma Config">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Prisma Config">
      Prisma Config
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Prisma Schema">
      Prisma Schema
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="Prisma Config">
    ```ts title="prisma.config.ts" 
    import 'dotenv/config';
    import { defineConfig, env } from 'prisma/config';

    export default defineConfig({
      schema: './prisma/schema.prisma',
      datasource: {
        url: env('DATABASE_URL'),
      },
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Prisma Schema">
    ```prisma title="schema.prisma" 
    datasource db {
      provider = "postgresql"
    }

    generator client {
      provider = "prisma-client"
      output   = "../src/generated/prisma"
    }

    model User {
      id        Int      @id @default(autoincrement())
      createdAt DateTime @default(now())
      email     String   @unique
      name      String?
    }
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Installation [#installation]

[Install the Prisma CLI](/orm/reference/prisma-cli-reference), the Prisma Client library, and the [driver adapter](/orm/core-concepts/supported-databases/database-drivers) for your database:

<CodeBlockTabs defaultValue="PostgreSQL">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="PostgreSQL">
      PostgreSQL
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="MySQL / MariaDB">
      MySQL / MariaDB
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="SQLite">
      SQLite
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="PostgreSQL">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="pnpm">
          pnpm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="yarn">
          yarn
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="bun">
          bun
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="npm">
        ```bash
        npm install prisma --save-dev
        npm install @prisma/client @prisma/adapter-pg pg
        ```
      </CodeBlockTab>

      <CodeBlockTab value="pnpm">
        ```bash
        pnpm add prisma --save-dev
        pnpm add @prisma/client @prisma/adapter-pg pg
        ```
      </CodeBlockTab>

      <CodeBlockTab value="yarn">
        ```bash
        yarn add prisma --dev
        yarn add @prisma/client @prisma/adapter-pg pg
        ```
      </CodeBlockTab>

      <CodeBlockTab value="bun">
        ```bash
        bun add prisma --dev
        bun add @prisma/client @prisma/adapter-pg pg
        ```
      </CodeBlockTab>
    </CodeBlockTabs>
  </CodeBlockTab>

  <CodeBlockTab value="MySQL / MariaDB">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="pnpm">
          pnpm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="yarn">
          yarn
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="bun">
          bun
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="npm">
        ```bash
        npm install prisma --save-dev
        npm install @prisma/client @prisma/adapter-mariadb mariadb
        ```
      </CodeBlockTab>

      <CodeBlockTab value="pnpm">
        ```bash
        pnpm add prisma --save-dev
        pnpm add @prisma/client @prisma/adapter-mariadb mariadb
        ```
      </CodeBlockTab>

      <CodeBlockTab value="yarn">
        ```bash
        yarn add prisma --dev
        yarn add @prisma/client @prisma/adapter-mariadb mariadb
        ```
      </CodeBlockTab>

      <CodeBlockTab value="bun">
        ```bash
        bun add prisma --dev
        bun add @prisma/client @prisma/adapter-mariadb mariadb
        ```
      </CodeBlockTab>
    </CodeBlockTabs>
  </CodeBlockTab>

  <CodeBlockTab value="SQLite">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="pnpm">
          pnpm
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="yarn">
          yarn
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="bun">
          bun
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="npm">
        ```bash
        npm install prisma --save-dev
        npm install @prisma/client @prisma/adapter-better-sqlite3 better-sqlite3
        ```
      </CodeBlockTab>

      <CodeBlockTab value="pnpm">
        ```bash
        pnpm add prisma --save-dev
        pnpm add @prisma/client @prisma/adapter-better-sqlite3 better-sqlite3
        ```
      </CodeBlockTab>

      <CodeBlockTab value="yarn">
        ```bash
        yarn add prisma --dev
        yarn add @prisma/client @prisma/adapter-better-sqlite3 better-sqlite3
        ```
      </CodeBlockTab>

      <CodeBlockTab value="bun">
        ```bash
        bun add prisma --dev
        bun add @prisma/client @prisma/adapter-better-sqlite3 better-sqlite3
        ```
      </CodeBlockTab>
    </CodeBlockTabs>
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutDescription>
    Prisma 7 requires a [driver adapter](/orm/core-concepts/supported-databases/database-drivers) to connect to your database. Make sure your `package.json` includes `"type": "module"` for ESM support. See the [upgrade guide](/guides/upgrade-prisma-orm/v7) for details.
  </CalloutDescription>
</CalloutContainer>

Generate the Client API [#generate-the-client-api]

Prisma Client is based on the models in Prisma Schema. To provide the correct types, you need generate the client code:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This will create a `generated` directory based on where you set the `output` to in the Prisma Schema. Any time your import Prisma Client, it will need to come from this generated client API.

Importing Prisma Client [#importing-prisma-client]

With the client generated, import it along with your [driver adapter](/orm/core-concepts/supported-databases/database-drivers) and create a new instance:

<CodeBlockTabs defaultValue="PostgreSQL">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="PostgreSQL">
      PostgreSQL
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="MySQL / MariaDB">
      MySQL / MariaDB
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="SQLite">
      SQLite
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="PostgreSQL (Edge)">
      PostgreSQL (Edge)
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="PostgreSQL">
    ```ts
    import { PrismaClient } from "./path/to/generated/prisma";
    import { PrismaPg } from "@prisma/adapter-pg";

    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    });

    export const prisma = new PrismaClient({ adapter });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="MySQL / MariaDB">
    ```ts
    import { PrismaClient } from "./path/to/generated/prisma";
    import { PrismaMariaDb } from "@prisma/adapter-mariadb";

    const adapter = new PrismaMariaDb({
      host: "localhost",
      user: "root",
      database: "mydb",
    });

    export const prisma = new PrismaClient({ adapter });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="SQLite">
    ```ts
    import { PrismaClient } from "./path/to/generated/prisma";
    import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";

    const adapter = new PrismaBetterSQLite3({
      url: "file:./dev.db",
    });

    export const prisma = new PrismaClient({ adapter });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="PostgreSQL (Edge)">
    ```ts
    import { PrismaClient } from "./path/to/generated/prisma/edge";
    import { PrismaPostgresAdapter } from "@prisma/adapter-ppg";

    const adapter = new PrismaPostgresAdapter({
      connectionString: process.env.DATABASE_URL!,
    });

    export const prisma = new PrismaClient({ adapter });
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="warning">
  <CalloutDescription>
    `PrismaClient` requires a driver adapter in Prisma 7. Calling `new PrismaClient()` without an `adapter` will result in an error.
  </CalloutDescription>
</CalloutContainer>

Find out what [driver adapter](/orm/core-concepts/supported-databases/database-drivers) is needed for your database.

Your application should generally only create **one instance** of `PrismaClient`. How to achieve this depends on whether you are using Prisma ORM in a [long-running application](/orm/prisma-client/setup-and-configuration/databases-connections#prismaclient-in-long-running-applications) or in a [serverless environment](/orm/prisma-client/setup-and-configuration/databases-connections#prismaclient-in-serverless-environments).

Creating multiple instances of `PrismaClient` will create multiple connection pools and can hit the connection limit for your database. Too many connections may start to **slow down your database** and eventually lead to errors such as:

```bash
Error in connector: Error querying the database: db error: FATAL: sorry, too many clients already
   at PrismaClientFetcher.request
```

Use Prisma Client to send queries to your database [#use-prisma-client-to-send-queries-to-your-database]

Once you have instantiated `PrismaClient`, you can start sending queries in your code:

```ts
// run inside `async` function
const newUser = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@prisma.io",
  },
});

const users = await prisma.user.findMany();
```

Evolving your application [#evolving-your-application]

Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in your output directory:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

# SQLite (/docs/orm/core-concepts/supported-databases/sqlite)



Prisma ORM supports SQLite and SQLite-compatible databases. This includes local SQLite files, Turso's distributed libSQL, and Cloudflare's serverless D1.

Setup [#setup]

Configure the SQLite provider in your Prisma schema:

```prisma title="schema.prisma"
datasource db {
  provider = "sqlite"
}
```

Set the connection URL in `prisma.config.ts`:

```typescript title="prisma.config.ts"
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "file:./dev.db", // or libsql:// for Turso
  },
});
```

Using driver adapters [#using-driver-adapters]

Instead of Prisma's built-in driver, you can use JavaScript database drivers via [driver adapters](/orm/core-concepts/supported-databases/database-drivers#driver-adapters):

**Local SQLite with `better-sqlite3`:**

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>
</CodeBlockTabs>

```ts
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/prisma";

const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });
const prisma = new PrismaClient({ adapter });
```

**Turso with `@prisma/adapter-libsql`:**

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-libsql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-libsql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-libsql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-libsql
    ```
  </CodeBlockTab>
</CodeBlockTabs>

```ts
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "./generated/prisma";

const adapter = new PrismaLibSQL({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const prisma = new PrismaClient({ adapter });
```

**Cloudflare D1 with `@prisma/adapter-d1`:**

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-d1
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-d1
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-d1
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-d1
    ```
  </CodeBlockTab>
</CodeBlockTabs>

```ts
import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "./generated/prisma";

const adapter = new PrismaD1(env.DB); // D1 binding in Workers
const prisma = new PrismaClient({ adapter });
```

Supported variants [#supported-variants]

Local SQLite [#local-sqlite]

Standard SQLite database files (`.db`). Connection URL format: `file:./path/to/database.db`

* Use `prisma migrate dev` for schema changes
* Store database file anywhere in your filesystem
* Best for development and small applications

Turso (libSQL) [#turso-libsql]

Edge-hosted, distributed SQLite-compatible database.

* Connection URL format: `libsql://[hostname]`
* Requires authentication token
* Supports embedded replicas for faster local reads
* Use local SQLite file + Turso CLI for migrations (see [Turso docs](https://docs.turso.tech/))

**Key differences:**

* Remote access over HTTP
* Replication and automated backups
* Schema changes via `prisma migrate diff` + Turso CLI

Cloudflare D1 [#cloudflare-d1]

Serverless SQLite database for Cloudflare Workers.

* Automatic read-replication across regions
* Schema changes via Wrangler CLI + `prisma migrate diff`
* Local (`.wrangler/state`) and remote versions available

**Key differences:**

* No transaction support currently
* Migrations via Wrangler: `wrangler d1 migrations apply`
* Deploy with Cloudflare Workers

Type mappings [#type-mappings]

| Prisma ORM | SQLite    |
| ---------- | --------- |
| `String`   | `TEXT`    |
| `Boolean`  | `BOOLEAN` |
| `Int`      | `INTEGER` |
| `BigInt`   | `INTEGER` |
| `Float`    | `REAL`    |
| `Decimal`  | `DECIMAL` |
| `DateTime` | `NUMERIC` |
| `Json`     | `JSONB`   |
| `Bytes`    | `BLOB`    |
| `Enum`     | `TEXT`    |

<CalloutContainer type="info">
  <CalloutDescription>
    SQLite stores booleans as `0` (false) or `1` (true). Learn more about [SQLite type affinity](https://www.sqlite.org/datatype3.html#boolean).
  </CalloutDescription>
</CalloutContainer>

Common considerations [#common-considerations]

**Timestamp format with driver adapters:**

Configure how `DateTime` values are stored:

```ts
const adapter = new PrismaBetterSqlite3(
  { url: "file:./dev.db" },
  { timestampFormat: "unixepoch-ms" } // For backward compatibility
);
```

* **ISO 8601 (default)**: Best for new projects
* **`unixepoch-ms`**: Required for migrating from Prisma's native driver

**Enum validation:**

SQLite doesn't enforce enum values at the database level. Invalid values will cause Prisma Client queries to fail at runtime.

**Integer overflow:**

Prisma ORM validates that numbers fit within integer boundaries. If a value exceeds limits, you'll get a P2023 error.
