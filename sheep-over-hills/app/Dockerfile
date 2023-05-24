FROM node:16.15.0
MAINTAINER c4fiber nekote4@naver.com

RUN mkdir -p /app

WORKDIR /app

COPY . /app

#RUN apk add --update npm
RUN npm install

#ENV NODE_ENV=production

CMD npm start
EXPOSE 3000
