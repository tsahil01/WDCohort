FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN nxp prisma generate
RUN num run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
