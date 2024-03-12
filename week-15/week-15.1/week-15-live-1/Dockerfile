FROM node:16-alpine

WORKDIR /app

COPY package* .
COPY /prisma .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]