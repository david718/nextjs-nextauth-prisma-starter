# Nextjs-NextAuth-Prisma-starter

Start with this boilerplate to make your own nextjs app(Docker image)

-   styled-component
-   antd
-   serviceWorker(public/sw.js)
-   Dockerfile

## Prerequisites

1. git clone git@github.com:david718/nextjs-nextauth-prisma-starter.git
2. cd nextjs-nextauth-prisma-starter
3. yarn install
4. touch .env

### .env

-   NEXTAUTH_URL=
-   NEXT_PUBLIC_API_SERVER_URL=`http://localhost:3000/api`
-   DATABASE_URL=
-   KAKAO_REST_KEY=
-   KAKAO_REDIRECT_URI=`http://localhost:3000/api/auth/callback/kakao`

## Get started

[kakao-login with next-auth(medium posts)](https://hkc7180.medium.com/nextjs-with-kakaotalk-oauth-2-0-login-dc27aa3b6c33)

1. create kakao app and use kakao login[kakao developer site](https://developers.kakao.com/)
    - get `kakao login rest key`
    - input `http://localhost:3000/api/auth/callback/kakao` to redirect_uri
    - please change status of **profile** and **email** in agreement items(scope)
2. edit .env
    - ...
    - KAKAO_REST_KEY=`kakao login rest key`
    - KAKAO_REDIRECT_URI=`http://localhost:3000/api/auth/callback/kakao`
3. yarn dev

-   you can use additional login(google or facebook login) with `.env` and `api/auth/[...nextauth].ts` in [nextauth](https://next-auth.js.org/)

## Connect database

[connect db with prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres)

1. create database and get `database url`
2. npx prisma init
3. edit .env
    - ...
    - DATABASE_URL={`database url`}
    - ...
4. create user table with **cli**(You have to directly connect with DB!, cannot make any tables with prisma CLI or API)
5. npx prisma db pull
6. yarn add @prisma/client
7. npx prisma generate

## Dockerizing

1. docker build -t `{dockerId}/{imageName}:{version}` (ex `hkc718/everyday-bible:1.0`)
2. docker images
    - you can verify your docker image
