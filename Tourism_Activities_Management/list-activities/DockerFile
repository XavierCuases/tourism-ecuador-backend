FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

EXPOSE 4003

CMD ["node", "src/index.js"]
