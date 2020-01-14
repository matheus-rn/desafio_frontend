FROM node:10.15.3

RUN mkdir -p /app
WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 8080