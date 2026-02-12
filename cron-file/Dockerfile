# Build dependencies
FROM node:22.22.0-alpine3.23 AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Build
FROM node:22.22.0-alpine3.23 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Production dependencies
FROM node:22.22.0-alpine3.23 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Run app
FROM node:22.22.0-alpine3.23 AS run-app
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY index.js ./
COPY tasks ./tasks
CMD ["npm", "start"]
