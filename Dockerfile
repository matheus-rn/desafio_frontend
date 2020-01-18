FROM node:10.15.3

RUN mkdir -p /app
WORKDIR /app

ADD . /app

RUN yarn

EXPOSE 3000