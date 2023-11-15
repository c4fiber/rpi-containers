FROM node:20.9-alpine AS builder

WORKDIR /src
COPY src/package*.json .
RUN npm install

# app
FROM node:20.9-alpine

EXPOSE 3000
CMD ["node","app.js"]

WORKDIR /app
COPY --from=builder /src/node_modules/ /app/node_modules/
COPY src/ .


