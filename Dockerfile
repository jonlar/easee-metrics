FROM node:18.18.2-alpine3.18 as build
RUN apk add --no-cache yarn

WORKDIR /app

COPY . ./

RUN yarn set version 4.0.2
RUN yarn install --immutable
RUN yarn build

USER node

ENTRYPOINT [ "node", "/app/build/index.js" ]
