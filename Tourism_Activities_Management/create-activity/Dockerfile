
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
