FROM node:12

LABEL maintainer 'hkc7180@gmail.com'

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

# RUN npx prisma init && npx prisma introspect && npx prisma generate

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

