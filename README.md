# Shopper Care API

An API built with TSOA, ExpressJS, and Prisma to manage your shopping needs.

## Requirements and DIY
In order to try this API yourself, you need the following requirements
- Node.JS 
- Docker

To start, you should run the following commands to install the dependencies
```shell
npm install
cp .env.example .env
```

In the `.env` file you should enter the information required for the API to run, including the HTTP listening port, database name, database credentials, etc.

## Running the API
In order to run the API, you must first fire up the container for the MySQL database by running the following command on your terminal (if you are on Windows you should start Docker Dekstop first).

```shell
 docker-compose up 
 ```

Afterwards, the MySQL engine should be up and running. Next, you must *migrate* the schema found in the `prisma/schema.prisma` file. This will write the schema into the database (tables, rows, and relationships). In order to do this you must run:

```shell
 npx prisma migrate dev
```
You are free to use any database engine of your choice, with some modifications, of course. You can alter the `docker-compose.yml` file to use another engine, and the `prisma/schema.prisma` to do so.

Now that the schema has been migrated, and the environment variables established, you must migrate the routes using TSOA by running

```shell
npx tsoa routes
```

Now, to run the API finally, all you have to do is run the classic
``` shell
npm run dev
```