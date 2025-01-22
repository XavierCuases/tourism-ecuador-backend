# Imagen base
FROM node:16

# Crear el directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto del servicio
EXPOSE 4001

# Comando para iniciar el servicio
CMD ["node", "src/index.js"]
