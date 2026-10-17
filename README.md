# Refund API

## Overview

`refund-api` is a Node.js/TypeScript REST API for handling refund requests. It provides endpoints for:

- Creating, listing and processing refund requests
- Managing user accounts and authentication
- Session handling
- File uploads (e.g., proof of purchase images)

The API uses **Express** for routing, **Prisma** as the ORM, **PostgreSQL** (or SQLite) as the database, and **JWT** for authentication.

![Preview Desktop](./.github/preview.png)

## Tech Stack

- **Node.js** (v20+)
- **TypeScript**
- **Express** – HTTP server
- **Prisma** – Database ORM (PostgreSQL / SQLite)
- **bcrypt** – Password hashing
- **jsonwebtoken** – JWT based auth
- **multer** – File uploads handling
- **zod** – Request validation
- **cors** – Cross‑origin resource sharing

## Prerequisites

- **Node.js** (v20 or later) installed
- **npm** (comes with Node) or **yarn**
- A **PostgreSQL** database (or SQLite for quick testing)
- **Git** (optional, for cloning the repo)

## Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd refund-api

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root based on the example below:

```dotenv
# Server
PORT=3000

# Database (PostgreSQL example)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public

# JWT secret (use a strong random string)
JWT_SECRET=your_jwt_secret_here

# Multer upload directory (relative to project root)
UPLOAD_DIR=./tmp/uploads
```

### Database Setup

```bash
# Generate Prisma client and apply migrations
npx prisma generate
npx prisma migrate dev --name init
```

If you prefer SQLite for local development, set:

```dotenv
DATABASE_URL="file:./dev.db"
```

### Running the API

```bash
# Development mode (watch files)
npm run dev
```

The server will start on `http://localhost:3000` (or the port defined in `.env`).

## API Endpoints Overview

| Method   | Path             | Description                                              |
| -------- | ---------------- | -------------------------------------------------------- |
| `POST`   | `/auth/register` | Register a new user (email + password)                   |
| `POST`   | `/auth/login`    | Authenticate and receive a JWT                           |
| `GET`    | `/users/me`      | Get authenticated user profile                           |
| `GET`    | `/refunds`       | List refunds (authenticated)                             |
| `POST`   | `/refunds`       | Create a new refund request (multipart for proof upload) |
| `GET`    | `/refunds/:id`   | Get a specific refund                                    |
| `PUT`    | `/refunds/:id`   | Update a refund (e.g., status)                           |
| `DELETE` | `/refunds/:id`   | Delete a refund                                          |
| `POST`   | `/uploads`       | Upload a file (used internally by refund routes)         |

> **Note:** All routes under `/refunds`, `/users`, and `/uploads` require a valid `Authorization: Bearer <token>` header.

## Project Structure

```
src/
├─ middlewares/          # Express middlewares (auth, error handling)
├─ providers/            # Service providers (e.g., storage)
├─ routes/               # Route definitions
│   ├─ refunds-routes.ts
│   ├─ users-routes.ts
│   ├─ sessions-routes.ts
│   └─ uploads-routes.ts
├─ utils/                # Helper utilities (AppError, etc.)
├─ generated/prisma/     # Prisma generated client & schema files
├─ server.ts             # Main entry point
└─ ...
```

## Testing

Add your tests in a `tests/` directory (not yet included). You can run them with:

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your fork (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow the existing code style and write unit tests for new functionality.

## License

This project is licensed under the **ISC** license.

---

## Contato

Entre em contato ou acompanhe meu trabalho:

- **Nome:** Francisco Rosendo
- **E-mail:** [rosendc30@gmail.com](mailto:rosendc30@gmail.com)
- **GitHub:** [github.com/rosendo2015](https://github.com/rosendo2015)
- **LinkedIn:** [linkedin.com/in/francisco-rosendo-coelho](https://www.linkedin.com/in/francisco-rosendo-coelho/)
