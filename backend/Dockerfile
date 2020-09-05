FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run test

EXPOSE 4000
CMD [ "npm", "run", "prod" ]