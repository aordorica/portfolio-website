FROM node:lts-alpine

WORKDIR /frontend
COPY package.json .

RUN npm install
COPY . .
CMD [ "yarn", "start" ]