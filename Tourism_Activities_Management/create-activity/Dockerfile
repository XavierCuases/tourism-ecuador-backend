FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production
RUN ls -l

COPY . .

EXPOSE 4001

CMD ["node", "src/index.js"]
