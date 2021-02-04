# Nextjs-NextAuth-Prisma-starter

Start with this boilerplate to make your own nextjs app(Docker image)

-   styled-component, less
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
-   JWT_SECRET_KEY=`yourOwnSecretKey`
-   KAKAO_REST_KEY=
-   KAKAO_REDIRECT_URI=`http://localhost:3000/api/auth/callback/kakao`

## Get started

1. create kakao app and use kakao login(https://developers.kakao.com/)
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

1. create database and get database url
2. edit .env
    - ...
    - DATABASE_URL=
    - JWT_SECRET_KEY=
    - ...
3. npx prisma init
4. create user table with **cli**(db direct connect!)
5. npx prisma introspect
6. yarn add @prisma/client
7. npx prisma generate

## Dockerizing

1. docker build -t `dockerId`/`imageName`:`version` (ex `hkc718/everyday-bible:1.0`) .
2. docker images
3. you can verify your docker image
