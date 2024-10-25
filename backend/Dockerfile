FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install && npm install typescript ts-node

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]