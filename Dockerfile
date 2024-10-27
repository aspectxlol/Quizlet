FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start"]