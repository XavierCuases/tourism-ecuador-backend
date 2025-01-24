# Utilizamos una imagen base de Python
FROM python:3.10-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY . /app

# Instalar las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto 5000 para Flask
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["python", "run.py"]
