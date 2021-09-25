FROM node:lts-alpine

WORKDIR /backend
COPY package.json .

RUN npm install
COPY . .
CMD [ "yarn", "start" ]