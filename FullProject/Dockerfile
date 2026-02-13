FROM node:22.22.0-alpine3.23 AS dev

WORKDIR /front-react-app

COPY front-react-app/package.json ./
RUN npm install

COPY front-react-app/ .

EXPOSE 5173

CMD ["npm", "run", "dev"]
