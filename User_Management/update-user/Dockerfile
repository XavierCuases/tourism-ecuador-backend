FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 7002

CMD ["node", "src/app.js"]
