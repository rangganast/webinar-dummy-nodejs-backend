FROM node:15

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]