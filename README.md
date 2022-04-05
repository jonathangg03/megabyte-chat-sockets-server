# Megabyte Chat - Servidor de Web Sockets

Un chat creado con Next.js, y usando Web Sockets para la comunicación en tiempo
real. Puedes ver la aplicación [aquí](https://megabyte-chat.vercel.app/ 'aquí').

[![Megabyte Chat](https://dav-dev.com/assets/projects/chat.jpg 'Megabyte Chat')](https://dav-dev.com/assets/projects/chat.jpg 'Megabyte Chat')

## Resumen

Este es el servidor creado específicamente para los mensajes, es un servidor de
web sockets que mantiene la comunicación abierta hasta que el cliente lo
informe. Sí quieres ver los repositorios de la API REST y del frontend:

- [Frontend](https://github.com/jonathan-cursos/megabyte_chat 'Frontend').
- [API REST](https://github.com/jonathangg03/megabyte_chat_backend 'API REST').

## Correr aplicación en local

- Debes clonar este repositorio.
- Abrir una terminal e ingresar a la carpeta creada.
- Instalar las dependencias con el comando "npm install".
- Renombrar el archivo ".env.example" por ".env". Colocar los valores a las
  variables de entorno, en este caso sería el puerto en el que correrá este
  servidor en local (3002, pero puede ser cualquiera), y la URI de nuestra Base
  de datos.
- En el archivo "index.js", en el objeto "cors" (línea 9), colocar como valor
  del key "origin" un array, con strings con la dirección donde correrá nuestro
  frontend, sea en local o en línea.
- Iniciar el proyecto con el comando "npm run dev".
