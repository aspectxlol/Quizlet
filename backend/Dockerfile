FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN corepack enable
RUN yarn && yarn add typescript tsx
# RUN yarn remove esbuild
# RUN yarn add esbuild

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "start" ]