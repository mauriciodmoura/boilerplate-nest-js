FROM node:18.18.0

LABEL organization="Unknown"
LABEL maintainer="mauricio de moura"

USER root

ENV PORT="3020"
ENV NODE_ENV="development"

WORKDIR /usr/application

COPY package*.json ./

RUN yarn install --silent

COPY . .

EXPOSE $PORT

ENTRYPOINT ["yarn", "start:dev"]
