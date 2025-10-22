FROM node:25-alpine3.22

WORKDIR /backend

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]