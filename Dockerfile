FROM node:15

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

EXPOSE 3000

CMD ["npm", "run", "dev"]